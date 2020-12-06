import React from 'react';
import {
    Button,
    ImagePropTypes,
    View
} from 'react-native';
import { Navigation } from "react-native-navigation";

export default NextButton = (props) => {
    return (
        <View>
             <Button
                title={props.title}
                color='white'
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
                // onPress={() => Navigation.pop(props.host_component_id)}
                // onPress={() => Navigation.popToRoot('HomeBottomTabs')}
                onPress={() => props.onPress()}
            />
        </View>
    );
};