import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import Title from '../../components/Title';

const index = () => {
    return (
        <SafeAreaView>

            <View>
                <Title text="props text" />
                <Title />
            </View>
        </SafeAreaView>
    )
}

export default index