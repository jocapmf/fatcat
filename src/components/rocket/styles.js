import {StyleSheet} from 'react-native';

export const rocketListItemStyles = () =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 5,
    },
    name: {
      flex: 1,
      marginLeft: 15,
    },
    image: {
      width: 100,
      height: 100,
    },
  });
