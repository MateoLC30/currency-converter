import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { React } from "react";
import  styles  from './components/Layout';
import {DropDown, Value, ItemSelect, ItemSelect2, cambio} from "./components/TaskItem";

export const App = () => {

  
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#232321'}}>
      <View style={styles.container}>
        <View style={styles.contentTitle}>
        <Text style={styles.title}>Change Money</Text>   
        </View>
      
        <DropDown/>
        
      </View>
    </SafeAreaView>
  )}
export default App