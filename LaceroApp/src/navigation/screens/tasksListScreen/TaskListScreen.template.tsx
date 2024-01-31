import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';

//Components
import ListItem from '../../../components/taskItem/taskItem.component';
import Button from '../../../components/button/button.component';
//Model
import {taskModel} from '../../../models/TaskModel';
//Styles
import {styles} from './styles';

//Props
import {listProps} from './TasksListScreen.component';

const TaskListScreen = ({
  data,
  toggleStatus,
  onEditTask,
  navigateToCreateTask,
  startWebSockets,
}: listProps) => {
  return (
    <View>
      <View style={styles.buttonWrapper}>
        <Button label={'Start webScockets'} onPress={startWebSockets} />
      </View>
      <View style={styles.headerSection}>
        <View>
          <Text>Total tasks: {data.length}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button label={'Create Task'} onPress={navigateToCreateTask} />
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <ListItem
              item={item}
              toggleStatus={toggleStatus}
              onEditTask={onEditTask}
            />
          );
        }}
        ListEmptyComponent={() => {
          return (
            <View>
              <ActivityIndicator size="large" />
            </View>
          );
        }}
      />
    </View>
  );
};

export default TaskListScreen;
