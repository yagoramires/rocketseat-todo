import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Card from '../../components/Card';
import { styles } from './styles';

interface ITask {
  id: number;
  task: string;
  done: boolean;
}

const Home = () => {
  const [tasks, setTasks] = useState<Array<ITask>>([
    // { id: 1, task: 'Terminar o app', done: false },
    // { id: 2, task: 'Fazer xixi', done: true },
  ]);
  const [task, setTask] = useState('');
  const [doneTasks, setDoneTasks] = useState(0);

  const handleAddTask = () => {
    const length = tasks.length;
    const id = length > 0 ? tasks[length - 1].id + 1 : 1;

    const newTask = {
      id,
      task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
    return;
  };

  const handleConcludeTask = (id: number) => {
    const index = tasks.findIndex((task) => task.id === id);
    const done = (tasks[index].done = !tasks[index].done);

    const changedTasks = tasks;
    changedTasks[index] = tasks[index] = { ...tasks[index], done };

    return setTasks(changedTasks);
  };

  const handleRemoveTask = (id: number) => {
    const filter = tasks.filter((task) => task.id !== id);
    return setTasks(filter);
  };

  useEffect(() => {
    const done = tasks.filter((task) => task.done === true);

    setDoneTasks(done.length);
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
      </View>

      <View style={styles.listContainer}>
        <View style={styles.form}>
          <TextInput
            value={task}
            onChangeText={setTask}
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listHeader}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Criadas</Text>
            <Text style={styles.headerCount}>{tasks.length}</Text>
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText2}>Concluídas</Text>
            <Text style={styles.headerCount}>{doneTasks}</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card
              task={item}
              removeTask={handleRemoveTask}
              setDone={handleConcludeTask}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Image source={require('../../../assets/clipboard.png')} />
              <Text style={styles.emptyMessage}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyMessage2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
