import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: '#262626',
    borderWidth: 2,
    borderColor: '#333333',
    borderRadius: 8,
    marginBottom: 8,
  },
  taskText: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
  },

  done: {
    flex: 1,
    color: '#808080',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
});
