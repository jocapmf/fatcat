import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, Text} from 'react-native';
import RocketListItem from '../../components/rocket';

const Rockets = () => {
  const [rocketsList, storeRockets] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const [apiError, setApiError] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getDataUsingAsyncAwaitGetCall();
  };
  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/rockets');
      setApiError(false);
      storeRockets(response.data);
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
  }, []);
  const printListOfRockets = () => {
    if (!apiError) {
      return rocketsList.map(rocket => {
        console.log(rocket.id);
        return <RocketListItem key={rocket.id.toString()} {...rocket} />;
      });
    } else {
      return (
        <Text>
          Something went wrong with API. Pull to refresh in order to try again.
        </Text>
      );
    }
  };
  return (
    <ScrollView
      style={{padding: 10}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {printListOfRockets()}
    </ScrollView>
  );
};
export default Rockets;
