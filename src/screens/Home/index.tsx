import React, { useState } from 'react';
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

const Home = () => {
  const [task, setTask] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
      </View>

      <View style={styles.listContainer}>
        <View style={styles.form}>
          <TextInput
            onChangeText={setTask}
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listHeader}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Criadas</Text>
            <Text style={styles.headerCount}>0</Text>
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText2}>Concluídas</Text>
            <Text style={styles.headerCount}>0</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={[]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>{item}</Text>}
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
