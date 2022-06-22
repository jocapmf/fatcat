import {Platform} from 'react-native';
import {
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
} from 'react-native-permissions';

export const checkForNeededPermisions = setCanAccess => {
  let canAccessCrewDetail = false;
  if (Platform.OS === 'ios') {
    checkMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
    ])
      .then(statuses => {
        if (
          statuses[PERMISSIONS.IOS.CAMERA] !== 'granted' ||
          statuses[PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY] !== 'granted' ||
          statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] !== 'granted'
        ) {
          requestMultiple([
            PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
            PERMISSIONS.IOS.CAMERA,
            PERMISSIONS.IOS.PHOTO_LIBRARY,
          ]).then(statusesRequests => {
            if (
              statusesRequests[PERMISSIONS.IOS.CAMERA] === 'granted' &&
              statusesRequests[PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY] ===
                'granted' &&
              statusesRequests[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'granted'
            ) {
              setCanAccess(true);
            } else {
              setCanAccess(false);
            }
          });
        } else {
          setCanAccess(true);
        }
      })
      .catch(error => {
        console.log('error', error);
        setCanAccess(false);
      });
  } else {
    checkMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION,
    ])
      .then(statuses => {
        console.log('statuses', statuses);
        if (
          statuses[PERMISSIONS.ANDROID.CAMERA] !== 'granted' ||
          statuses[PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION] !== 'granted'
        ) {
          requestMultiple([
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION,
          ]).then(statusesRequests => {
            console.log('statusesRequests', statusesRequests);
            if (
              statusesRequests[PERMISSIONS.ANDROID.CAMERA] === 'granted' &&
              statusesRequests[PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION] ===
                'granted'
            ) {
              setCanAccess(true);
            } else {
              setCanAccess(false);
            }
          });
        } else {
          setCanAccess(true);
        }
      })
      .catch(error => {
        console.log('error', error);
        setCanAccess(false);
      });
  }
  return canAccessCrewDetail;
};
