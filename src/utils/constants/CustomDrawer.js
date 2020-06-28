import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CoustomTextComponent } from 'utils/constants/elements';
import { purple, white, lightGray } from './colors';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { userLogout } from '../../../__redux/actions/authActions'

const CoustomDrawer = props => {

  useEffect(() => {
    console.log('use effect drawer');
    console.log(props.user)
    if (!props.user.token) {
      props.navigation.replace('LoginPage')
    }
  }, [props.user]);


  const Item = ({ name, iconName, onPress }) => {
    return (
      <TouchableOpacity
        style={styles.drawerItemContainer}
        onPress={onPress}>
        <Icon
          type="FontAwesome5"
          name={iconName}
          style={styles.drawerItemIcon}
          color={white}
        />
        <CoustomTextComponent style={styles.drawerItemText}>
          {name}
        </CoustomTextComponent>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <View style={styles.Header}>
        <CoustomTextComponent style={styles.HeaderTitle}> کاربر {props.user.username} خوش آمدید</CoustomTextComponent>
      </View>
      <View style={styles.Container}>
        <Item name='آلبوم های من' />
        <Item name='خروج از حساب' onPress={() => {
          props.userLogout()
        }} />
      </View>

    </>
  );

}

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: 100,
    backgroundColor: purple,
    borderColor: 'grey',
    borderWidth: 0.5,
    justifyContent: 'center',
    padding: 10
  }, drawerItemContainer: {
    paddingVertical: 10,
    marginHorizontal: 3,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: lightGray,
  }, Container: {
    backgroundColor: lightGray,
    height: '100%',
    borderWidth: 0.5,
    borderColor: purple
  }, HeaderTitle: {
    color: lightGray
  }
});
const mapStateToProps = state => ({
  user: state.loginReducer.user
});
const mapDispatchToProps = dispatch => ({
  userLogout: data => userLogout({ data, dispatch }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoustomDrawer);
