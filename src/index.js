// TODO: Fix sourceMaps
module.exports = function(babel) {
  var t = babel.types;
  return {
    name: 'dispatch-call',
    visitor: {
      CallExpression(path) {
        const node = path.node;
        const initialCallee = node.callee;
        const initialArg = node.arguments[0];
        if (
          initialCallee.name === 'dispatch' &&
          initialArg.name !== 'action' &&
          initialArg.type !== 'ObjectExpression' &&
          (initialArg.type === 'CallExpression' &&
            initialArg.callee.name !== 'call') &&
          !(
            initialArg.callee &&
            initialArg.callee.property &&
            initialArg.callee.property.name === 'apply'
          )
        ) {
          // callee can be memberExpression eg. VehicleActions.actionName
          // callee can be Identifier eg. actionName
          // callee can be a variable. eg. dispatch(action)
          // callee can be a plain object. eg { type: GET_CURRENT_LOCATION }
          // both can have or dont have arguments
          const callee = initialArg.callee;
          const args = initialArg.arguments;
          node.arguments[0] = t.objectExpression([
            t.objectProperty(t.identifier('type'),
            t.stringLiteral('__function_call_obj')),
            t.objectProperty(t.identifier('fn'), callee),
            t.objectProperty(t.identifier('args'),
            t.arrayExpression(args))
          ]);

        }
      }
    }
  };
};
