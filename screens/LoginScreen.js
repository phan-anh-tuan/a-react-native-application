import React, { useState } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
} from 'react-native';
// import { Navigation } from "react-native-navigation";

let SignIn = (props) => {
    let [username, setUserName] = useState('tuaph@amazon.com');
    let [password, setPassword] = useState('Welcome2@mazon');
   
    if (props.currentStage != 'SignIn') {
        return null;
    }
    return (
        <View styles={props.styles.root}>
            <Text>Email:</Text>                    
            <TextInput
                    style={{height: 40}}
                    placeholder="Enter your email"
                    onChangeText={email => setUserName(email)}
                    defaultValue={username}
                />
            <Text>Password:</Text> 
            <TextInput
                secureTextEntry={true}
                style={{height: 40}}
                placeholder="Enter your password"
                onChangeText={password => setPassword(password)}
                defaultValue={password}
            />
            <Button
                onPress={() => props.signUserIn(username, password)}
                title="Sign In"
                color="#841584"
                accessibilityLabel="Sign In"
            />
        </View>
    );
};

let ConfirmSignIn = (props) => {
    let [code, setCode] = useState('');

    if (props.currentStage != 'ConfirmSignIn') {
        return null;
    }

    return (
        <View styles={props.styles.root}>
            <Text>OTP:&nbsp;</Text>
            <TextInput
                    style={{height: 40}}
                    placeholder="Enter the code here!"
                    onChangeText={code => setCode(code)}
                    defaultValue={code}
                />
            <Button
                onPress={() => props.submitMfaCode(code)}
                title="Submit"
                color="#841584"
                accessibilityLabel="Submit MFA Code"
            />
        </View>
    );
};

export default LoginScreen = (props) => {
    //need to check if user already signed in here
    let [currentStage, setCurrentStage] = useState('SignIn');
    let signUserIn = (username,password) => {
        console.log('signing user in');
        // if MFA challenge is presented
        setCurrentStage('ConfirmSignIn');
        //otherwise
        // props.signInCallback()

    }
    let submitMfaCode = (code) => {
        console.log('submitting mfa code');
        // if other challenge is presented
        // setCurrentStage('ConfirmSignIn');
        //otherwise
        props.signInCallback()
    }

    return (
        <View style={props.styles.root}>
            <SignIn currentStage={currentStage} signUserIn={signUserIn} styles={props.styles}/>
            <ConfirmSignIn currentStage={currentStage} submitMfaCode={submitMfaCode} styles={props.styles}/>
        </View>
    );
};