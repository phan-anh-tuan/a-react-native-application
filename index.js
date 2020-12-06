// import {name as appName} from './app.json';
import {
    StyleSheet,
} from 'react-native';


import { Navigation } from "react-native-navigation";
// import App from "./App";
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import LoginScreen from './screens/LoginScreen'
import NextButton from './screens/NextButton'

// Navigation.registerComponent(appName, () => App);

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'whitesmoke'
    }
});
Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Button', () => NextButton);

Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: '#4d089a'
    },
    topBar: {
        title: {
            color: 'white'
        },
        backButton: {
            color: 'white'
        },
        background: {
            color: '#4d089a'
        },
        rightButtons: isLoggedIn() ? [
            {
                id: '_next-button_',
                component: {
                    name: 'Button',
                    passProps: {
                        styles: styles,
                        title: 'Sign Out',
                        onPress: signOutCallback
                    }
                }
            },
        ]: []
    },
});

const mainRoot = {
    root: {
        bottomTabs: {
            id: 'BOTTOM_TABS_LAYOUT',
            children: [
                {
                    stack: {
                        id: "HomeBottomTabs",
                        children: [
                            {
                                component: {
                                    // name: appName
                                    name: 'Home',
                                    passProps: { styles, signOutCallback }
                                }
                            }
                        ]
                    }
                },
                {
                    stack: {
                        id: "SettingsBottomTabs",
                        children: [
                            {
                                component: {
                                    // name: appName
                                    name: 'Settings',
                                    passProps: { styles, signOutCallback }
                                }
                            }
                        ]
                    }
                }
            ]
        }
       
    }
};

function signInCallback() {
    _isLoggedIn = true;
    Navigation.setRoot(mainRoot);
}

function signOutCallback() {
    Navigation.setRoot(loginRoot);
}

// const loginRoot = {
//     root: {
//       component: {
//         name: 'Login',
//         passProps: { 
//             styles, 
//             mainRoot,
//             signInCallback,
//         }
//       }
//     }
// };

const loginRoot = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: 'Login',
                        passProps: { 
                            styles, 
                            mainRoot,
                            signInCallback,
                        }
                    }
                }   
            ]
        }
    }
};

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(isLoggedIn() ? mainRoot: loginRoot);
});

let _isLoggedIn = false;
function isLoggedIn() {
    // should check Auth.currentUser ??
    return _isLoggedIn;
}


