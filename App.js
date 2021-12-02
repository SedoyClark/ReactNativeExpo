import React, { useState } from 'react';


import { Button, FlatList, StyleSheet, View } from 'react-native';
import { AddTodo } from './src/components/AddTodo/AddTodo';
import { NavBar } from './src/components/NavBar/NavBar';
import { Todo } from './src/components/Todo/Todo';

export default function App() {


  const [todos, setTodos] = useState([])

  const addTodo = (title) => {

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const axiosPosts = async () => {
    try {
      const response = await fetch(
        'http://cs44492.tmweb.ru/posts'
      );
      const json = await response.json();
      return console.log(json);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <NavBar title="Todo app" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <Button title="Axios" onPress={axiosPosts} />
      </View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
