import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { lightGray, purple } from 'utils/constants/colors';
import { MyHeader, CoustomTextComponent } from 'utils/constants/elements';
import { NamePicker } from 'utils/modals/NamePicker'
import { loadAlbums } from '../../../__redux/actions'
import { connect } from 'react-redux';
import CustomDrawer from '../../utils/constants/CustomDrawer'
import SideMenu from 'react-native-side-menu';
const deviceWidth = Dimensions.get('window').width;

const Images = (props) => {
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
    const onBackPress = () => {
        props.navigation.goBack();
    };

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
                style={styles.CartContainer}
                onPress={() => console.log(item)}>
                <View style={styles.CardTitle} >
                    <CoustomTextComponent>{item.item.name ? item.item.name : 'بدون نام'}</CoustomTextComponent>
                </View>
                <View style={styles.Grid}>
                    <View style={styles.rowView}>
                        <View style={styles.Tile}>
                            <Image
                                resizeMode={'stretch'}
                                source={require('assets/logo.png')}
                                style={styles.Image}
                            />
                        </View>
                        <View style={styles.Tile}>
                            <Image
                                resizeMode={'stretch'}
                                source={require('assets/logo.png')}
                                style={styles.Image}
                            />
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.Tile}>
                            <Image
                                resizeMode={'stretch'}
                                source={require('assets/logo.png')}
                                style={styles.Image}
                            />
                        </View>
                        <View style={styles.Tile}>
                            <Image
                                resizeMode={'stretch'}
                                source={require('assets/logo.png')}
                                style={styles.Image}
                            />
                        </View>
                    </View>

                </View>

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
            <MyHeader Title="عکس های آلبوم" onPlusPress={visibleModall} onHamburgerPress={toggleNavBar} onBackPress={onBackPress} />
            <StatusBar backgroundColor="#470425" />
            <NamePicker text='لطفا نام آلبوم جدید را وارد نمایید' visible={showModal} confirm={onSetNewAlbumName} dissmiss={dissmissModall} />
            <View style={styles.Container}>
                {props.albums && props.albums.length > 0 ? (
                    <FlatList
                        style={styles.FlatList}
                        data={props.albums}
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
    CartContainer: {
        width: deviceWidth - 20,
        height: deviceWidth - 50,
        margin: 2,
        alignSelf: 'center',
        borderColor: purple,
        borderWidth: 0.5,
        backgroundColor: purple,
        borderRadius: 30

    }, CardTitle: {
        width: '84%',
        height: 30,
        backgroundColor: '#c9ccd1',
        alignSelf: 'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        alignItems: 'center'
    },
    Image: {
        width: '85%',
        height: '85%',
        alignSelf: 'center',
    }, Grid: {
        flex: 1,
        margin: 10
    }, rowView: {
        flex: 1,
        flexDirection: 'row'
    }, Tile: {
        flex: 1,
        margin: 1,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
        backgroundColor: lightGray,
        justifyContent: 'center'
    }
});

const mapStateToProps = state => ({
    albums: state.albumsReducer.albums,
    token: state.loginReducer.token
});
const mapDispatchToProps = dispatch => ({
    loadAlbums: data => loadAlbums({ data, dispatch }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Images);
