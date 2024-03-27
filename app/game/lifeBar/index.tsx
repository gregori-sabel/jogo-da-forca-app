import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props{
    maxLife: number,
    lifeAmount: number
}

export default function LifeBar({ maxLife, lifeAmount}: Props) {
    const iconArray = Array.from({ length: maxLife }, (_, index) => index); 

    return (
        <View className="absolute top-7 right-5 flex-row">
            { iconArray.map(index => (
                <Ionicons name="heart" size={20} color={index >= lifeAmount ? 'gray' : 'red'} />
            ))}
        </View>
    )
}