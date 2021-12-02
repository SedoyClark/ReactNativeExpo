import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')


    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value);
            setValue('')
        }else {
            Alert.alert("Input не может быть пустым")
        }
    }
    return (
        <View style={styles.block}>
           <TextInput style={styles.input} 
           onChangeText={setValue}
           value={value}
           placeholder="Введите название заметки"
            autoCorrect={false}
            // keyboardType="number-pad" //Тип клавы
           />
           <Button title="Добавить" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between', //Максимум отдаляет
        alignItems: 'center',
        marginBottom: 10
    },
    
    input: {
       width: '70%',
       padding: 10,
       borderStyle: 'solid',
       borderBottomWidth: 2,
       borderBottomColor: '#3949ab'
    }
})