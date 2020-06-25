import React from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import Modal from 'react-native-modal';
import {
  white,
  BootstrapDanger,
  BootstrapSuccess,
  BootstrapWarning,
  BootstrapInfo,
  BootstrapPrimary,
  purple,
} from 'utils/constants/colors';
import {Text, Button, Icon, Spinner} from 'native-base';
import {CoustomButtonComponent} from 'utils/constants/elements';

export const Error = ({text, visible, confirm}) => (
  <Modal
    animationOut="fadeOutDown"
    animationIn="jello"
    animationInTiming={750}
    isVisible={visible}
    swipeDirection={['right', 'left', 'up', 'down']}
    onSwipeComplete={confirm}
    onBackButtonPress={confirm}>
    <View style={styles.view}>
      <Icon
        name="close-circle"
        type="MaterialCommunityIcons"
        style={styles.iconError}
      />
      <Text style={styles.text}>{text}</Text>
      <Button primary transparent style={styles.button} onPress={confirm}>
        <Text>تایید</Text>
      </Button>
    </View>
  </Modal>
);
export const NeedLogin = ({visible, confirm}) => (
  <Modal
    animationOut="fadeOutDown"
    animationIn="jello"
    animationInTiming={750}
    isVisible={visible}
    swipeDirection={['right', 'left', 'up', 'down']}
    onSwipeComplete={confirm}
    onBackButtonPress={confirm}>
    <View style={styles.view}>
      <Icon
        name="close-circle"
        type="MaterialCommunityIcons"
        style={styles.iconError}
      />
      <Text style={styles.text}>نیاز به ورود مجدد</Text>
      <Button primary transparent style={styles.button} onPress={confirm}>
        <Text>ورود</Text>
      </Button>
    </View>
  </Modal>
);

export const Success = ({text, visible, confirm}) => (
  <Modal
    animationOut="fadeOutDown"
    animationIn="pulse"
    animationInTiming={500}
    isVisible={visible}
    swipeDirection={['right', 'left', 'up', 'down']}
    onSwipeComplete={confirm}
    onBackButtonPress={confirm}>
    <View style={styles.view}>
      <Icon
        name="check-decagram"
        type="MaterialCommunityIcons"
        style={styles.iconSuccess}
      />
      <Text style={styles.text}>{text}</Text>
      <Button primary transparent style={styles.button} onPress={confirm}>
        <Text>تایید</Text>
      </Button>
    </View>
  </Modal>
);

export const Warning = ({text, visible, confirm}) => (
  <Modal
    animationOut="fadeOutDown"
    animationIn="fadeInDown"
    isVisible={visible}
    swipeDirection={['right', 'left', 'up', 'down']}
    onSwipeComplete={confirm}
    onBackButtonPress={confirm}>
    <View style={styles.view}>
      <Icon
        name="alert-decagram"
        type="MaterialCommunityIcons"
        style={styles.iconWarning}
      />
      <Text style={styles.text}>{text}</Text>
      <Button primary transparent style={styles.button} onPress={confirm}>
        <Text>تایید</Text>
      </Button>
    </View>
  </Modal>
);

export const Info = ({text, visible, confirm, linkName, linkUrl}) => {
  function openSite() {
    Linking.openURL(linkUrl);
  }

  return (
    <Modal
      animationOut="fadeOutDown"
      animationIn="fadeInDown"
      isVisible={visible}
      swipeDirection={['right', 'left', 'up', 'down']}
      onSwipeComplete={confirm}
      onBackButtonPress={confirm}>
      <View style={styles.view}>
        <Icon
          name={linkName ? 'information' : 'question-circle'}
          type={linkName ? 'MaterialCommunityIcons' : 'FontAwesome'}
          style={styles.iconInfo}
        />
        {text && !linkName ? <Text style={styles.text}>{text}</Text> : null}
        {text && !linkName ? (
          <Button primary transparent style={styles.button} onPress={confirm}>
            <Text>تایید</Text>
          </Button>
        ) : null}

        {text && linkName ? <Text style={styles.text}>{text}</Text> : null}
        {text && linkName ? (
          <CoustomButtonComponent name={linkName} onPress={openSite} />
        ) : null}
        {text && linkName ? (
          <Button primary transparent style={styles.button} onPress={confirm}>
            <Text>لغو</Text>
          </Button>
        ) : null}
      </View>
    </Modal>
  );
};

// export function Update({text, visible, confirm}) {
//   function openSite() {
//     Linking.openURL(text);
//   }
//   const NeedUpdateText =
//     'نسخه جدید اپلیکیشن موجود است' +
//     '\n' +
//     'با فشردن دکمه دانلود آخرین نسخه میتوانید آخرین نسخه اپلیکیشن را دانلود نمایید';
//   return (
//     <Modal
//       animationOut="fadeOutDown"
//       animationIn="fadeInDown"
//       isVisible={visible}
//       swipeDirection={['right', 'left', 'up', 'down']}
//       onSwipeComplete={confirm}
//       onBackButtonPress={confirm}>
//       <View style={styles.view}>
//         <Icon
//           name="information"
//           type="MaterialCommunityIcons"
//           style={styles.iconInfo}
//         />
//         <Text style={styles.text}>{NeedUpdateText}</Text>
//         {/* <Text style={styles.url} onPress={openSite}>
//           {text}
//         </Text> */}
//         <CoustomButtonComponent
//           name="دانلود آخرین نسخه اپلیکیشن"
//           onPress={openSite}
//         />
//         <Button primary transparent style={styles.button} onPress={confirm}>
//           <Text>بعدا دانلود میکنم</Text>
//         </Button>
//       </View>
//     </Modal>
//   );
// }

export const Confirm = ({
  text,
  visible,
  txtConfirm,
  txtDismiss,
  confirm,
  dismiss,
  isLoading,
}) => (
  <Modal
    animationOut="fadeOutDown"
    animationIn="fadeInDown"
    isVisible={visible}
    swipeDirection={['right', 'left', 'up', 'down']}
    onSwipeComplete={dismiss}
    onBackButtonPress={dismiss}>
    <View style={styles.view}>
      <Icon
        name="help-circle"
        type="MaterialCommunityIcons"
        style={styles.iconPrimary}
      />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.viewConfirm}>
        {!isLoading ? (
          <Button
            danger
            transparent
            onPress={dismiss}
            style={styles.btnConfirm}>
            <Text>{txtDismiss || 'انصراف'}</Text>
          </Button>
        ) : null}

        {!isLoading ? (
          <Button
            primary
            transparent
            onPress={confirm}
            style={styles.btnConfirm}>
            <Text>{txtConfirm || 'تایید'}</Text>
          </Button>
        ) : null}
        {isLoading ? <Spinner color={purple} style={styles.Spinner} /> : null}
      </View>
    </View>
  </Modal>
);

export const Delete = ({
  text,
  visible,
  txtConfirm,
  txtDismiss,
  confirm,
  dismiss,
}) => (
  <Modal
    animationOut="fadeOutDown"
    animationIn="fadeInDown"
    isVisible={visible}
    swipeDirection={['right', 'left', 'up', 'down']}
    onSwipeComplete={dismiss}
    onBackButtonPress={dismiss}>
    <View style={styles.view}>
      <Icon
        name="close-circle"
        type="MaterialCommunityIcons"
        style={styles.iconError}
      />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.viewConfirm}>
        <Button danger transparent onPress={dismiss} style={styles.btnConfirm}>
          <Text>{'انصراف' || txtDismiss}</Text>
        </Button>
        <Button primary transparent onPress={confirm} style={styles.btnConfirm}>
          <Text>{txtConfirm || 'تایید'}</Text>
        </Button>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: white,
    borderRadius: 10,
    alignItems: 'center',
    padding: 8,
  },
  iconError: {color: BootstrapDanger, fontSize: 60},
  iconSuccess: {color: BootstrapSuccess, fontSize: 60},
  iconWarning: {color: BootstrapWarning, fontSize: 60},
  iconInfo: {color: BootstrapInfo, fontSize: 60},
  iconPrimary: {color: BootstrapWarning, fontSize: 60},
  text: {
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'IRANSansMobile(FaNum)',
    fontSize: 14,
  },
  button: {alignSelf: 'center'},
  btnConfirm: {flex: 1, justifyContent: 'center'},
  viewConfirm: {flexDirection: 'row'},
  url: {color: BootstrapPrimary, fontFamily: 'IRANSansMobile(FaNum)'},
  Spinner: {alignSelf: 'center'},
});
