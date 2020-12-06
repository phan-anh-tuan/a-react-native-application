import React, {useEffect} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { Navigation } from "react-native-navigation";
import SignOutButton from '../utilities/include-sign-out-button';

export default HomeScreen = (props) => {
    useEffect(() => {
        Navigation.mergeOptions(props.componentId, {
            topBar: {
                rightButtons: [
                    SignOutButton(props),
                ]
            },
        });
    });
    return (
        <View style={props.styles.root}>
        <Text>Hello React Native Navigation 👋</Text>
        <Button
            title='Push Settings Screen'
            color='#710ce3'
            onPress={() => Navigation.push(props.componentId, {
                component: {
                    name: 'Settings',
                    passProps: {
                        styles: props.styles,
                        signOutCallback: props.signOutCallback
                    }
                }
            })}/>
        </View>
    );
};

HomeScreen.options = {
    topBar: {
        title: {
            text: 'Home',
        }
    },
    bottomTab: {
      text: 'Home'
    }
}