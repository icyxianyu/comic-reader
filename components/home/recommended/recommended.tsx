import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './recommended.style'
import { RecommendedCard } from '../..';

const Recommended = () => {
  const data = [1, 2, 3, 5, 6, 7, 8, 9, 10]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>首页推荐</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>查看全部</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          data.map((item) => {
            return <RecommendedCard key={item} />
          })
        }
      </View>

    </View>
  )
}

export default Recommended