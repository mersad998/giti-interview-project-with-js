import React, {useRef, useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  CoustomTextComponent,
  CoustomButtonComponent,
} from 'utils/constants/elements';
import {Error} from 'utils/modals/alerts';
import {white, purple, lightGray} from 'utils/constants/colors';
import {
  Container,
  Input,
  Icon,
  Item,
  CheckBox,
  ListItem,
  Body,
  View,
  Content,
} from 'native-base';

const LoginForm = props => {
  const passwordRef = useRef(null);
  const [showPass, setShowPass] = useState(false);
  const changeShowPass = () => setShowPass(!showPass);

  return (
    <Container style={{backgroundColor: lightGray}}>
      <Content>
        <Error
          visible={props.errMessage != ''}
          text={props.errMessage}
          confirm={props.resetError}
        />

        <Image
          source={require('assets/logo.png')}
          resizeMode={'stretch'}
          style={styles.image}
        />
        <CoustomTextComponent style={styles.TextDescription}>
          کلیه حقوق این سایت برای شرکت گیتی سامانه نوین شرق محفوظ است
        </CoustomTextComponent>
        <Item rounded style={styles.inputItem}>
          <Input
            placeholder="نام کاربری"
            placeholderTextColor={'gray'}
            style={styles.input}
            value={props.username}
            onChangeText={props.onUserChange}
            editable={!props.isLoading}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => passwordRef.current._root.focus()}
          />
          <Icon
            name="account"
            type="MaterialCommunityIcons"
            style={styles.inputIcon}
          />
        </Item>
        <Item rounded style={styles.inputItem}>
          <Icon
            name="eye"
            type="MaterialCommunityIcons"
            style={styles.inputIcon}
            onPress={changeShowPass}
          />
          <Input
            placeholder="کلمه عبور"
            placeholderTextColor={'gray'}
            style={styles.input}
            value={props.password}
            onChangeText={props.onPassChange}
            secureTextEntry={showPass ? false : true}
            editable={!props.isLoading}
            ref={passwordRef}
          />
          <Icon
            name="key"
            type="MaterialCommunityIcons"
            style={styles.inputIcon}
          />
        </Item>
        <ListItem style={styles.rememberContainer}>
          <Body>
            <CoustomTextComponent style={styles.rememeber}>
              مرا به خاطر بسپار
            </CoustomTextComponent>
          </Body>
          <CheckBox
            color={purple}
            onPress={props.rememberMeClick}
            checked={props.rememberMe}
          />
        </ListItem>
        <View style={styles.ViewBottom}>
          <CoustomButtonComponent
            name="ورود"
            disabled={props.isLoading}
            isLoading={props.isLoading}
            onPress={() => props.loginClick()}
          />

          <CoustomTextComponent
            onPress={props.signUpClick}
            style={styles.forget}>
            ثبت نام
          </CoustomTextComponent>
        </View>
      </Content>
      <Image
        resizeMode={'stretch'}
        source={require('assets/footer.png')}
        style={styles.footerImage}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  ViewBottom: {
    marginTop: 20,
    paddingTop: 20,
    width: '100%',
    height: undefined,
    alignSelf: 'center',
    alignItems: 'center',
  },
  forget: {
    color: 'black',
    textAlign: 'center',
    marginTop: 30,
    paddingBottom: 5,
    paddingVertical: 8,
    fontFamily: 'IRANSansMobile(FaNum)',
    width: '80%',
    alignSelf: 'center',
    fontSize: 12,
  },
  inputItem: {
    backgroundColor: white,
    borderColor: '#bf8f47',
    marginBottom: 8,
    height: 45,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    textAlign: 'right',
    color: purple,
    paddingLeft: 32,
    fontFamily: 'IRANSansMobile(FaNum)',
    fontSize: 14,
  },
  inputIcon: {
    color: purple,
    fontSize: 20,
    marginLeft: 5,
  },
  btn: {
    backgroundColor: purple,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: undefined,
    marginTop: 25,
  },
  btnText: {
    color: white,
    fontFamily: 'IRANSansMobile(FaNum)',
  },
  rememeber: {
    color: 'black',
    fontFamily: 'IRANSansMobile(FaNum)',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  rememberContainer: {
    height: undefined,
    marginVertical: 4,
    justifyContent: 'center',
  },
  TextDescription: {
    color: 'black',
    fontSize: 10,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 10,
    textAlign: 'center',
  },
  footerImage: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
  },
});

export default LoginForm;
