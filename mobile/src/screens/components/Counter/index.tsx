import { Text, View} from "react-native";
import { useState } from "react";

import { styles } from "./style";


type Props = {
    contCriadas: number;
    contConcluidas: number;
  }

export function Counter({ contCriadas, contConcluidas}: Props) {
    return (
        <View style={styles.textCriadasHolder}>
                <View style={styles.textInfo}>
                    <Text style={styles.textCriadas}>Criadas</Text>
                    <Text style={styles.numberDisplay}>  {contCriadas}</Text>
                </View>
                <View style={styles.textInfo}>
                    <Text style={styles.textConcluidas}>Concluídas</Text>
                    <Text style={styles.numberDisplay}>  {contConcluidas}</Text>
                </View>


            </View>
    )
}