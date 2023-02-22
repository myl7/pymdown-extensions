"""Tabs."""
import xml.etree.ElementTree as etree
from markdown.extensions import toc
from markdown.treeprocessors import Treeprocessor
from .block import Block, type_boolean
from ..blocks import BlocksExtension


class TabbedTreeprocessor(Treeprocessor):
    """Tab tree processor."""

    def __init__(self, md, config):
        """Initialize."""

        super().__init__(md)

        self.alternate = config['alternate_style']
        self.slugify = config['slugify']
        self.sep = config["separator"]

    def run(self, doc):
        """Update tab IDs."""

        # Get a list of id attributes
        used_ids = set()
        for el in doc.iter():
            if "id" in el.attrib:
                used_ids.add(el.attrib["id"])

        for el in doc.iter():
            if isinstance(el.tag, str) and el.tag.lower() == 'div':
                classes = el.attrib.get('class', '').split()
                if 'tabbed-set' in classes and (not self.alternate or 'tabbed-alternate' in classes):
                    inputs = []
                    labels = []
                    if self.alternate:
                        for i in list(el):
                            if i.tag == 'input':
                                inputs.append(i)
                            if i.tag == 'div' and i.attrib.get('class', '') == 'tabbed-labels':
                                labels = [j for j in list(i) if j.tag == 'label']
                    else:
                        for i in list(el):
                            if i.tag == 'input':
                                inputs.append(i)
                            if i.tag == 'label':
                                labels.append(i)

                    # Generate slugged IDs
                    for inpt, label in zip(inputs, labels):
                        text = toc.get_name(label)
                        innertext = toc.unescape(toc.stashedHTML2text(text, self.md))
                        slug = toc.unique(self.slugify(innertext, self.sep), used_ids)
                        inpt.attrib["id"] = slug
                        label.attrib["for"] = slug


class Tab(Block):
    """
    Tabbed container.

    Arguments (1 required):
    - A tab title.

    Options:
    - `new` (boolean): since consecutive tabs are automatically grouped, `new` can force a tab
      to start a new tab container.

    Content:
    Detail body.
    """

    NAME = 'tab'

    ARGUMENTS = {'required': 1}
    OPTIONS = {
        'new': [False, type_boolean],
        'select': [False, type_boolean]
    }

    CONFIG = {
        'slugify': None,
        'separator': '-',
        'alternate_style': False
    }

    def on_init(self):
        """Handle initialization."""

        self.alternate_style = self.config['alternate_style']
        self.slugify = callable(self.config['slugify'])

        # Track tab group count across the entire page.
        if 'tab_group_count' not in self.tracker:
            self.tracker['tab_group_count'] = 0

        self.tab_content = None

    @classmethod
    def on_register(cls, blocks_extension, md, config):
        """Handle registration event."""

        if callable(config['slugify']):
            slugs = TabbedTreeprocessor(md, config)
            md.treeprocessors.register(slugs, 'tab_slugs', 4)

    def last_child(self, parent):
        """Return the last child of an `etree` element."""

        if len(parent):
            return parent[-1]
        else:
            return None

    def on_add(self, block):
        """Adjust where the content is added."""

        if self.tab_content is None:
            if self.alternate_style:
                for d in block.findall('div'):
                    c = d.attrib['class']
                    if c == 'tabbed-content' or c.startswith('tabbed-content '):
                        self.tab_content = list(d)[-1]
                        break
            else:
                self.tab_content = list(block)[-1]

        return self.tab_content

    def on_create(self, parent):
        """Create the element."""

        new_group = self.options['new']
        select = self.options['select']
        title = self.args[0] if self.args and self.args[0] else ''
        sibling = self.last_child(parent)
        tabbed_set = 'tabbed-set' if not self.alternate_style else 'tabbed-set tabbed-alternate'
        index = 0
        labels = None
        content = None

        if (
            sibling and sibling.tag.lower() == 'div' and
            sibling.attrib.get('class', '') == tabbed_set and
            not new_group
        ):
            first = False
            tab_group = sibling

            if self.alternate_style:
                index = [index for index, _ in enumerate(tab_group.findall('input'), 1)][-1]
                for d in tab_group.findall('div'):
                    if d.attrib['class'] == 'tabbed-labels':
                        labels = d
                    elif d.attrib['class'] == 'tabbed-content':
                        content = d
                    if labels is not None and content is not None:
                        break
        else:
            first = True
            self.tracker['tab_group_count'] += 1
            tab_group = etree.SubElement(
                parent,
                'div',
                {'class': tabbed_set, 'data-tabs': '%d:0' % self.tracker['tab_group_count']}
            )

            if self.alternate_style:
                labels = etree.SubElement(
                    tab_group,
                    'div',
                    {'class': 'tabbed-labels'}
                )
                content = etree.SubElement(
                    tab_group,
                    'div',
                    {'class': 'tabbed-content'}
                )

        data = tab_group.attrib['data-tabs'].split(':')
        tab_set = int(data[0])
        tab_count = int(data[1]) + 1

        attributes = {
            "name": "__tabbed_%d" % tab_set,
            "type": "radio"
        }

        if not self.slugify:
            attributes['id'] = "__tabbed_%d_%d" % (tab_set, tab_count)

        attributes2 = {"for": "__tabbed_%d_%d" % (tab_set, tab_count)} if not self.slugify else {}

        if first or select:
            attributes['checked'] = 'checked'
            # Remove any previously assigned "checked states" to siblings
            for i in tab_group.findall('input'):
                if i.attrib.get('name', '') == '__tabbed_{}'.format(tab_set):
                    if 'checked' in i.attrib:
                        del i.attrib['checked']

        if self.alternate_style:
            input_el = etree.Element(
                'input',
                attributes
            )
            tab_group.insert(index, input_el)
            lab = etree.SubElement(
                labels,
                "label",
                attributes2
            )
            lab.text = title

            attrib = {'class': 'tabbed-block'}
            etree.SubElement(
                content,
                "div",
                attrib
            )
        else:
            etree.SubElement(
                tab_group,
                'input',
                attributes
            )
            lab = etree.SubElement(
                tab_group,
                "label",
                attributes2
            )
            lab.text = title

            etree.SubElement(
                tab_group,
                "div",
                {
                    "class": "tabbed-content"
                }
            )

        tab_group.attrib['data-tabs'] = '%d:%d' % (tab_set, tab_count)

        return tab_group


class TabExtension(BlocksExtension):
    """Admonition Blocks Extension."""

    def __init__(self, *args, **kwargs):
        """Initialize."""

        self.config = {
            'alternate_style': [False, "Use alternate style - Default: False"],
            'slugify': [0, "Slugify function used to create tab specific IDs - Default: None"],
            'separator': ['-', "Slug separator - Default: '-'"]
        }

        super().__init__(*args, **kwargs)

    def extendMarkdownBlocks(self, md, blocks):
        """Extend Markdown blocks."""

        blocks.register(Tab, self.getConfigs())
        if callable(self.getConfig('slugify')):
            slugs = TabbedTreeprocessor(md, self.getConfigs())
            md.treeprocessors.register(slugs, 'tab_slugs', 4)


def makeExtension(*args, **kwargs):
    """Return extension."""

    return TabExtension(*args, **kwargs)
