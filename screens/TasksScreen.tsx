import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
} from 'react-native';

import Task from '../components/molecules/Task';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  // creating states of tasks in this project
  // task - the name of the task that is being inputted into the write task input
  // setTask - the function we will use to set the state of the task
  // it will normally throw an error if you don't explicit denote the type of the method or give it an initial state
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([
    'Brush your teeth',
    'Have a shower',
    'Make breakfast',
  ]);
  const [completedTasks, setCompletedTasks] = useState<string[]>(['Wake up']);

  const handleAddTask = () => {
    Keyboard.dismiss();
    // hide the keyboard after you are ready to add a task

    setTaskList([...taskList, task]);
    // set the task items to whatever was in the array plus the new task using
    // the ellipsis array syntax

    setTask('');
    // clear the task after it has been added to the task list

    // console.log(task);
    // console.log([...taskList, task]);
  };

  const completeTask = (index: number) => {
    let taskListCopy = [...taskList];
    let checkedTask: string = taskList[index];
    taskListCopy.splice(index, 1); // will remove the item from the array at this index
    setTaskList(taskListCopy); // replace the task list with the task list copy
    setCompletedTasks([...completedTasks, checkedTask]);
  };

  const reassignTask = (index: number) => {
    let completedTasksCopy = [...completedTasks];
    let reassignedTask: string = completedTasks[index];
    completedTasksCopy.splice(index, 1); // will remove the item from the array at this index
    setCompletedTasks(completedTasksCopy);
    setTaskList([...taskList, reassignedTask]);
  };

  return (
    <>
      <View style={styles.container}>
        {/* Today's Tasks */}
        <View style={styles.tasksSection}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.tasks}>
            {/* This is where the tasks will go*/}
            {taskList.map((task, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task task={task} />
                </TouchableOpacity>
              );
            })}
            {/* <Task task={'Task One'} isComplete={false} />
            <Task task={'Task Two'} isComplete={false} />
            <Task task={'Task One'} isComplete={false} />
            <Task task={'Task Two'} isComplete={false} /> */}
          </View>
        </View>

        <View style={styles.tasksSection}>
          <Text style={styles.sectionTitle}>Completed Tasks</Text>
          <View style={styles.tasks}>
            {/* This is where the tasks will go*/}
            {completedTasks.map((task, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => reassignTask(index)}
                >
                  <Task task={task} />
                </TouchableOpacity>
              );
            })}
            {/* <Task task={'Task One'} isComplete={false} />
            <Task task={'Task Two'} isComplete={false} />
            <Task task={'Task One'} isComplete={false} />
            <Task task={'Task Two'} isComplete={false} /> */}
          </View>
        </View>

        {/* Write a task section */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={100}
          style={styles.writeTaskSection}
        >
          <TextInput
            style={styles.taskInput}
            placeholder={'Write a task'}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          {/* TODO: Add an on press event function */}
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tasks: {},
  writeTaskSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    width: '100%',
  },
  taskInput: {
    minWidth: 250,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#121212',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#202020',
    color: 'white',
  },
  addButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#202020',
  },
  addButtonText: {},
});
