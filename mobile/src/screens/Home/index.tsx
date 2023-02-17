import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { PlusCircle } from 'react-native-feather'
import { Task } from '../components/Task'
import { Counter } from '../components/Counter'
import { useState } from "react";

import { styles } from "./style";

import Logo from '../../assets/Logo.svg'
import Clipboard from '../../assets/Clipboard.svg'
import Octopus from '../../assets/octopus.svg'




export default function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskName, setTaskName] = useState('');
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1)
    }

    const rmvCount = () => {
        setCount(count - 1)
    }

    function handleTaskAdd() {
        if (tasks.includes(taskName)) {
            return Alert.alert("Tarefa existe!", "Já existe uma tarefa com esse nome.")
        }

        setTasks(prevState => [...prevState, taskName]);
        setTaskName('');

    }

    function handleTaskRemove(name: string) {
        Alert.alert("Remover!", `Remover a tarfea ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        
    }


    return (
        <View style={styles.container}>
            <Octopus style={styles.logo} />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Descrição da tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setTaskName}
                    value={taskName}
                />

                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <PlusCircle width={18} height={18} color="#F2F2F2" />
                </TouchableOpacity>
            </View>

            <Counter contCriadas={tasks.length} contConcluidas={count} />

            <FlatList
                data={tasks}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        name={item}
                        onRemove={() => handleTaskRemove(item)}
                        onAdd={() => addCount()}
                        onRmv={() => rmvCount()}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmptyHolder}>
                        <Clipboard />
                        <Text style={styles.listEmptyText1}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmptyText2}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />

        </View>
    )
}