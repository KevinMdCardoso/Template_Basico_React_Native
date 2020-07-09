import React from 'react';

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    height: height,
    width: width,
    paddingTop: 110,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#fff',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: 75,
    marginVertical: 10,
    width: 240,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const fotoUrl =
  'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png';

const icon = require('./teste.png');

const Main = () => (
  <ImageBackground
    source={{
      uri: fotoUrl,
    }}
    style={styles.container}
    resizeMode="cover">
    <Image source={icon} style={styles.logo} />
    {/* <Image source={icon2} style={styles.logo} /> */}
    <Text style={styles.welcome}>Bem-vindo ao Template Básico!</Text>
    <Text style={styles.instructions}>
      Essa é a tela principal da sua aplicação =)
    </Text>
    <Text style={styles.instructions}>Você pode editar a tela no arquivo:</Text>
    <Text style={[styles.instructions, styles.fileName]}>
      src/pages/Main/index.js
    </Text>
  </ImageBackground>
);

export default Main;
