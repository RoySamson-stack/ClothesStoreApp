import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

carContainer: {
      width: '100%',
      height: '100%',

},
titles: {
      marginTop: '30%',
      width: "100%",
      alignItems: 'center',
},
title: {
      fontSize: 40,
      fontWeight: 'bold',
},
subTitleCTA: {
      textDecorationLine: 'underline',
},
subTitle: {
      fontSize: 16,
      color: 'gray',
},
image: {
      width: "100%",
      height: "100%",
      resizeMode: 'cover',
      position: "absolute",
   },
   buttonContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
   }

})

export default styles