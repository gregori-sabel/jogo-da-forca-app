import { TouchableOpacity, View, Text } from "react-native";
import { Key } from "..";

interface Props {
    word: Key[]
}

export default function SecretWord({ word }: Props) {
    return (
      <View className="gap-40 flex-1 justify-center items-center">
        <View className="flex-row gap-1 mb-2">
          {word.map((key) => (
            <TouchableOpacity key={key.key} className={` px-3 py-2 rounded ${ key.isPressed ? 'bg-blue-200' : 'bg-blue-500'}`}>
              <Text className="text-white">{key.key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
}