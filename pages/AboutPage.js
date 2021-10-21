import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

export default function AboutPage({navigation,route}) {

    useEffect(()=>{
        console.log(route)
        navigation.setOptions({
            title:"소개페이지",
            headerStyle: {
                backgroundColor: '#1022E6',
                shadowColor: "#1022E6",
            },
            headerTintColor: "#fff",
        })
    },[])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <View><Text style={styles.titleText}>Hi! 스파르타코딩 앱개발반에 오신것을 환영합니다.</Text></View>
            </View>
            <View style={styles.card}>
                <Image style={styles.mainImage} source={{uri:'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'}}
                resizeMode={"cover"}
                />
                <View><Text style={styles.sentence1}>많은 내용을 간결하게 담아내려 노력했습니다!</Text></View>
                <View><Text style={styles.sentence2}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다.</Text></View>
                <TouchableOpacity style={styles.button01}><Text style={styles.button01Text}>여러분 인스타계정</Text></TouchableOpacity>
            </View>
        </ScrollView>
        // 
    )
}

const styles = StyleSheet.create({
    container: {
        //앱의 배경색
        backgroundColor:'#1022E6'
    },
    title: {
        margin:30,
        marginTop:60,
        marginBottom:20,
    },
    titleText: {
        color:"#fff",
        fontSize: 25,
        fontWeight:"700",
        // textAlign:"center"
    },
    card: {
        backgroundColor:'#fff',
        borderRadius:10,
        margin:30,
        paddingBottom:100,
    },
    mainImage: {
        width:'50%',
        height:200,
        borderRadius:10,
        marginTop:40,
        alignSelf:"center"
    },
    sentence1: {
        fontSize: 20,
        fontWeight:"700",
        textAlign:"center",
    },
    sentence2: {
        fontSize: 15,
        textAlign:"center",
        margin:10,
    },
    button01: {
        width:150,
        height:50,
        padding:15,
        backgroundColor:"#fdc453",
        borderColor:"deeppink",
        borderRadius:15,
        margin:7,
        alignSelf:"center"
      },
      button01Text: {
        color:"#fff",
        textAlign:"center",
      }
})