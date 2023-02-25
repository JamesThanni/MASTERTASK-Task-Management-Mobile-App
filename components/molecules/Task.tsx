import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

type TaskProps = {
  task: string;
  isCompleted: boolean;
};

// Easiest way to declare a Function Component; return type is inferred.
const Task = ({ task, isCompleted }: TaskProps) => (
  <View style={styles.task}>
    <View style={styles.leftOfTask}>
      <View style={styles.completeButton}>
        {isCompleted && <FontAwesome name="check" size={16} color={'white'} />}
      </View>
      {!isCompleted && <Text style={styles.taskText}>{task}</Text>}
      {isCompleted && <Text style={styles.completedTaskText}>{task}</Text>}
    </View>
    <View style={styles.selectButton}></View>
  </View>
);

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: 2.5,
    borderBottomColor: '#202020',
  },
  leftOfTask: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  completeButton: {
    width: 24,
    height: 24,
    backgroundColor: '#555555',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskText: {
    maxWidth: '80%',
    color: '#fff',
  },
  completedTaskText: {
    maxWidth: '80%',
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  selectButton: {
    width: 12,
    height: 12,
    borderColor: '#555555',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
