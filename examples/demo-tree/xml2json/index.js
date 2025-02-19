// 原始 xml
const xml = `
<list>
  <item key="1">content1</item>
  <item key="2">content2</item>
  <item key="3">content3</item>
  <item key="4">
    <name id="hema-name">hema</name>
    <value id="hema-value">frontend</value>
  </item>
</list>
`

// 目标 json
const json = {
    tag: 'list',
    children: [
        {
            tag: 'item',
            children: 'content1',
            props: {
                key: '1'
            }
        },
        {
            tag: 'item',
            children: 'content2',
            props: {
                key: '2'
            }
        },
        {
            tag: 'item',
            children: 'content3',
            props: {
                key: '3'
            }
        },
        {
            tag: 'item',
            children: [
                {
                    tag: 'name',
                    children: 'hema',
                    props: {
                        id: 'hema-name'
                    }
                },
                {
                    tag: 'value',
                    children: 'frontend',
                    props: {
                        id: 'hema-value'
                    }
                }
            ],
            props: {
                key: '4'
            }
        }
    ]
}

const { Tree, Node } = require('../core/Tree');

/**
 * 
 * @param {*} _xml -- example
 * <item>content1</item> ==>> { source: 'frontend', type: 'worldItem', name: 'frontend' }
 */
function tokenize(_xml) {
    const { stack } = tokenize;
    let xml = _xml.split('\n').join("").replace(/(?<=(>))\s*/g, '');
    // 判断开头的类型，进行截断
    console.log(xml);
    let openItemMacher = /(?<=(^<))([a-zA-Z\s\"\'=\d]{1,})(?=(>))/g;
    // let openItemWithAttribute = /(?<=(^<))([a-zA-Z\s=\""]*)(?=(>))/g;
    let closeItemMacher = /(?<=(^<\/))([a-zA-Z]*)(?=(>))/g;
    let wordItemMacher = /^\w{1,}/g;
    // 截断并推进stack
    let openItem = xml.match(openItemMacher);
    let closeItem = xml.match(closeItemMacher);
    let worldItem = xml.match(wordItemMacher);
    let nextXml;
    if (openItem) {
        stack.push({
            source: `<${openItem}>`,
            type: 'openItem',
            name: openItem[0]
        });
        nextXml = xml.replace(new RegExp(`<${openItem}>`), '');
    } else if (closeItem) {
        stack.push({
            source: `</${closeItem}>`,
            type: 'closeItem',
            name: closeItem[0],
        });
        nextXml = xml.replace(new RegExp(`</${closeItem}>`), '');
    } else if (worldItem) {
        stack.push({
            source: `${worldItem}`,
            type: 'worldItem',
            name: worldItem[0]
        });
        nextXml = xml.replace(new RegExp(`${worldItem}`), '');
    } else {
        return stack;
    }
    console.log(nextXml);
    tokenize(nextXml);
    return stack
}
tokenize.stack = [];

/**
 * @description 构建Dom树
 * @param {*} tokenize 
 */
function buildDomTree(tokenize, root) {
    let curNode = root.rootNode;
    for (let { source, type, name } of tokenize) {
        switch (type) {
            case 'openItem': {
                let node = {
                    tag: name,
                    children: []
                };
                if (!curNode.data || curNode.data.length) {
                    curNode.data = node;
                } else {
                    // 创建子节点
                    let treeNode = new Node(node);
                    treeNode.parent = curNode;
                    root.add(treeNode, curNode, root.traverseBF, (dataA, dataB) => (dataA.tag === dataB.tag));
                    curNode.data.children.push(node);
                    curNode?.children.push(treeNode);
                    curNode = treeNode;
                }
                break;
            }
            case 'worldItem': {
                curNode.data.children = name;
                break;
            }
            case 'closeItem': {
                // 返回父标签
                if (curNode.parent) {
                    curNode = curNode.parent;
                }
                if (curNode == null) {
                    // root 标签
                    console.log('执行到达root');
                    curNode = root.rootNode.children;
                }
                break;
            }
        }
    }
    return root;
}

function xml2json(xml) {
    // TODO: your code here
    let tokens = tokenize(xml);
    console.log(tokens);
    // const tree = new Tree();
    // let domTree = buildDomTree(tokens, tree);
    // return domTree.rootNode.data;
}
// console: true
console.log(JSON.stringify(xml2json(xml)) === JSON.stringify(json))