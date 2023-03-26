import {View, Text, StyleSheet, Button, Image} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Galeria({navigation}){
  return(
    <View style={estilos.container}>
      <Animatable.Text animation="fadeInLeft" delay={200} style={estilos.titulo}>Galeria de Fotos</Animatable.Text>
      <View style={estilos.containerImage}>
        <Animatable.Image animation="fadeInLeft" delay={200}
         source={require('../../assets/image1.jpg')} style={estilos.image} />
        <Animatable.Image animation="fadeInLeft" delay={200}
        source={require('../../assets/image2.jpg')} style={estilos.image} />
        <Animatable.Image animation="fadeInLeft" delay={200}
        source={require('../../assets/image3.jpg')} style={estilos.image} />
        <Animatable.Image animation="fadeInLeft" delay={200}
        source={require('../../assets/image4.jpg')} style={estilos.image} />
        <Animatable.Image animation="fadeInLeft" delay={200}
        source={require('../../assets/image5.jpg')} style={estilos.image} />
        <Animatable.Image animation="fadeInLeft" delay={200}
        source={require('../../assets/image6.jpg')} style={estilos.image} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#38a69b",
    justifyContent: 'center',
    alignItens: 'center',
    paddinVertical:'5%',
    paddingStart:'11%',
    paddingEnd:'5%'
  },
  containerImage:{
    alignSelf:'center',
    width: '100%',
    display:'inline-block',
    paddinVertical: '5%',
    paddingHorizontal: '5%',
    marginTop:'10%'
  },
  titulo:{
    marginTop:'-80%',
    textAlign: 'center',
    fontSize: 24,
    color:"#fff",
  },
  image:{
    alignSelf:'center',
    display:'inline-block',
    borderRadius: 10,
    width:100,
    height:100,
    margin: 5
  }
});