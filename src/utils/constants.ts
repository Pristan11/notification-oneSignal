import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const ROUTES = {
  intro: 'introScreen',
  login: 'login',
  newOrder: 'newOrder',
  currentOrders: 'currentOrders',
  orderDetail: 'orderDetail',
  readyFoodOrderDetail: 'readyFoodOrderDetail',
  orderHistory: 'orderHistory',
  orderPickupConfirm: 'orderPickupConfirm',
  orderDeliveredConfirm: 'orderDeliveredConfirm',
  orderSuccess: 'orderSuccess',
};
export const MyCOLORS = {
  primary: '#FF6C44', //orange
  transparentPrimary: 'rgba(227, 120, 75, 0.4)',
  orange: '#FFA133',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',
  green: '#27AE60',
  red: '#FF1717',
  red2: '#FF6C44',
  blue: '#0064C0',
  darkBlue: '#111A2C',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  white2: '#FBFBFB',
  white: '#FFFFFF',
  black: '#000000',

  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

export const myCards = [
  {
    id: 1,
    name: 'Pay Now',
    icon: require('../../assets/iconsImages/paynow.png'),
    card_no: '1234',
    key: '',
  },
  {
    id: 2,
    name: 'Cash on Delivery',
    icon: require('../../assets/iconsImages/cash-on-delivery.png'),
    card_no: '1234',
    key: '',
  },
];

export const allCards = [
  {
    id: 1,
    name: 'Apple Pay',
    icon: require('../../assets/iconsImages/apple.png'),
  },
  {
    id: 2,
    name: 'Visa',
    icon: require('../../assets/iconsImages/visa.png'),
  },
  {
    id: 3,
    name: 'PayPal',
    icon: require('../../assets/iconsImages/paypal.png'),
  },
  {
    id: 4,
    name: 'Google Pay',
    icon: require('../../assets/iconsImages/google.png'),
  },
  {
    id: 5,
    name: 'Master Card',
    icon: require('../../assets/iconsImages/mastercard.png'),
  },
];

const fromLocs = [
  {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  },
  {
    latitude: 1.556306570595712,
    longitude: 110.35504616746915,
  },
  {
    latitude: 1.5238753474714375,
    longitude: 110.34261833833622,
  },
  {
    latitude: 1.5578068150528928,
    longitude: 110.35482523764315,
  },
  {
    latitude: 1.558050496260768,
    longitude: 110.34743759630511,
  },
  {
    latitude: 1.5573478487252896,
    longitude: 110.35568783282145,
  },
];

export const userProfileElements = [
  {
    id: 1,
    name: 'Orders',
    icon: 'book',
  },
  {
    id: 2,
    name: 'COVID-19 Safety Center',
    icon: 'md-shield-checkmark-sharp',
    IconType: 'Ionicons',
  },
  {
    id: 3,
    name: 'Your favourites',
    icon: 'heart',
    IconType: 'AndDesign',
  },
  {
    id: 4,
    name: 'Restaurant Rewards',
    icon: 'medal-outline',
  },
  {
    id: 5,
    name: 'Wallet',
    icon: 'md-wallet',
    IconType: 'Ionicons',
  },
  {
    id: 6,
    name: 'Business preferences',
    icon: 'briefcase-sharp',
    IconType: 'Ionicons',
  },
  {
    id: 7,
    name: 'Help',
    icon: 'ios-help-buoy-sharp',
    IconType: 'Ionicons',
  },
  {
    id: 7,
    name: 'Promotions',
    icon: 'md-pricetags-sharp',
    IconType: 'Ionicons',
  },
  {
    id: 8,
    name: 'Delivery with Uber',
    icon: 'truck-delivery',
  },
  {
    id: 9,
    name: 'Privacy Center',
    icon: 'md-server',
    IconType: 'Ionicons',
  },
  {
    id: 10,
    name: 'Settings',
    icon: 'settings-sharp',
    IconType: 'Ionicons',
  },
];

export const SWITTO_SIZES = {
  fontSize: 14,
  borderRadius: 8,
  smallText: 12,
  icon_size: 25,
  titleSize: 16,
};

export const DEVICE = {
  width: width,
  height: height,
};
