import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { lightGray, purple } from 'utils/constants/colors';
import { CoustomTextComponent } from 'utils/constants/elements';
import { MyHeader } from 'utils/constants/elements';

export default function Detailes(props) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const passedItem = props.navigation.getParam('item')
    console.log('item in detailes page :');
    console.log(passedItem);
    setItem(passedItem)
  }, []);

  const onBackPress = () => {
    props.navigation.goBack();
  };
  return (
    <>
      <MyHeader Title="جزئیات عکس" onBackPress={onBackPress} />
      <StatusBar backgroundColor="#470425" />
      {item ? (
        <View style={styles.Container}>
          <CoustomTextComponent style={styles.HeadText}>
            جزئیات عکس {item.title}
          </CoustomTextComponent>
          <View style={styles.rowView}>
            <CoustomTextComponent style={styles.text}>
              {item.upload_date.slice(0, 4)}  / {item.upload_date.slice(5, 7)} / {item.upload_date.slice(8, 10)}
            </CoustomTextComponent>
            <CoustomTextComponent style={styles.text}>
              تاریخ ایجاد :
        </CoustomTextComponent>
          </View>
          <View style={styles.rowViewNoborder}>
            <CoustomTextComponent style={styles.text} >
              {item.desc ? item.desc : 'بدون توضیحات'}
            </CoustomTextComponent>
            <CoustomTextComponent style={styles.text}>
              توضیحات :
        </CoustomTextComponent>
          </View>
        </View>
      ) : null}
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
  }, HeadText: {
    marginTop: 15,
    fontSize: 16,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 0.5,
    textAlign: 'center'
  }, rowView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginTop: 20
  }, rowViewNoborder: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    padding: 5,
  }, text: {
    flex: 1
  }
});
