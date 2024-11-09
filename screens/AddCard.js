import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView,TextInput, SafeAreaView,Dimensions } from 'react-native';
import Card from '../components/Card';

const data = require('../assets/data/input.json');
const scrnW = Dimensions.get('window')

const AddCard = () => {
/*
    const [title, setTitle] = useState('TodoList');
    const [text, setText] = useState();
    const [list, setList] = useState([]);

    //Add item Method
    const addItem = () =>{
        const updatedList = list;
        updatedList.push(text)
        setList(updatedList)
        setText('') 
    }

    //Delete item Method
    const deleteItem = (index) => {
        const updatedList = list.filter( (todo) => todo !== index )
        setList(updatedList)
    }
*/
    const [text,setText] = useState('');
    const [list, setList] = useState([]);
    const [newList, setNewList] = useState([]);
    useEffect(()=>{
        setList(data);
    },[])
    useEffect( ()=>{
          setNewList(list);
    },[list])
    
    console.log('old list:'+{list})
    console.log('New list:'+{newList})
    return (
        <SafeAreaView style={styles.body}>
            <TextInput style={styles.input} 
                placeholder="Product Name" 
                onChangeText={(val) => setText(val)} />
            <Text> hello {text} </Text>
            <Button title="Add" />

            
                <ScrollView>
                <View style={styles.liststyle}>
                {
                    newList.map((item, index) =>{
                        return(
                            <View key={index}>
                                <Card name={item.name} image={item.image} />
                            </View>
                        )
                    })
                }
                </View>
                </ScrollView>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
        marginTop: 30,
        padding: 10,
    },
    input:{
        width: scrnW,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    liststyle:{
        marginBottom:20,
        marginTop: 0,
    }
})

export default AddCard;