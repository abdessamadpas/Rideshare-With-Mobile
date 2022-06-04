import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import FormButton from '../components/FormButton'
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = () => {

  const {logout} = useContext(AuthContext);

  return (
    <View>
       <Text style={{ marginTop: 30, alignSelf: 'center', fontSize: 50}}>HomeScreen</Text>
        
      <FormButton
      buttonTitle="logout"
      onPress={() => logout( )}
    />
   
      </View>
  )
}

export default HomeScreen