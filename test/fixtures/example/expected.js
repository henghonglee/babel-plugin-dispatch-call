/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
dispatch(actionCreator.apply(this, arguments));
dispatch(call(LocationActions.checkLocationState));
dispatch(call(_setAppState, appState));
dispatch(action);
dispatch({ type: 'GET_CURRENT_LOCATION' });
dispatch(call(_handleAppStateChange));
dispatch(call(_handleAppStateChange, true));
dispatch(call(VehicleActions.handleAppStateChange, true, 123, 'testString'));
dispatch(call(VehicleActions.handleAppStateChange));
dispatch(call(VehicleActions.handleAppStateChange, true, 123, 'testString', () => {
  return '123';
}));
dispatch(call(_setAppState, appState));
