import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './style'
import StyleButton from './stylebutton'


const CarItem = (props) => {
   const {name, tagline, taglineCTA,  image} = props



   return (
      <View style={styles.carContainer}>
         <ImageBackground style={styles.image} source={image} />
         <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{tagline}
            <Text style={styles.subTitle}>{taglineCTA}</Text>
            </Text>
            
         </View>

         <View style={styles.buttonContainer}>
         <StyleButton type='primary' content={'Custom order'} onPress={() => {
            console.warn('Custom order was pressed')
         }} />
         <StyleButton type='secondary' content={'Existing inventory'} onPress={() => {
            console.warn('Existing inventory was pressed')
            }} />
         </View>
      </View>
   )
}
export default CarItem