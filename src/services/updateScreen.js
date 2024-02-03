import { useDrawerStatus } from '@react-navigation/drawer';
let counter = 0;

export default function Update(set){
const isDrawerOpen = useDrawerStatus() === 'open';

 if(isDrawerOpen || counter %2 !=0 && !isDrawerOpen){
  counter++
  if(counter %2 ==0 && counter != 0){
    set(counter)
  }
 }
};