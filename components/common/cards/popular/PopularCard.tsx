import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { images } from '../../../../constants'

import styles from './popularcard.style'

const PopularCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>

      {/* 图片 */}
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage}
          source={images.testImage}
        />
      </View>

      {/* 作品和作者信息 */}
      <Text style={styles.authorName}>
        作者名字
      </Text>
      <View style={styles.infoContainer}>
        <Text>作品名</Text>
      </View>

      {/* tag */}

      <View style={styles.tagsContainer}>
        <View style={styles.tag}>
          <Text >漫画tag</Text>
        </View>
        <View style={styles.tag}>
          <Text >漫画tag</Text>
        </View>
        <Text style={styles.add}>
          +10
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularCard