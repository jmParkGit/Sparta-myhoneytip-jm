import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity, ScrollView,Alert} from 'react-native'
import {firebase_db} from "../firebaseConfig";
import Constants from 'expo-constants';

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikeCard({content,navigation,reload}){

      const remove = () => {
        console.log("remove function")
        const user_id = Constants.installationId;
        firebase_db.ref('/like/'+user_id+'/'+content.idx).remove().then(function(){
            Alert.alert("삭제 완료");
            reload();
        })
    }

    return(
        //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
                <ScrollView style={styles.buttonContainer} horizontal indicatorStyle={"white"}>
                  <TouchableOpacity style={styles.middleButton04} onPress={()=>{navigation.navigate('DetailPage',{idx:content.idx})}}><Text style={styles.cardButton_0}>자세히보기</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.middleButton04} onPress={()=>remove()}><Text style={styles.cardButton_0}>찜 해제</Text></TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10,
    },
    cardImage: {
      flex:1,
      width:100,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    },
    buttonContainer: {

    },
    cardButton_0: {
      width:100,
      height:50,
      padding:15,
      color:"#f886a8",
      borderColor:"#f886a8",
      borderWidth:2,
      borderRadius:15,
      margin:7,
      textAlign:"center"
    },

});