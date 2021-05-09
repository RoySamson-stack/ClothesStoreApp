import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './style'


const CarItem = (props) => {
   return (
      <View style={styles.carContainer}>
         <ImageBackground style={styles.image} source={require('../../assets/img/ModelS.jpeg')} />
         <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subTitle}>Starting at $69, 420</Text>
         </View>
      </View>
   )
}
export default CarItem