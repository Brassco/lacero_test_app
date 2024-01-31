import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

//Redux store
import {store} from './src/redux/store';

//Navigator
import Navigator from './src/navigation/navigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    minHeight: 50,
  },
  container: {
    flex: 1,
  },
});

export default App;
