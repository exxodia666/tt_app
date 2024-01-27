import React from 'react';
import { Provider } from 'react-redux';
import { MainNavigator } from './navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';
import Reactotron from "reactotron-react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: "React Native Demo",
    })
    .useReactNative({
      asyncStorage: false, // there are more options to the async storage.
      networking: {
        // optionally, you can turn it off with false.
        // ignoreUrls: /symbolicate/,
      },
      editor: false, // there are more options to editor
      errors: { veto: (stackFrame) => false }, // or turn it off with false
      overlay: false, // just turning off overlay
    })
    .connect();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
