import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Image,
} from 'react-native';
import { lightGray, purple } from 'utils/constants/colors';
import { MyHeader, CoustomTextComponent } from 'utils/constants/elements';
import { NamePicker } from 'utils/modals/NamePicker'
import { loadAlbums } from '../../../__redux/actions'
import { connect } from 'react-redux';
import CustomDrawer from '../../utils/constants/CustomDrawer'
import SideMenu from 'react-native-side-menu';


const Home = (props) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [drawer, setDrawer] = useState(false);


  const visibleModall = () => {
    setShowModal(true)
  }
  const dissmissModall = () => {
    setShowModal(false)
  }
  function afterToggleDrawer(state) {
    setTimeout(() => {
      setDrawer(state);
    }, 500);
  }
  const toggleNavBar = () => setDrawer(prevDrawer => !prevDrawer);

  const loadPage = () => {
    props.loadAlbums();
  };
  const gotoDetailes = item => {
    props.navigation.navigate('Detailes', { id: item });
  };

  useEffect(() => {
    console.log('use effect home');

    loadPage()
  }, []);


  const renderItems = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.ItemContainer}
        onPress={() => gotoDetailes(item)}>
        <Image
          resizeMode={'stretch'}
          source={require('assets/logo.png')}
          style={styles.Image}
        />
      </TouchableOpacity>
    );
  };

  const onSetNewAlbumName = (val) => {
    dissmissModall();
    props.navigation.navigate('UploadPhoto', { name: val })

  }

  return (
    <SideMenu
      menu={<CustomDrawer navigation={props.navigation} />}
      menuPosition="right"
      onChange={state => {
        afterToggleDrawer(state);
      }}
      isOpen={drawer}
      bounceBackOnOverdraw={false}>
      <MyHeader Title="آلبوم عکس شما" onPlusPress={visibleModall} onHamburgerPress={toggleNavBar} />
      <StatusBar backgroundColor="#470425" />
      <NamePicker text='لطفا نام آلبوم جدید را وارد نمایید' visible={showModal} confirm={onSetNewAlbumName} dissmiss={dissmissModall} />
      <View style={styles.Container}>
        {photos && photos.length > 0 ? (
          <FlatList
            style={styles.FlatList}
            data={photos}
            maxToRenderPerBatch={8}
            initialNumToRender={8}
            windowSize={8}
            keyExtractor={i => i.ID}
            renderItem={renderItems}
            onEndReached={() => {
              if (!isLoading) {
                loadPage();
              }
            }}
            onEndReachedThreshold={0.9}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() => loadPage(true)}
              />
            }
          />
        ) : (
            <CoustomTextComponent>آلبومی برای نمایش وجود ندارد</CoustomTextComponent>
          )}
      </View>
    </SideMenu>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightGray,
  },
  FlatList: {
    flex: 1,
    width: '100%',
  },
  ItemContainer: {
    width: '90%',
    height: 250,
    margin: 2,
    alignSelf: 'center',
    borderColor: purple,
    borderWidth: 0.5,
  },
  Image: {
    width: '95%',
    height: 240,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => ({
  reduxState: state.loginReducer,
  token: state.loginReducer.token
});
const mapDispatchToProps = dispatch => ({
  loadAlbums: data => loadAlbums({ data, dispatch }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
