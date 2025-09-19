import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type TaskItemProps = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  onToggleComplete: (id: string) => void;
};

const TaskItem = ({ id, title, description, completed, onToggleComplete }: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.checkbox, completed && styles.checkboxChecked]}
        onPress={() => onToggleComplete(id)}
      >
        {completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Text style={[styles.title, completed && styles.completedText]}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6366f1',
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#6366f1',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#6b7280',
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
});

export default TaskItem;