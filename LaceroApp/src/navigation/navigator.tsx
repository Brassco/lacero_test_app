import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Constants
import {SCREENS} from '../const';

//Screens
import ListScreen from './screens/tasksListScreen/TasksListScreen.component';
import DetailsScreen from './screens/taskDetailsScreen/DetailsTaskScreen.component';
import CreateTaskScreen from './screens/createTaskScreen/CreateTaskScreen.component';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.home} component={ListScreen} />
      <Stack.Screen name={SCREENS.details} component={DetailsScreen} />
      <Stack.Screen name={SCREENS.create} component={CreateTaskScreen} />
    </Stack.Navigator>
  );
};
export default Navigator;
