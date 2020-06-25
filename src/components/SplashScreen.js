import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Linking} from 'react-native';
import {lightGray, purple} from 'utils/constants/colors';
import {CoustomTextComponent} from 'utils/constants/elements';
import {Spinner} from 'native-base';

export default function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('LoginPage');
    }, 3000);
  }, []);

  const openSite = () => Linking.openURL('https://wsafar.com/index.php');

  return (
    <>
      <View style={styles.Container}>
        <Image
          resizeMode={'stretch'}
          source={require('assets/logo.png')}
          style={styles.Image}
        />
        <CoustomTextComponent style={styles.Text} onPress={openSite}>
          www.wsafar.com
        </CoustomTextComponent>
        <Spinner color={purple} style={styles.Spinner} />
        <CoustomTextComponent style={styles.TextDescription}>
          در حال بارگذاری ...
        </CoustomTextComponent>
      </View>

      <Image
        resizeMode={'stretch'}
        source={require('assets/footer.png')}
        style={styles.footerImage}
      />
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lightGray,
  },
  Image: {
    width: '50%',
    height: '25%',
    alignSelf: 'center',
    marginTop: '30%',
  },
  Text: {
    marginTop: 30,
    color: purple,
    fontSize: 20,
  },
  Spinner: {
    marginTop: 30,
  },
  TextDescription: {
    marginTop: 10,
    color: purple,
    fontSize: 12,
  },
  footerImage: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
  },
});
