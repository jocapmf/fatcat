import React from 'react';
import {Image, Text, View} from 'react-native';
import RocketListItemDetails from './details';
import {rocketListItemStyles} from './styles';

const RocketListItem = props => {
  const {name, flickr_images, height, mass} = props;
  const details = {name: {name: name}, height, mass};
  const rocketStyle = rocketListItemStyles();

  const printDetailRow = () => {
    return Object.keys(details).map(detail => {
      return RocketListItemDetails(
        detail,
        details[detail][Object.keys(details[detail])[0]],
        Object.keys(details[detail])[0],
      );
    });
  };
  return (
    <View style={[rocketStyle.row, {height: 120}]}>
      <Image style={rocketStyle.image} source={{uri: flickr_images[0]}} />
      <View style={{marginLeft: 15}}>{printDetailRow()}</View>
      <Text style={rocketStyle.name}>{name}</Text>
    </View>
  );
};
export default RocketListItem;
