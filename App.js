/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SpaceXLaunchLists from './src/Components/SpaceXLaunchLists';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SpaceXLaunchLists />
      </SafeAreaView>
    </>
  );
};



export default App;
