import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes/Routes';
import {RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/routers';
import {NavigationProp, RouteProp} from '@react-navigation/core/src/types';
// @ts-ignore
export const navigationRef: RefObject<NavigationContainerRef> =
    React.createRef();

export type ScreenProp = {
  navigation: NavigationProp<
      ParamListBase,
      string,
      string | undefined,
      any,
      any,
      any
      >;
  route: RouteProp<any>;
};
const App = () => {
  return (
      <NavigationContainer
          onStateChange={() => {
            navigationRef.current?.getCurrentRoute()?.name;
          }}
          ref={navigationRef}>

        <Routes />
      </NavigationContainer>
  );
};

export default App;
