import * as Location from 'expo-location';

import{googlePlaces} from '../componentes/DrawerContent'

export default async () => {
  if(googlePlaces == null){
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    let localization =  await Location.getCurrentPositionAsync({});
    let lat = localization.coords.latitude;
    let long = localization.coords.longitude
    return {latitude:lat, longitude:long}
  }
    else if(googlePlaces != null){
      let response = googlePlaces;
      return response;
    }
  }
 
  export const local =  async () =>{
    let coords;
    googlePlaces == null ? {coords}  =  await Location.getCurrentPositionAsync(): coords = googlePlaces
  const { latitude, longitude } = coords;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude
    });
    return response;
  }
  
