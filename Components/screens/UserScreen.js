import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import formatDate from './dateformate';

const UserScreen = (props) => {

  const data = JSON.parse(props.route.params)
  // console.log(data.picture)
  const navigation = useNavigation()
  const dob = formatDate(`${data.dob.date}`)

  return (
    <View className="flex-1 mt-8 justify-center">
      <View className="flex bg-slate-200 m-1 rounded-xl h-[250]">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="flex-2 bg-orange-400 h-[50] w-[50] justify-center items-center m-1 rounded-xl">
          <Entypo name="arrow-long-left" size={30} color="white" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Image className="rounded-full" style={{ height: 150, width: 150, borderWidth: 2, borderColor: '#fdba74' }} source={{ uri: `${data.picture.large}` }} />
          <Text className="font-semibold text-xl italic">{`${data.name.title} ${data.name.first} ${data.name.last}`}</Text>
        </View>
      </View>
      <View className="flex-1 m-1 rounded-xl bg-gray-200">
        <TouchableOpacity className="flex-1 flex-row ml-1 items-center">
          <View className="bg-orange-400 p-2 rounded-bl-xl rounded-tl-xl">
            <Fontisto name="email" size={28} color="white" />
          </View>
          <View className= "justify-center bg-slate-200 rounded-br-xl rounded-tr-xl p-[10]" >
            <Text className="text-base font-semibold">{data.email}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 flex-row ml-1 items-center">
          <View className="bg-orange-400 p-2 rounded-bl-xl rounded-tl-xl">
          <Entypo name="calendar" size={28} color="white" />
          </View>
          <View className= "justify-center bg-slate-200 rounded-br-xl rounded-tr-xl p-[10]" >
            <Text className="text-base font-semibold">{dob}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 flex-row ml-1 items-center">
          <View className="bg-orange-400 p-2 rounded-bl-xl rounded-tl-xl">
          <Entypo name="location" size={28} color="white" />
          </View>
          <View className= "justify-center bg-slate-200 rounded-br-xl rounded-tr-xl p-[10]" >
            <Text className="text-base font-semibold">
              {`${data.location.street.number} ${data.location.street.name}`}
              </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 flex-row ml-1 items-center">
          <View className="bg-orange-400 p-2 rounded-bl-xl rounded-tl-xl">
          <Entypo name="phone" size={28} color="white" />
          </View>
          <View className= "justify-center bg-slate-200 rounded-br-xl rounded-tr-xl p-[10]" >
            <Text className="text-base font-semibold">{data.phone}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 flex-row ml-1 items-center">
          <View className="bg-orange-400 p-2 rounded-bl-xl rounded-tl-xl">
          <MaterialIcons name="password" size={28} color="white" />
          </View>
          <View className= "justify-center bg-slate-200 rounded-br-xl rounded-tr-xl p-[10]" >
            <Text className="text-base font-semibold">{data.login.salt}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserScreen