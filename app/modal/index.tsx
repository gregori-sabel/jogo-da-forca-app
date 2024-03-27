import { View, Text, TouchableOpacity } from "react-native";
import { router } from 'expo-router'
import { ModalState } from "../game";

interface Props {
    continuePlaying(): void;
    modalState: ModalState
}

export default function Modal({ continuePlaying, modalState }: Props) {

    function onContinueButton() {
        continuePlaying()
    }
    
    function onNewCategorieButton() {
        router.navigate('/categories')
    }

    function onMenuButton() {
        router.navigate('/')
    }

    return (
        <View className=" absolute w-full h-full bg-black/25 justify-center items-center">
            <View className="w-3/4 h-2/4 bg-white rounded-lg items-center">
                <View className={`absolute -top-8 rounded-lg px-5 py-4 shadow ${ modalState == 'victory' ? 'bg-green-400' : 'bg-red-400'}`}>
                    <Text className="text-5xl font-bold ">{modalState == 'victory' ? 'Vitória' : 'Derrota'}</Text>
                </View>
                <View className="w-full h-full items-center justify-center gap-4">
                    <TouchableOpacity onPress={onContinueButton} className="bg-blue-500 w-3/4 items-center justify-center h-12 rounded-lg">
                        <Text className="text-white font-bold text-lg">{modalState == 'victory' ? 'Continuar' : 'Tentar novamente'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onNewCategorieButton} className="bg-blue-500 w-3/4 items-center justify-center h-12 rounded-lg">
                        <Text className="text-white font-bold text-lg">Nova categoria</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onMenuButton} className="bg-blue-500 w-3/4 items-center justify-center h-12 rounded-lg">
                        <Text className="text-white font-bold text-lg">Voltar ao menu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
