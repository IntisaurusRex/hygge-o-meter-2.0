import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements' 



export default class Screen5 extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    You're on the top of the world! Keep soaring high!  
                </Text>

            </View>
        )
         
    }
} 
