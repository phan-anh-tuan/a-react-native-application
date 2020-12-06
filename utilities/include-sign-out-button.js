export default (props) => ({
    id: '_next-button_',
    component: {
        name: 'Button',
        passProps: {
            styles: props.styles,
            title: 'Sign Out',
            onPress: props.signOutCallback
        }
    }
})