import React, { useEffect } from 'react';
import {
  ColorValue, 
  Text, 
  View,
  StyleSheet
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import colors from '../styles/colors';
import tabNavigatorData from './tabNavigatorData';

const Tab = createBottomTabNavigator();

function MainNavigator(props) {
  console.log('[MainNavigator][Log] - params: ', props.route.params);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  return (
    <Tab.Navigator 
      screenOptions={(props) => ({
        showLabel: false,
        headerShown: true,
      })}>
      {tabNavigatorData.map((item, idx) => (
        <Tab.Screen 
          key={item.key}
          name={item.name}
          component={item.component}
          initialParams={props.route.params ?? {}}
          options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {item.icon}
            </View>
          ),
          tabBarLabel: ({ focused }) => <Text style={{ fontSize: 12, color: focused ? colors.primary : colors.gray }}>{item.name}</Text>,
        }}
        />        
      ))}
    </Tab.Navigator>
  );
}

// local style 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
});

export default MainNavigator;