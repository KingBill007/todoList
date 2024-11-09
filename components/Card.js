import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image,TouchableOpacity} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text style={{fontSize:17,fontWeight:'bold'}}> { props.name } </Text>
         <Image 
         source={{uri:props.image}} 
         style={styles.image}
         resizeMode='contain' />
         <TouchableOpacity>
          <View style={styles.button}>
              <Text>Buy</Text>
          </View>
         </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        width: 0.38*screenWidth ,
        height: 0.3*screenHeight,
        borderRadius: 5,
        backgroundColor: '#fefefe',
        margin:8, 
        padding:8,
        alignItems: 'center',
    },
    image:{
      width: 0.3*screenWidth, 
      height:0.2*screenHeight,
      position: 'relative',
      marginTop: 0,
      marginBottom:3,
    },
    button:{
      backgroundColor: 'blue',
      width: 0.3*screenWidth, 
      height:35,
      position:'relative',
      alignItems:'center',
      justifyContent: 'center',
      borderRadius:5,
    }
})

export default Card;