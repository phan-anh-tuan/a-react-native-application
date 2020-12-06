import React, { useEffect } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { Navigation } from "react-native-navigation";
import SignOutButton from '../utilities/include-sign-out-button';

export default SettingsScreen = (props) => {
    useEffect(() => {
        Navigation.mergeOptions(props.componentId, {
            topBar: {
                rightButtons: [
                    SignOutButton(props),
                ],
                // leftButtons: [
                //     {
                //         id: '_next-button_',
                //         component: {
                //             name: 'NextButton',
                //             passProps: {
                //                 styles: props.styles,
                //                 host_component_id: props.componentId,
                //                 title: 'Left'
                //             }
                //         }
                //     },
                //     {
                //         id: '_next-button_',
                //         component: {
                //             name: 'NextButton',
                //             passProps: {
                //                 styles: props.styles,
                //                 host_component_id: props.componentId,
                //                 title: 'Back'
                //             }
                //         }
                //     },
                // ]
            },
        });
    });
    
    return (
      <View style={props.styles.root}>
        <Text>Settings Screen</Text>
        <Button
                title='Home'
                color='#710ce3'
                // onPress={() => Navigation.push(props.componentId, {
                //     component: {
                //         name: 'Home',
                //         // options: {
                //         //     topBar: {
                //         //         title: {
                //         //             text: 'Settings'
                //         //         }
                //         //     }
                //         // },
                //         passProps: {
                //             styles: props.styles
                //         }
                //     }
                // })}
                onPress={() => Navigation.pop(props.componentId)}/>
      </View>
    );
}
SettingsScreen.options = {
    topBar: {
        title: {
            text: 'Settings',
        },
    },
    bottomTab: {
      text: 'Settings'
    }
}