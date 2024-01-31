import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//TypeScrept model
import {taskModel} from '../../models/TaskModel';
//Styles
import {styles} from './styles';
//Props
import {itemProps} from './taskItem.component';

const TaskItemTemplate = ({item, toggleStatus, onEditTask}: itemProps) => {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onLongPress={onEditTask}>
        <View>
          <Text>{item.title}</Text>
        </View>
        <View>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>

      <View>
        <CheckBox
          disabled={false}
          value={item.status}
          onValueChange={toggleStatus}
        />
      </View>
    </View>
  );
};

export default TaskItemTemplate;
