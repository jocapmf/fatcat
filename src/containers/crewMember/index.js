import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text} from 'react-native';
import {checkForNeededPermisions} from '../utils';

const CrewMember = props => {
  const [canAccess, setCanAccess] = useState(false);
  useEffect(() => {
    checkForNeededPermisions(setCanAccess);
  }, []);
  const {navigation, route} = props;
  const {params} = route;
  const {image, name, agency, status} = params;
  const lImg = image.replace(".png","l.png") //Imgur, use large image
  return (
    <SafeAreaView style={{backgroundColor: '#ccc'}}>
      <ScrollView>
        {canAccess ? (
          <>
            <Image
              source={{uri: lImg}}
              style={{flex: 1, height: 400}}
              resizeMode="cover"
              resizeMethod='resize'
              onError={({nativeEvent: {error}}) => console.log(error)}
            />
            <Text>{name}</Text>
            <Text>{agency}</Text>
            <Text>{status}</Text>
          </>
        ) : (
          <Text style={{alignSelf: 'center', fontSize: 19, padding: 20}}>
            You have initialy denied some permisions. You need to accept all
            permissions in order to access this page. Go to App permissions
            settings and allow them.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default CrewMember;
