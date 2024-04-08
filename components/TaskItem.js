import { React, useEffect, useState } from "react";
import styles from "./Layout";
import { Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import Material from "react-native-vector-icons-MatterialCommunityIcons";
import { list, convert } from "../api";
import { useNavigationState } from "@react-navigation/native";

export const DropDown = () => {

    const [data, setDatos] = useState()
    const [Value, setValue] = useState(0)
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [ItemSelect, setItemSelect] = useState()
    const [ItemSelect2, setItemSelect2] = useState()
    const [mostrar, setMostrar] = useState(false)
    
    const [cambio, setCambio] = useState('')

    const onPress = () => {
        //console.log(visible);
        setVisible(!visible);
       }

    const onPress2 = () => {
        //console.log(visible);
        setVisible2(!visible2);
       }    

    const onpressConvert = async () => {
        const Cambio = await convert(ItemSelect, ItemSelect2, Value);
        //console.log('resultado ' + result);
        setCambio(Cambio);
        console.log(Cambio);
        setMostrar(true);
    } 

    const CargarDatos = async () => {
        const datos = await list();
        //console.log(datos);
        setDatos(datos);
      };  

    useEffect(() => {
        CargarDatos();
    }, [])

    const handleInputChange = (importe) => {
        console.log(importe);
         setValue(importe)
    }

    const Item = ({value}) => {
        return (
            <TouchableOpacity 
            style={styles.Item}
            onPress={() => {
                setItemSelect(value)
                console.log(value);
            }}>
            <Text>{value}</Text>
            </TouchableOpacity>
        )}

    const Item2 = ({value}) => {
        return (
            <TouchableOpacity 
            style={styles.Item}
            onPress={() => {
                setItemSelect2(value)
                console.log(value);
            }}>
            <Text>{value}</Text>
            </TouchableOpacity>
        )}

    const renderItem = ({item}) => {
        return  <Item value={item}></Item> ;
    }

    const renderItem2 = ({item}) => {
        return  <Item2 value={item}></Item2> ;
    }

    return (
        <View style={styles.content}>

            <View style={styles.ContentButton}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Importe: </Text>
                <TextInput
                style={styles.search}
                keyboardType="numeric"
                onChangeText={handleInputChange}>
                </TextInput>
            </View>

            <View style={styles.ContentButton}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>De: </Text>  
                <TouchableOpacity 
                style={styles.Button}
                onPress={onPress}>
                    <Text style={styles.ItemSelect}>{ItemSelect}</Text>
                </TouchableOpacity>
                
                { (visible) ? <View style={styles.ContentList}>
                    <View style={styles.List}>
                        <FlatList
                            data = {data}
                            keyExtractor = {(item) => item + ""}
                            renderItem={renderItem}
                        />
                        <Text style={styles.data}></Text>
                    </View>            
                </View> : null}
            </View>

            <View style={styles.ContentButton}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Para: </Text>    
                <TouchableOpacity 
                    style={styles.Button}
                    onPress={onPress2}>
                        <Text style={styles.ItemSelect}>{ItemSelect2}</Text>
                </TouchableOpacity>
                { (visible2) ? <View style={styles.ContentList}>
                    <View style={styles.List}>
                        <FlatList
                            data = {data}
                            keyExtractor = {(item) => item + ""}
                            renderItem={renderItem2}
                        />
                        <Text style={styles.data}></Text>
                    </View>            
                </View> : null}   
            </View>
            <View style={styles.ContentButtonConvert}>
                <TouchableOpacity
                    style={styles.ButtonChange}
                    onPress={onpressConvert}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Convert</Text>
                </TouchableOpacity>
            </View> 
                {(mostrar) ? <View style={styles.contentRes}>
                <Text style={styles.respuesta}>{Value + ' ' + ItemSelect + ' Corresponden a: ' + cambio + ' ' + ItemSelect2}</Text>
                </View> : null}
        </View>
    )}

export default DropDown;
