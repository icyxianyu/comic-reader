import { useCallback, useState } from 'react'
import { View, Text, TextInput, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons, SIZES } from '../../../constants';
import { useRouter } from "expo-router"
import styles from './welcome.style'

const Welcome = () => {

  const data: string[] = ["测试1", "测试2", "测试3", "测试4", "测试5", "测试6"]
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const onChange = useCallback((e: any) => {
    setSearchText(e.nativeEvent.text);
  }, [])

  const changeTabs = useCallback((item: string) => {
    router.push(`/${item}`)
  }, [])

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>欢迎 游客</Text>
        <Text style={styles.welcomeMessage}>开启你的探索之旅</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value={searchText}
            onChange={onChange}
            placeholder="输入以查询" />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>


      <View style={styles.tabsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <TouchableOpacity
              style={styles.tab}
              onPress={() => changeTabs(item)}
            >
              <Text style={styles.tabText}>
                {item}</Text>
            </TouchableOpacity>
          }}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        ></FlatList>
      </View>

    </View >
  )
}

export default Welcome