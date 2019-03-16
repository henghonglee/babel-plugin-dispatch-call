/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
dispatch(actionCreator.apply(this, arguments));
dispatch(
  LocationActions.checkLocationState()
);
dispatch({
  type: '__function_call_obj',
  fn: VehicleActions.handleAppStateChange,
  args: []
});
dispatch(action);
dispatch({ type: 'GET_CURRENT_LOCATION' });
dispatch(_handleAppStateChange());
dispatch(_handleAppStateChange(true));
dispatch(VehicleActions.handleAppStateChange(true, 123, 'testString'));
dispatch(VehicleActions.handleAppStateChange());
dispatch(VehicleActions.handleAppStateChange(true, 123, 'testString', () => { return '123'; }));
dispatch(_setAppState(appState));
