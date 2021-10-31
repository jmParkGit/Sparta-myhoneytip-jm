//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyCEUEpaw7oGq38Z9DhqVelEYHrQ2303Bcc",
    authDomain: "sparta-myhoneytip-jm.firebaseapp.com",
    databaseURL: "https://sparta-myhoneytip-jm-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sparta-myhoneytip-jm",
    storageBucket: "sparta-myhoneytip-jm.appspot.com",
    messagingSenderId: "205096730981",
    appId: "1:205096730981:web:5e50b4454d347892f9a18c",
    measurementId: "G-CJQJB5VJVK"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()