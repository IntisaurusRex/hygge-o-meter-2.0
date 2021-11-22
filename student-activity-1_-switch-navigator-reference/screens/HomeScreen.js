import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements' 





export default class HomeScreen extends Component {
    render() {
        return(
            <View style = {styles.container}>
              <Header>
                  centerComponent = {{
                      text: 'On a scale from 1-5, how do you feel?',
                      style : {color : 'black', fontSize : 20 }
                  }}
              </Header>

              <TouchableOpacity
                style = {[styles.button,{backgroundColor:"red"}]}
                onPress={()=>this.goToScreen1("red")}> 
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity
            
                style = {[styles.button,{backgroundColor:"orange"}]}
                onPress={()=>this.goToScreen2("orange")}> 
                <Text style={styles.buttonText}>2</Text>

              </TouchableOpacity> 


              <TouchableOpacity
                style = {[styles.button,{backgroundColor:"yellow"}]}
                onPress={()=>this.goToScreen3("yellow")}> 
                <Text style={styles.buttonText}>3</Text>
            
              </TouchableOpacity> 
                
              <TouchableOpacity 
            
                style = {[styles.button,{backgroundColor:"chartreuse"}]}
                onPress={()=>this.goToScreen4("chartreuse")}> 
                <Text style={styles.buttonText}>4</Text>

              </TouchableOpacity> 

              <TouchableOpacity 
            
                style = {[styles.button,{backgroundColor:"green"}]}
                onPress={()=>this.goToScreen5("green")}> 
                <Text style={styles.buttonText}>5</Text>

              </TouchableOpacity> 
              


            </View>

        )
    }
}