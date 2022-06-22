import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {rocketListItemStyles} from '../rocket/styles';

const CrewListItem = props => {
  const navigation = useNavigation();
  const {name, image} = props;
  const rocketStyle = rocketListItemStyles();
  const handleNavigateToMember = () => {
    navigation.navigate('CrewMember', props);
  };
  return (
    <TouchableHighlight onPress={handleNavigateToMember} underlayColor="#ccc">
      <View style={rocketStyle.row}>
        <Image style={rocketStyle.image} source={{uri: image}} />
        <Text style={[rocketStyle.name, {fontSize: 22}]}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default CrewListItem;
