import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
// import data from './data';
import { useNavigation } from '@react-navigation/native';

const Card = ({ usersdata }) => {
  // console.log(usersdata.name)
  const data = usersdata
  const navigatedata = [
    data.name, data.picture
  ]

  const navigation = useNavigation()

  return (
    <View className="flex-1 items-center p-8">
      <View className="h-[230] w-[340]  p-4 justify-center bg-slate-200 rounded-xl border-orange-300 border-2">
        <View className="flex-1 flex-row">
          <View className="flex-1 rounded justify-center mr-5">
            <Image className="rounded-full object-cover w-[150] h-[150]" source={{ uri: `${data.picture.large}` }} />
          </View>
          <View className="flex-1 justify-center">
            <View className="flex-1 justify-center">
              <Text className="text-xl text-center font-semibold">{`${data.name.title} ${data.name.first} ${data.name.last}`}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('User', JSON.stringify(data))} className="flex-2 bg-orange-400 rounded-2xl justify-center p-5">
              <Text className="text-center font-extrabold text-2xl text-white">Visit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Card