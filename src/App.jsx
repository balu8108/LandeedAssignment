import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home/HomeScreen';
import InputFormPageScreen from './screens/InputFormPage/InputFormPageScreen';
import {Provider as HomeProvider} from './screens/Home/HomeContext';
import {Provider as InputFormPageProvider} from './screens/InputFormPage/InputFormPageContext';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <HomeProvider>
      <HomeScreen />
    </HomeProvider>
  );
};

const InputFormPage = () => {
  return (
    <InputFormPageProvider>
      <InputFormPageScreen />
    </InputFormPageProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen
          name="InputFormPage"
          component={InputFormPage}
          options={{title: 'OTL'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
