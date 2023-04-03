import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { styles } from './styles';

type TaskProps = {
  task: {
    id: number;
    task: string;
    done: boolean;
  };
  removeTask: (id: number) => void;
  setDone: (id: number) => void;
};

const Card = ({ task, removeTask, setDone }: TaskProps) => {
  return (
    <View style={styles.taskContainer}>
      {task.done ? (
        <TouchableOpacity onPress={() => setDone(task.id)}>
          <Image source={require('../../../assets/check.png')} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setDone(task.id)}>
          <Image source={require('../../../assets/notcheck.png')} />
        </TouchableOpacity>
      )}
      <Text style={task.done ? styles.done : styles.taskText}>{task.task}</Text>
      <TouchableOpacity onPress={() => removeTask(task.id)}>
        <Image source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
