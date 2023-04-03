import { View, Text } from 'react-native';
import React from 'react';

import { styles } from './styles';

type TaskProps = {
  task: {
    id: string;
    name: string;
    status: string;
  };
};

const Card = ({ task }: TaskProps) => {
  return (
    <View>
      <Text>{task.name}</Text>
    </View>
  );
};

export default Card;
