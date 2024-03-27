import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import { Link } from 'expo-router'

export default function Home(){  
  return(
    <View className='justify-center items-center flex-1'>
        <Link asChild href="/categories">
            <TouchableOpacity className='w-3/4 justify-center items-center bg-blue-500 rounded-lg h-20'>
              <Text className='text-xl font-bold text-white'>JOGAR</Text>
            </TouchableOpacity>
        </Link>
    </View>
  )
}


