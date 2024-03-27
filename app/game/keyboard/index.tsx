import { TouchableOpacity, View, Text } from "react-native";
import { Key } from "..";

interface Props {
    keyboard: Key[],
    pressKey(key: string): void
}

export default function Keyboard({ keyboard, pressKey }: Props) {
    return (
      <View className="flex-row mb-10 flex-wrap gap-2 px-5 justify-center items-center">
        {keyboard.map((key) => (
          <TouchableOpacity
            key={key.key}
            disabled={key.isPressed ? true : false}
            className={`w-8 h-10 rounded justify-center items-center ${ key.isPressed ? 'bg-blue-200' : 'bg-blue-500'}`}
            onPress={() => pressKey(key.key)}
          >
            <Text className="text-white">{key.key}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
}