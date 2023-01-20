import React, { useEffect } from 'react'
import { Text } from 'react-native';
import style from './style';

const title = ({ text }) => {
    useEffect(() => {
        console.log('Hello useEffect')
    }, [])
    return (

        <Text style={style.title}>{text}</Text>

    )
}

title.defaultProps = {
    text: 'Default Text'
}
export default title