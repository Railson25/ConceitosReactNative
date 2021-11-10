import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      title: newTaskTitle,
      id: new Date().getTime(),
      done: false
    }
    setTasks(tasks => [...tasks, newTask])
  }

  function handleToggleTaskDone(id: number) {
    //Não conseguir fazer.
    const updatedTasks = tasks.map(task => ({ ...task }))
    const findTask = updatedTasks.find(item => item.id ===id)

    if(!findTask)
    return

    findTask.done = !findTask.done
    setTasks(updatedTasks)
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})