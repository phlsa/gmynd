[Back to reference](../README.md)

##### `createNode(nodeName, attributes, draw)`
Creates a node.

Arguments:
- `nodeName`: The name of the node as a string, e.g. `'circle'`
- `attributes` (optional): An object giving the attribute names and values, e.g. `{cx:100, cy:200, r:80, transform:'scale(1.3)'}`
- `draw` (optional): When `true`, the new node will be automatically added to the SVG element in the HTML document. When `false`, you should store the new element in a variable and you need to add it to the document using `appendChild()`. Default is `true`.

Returns:
- The new node as an HTML element.

Example:

The following will create a new group and a circle. The group is automatically added to the SVG, the circle is added to the group by using the `appendChild()` function.
```javascript
var myNewGroup = createNode('g');
var c = createNode('circle', {cx:100, cy:200, r:80, transform:'scale(1.3)'}, false);
myNewGroup.appendChild(c);
```