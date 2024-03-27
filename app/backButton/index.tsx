import { Link, router } from 'expo-router'  
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BackButton() {

    function goBack(){
        router.back()
    }

    return (
      <View className='absolute top-5 left-5'>
        <Pressable onPress={goBack}>
            <Ionicons name="arrow-back-outline" size={32} color="#3b82f6" />
        </Pressable>   
      </View>        
    )
}

const styles = StyleSheet.create({
  bounce: {
    
  }
})