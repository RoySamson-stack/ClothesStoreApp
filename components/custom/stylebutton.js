import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './buttonstyle'

 const StyleButton = () => {
   return (
      <View style={styles.container}>
         <Pressable style={styles.button}
            onPress={() => {
            console.warn('Hey there')
         }}
         >
         <Text style={styles.text}>Custom Order</Text>
         </Pressable>
         </View>
)
}
export default StyleButton