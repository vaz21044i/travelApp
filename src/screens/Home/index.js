import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import Title from '../../components/Title';

const index = () => {
    return (
        <SafeAreaView>

            <View>
                <Title text="props text" />
                <Title />
                <Text>Bauuu</Text>
            </View>
        </SafeAreaView>
    )
}

export default index