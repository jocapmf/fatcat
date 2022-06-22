import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, Text} from 'react-native';
import CrewListItem from '../../components/crewListItem';

const CrewMembers = () => {
  const [crewList, storeCrew] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const [apiError, setApiError] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    getDataUsingAsyncAwaitGetCall();
  };
  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/crew');
      setApiError(false);
      storeCrew(response.data);
      setRefreshing(false);
    } catch (error) {
      // handle error
      console.log(error);
      setApiError(true);
      setRefreshing(false);
    }
  };
  useEffect(() => {
    getDataUsingAsyncAwaitGetCall();
    console.log("test")
  }, []);
  const printListOfCrew = () => {
    if (!apiError) {
      return crewList.map(member => (
        <CrewListItem key={member.id} {...member} />
      ));
    } else {
      return (
        <Text>
          Something went wrong with API. Pull to refresh in order to try again.
        </Text>
      );
    }
  };
  console.log("test")
  return (
    <ScrollView
      style={{padding: 10}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {printListOfCrew()}
    </ScrollView>
  );
};
export default CrewMembers;
