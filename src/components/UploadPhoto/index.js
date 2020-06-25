import React, { useState } from 'react';
import { View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { lightGray, purple } from 'utils/constants/colors';
import { CoustomTextComponent } from 'utils/constants/elements';
import { MyHeader } from 'utils/constants/elements';
import SelectModal from 'utils/modals/select'
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'native-base'


export default function UploadPhoto(props) {
    const onBackPress = () => {
        props.navigation.goBack();
    };
    const txtFromCamera = 'دوربین';
    const txtFromGallery = 'گالری';
    const [PickerItemsVisible, setPickerItemsVisible] = useState(false); // مودال انتخاب دوربین یا گالری
    const [photos, setPhotos] = useState([]);

    const showPickerItems = () => {
        setPickerItemsVisible(true);
    };
    const dissmissPickerItems = () => {
        setPickerItemsVisible(false);
    };
    const onChooseImage = image => {
        console.log(image);
        // try {
        //     let formData = new FormData();
        //     let localUri = img.path;
        //     let filename = localUri.split('/').pop();
        //     let match = /\.(\w+)$/.exec(filename);
        //     let type = match ? `image/${match[1]}` : 'image';
        //     formData.append('img_1', {
        //       uri: localUri,
        //       name: filename,
        //       type,
        //     });
        //     const response = await uploadPhoto(
        //       UrlAddress.save.saveImage,
        //       formData,
        //       login.token,
        //     ).catch(err => {
        //       console.log(err);
        //     });
        //     console.log(response.data.items);
        // }catch {
        //     console.log('err');
            
        // }

    }
    const OnSetImage = (type) => {
        if (type == txtFromCamera) {
            try {
                ImagePicker.openCamera({
                    width: 300,
                    height: 400,
                    cropping: true,
                }).then(image => {
                    onChooseImage(image);
                });
            } catch (error) {
                props.setErrMessage(
                    'خطایی در باز کردن دوربین اتفاق افتاده . لطفا از روش انتخاب از گالری استفاده نمایید یا دسترسی به دوربین را از منوی تنظیمات گوشی خود برای این اپلیکیشن فراهم آورید',
                );
                console.log('errrrrrrrrrr');
                
            }
        } else if (type == txtFromGallery) {
            try {
                ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true,
                }).then(image => {
                    onChooseImage(image);
                });
            } catch (error) {
                props.setErrMessage(
                    'خطایی در باز کردن گالری اتفاق افتاده . لطفا از روش دوربین استفاده نمایید یا دسترسی به گالری را از منوی تنظیمات گوشی خود برای این اپلیکیشن فراهم آورید',
                );
            }
        }
        dissmissPickerItems();
    }

    return (
        <>
            <MyHeader Title="افزودن عکس" onBackPress={onBackPress} />
            <StatusBar backgroundColor="#470425" />
            <View style={styles.Container}>
                <SelectModal
                    visible={PickerItemsVisible}
                    dissmiss={dissmissPickerItems}
                    items={[{ Name: txtFromCamera }, { Name: txtFromGallery }]}
                    confirm={OnSetImage}
                />
                {!photos || photos.length < 1 ? (
                    <>
                        <View style={styles.noPhotoContainer}>
                            <CoustomTextComponent style={styles.noPhotoText}>عکسی انتخاب نشده</CoustomTextComponent>
                        </View>
                        <View style={styles.ButtonContainer}>
                            <TouchableOpacity style={styles.iconContainer} onPress={showPickerItems}>
                                <Icon
                                    name="camera"
                                    type="MaterialCommunityIcons"
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            <CoustomTextComponent style={styles.AddPic}>افزودن عکس</CoustomTextComponent>
                        </View>
                    </>
                ) : null}


            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: lightGray,
    }, noPhotoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, noPhotoText: {
        color: 'grey'
    }, ButtonContainer: {
        flex: 1,
        width: '90%',
        marginBottom: 30,
        borderTopColor: 'grey',
        borderTopWidth: 0.5,
    }, icon: {
        fontSize: 50,
        color: 'grey'
    },
    iconContainer: {
        width: 180,
        height: 180,
        backgroundColor: lightGray,
        borderColor: 'grey',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    }, AddPic: {
        alignSelf: 'center',
        color: purple
    }

});