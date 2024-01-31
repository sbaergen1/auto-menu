if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '@navigation/Screens';
import { Home } from '@screens/Home'
import { Provider } from 'react-redux';
import { store } from '@redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Screens.Home} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
