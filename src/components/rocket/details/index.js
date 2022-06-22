import React from 'react';
import {Text, View} from 'react-native';
import {rocketListItemStyles} from '../styles';

const RocketListItemDetails = (detailName, detailInfo, detailInfoUnit) => {
  const printDetailInfoUnit = unit => {
    return unit !== 'name' ? unit : '';
  };
  const rocketStyle = rocketListItemStyles();
  return (
    <View style={rocketStyle.row} key={Math.random()}>
      <Text style={{color: '#000'}}>{`${detailName} :`}</Text>
      <Text style={rocketStyle.name}>
        {detailInfo + printDetailInfoUnit(detailInfoUnit)}
      </Text>
    </View>
  );
};
export default RocketListItemDetails;
