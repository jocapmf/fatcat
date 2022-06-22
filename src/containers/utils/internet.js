import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useInternetStatus = () => {
  const [reachable, setReachable] = useState(true);

  useEffect(() => {
    const subscribe = state => setReachable(state.isInternetReachable);

    const unsubscribe = NetInfo.addEventListener(subscribe);

    return () => unsubscribe();
  }, []);

  return reachable;
};
