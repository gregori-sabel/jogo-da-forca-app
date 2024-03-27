import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BackButton from "../backButton";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import Modal from "../modal";
import SecretWord from "./secretWord";
import Keyboard from "./keyboard";
import LifeBar from "./lifeBar";

export interface Key {
  key: string,
  isPressed: boolean
}

export type ModalState = 'hidden' | 'victory' | 'defeat'

export default function Game() {
  const [keyboard, setKeyboard] = useState<Key[]>([
    { key: "A", isPressed: false },
    { key: "B", isPressed: false },
    { key: "C", isPressed: false },
    { key: "D", isPressed: false },
    { key: "E", isPressed: false },
    { key: "F", isPressed: false },
    { key: "G", isPressed: false },
    { key: "H", isPressed: false },
    { key: "I", isPressed: false },
    { key: "J", isPressed: false },
    { key: "K", isPressed: false },
    { key: "L", isPressed: false },
    { key: "M", isPressed: false },
    { key: "N", isPressed: false },
    { key: "O", isPressed: false },
    { key: "P", isPressed: false },
    { key: "Q", isPressed: false },
    { key: "R", isPressed: false },
    { key: "S", isPressed: false },
    { key: "T", isPressed: false },
    { key: "U", isPressed: false },
    { key: "V", isPressed: false },
    { key: "W", isPressed: false },
    { key: "X", isPressed: false },
    { key: "Y", isPressed: false },
    { key: "Z", isPressed: false },
  ]);
  const [word, setWord] = useState<Key[]>([])
  const [modalState, setModalState] = useState<ModalState>('hidden')
  const maxLife = 8
  const [lifeAmount, setLifeAmount] = useState(maxLife)

  const [fontsLoaded] = useFonts({
    escrita: require("../../assets/fonts/escrita.ttf"),
  });

  function continuePlaying() {
    setModalState('hidden')
    resetKeyboard()
    getWord()
    setLifeAmount(maxLife)
  } 

  function resetKeyboard() {
    const resettedKeyboard = keyboard.map(key => {
      return {key: key.key, isPressed: false}
    })
    setKeyboard([...resettedKeyboard])
  }

  function pressKey(letter: string) {
    const upperCaseLetter = letter.toUpperCase();

    const newKeyboard = keyboard.map(key => {      
      if(key.key.toUpperCase() == upperCaseLetter){
        key.isPressed = true
      }
      return key
    })
    setKeyboard([...newKeyboard])

    let wonState = true
    let findSomeKey = false
    
    const newWordList  = word.map(key => {
      if(key.key.toUpperCase() == upperCaseLetter){
        key.isPressed = true
        findSomeKey = true
      }
      if(key.isPressed == false){
        wonState = false
      }
      return key
    })
    setWord([...newWordList])
    if(wonState){
      setModalState('victory')
    }
    if (findSomeKey == false){
      setLifeAmount(lifeAmount - 1)
      if ((lifeAmount - 1) < 1 ){
        setModalState('defeat')
      }
    }

  }

  function getWord() {
    const randomWord = 'macarrao'
    const wordList = randomWord.split('').map(key => ({key: key, isPressed: false}))
    setWord(wordList)

  }

  useEffect(() => {
    getWord()
  },[])

  return (
    <View className="justify-center items-center flex-1">
      <BackButton />
      <LifeBar  maxLife={maxLife} lifeAmount={lifeAmount}/>

      <SecretWord word={word}/>

      <Keyboard keyboard={keyboard} pressKey={pressKey}/>

      { modalState !== 'hidden' && <Modal continuePlaying={continuePlaying} modalState={modalState}/> }
      
    </View>
  );
}
