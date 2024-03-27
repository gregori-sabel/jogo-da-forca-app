import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable} from 'react-native'
import { Link } from 'expo-router'
import BackButton from '../backButton'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'


export default function Categories(){  
  const categories = [{ name:'Alimentos', id: 1}, { name:'Profissões', id: 2, }, { name:'Paises', id: 3}]
  const [fontsLoaded] = useFonts({
    'escrita': require('../../assets/fonts/escrita.ttf')
  })

  useEffect(() => {
    console.log('vou tentar')
    try{
      const url = 'http://192.168.0.127:3333/api' + '/category'
      fetch(url)
        .then(response => response.json())
        .then(data => console.log(data.categories))
    } catch (error) {
      console.log(error)
    }
  },[])

  return(
    <View style={styles.container}>
      <BackButton />

      <Text className="text-xl absolute top-5" style={{fontFamily: 'escrita'}}>Escolha uma categoria</Text>

        <View className='w-3/4 gap-3'>
          { categories.map( (categorie) => (
            <Link key={categorie.id} href={{
              pathname: '/game',
              params: { id: categorie.id}
            }} asChild>
                <Pressable className='bg-blue-500 w-100%  h-14 flex justify-center items-center rounded-lg animate-bounce'>
                  <Text style={styles.buttonText}>{categorie.name}</Text>
                </Pressable>
            </Link>

          ))}
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
  container:{
    flex: 1,
    backgroundColor: "#f3f3ff",
    justifyContent: 'center', 
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#392de9",
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
})