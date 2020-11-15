
import 'react-native-gesture-handler';
 import HomeScreen from './containers/Home';
 import MatchesScreen from './containers/Matches';
// import MatchesScreen from './containers/Matches';
 import ProfileScreen from './containers/Profile';
 import Detail from './containers/DetailsScreen';
import React, {useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialIcons'


const Tab = createBottomTabNavigator();

function MyTabs() {
  Icon.loadFont();
  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   const val = await AsyncStorage.getItem("userPreferences");
  //   //   setResult(val);
  //   // };
  //   // fetchData()
  //   console.log("useEffect")
  // });
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="DetailsScreen" component={Detail} />
        <Stack.Screen name="Tabs" component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;