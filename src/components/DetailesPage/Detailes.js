import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {lightGray, purple} from 'utils/constants/colors';
import {CoustomTextComponent} from 'utils/constants/elements';
import {MyHeader} from 'utils/constants/elements';

export default function Detailes(props) {
  const onBackPress = () => {
    props.navigation.goBack();
  };
  return (
    <>
      <MyHeader Title="جزئیات عکس" onBackPress={onBackPress} />
      <StatusBar backgroundColor="#470425" />
      <View style={styles.Container}>
        <CoustomTextComponent style={styles.TextDescription}>
          جزئیات
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
  footerImage: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
  },
});
