import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Rockets from '../rockets';
import CrewMembers from '../crewMembers';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Rockets"
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
        },
        // headerShown: false,
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name="Rockets" component={Rockets} />
      <Tab.Screen name="CrewMembers" component={CrewMembers} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
