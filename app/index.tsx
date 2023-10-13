import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';
import {
    Recommended, Popular, ScreenHeaderBtn, Welcome
} from '../components';
import { Stack } from 'expo-router';

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () =>
                        <ScreenHeaderBtn
                            iconUrl={icons.menu}
                            handlePress={() => { }} />,
                    headerRight: () =>
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            handlePress={() => { }} />,
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome />
                    <Popular />
                    <Recommended />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}