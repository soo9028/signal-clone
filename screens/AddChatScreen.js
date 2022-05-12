import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection, addDoc, getFirestore, serverTimestamp } from '../firebase';

const AddChatScreen = ({ navigation }) => {
    const [chat, setChat] = useState('');
    const db = getFirestore();

    const createChat = async () => {
        await addDoc(collection(db, 'chats'), {
            chatName: chat,
            Time: serverTimestamp(),
        })
            .then(() => navigation.goBack())
            .catch((error) => alert(error.message));
    };


    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Chat',
            headerTitleAlign: 'left',
            headerShown: true,
        });
    }, [navigation]);

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Input
                placeholder='Enter a chat name'
                value={chat}
                onChangeText={(text) => setChat(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Icon
                        name='wechat'
                        size={18}
                        type='antdesign'
                        color='black'
                    />
                }
            />
            <Button onPress={createChat} title='Create New Chat' />
        </KeyboardAvoidingView>
    );
};

export default AddChatScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%',
    },
});
