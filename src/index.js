// TODO: Fix sourceMaps
module.exports = function(babel) {
  var t = babel.types;
  return {
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
          if (callee.type === 'MemberExpression') {
            const args = initialArg.arguments;
            initialArg.callee = t.identifier('call');
            initialArg.arguments = [callee, ...args];
          } else {
            const args = initialArg.arguments;
            initialArg.callee = t.identifier('call');
            initialArg.arguments = [t.identifier(`${callee.name}`), ...args];
          }
        }
      }
    }
  };
};
