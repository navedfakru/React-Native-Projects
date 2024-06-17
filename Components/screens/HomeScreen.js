import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import Card from '../components/Card';
import usersData from './usersData';

const HomeScreen = () => {

  // console.log(usersData[0].name.first)
  
  return (
    <ScrollView>
      {
        usersData.map((data) => <Card usersdata={data} key={data.login.uuid}/>)
      }
    </ScrollView>
  )
}

export default HomeScreen