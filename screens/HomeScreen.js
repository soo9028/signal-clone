import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons } from '@expo/vector-icons';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import {
    getAuth,
    signOut,
    collection,
    getFirestore,
    onSnapshot,
    deleteDoc
} from '../firebase';
import { FieldValue, doc, deleteField } from 'firebase/firestore';

const HomeScreen = ({ navigation, route }) => {
    const db = getFirestore();
    const auth = getAuth();
    const [chats, setChats] = useState([]);

//   const signOutUser = () => {
//     signOut(auth).then(() => navigation.replace('Login'));
//   };
//     const docRef = doc(db, 'messages/2xE8piXfEbNipetyONbE');
    //Remove photoURL field from messages
    

    // const deleteTimeStamp = async ()=>{
    //     const docRef = db.collection('messages').doc('chats');
    //     const res = await docRef.update({
    //         timestamp: FieldValue.delete()
    //     });
    // };

    const signOutUser = () => {
        signOut(auth).then(() => navigation.replace('AuthNavigator'));
    };

    const deleteChats = async () => {
        await deleteDoc(collection(db, `chats/${route.params.id}`, 'messages'))
            .then(() => navigation.navigate('Home'))
            .catch((error) => alert(error.message));
    };

    // useEffect(() => {
    //     const unsubscribe = onSnapshot(
    //         collection(db, 'chats'),
    //         (querySnapshot) => {
    //             const documents = querySnapshot.docs.map((doc) => {
    //                 return {
    //                     ...doc.data(),
    //                     id: doc.id,
    //                 };
    //             });
    //             setChats(documents);
    //         }
    //     );
    //     return () => unsubscribe();
    // }, ['chats']);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chats',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { color: 'black' },
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Avatar
                            rounded
                            source={{ uri: auth?.currentUser?.photoURL }}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View
                    style={{
                        marginRight: 20,
                        width: 120,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                    }}
                >
                    <TouchableOpacity activeOpacity={0.5}>
                        <SimpleLineIcons
                            name='camera'
                            size={18}
                            color='black'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('Add Chat')}
                    >
                        <SimpleLineIcons
                            name='pencil'
                            size={18}
                            color='black'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} onPress={deleteTimeStamp}>
                        <SimpleLineIcons name='minus' size={18} color='black' />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
                        <SimpleLineIcons
                            name='logout'
                            size={18}
                            color='black'
                        />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    const enterChat = (id, chatName) => {
        navigation.navigate('Chat', {
            id,
            chatName,
        });
    };

    return (
        <SafeAreaView>
            <StatusBar style='light' />
            <ScrollView style={styles.container}>
                {chats.map(({ id, chatName }) => (
                    <CustomListItem
                        key={id}
                        id={id}
                        chatName={chatName}
                        enterChat={enterChat}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});
