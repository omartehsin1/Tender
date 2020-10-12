

 import HomeScreen from './containers/Home';
 import MatchesScreen from './containers/Matches';
 import ProfileScreen from './containers/Profile';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialIcons'


const Tab = createBottomTabNavigator();

function MyTabs() {
  Icon.loadFont();
  return (
    <Tab.Navigator>
      {/* <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            <Text>
              <Icon name="explore" />
          </Text>
          }
        }}
 
      /> */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

export default App;