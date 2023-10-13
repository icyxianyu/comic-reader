import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { images } from '../../../../constants'

import styles from './recommended.style'

const NearbyJobCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logImage} source={images.testImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.comicName}>
          作品名:穿越孙吧之我是孙笑川
        </Text>
        <Text style={styles.authorName}>
          作者名字:孙笑川
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard