import React from 'react'
import { Text } from 'react-native';
import styles from './style';

const title = ({ text, style }) => {

    return (

        <Text style={[styles.title, style]}>{text}</Text>

    )
}

title.defaultProps = {
    text: 'Default Text'
}
export default title