/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
dispatch({
  type: '__function_call_obj_apply',
  fn: actionCreator,
  args: arguments,
  this: this
});
dispatch({
  type: '__function_call_obj',
  fn: LocationActions.checkLocationState,
  args: []
});
dispatch({
  type: '__function_call_obj',
  fn: VehicleActions.handleAppStateChange,
  args: []
});
dispatch(action);
dispatch({ type: 'GET_CURRENT_LOCATION' });
dispatch({
  type: '__function_call_obj',
  fn: _handleAppStateChange,
  args: []
});
dispatch({
  type: '__function_call_obj',
  fn: _handleAppStateChange,
  args: [true]
});
dispatch({
  type: '__function_call_obj',
  fn: VehicleActions.handleAppStateChange,
  args: [true, 123, 'testString']
});
dispatch({
  type: '__function_call_obj',
  fn: VehicleActions.handleAppStateChange,
  args: []
});
dispatch({
  type: '__function_call_obj',
  fn: VehicleActions.handleAppStateChange,
  args: [true, 123, 'testString', () => {
    return '123';
  }]
});
dispatch({
  type: '__function_call_obj',
  fn: _setAppState,
  args: [appState]
});
