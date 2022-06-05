import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'

const CarpoolingDetailsScreen = ({navigation, route}) => {

    const [carpoolingInfo, SetCarpoolingInfo]=useState("null")
    const [currentPosition, setCurrentPosition]=useState(null)

  
    useEffect( () => {
      
        let { item, currentLocation } =  route.params;
        SetCarpoolingInfo(item)
        setCurrentPosition(currentLocation)
        
    },[route.params])
    
//   useEffect(()=>{
//     console.warn(carpoolingInfo.name);
//   },[carpoolingInfo])
  return (
    <View style={{marginTop: 80, alignSelf: 'center'}}>
      <Text>{carpoolingInfo.name}</Text>
      <Text>{carpoolingInfo.id}</Text>
    </View>
  )
}


export default CarpoolingDetailsScreen