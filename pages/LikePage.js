import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert,Share } from 'react-native';
import LikeCard from '../components/LikeCard';
import Loading from '../components/Loading';
import {firebase_db} from "../firebaseConfig";
import Constants from 'expo-constants';

export default function LikePage({navigation,route}) {

    const [tip, setTip] = useState([])
    const [ready, setReady] = useState(true)
    
    useEffect(()=>{
        console.log(route)
        navigation.setOptions({
            title:"찜 페이지",
            headerStyle: {
                backgroundColor: '#000',
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        })

        const user_id = Constants.installationId;
        firebase_db.ref('/like/'+user_id).once('value').then((snapshot) => {
            console.log("파이어베이스에서 데이터 가져왔습니다!!");
            //console.log("user_id: "+user_id);
            let tip = snapshot.val();
            let tip_list = Object.values(tip);
            //console.log(tip);
            if(tip_list.length>0) {
                setTip(tip_list);
                setReady(false);
            }

        })        
    },[])

    const reload = () =>{
        const user_id = Constants.installationId;
        firebase_db.ref('/like/'+user_id).once('value').then((snapshot) => {
			//snapshot에 값이 있는지 없는지 체크하는 exists 함수 사용
            if(snapshot.exists()){
                let tip = snapshot.val();
                let tip_list = Object.values(tip)
                setTip(tip_list)
            }else{
                setReady(true)
                setTip([])
            }
            
        })
    }

    return ready ? <Loading/> :( 
        <ScrollView style={styles.cardContainer}>
            {/* 하나의 카드 영역을 나타내는 View */}
            {
                tip.map((content,i)=>{
                    return (<LikeCard content={content} key={i} reload={reload} navigation={navigation}/>)
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:"#fff"
    }
})