import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

export default function Item(props){
    return(
        <TouchableOpacity style={[styles.item, props.color ? {backgroundColor: props.color} : null]} onPress={props.onPress}>
            <View>
                <Text style={styles.text}>{props.value}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#434343',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "white",
        fontSize: 42,
    },
});