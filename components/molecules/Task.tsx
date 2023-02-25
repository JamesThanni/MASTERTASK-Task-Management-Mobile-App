import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

type TaskProps = {
  task: string;
};

// Easiest way to declare a Function Component; return type is inferred.
const Task = ({ task }: TaskProps) => (
  <View style={styles.task}>
    <View style={styles.leftOfTask}>
      <TouchableOpacity style={styles.completeButton}></TouchableOpacity>
      <Text style={styles.taskText}>{task}</Text>
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
    backgroundColor: '#121212',
    borderRadius: 10,
    borderWidth: 0.25,
    borderColor: '#202020',
  },
  leftOfTask: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  completeButton: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  taskText: {
    maxWidth: '80%',
    color: '#fff',
  },
  selectButton: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
