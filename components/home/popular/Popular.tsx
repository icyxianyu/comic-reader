import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import PopularCard from '../../common/cards/popular/PopularCard'


import styles from './popular.style'

const Popular = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>最受欢迎</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>查看全部</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {/* 水平滚动 */}
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item }) => <PopularCard
            item={"测试数据测试数据测试数据"}
          ></PopularCard>}
          horizontal
        />
      </View>

    </View>
  )
}

export default Popular