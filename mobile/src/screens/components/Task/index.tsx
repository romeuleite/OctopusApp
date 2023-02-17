import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Trash2 } from 'react-native-feather'
import { RadioButton } from 'react-native-paper';

import { styles } from "./style";

type Props = {
  name: String;
  onRemove: () => void;
  onAdd: () => void;
  onRmv: () => void;
}


export function Task({ name, onRemove,  onAdd, onRmv }: Props) {
  const [checked, setChecked] = useState('unchecked');
  const [decoration, setDecoration] = useState<"none" | "underline" | "line-through" | "underline line-through" | undefined>("none");
  const [color, setColor] = useState('#FFF')

  return (
    <View style={styles.taskHolder}>
      <RadioButton
        value="first"
        uncheckedColor="#FFB8F2"
        color="#7f86a4"
        status={checked === 'checked' ? 'checked' : 'unchecked'}
        //onPress={ checked === 'checked' ? () => setChecked('unchecked'): () => setChecked('checked')}
        onPress={(function () {
          if (checked == 'checked') {
            setChecked('unchecked')
            setDecoration("none")
            setColor("#F2F2F2")
            onRmv()
          } else {
            setChecked('checked')
            setDecoration("line-through")
            setColor("#808080")
            onAdd()
          }
        })
        }
      />
      <Text style={[styles.taskText, { textDecorationLine: decoration }, { color: color }]}>{name}</Text>

      <TouchableOpacity style={styles.deletButton} onPress={onRemove}>
        <Trash2 color='#808080' />
      </TouchableOpacity>
    </View>
  )
}