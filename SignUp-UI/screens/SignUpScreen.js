import { View, Text, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import themeColors from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          // style={{backgroundColor: "#facc15", padding: 8, borderTopRightRadius: 16, borderBottomLeftRadius: 16, marginLeft: 16}}
          >
            <ArrowLeftIcon size={"20"} color={"black"} />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image style={{ width: 165, height:  110 }} source={require("../assets/image/Nerd-amico.png")} />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >

        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value='jhon dawood'
            placeholder='Enter Name'
          />
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value='jhon@gmail.com'
            placeholder='Enter Email'
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5"
            secureTextEntry
            value='jhon1234'
            placeholder='Enter Password'
          />
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">SignUp</Text>
          </TouchableOpacity>
        </View>
        <Text
          className="text-xl text-gray-700 font-bold text-center py-5"
        >
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require("../assets/icons/google.png")} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require("../assets/icons/apple.png")} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require("../assets/icons/facebook.png")} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Text className="text-gray-700 font-semibold">Already hane an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text className="font-semibold text-yellow-400"> Log In</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default SignUpScreen