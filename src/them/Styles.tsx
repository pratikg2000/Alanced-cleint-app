import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mainText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  txtFirst: {
    fontSize: 18,
    color: 'black',
    paddingBottom: 5,
    // fontFamily: 'inter',
  },

  picker: {
    height: 40,
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    height: 39,
    borderRadius: 10,
  },

  signUpBtn: {
    color: 'rgba(9, 9, 233, 1)',
    fontSize: 18,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  optionContainers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  signUpOptinStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
  },
  optionContainer: {
    backgroundColor: 'rgba(5, 186, 231, 0.1)',
    marginHorizontal: 3,
  },
  optionOuterContainer: {
    flexDirection: 'row',
  },
  optionClientContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  optionInnerContainer: {
    borderRadius: 2,
    borderWidth: 1,
    margin: 15,
  },
  optionText: {
    textAlign: 'center',
    fontSize: 18,
  },
  optionTextClient: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 15,
    // fontFamily: 'inter',
    color: 'rgba(3, 17, 54, 1)',
  },
  optionTextJoin: {
    textAlign: 'center',
    fontSize: 22,
    // fontFamily: 'inter',
    color: 'rgba(3, 17, 54, 1)',
    paddingVertical: 15,
  },
  logo: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  homeContainer: {
    paddingBottom: 50,
    // marginHorizontal:5
  },
  alancedContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
  },
  AlancedTxt: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  alancedInner: {
    flexDirection: 'row',
    marginLeft: 55,
    marginBottom: 10,
  },
  alancedTouchSingIn: {
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  alancedTouchSingUp: {
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(5, 186, 231, 0.1)',
    borderColor: 'blue',
    borderWidth: 3,
  },
  logtxt: {
    textAlign: 'center',
    fontSize: 18,
    // fontFamily: 'inter',
    color: 'blue',
    paddingVertical: 15,
  },
  homeTxt: {
    fontSize: 18,
    color: 'black',
    marginHorizontal: 15,
  },
  txtSize: {
    fontSize: 18,
  },
  findTxt: {
    fontSize: 35,
    // fontFamily: 'inter',
    color: 'black',
    // flexWrap:'wrap'
    marginHorizontal: 5,
  },

  btnGetStarted: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    width: 120,
    marginHorizontal: 3,
    marginBottom: 10,
  },
  txtGet: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  txtTrusted: {
    fontSize: 22,
    // fontFamily: 'inter',
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
  },
  postTxt: {
    fontSize: 22,
    // fontFamily: 'inter',
    color: 'black',
    fontWeight: '500',
    width: '90%',
  },
  freelancerNameTxt: {
    fontSize: 22,
    // fontFamily: 'inter',
    color: 'black',
    fontWeight: '500',
    marginVertical: 5,
  },
  imgStyles: {
    marginTop: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    margin: 5,
    alignItems: 'center',
    // alignItems: 'center',
    marginVertical: 20,
  },
  imgStyle: {
    width: 120,
    margin: 10,
    marginHorizontal: 40,
    height: 40,
  },
  imgDeskStyle: {
    // width: '100%',
    resizeMode: 'contain',
    transform: [{translateX: -20}],
    height: 200,
  },
  overlayImage: {
    width: 200,
    height: 431,
    resizeMode: 'contain',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -15}, {translateY: -100}],
  },
  peopleImgStyle: {
    marginTop: 86,
    marginLeft: 40,
    backgroundColor: 'white',
    width: 185,
    borderRadius: 10,
  },
  txtSimple: {
    // fontFamily: 'inter',
    fontSize: 35,
    color: 'rgba(10, 20, 47, 1)',
    marginHorizontal: 7,
  },
  lineView: {
    borderRadius: 1,
    borderWidth: 0.5,
    height: 1,
    width: '80%',
    marginHorizontal: 30,
    borderColor: 'rgba(110, 89, 241, 1)',
    opacity: 0.6,
  },
  highContainer: {
    flexDirection: 'row',
    marginTop: 10,
    // marginHorizontal: 5,
    width: '100%',
  },
  highCheckContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
    width: '100%',
  },
  certifiedContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    width: '40%',
  },
  txtCertified: {
    marginLeft: 15,
    fontSize: 15,
    color: 'rgba(10, 20, 47, 1)',
  },
  findLine: {
    marginTop: 10,
    borderRadius: 1,
    borderWidth: 0.5,
    height: 1,
    width: '20%',
    marginHorizontal: 30,
    borderColor: 'rgba(110, 89, 241, 1)',
    // opacity: 1,
    marginBottom: 10,
  },
  wrttingConatiner: {
    backgroundColor: 'rgba(238, 248, 249, 1)',
    padding: 20,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  wrttingTxt: {
    // fontFamily: 'inter',,
    fontSize: 18,
    color: 'rgba(10, 20, 47, 1)',
    textAlign: 'justify',
  },
  freelancertxt: {
    fontSize: 16,
    paddingTop: 10,
    color: 'black',
  },
  programmingConatiner: {
    backgroundColor: 'rgba(254, 248, 248, 1)',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  designConatiner: {
    backgroundColor: 'rgba(238, 236, 247, 1)',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  administrativeConatiner: {
    backgroundColor: 'rgba(253, 246, 228, 1)',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  salesConatiner: {
    backgroundColor: 'rgba(253, 246, 228, 1)',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  engineeringConatiner: {
    backgroundColor: 'rgba(211, 255, 222, 1)',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  businessConatiner: {
    backgroundColor: 'rgba(255, 226, 200, 1)',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  educationConatiner: {
    backgroundColor: 'rgba(211, 239, 253, 1)',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
  },
  touchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSee: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    width: '30%',
  },
  postContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  txtPost: {
    fontWeight: 'bold',
    color: 'rgba(10, 20, 47, 1)',
    fontSize: 22,
  },
  btnAlancedWork: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    width: '55%',
  },
  whyAlanced: {
    backgroundColor: 'rgba(240, 248, 255, 1)',
  },
  paymentOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  choosePaymentStyle: {
    marginHorizontal: 5,
  },
  paymentTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(10, 20, 47, 1)',
    paddingHorizontal: 3,
    textAlign: 'center',
    marginTop: 5,
  },
  fixedContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 3,
  },
  logoStyle: {
    height: 24,
    width: 24,
    marginTop: 5,
  },
  fixedTxt: {
    // fontFamily: 'inter',
    fontSize: 22,
    color: 'rgba(10, 20, 47, 1)',
    paddingLeft: 10,
  },
  setTxt: {
    // fontFamily: 'inter',
    // fontSize: 22,
    color: 'rgba(10, 20, 47, 1)',
    marginLeft: 37,
  },
  getLine: {
    marginTop: 10,
    borderRadius: 1,
    borderWidth: 0.5,
    height: 1,
    width: '20%',
    marginBottom: 10,
    borderColor: 'black',
    marginHorizontal: 5,
  },
  txtFind: {
    fontSize: 35,
    // fontFamily: 'inter',
    alignItems: 'center',
    color: 'rgba(10, 20, 47, 1)',
  },

  getTxt: {
    fontSize: 35,
    // fontFamily: 'inter',
    color: 'rgba(10, 20, 47, 1)',
    marginHorizontal: 5,
  },
  copyRightTxt: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },

  alancedHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginStyle: {
    backgroundColor: 'blue',
    borderRadius: 10,
    borderWidth: 10,
  },
  logStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%',
    marginLeft: '5%',
  },
  logText: {
    width: '100%',
    backgroundColor: 'blue',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 30,
    fontWeight: 'bold',
  },
  touchNew: {
    padding: 20,
  },
  txtNew: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 18,
  },
  SignUpContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  SingUpInnerContainer: {
    // marginHorizontal: 10,
    width: '45%',
  },
  txtSignUp: {
    fontSize: 22,
    color: 'rgba(10, 20, 47, 1)',
    textAlign: 'center',
    padding: 10,
    marginBottom: 30,
    fontFamily: 'inter',
  },

  SignUpContainerBtn: {
    marginTop: 10,
    width: '100%',
  },

  SingInAlready: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logtxtStyle: {
    color: 'blue',
    fontSize: 16,
  },
  line: {
    marginTop: 15,
    borderRadius: 1,
    borderWidth: 0.5,
    height: 1,
    width: '44%',
    // marginHorizontal: ,
    borderColor: 'rgba(110, 89, 241, 1)',
    opacity: 0.6,
    marginBottom: 10,
  },
  linestyle: {
    borderRadius: 1,
    borderWidth: 0.5,
    height: 4,
    width: '44%',
    // marginHorizontal: ,
    borderColor: 'rgba(110, 89, 241, 1)',
    opacity: 0.6,
    marginBottom: 10,
    backgroundColor: 'blue',
  },
  SignUpGoogle: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'rgba(210, 212, 233, 1)',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 18,
    color: 'black',
  },
  inputPassword: {
    height: 50,
    width: '100%',
    borderColor: 'rgba(210, 212, 233, 1)',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
    color: 'black',
    flexDirection: 'row',
  },

  SignUpTouch: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // height: 50,
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
    borderRadius: 10,
    // borderWidth: 1,
    paddingVertical: 10.4,
  },
  signUpTxt: {
    fontSize: 16,
    color: 'black',
  },
  GoogleImagStyle: {
    marginRight: 5,
  },
  resetContainer: {
    alignItems: 'flex-end',
  },
  txtAccount: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtAlready: {
    fontSize: 16,
    color: 'black',
    paddingBottom: 5,
  },
  SignUpGoogleTxt: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  txtResetPassword: {
    fontSize: 26,
    color: 'rgba(10, 20, 47, 1)',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'inter',
  },
  resetLine: {
    borderRadius: 1,
    borderWidth: 0.5,
    height: 1,
    width: '35%',
    marginHorizontal: 130,
    borderColor: 'grey',
    marginBottom: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },

  txtReset: {
    fontSize: 18,
    color: 'black',
    paddingBottom: 5,
    // fontFamily: 'inter',,
    marginBottom: 20,
    marginHorizontal: 5,
    lineHeight: 22,
  },
  resetOuterContainer: {
    marginBottom: 40,
  },
  txtSearch: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    margin: 20,
  },
  txtFindOppor: {
    fontSize: 22,
    color: 'rgba(10, 20, 47, 1)',
    // textAlign: 'center',
    marginHorizontal: 5,
    marginTop: 10,
    // fontFamily: 'inter',,
  },
  txtprofileYour: {
    fontSize: 22,
    color: 'rgba(10, 20, 47, 1)',
    // marginTop: 10
  },
  imglaptopStyle: {
    width: '100%',
  },
  savedTouchstyle: {
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'rgba(210, 212, 233, 1)',
  },
  txtSaved: {
    fontSize: 18,
    color: 'black',
    width: '90%',
    // fontFamily: 'inter',
  },
  txtProposals: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    // fontFamily: 'inter',,
  },
  LearnTxt: {
    fontSize: 14,
    paddingVertical: 8,
    lineHeight: 18,
    color: 'grey',
  },
  getConatiner: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    // marginTop: 10,
    flexDirection: 'column',
    width: '70%',
  },
  getOuterContainer: {
    borderRadius: 10,
    backgroundColor: 'rgba(211, 239, 253, 1)',
    flexDirection: 'row',
    width: '100%',
    borderWidth: 0.5,
    marginVertical: 5,
    borderColor: 'grey',
    justifyContent: 'space-between',
  },
  arrowStyles: {
    flexDirection: 'column',
  },
  arrowImgStyle: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginTop: 10,
  },
  txtDay: {
    fontSize: 18,
    color: 'black',
    // fontFamily: 'inter',,
    marginTop: 5,
  },
  txtDaySkills: {
    fontSize: 18,
    color: 'black',
    // fontFamily: 'inter',,
    marginVertical: 10,
  },
  txtMyProposals: {
    fontSize: 18,
    color: 'black',
    // fontFamily: 'inter',,
    marginTop: 5,
    marginHorizontal: 15,
  },
  txtNumber: {
    fontSize: 18,
    color: 'black',
    // fontFamily: 'inter',,
    marginTop: 5,
    textAlign: 'center',
  },
  txtName: {
    fontSize: 18,
    color: 'black',
    // fontFamily: 'inter',,
    marginTop: 5,
    marginHorizontal: 5,
  },
  txtFitness: {
    fontSize: 18,
    color: 'black',
    // fontFamily: 'inter',,
    marginVertical: 5,
    fontWeight: '600',
  },
  txtHeader: {
    fontSize: 22,
    color: 'black',
    // fontFamily: 'inter',,
    marginTop: 10,
  },
  txtHeadercolor: {
    fontSize: 22,
    color: 'white',
    // fontFamily: 'inter',,
    marginTop: 14,
  },
  nameContainer: {
    backgroundColor: 'rgba(246, 250, 253, 1)',
  },
  profileContainer: {
    flexDirection: 'row',
    // borderBottomWidth: 0.5,
    width: '100%',
    // backgroundColor: "white"
  },
  styleProfile: {
    padding: 13,
    color: 'white',
  },
  searchContainer: {
    margin: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 40,
    width: '80%',
  },
  heartcircleStyle: {
    borderRadius: 30,
    borderWidth: 1.5,
    flexDirection: 'row',
    borderColor: 'grey',
    marginTop: 14,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  searchStyle: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },

  iconStyle: {
    padding: 11,
  },

  postHeartStyle: {
    marginTop: 8,
  },
  styleLine: {
    borderWidth: 0.5,
    borderColor: 'rgba(210, 212, 233, 1)',
    width: '100%',
    marginTop: 10,
    marginBottom: 5,
  },
  styleLines: {
    borderWidth: 0.3,
    borderColor: 'rgba(210, 212, 233, 1)',
    marginVertical: 10,
  },
  txtHourly: {
    fontSize: 14,
    // fontFamily: 'inter',,
    marginVertical: 10,
    textAlign: 'justify',
    lineHeight: 18,
    color: 'grey',
  },
  txtfreelancerPost: {
    fontSize: 12,
    // fontFamily: 'inter',,
    marginVertical: 10,
    textAlign: 'justify',
    lineHeight: 18,
    color: 'grey',
    fontWeight: '500',
  },
  txtHourlys: {
    fontSize: 14,
    // fontFamily: 'inter',,
    color: 'rgba(10, 20, 47, 1)',
    textAlign: 'justify',
    lineHeight: 18,
  },
  txtHourlysLiner: {
    fontSize: 14,
    // fontFamily: 'inter',,
    color: 'rgba(10, 20, 47, 1)',
    textAlign: 'justify',
    lineHeight: 18,
    // marginHorizontal: 5,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: '500',
  },
  txtLagContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    marginVertical: 10,
  },
  txtlangContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  txtLug: {
    borderColor: 'rgba(210, 212, 233, 1)',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 4,
    textAlign: 'center',
    fontSize: 14,
    color: 'rgba(10, 20, 47, 0.79)',
  },
  styelVerified: {
    flexDirection: 'row',
    // marginHorizontal: 5,
    justifyContent: 'space-between',
  },
  stylePaymentStarContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // margin:2,
    borderRadius: 5,
  },
  stylePaymentContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 1,
    borderRadius: 5,
  },
  txtpayment: {
    fontSize: 16,
    // fontFamily: 'inter',,
    color: 'rgba(10, 20, 47, 1)',
    // margin: 7,
    marginVertical: 7,
  },
  txtLoaction: {
    fontSize: 16,
    // fontFamily: 'inter',,
    color: 'rgba(10, 20, 47, 1)',
    // margin: 7,
    marginVertical: 3,
  },

  pickerstyle: {
    borderWidth: 1,
    backgroundColor: 'white',
  },
  txtCategory: {
    fontSize: 18,
    color: 'black',
  },
  txtCategoryLiner: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  txtCategoryLinerBack: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginHorizontal: 20,
  },
  searchJobStyle: {
    margin: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(210, 212, 233, 1)',
    borderRadius: 10,
    width: '95%',
  },
  toucViewDetails: {
    backgroundColor: 'blue',

    borderRadius: 8,
  },
  toucViewDetailsNext: {
    backgroundColor: 'blue',

    // marginHorizontal: 5,
    borderRadius: 8,
    marginVertical: 20,
  },
  ViewTxt: {
    color: 'white',
    padding: 5,
    textAlign: 'center',
  },
  imageEditContainer: {
    position: 'static',
    bottom: 30,
    right: -80,
    backgroundColor: 'white',
    borderRadius: 40,
    // borderColor: 'grey',
    // borderWidth: 1,
    // padding: 2,
  },
  iconAdd: {
    borderRadius: 30,
    borderWidth: 1.5,
    flexDirection: 'row',
    borderColor: 'rgba(232, 232, 232, 1)',
    marginTop: 4,
    marginRight: 5,
  },
  txtInputAbout: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(232, 232, 232, 50)',
    padding: 10,
    borderRadius: 5,
    color: 'black',
    marginTop: 10,
    // marginHorizontal: 12
  },
  txtInputAboutCoverTest: {
    padding: 10,
    borderRadius: 5,
    color: 'black',
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1,
    height: 50,
    textAlignVertical: 'top',
    color: 'black',
    fontSize: 18,
  },
  touchSaveStyle: {
    backgroundColor: 'blue',
    borderRadius: 7,
  },
  touchbtnLiner: {
    backgroundColor: 'white',
    borderRadius: 7,
  },

  txtSave: {
    fontSize: 18,
    color: 'white',
    padding: 5,
    // fontFamily: 'inter',,
    marginHorizontal: 11,
    textAlign: 'center',
    fontWeight: '500',
  },
  txtSaveSkill: {
    fontSize: 18,
    color: 'white',
    padding: 5,
    // fontFamily: 'inter',,
    marginHorizontal: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  txtAcceptBtn: {
    fontSize: 18,
    color: 'white',
    // padding: 5,
    // fontFamily: 'inter',,
    marginHorizontal: 11,
    textAlign: 'center',
    fontWeight: '500',
  },
  txtInputProjectTitle: {
    flex: 1,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'rgba(232, 232, 232, 50)',
    borderRadius: 5,
    // marginHorizontal: 5,
  },
  ProjectTitle: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'rgba(232, 232, 232, 50)',
    borderRadius: 5,
  },
  textInputProjectTitle: {
    flex: 1,
    color: 'black',
    // textAlignVertical: 'top',
  },
  textInputProjectTitlePost: {
    flex: 1,
    color: 'black',
    fontSize: 18,
    // textAlignVertical: 'top',
  },
  searchMessageContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(210, 212, 233, 1)',
    borderRadius: 10,
    width: '100%',
  },
  allInvitationStyle: {
    flexDirection: 'row',
    width: '100%',
  },
  crmStyle: {
    width: '50%',
    // marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },

  crmInvitationStyle: {
    fontSize: 14,
    color: 'blue',
  },
  crmReceivedStyle: {
    fontSize: 14,
    color: 'grey',
  },
  txtBudget: {
    fontSize: 14,
    color: 'black',
    // fontFamily: 'inter',
    // marginHorizontal: 5
  },
  txtComplete: {
    fontSize: 14,
    color: 'rgba(255, 193, 7, 1)',
    // fontFamily: 'inter',,
    // textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 8,
  },
  segmentedControl: {
    // width: '100%',
    borderColor: 'rgba(210, 212, 233, 1)',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  text: {
    fontSize: 18,
  },
  txtAlreadyIconStyle: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  txtApplied: {
    fontSize: 18,
    color: 'blue',
    paddingHorizontal: 10,
  },
  txtPendingInvitation: {
    fontSize: 22,
    color: 'blue',
    // paddingHorizontal: 10
  },
  txtcrmApplication: {
    fontSize: 14,
    color: 'grey',
  },
  txtStyleHired: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 3,
  },
  crmContractsStyle: {
    textAlign: 'justify',
    fontSize: 14,
    // paddingHorizontal: 10,
    color: 'blue',
    // paddingVertical: 5
  },
  crmContractsStyleproposal: {
    textAlign: 'justify',
    fontSize: 18,
    color: 'blue',
  },
  yourDesignationContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  whatsAppOuterContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 7,
    backgroundColor: 'white',
    // borderBottomWidth:1
  },
  whatsAppInnerContainer: {
    width: '15%',
    // paddingHorizontal: 5
  },
  profileImageStyle: {
    paddingVertical: 3,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profileOuterContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  typeOfProfileStyle: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  iconMixedstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  iconstylePost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  freelancerPostStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '100%',
  },
  locationIcon: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  iconInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txtHourlyPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vectorStyle: {
    paddingVertical: 9,
  },
  viewOuterContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 15,
    width: '100%',
  },
  viewOuterContaineSegmented: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  viewFrelancerContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:300,
  },

  postOuterContainer: {
    marginHorizontal: 10,
  },
  heartOuterContainer: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'grey',
    width: '10%',
    margin: 4,
  },
  contractsConatiner: {
    borderWidth: 1,
    // margin: 10,
    paddingHorizontal: 5,
    borderColor: 'rgba(210, 212, 233, 1)',
  },

  txtProfile: {
    fontSize: 18,
    // fontFamily: 'inter',,
    color: 'rgba(10, 20, 47, 1)',
    marginTop: 5,
  },
  profileConatiner: {
    flexDirection: 'column',
    width: '70%',
    marginHorizontal: 5,
  },
  profileArrow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  txtTime: {
    width: '14%',
  },
  profileTime: {
    color: 'grey',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
    color: 'black',
  },
  txtContainer: {
    width: '90%',
    borderWidth: 1,
    backgroundColor: 'blue',
    marginVertical: 5,
    fontSize: 14,
    color: 'white',
  },
  messageBubble: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  sendButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PostImageStyle: {
    paddingVertical: 3,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  titlePost: {
    fontSize: 18,
    color: 'black',
    padding: 5,
    // fontFamily: 'inter',,
    paddingVertical: 10,
    // marginHorizontal: 11,
    // textDecorationLine:'underline'
    textAlign: 'center',
  },
  touchTxt: {
    color: 'white',
    padding: 5,
    textAlign: 'center',
  },
  BackBtn: {
    fontSize: 18,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    // fontFamily: 'inter',,
    // marginHorizontal: 11,
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: 'rgba(110, 89, 241, 1)',
  },
  BackBtnLiner: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },

  MessBtnLiner: {
    fontSize: 18,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    // fontFamily: 'inter',,
    // borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'rgba(110, 89, 241, 1)',
    backgroundColor: 'white',
    width: '97.5%',
    margin: 1,
  },
  styleFrom: {
    borderWidth: 1,
    borderColor: '  rgb(212, 210, 233)',
  },
  txtInputProjectRate: {
    borderWidth: 1,
    borderColor: 'rgba(232, 232, 232, 50)',
    borderRadius: 5,
    // marginHorizontal: 12,
    width: '50%',
    flexDirection: 'row',
  },
  toucAddReview: {
    backgroundColor: 'blue',
    marginHorizontal: 5,
    borderRadius: 5,
    margin: 10,
  },
  invitedConatiner: {
    borderWidth: 1,
    // margin: 10,
    paddingHorizontal: 5,
    borderColor: 'rgba(210, 212, 233, 1)',
    marginTop: 20,
  },
  btnOpen: {
    fontSize: 18,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    // // // fontFamily: 'inter',,,
    marginHorizontal: 11,
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: 'rgba(110, 89, 241, 1)',
  },
  contractsAllJobConatiner: {
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'rgba(210, 212, 233, 1)',
    borderRadius: 10,
  },
  postContractsAllJobConatiner: {
    // borderWidth: 1,
    // marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'rgba(210, 212, 233, 1)',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  postEmploymentDataConatiner: {
    // borderWidth: 1,
    // marginVertical: 10,
    paddingVertical: 10,
    // paddingHorizontal: 10,
    borderColor: 'rgba(210, 212, 233, 1)',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postEmploymentDataConatinerRating: {
    // borderWidth: 1,
    // marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'rgba(210, 212, 233, 1)',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  profileImageNameContainer: {
    flexDirection: 'row',
    // marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'rgba(210, 212, 233, 1)',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  verficationStyle: {
    marginVertical: 5,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  PostStyle: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
  },
  posterStyle: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  searchMessageHomeContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(210, 212, 233, 1)',
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  styleImg: {
    width: 60,
    height: 50,
    // marginHorizontal: 14,
  },
  stylePadding: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  styleNumber: {
    paddingTop: 8,
    fontSize: 16,
    color: 'black',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
  },

  imagePost: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // marginHorizontal: 10,
  },
  imageHirerPost: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // marginHorizontal: 10,
  },
  pickerStyle: {
    color: 'black',
    backgroundColor: 'white',
  },
  dropDownContainer: {
    marginVertical: 6,
  },
  whatsAppBorder: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 7,
    backgroundColor: 'white',
  },
  fixedRateStyle: {
    lineHeight: 18,
    marginVertical: 5,
    fontSize: 14,
    color: 'grey',
    flexDirection: 'row',
  },
  proposalsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  propsalsTxtStyle: {
    fontSize: 18,
    color: 'grey',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  closedContainer: {
    marginVertical: 10,
  },
  txtWeb: {
    fontSize: 16,
    color: 'black',
    // fontFamily: 'inter',,
    marginTop: 5,
  },
  txtPriceProject: {
    fontSize: 16,
    color: 'grey',
    // fontFamily: 'inter',,
    // marginTop: 5,
  },

  txtWebDevelopment: {
    fontSize: 16,
    color: 'black',
    // fontFamily: 'inter',,
    margin: 5,
    textAlign: 'center',
  },
  txtpostMonth: {
    fontSize: 16,
    marginTop: 5,
    color: 'grey',
  },
  txtpostAboutClient: {
    fontSize: 14,
    // marginTop: 2,
    color: 'grey',
  },
  txtpostFreelancerAcceptPending: {
    fontSize: 14,
    // marginTop: 2,
  },
  stylePostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtJustify: {
    textAlign: 'justify',
    fontSize: 14,
    color: 'grey',
    lineHeight: 18,
    marginVertical: 5,
  },
  touchApplyStyle: {
    // borderWidth:1,
    // paddingVertical: 5,
  },
  txtApply: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    padding: 10,
  },
  txtApplySign: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    padding: 13,
  },
  txtpostHourly: {
    fontSize: 16,
    color: 'grey',
  },
  txtBidAmount: {
    color: 'grey',
    paddingHorizontal: 5,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 12,
  },

  txtWebDevel: {
    color: 'blue',
    backgroundColor: 'rgba(211, 239, 253, 1)',
    width: '100%',
    fontSize: 16,
    marginHorizontal: 'auto',
    textAlign: 'center',
    marginVertical: 10,
    borderRadius: 20,
    padding: 5,
  },
  styleLang: {
    marginHorizontal: 5,
    textAlign: 'center',
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: 'rgba(211, 239, 253, 1)',
    borderRadius: 10,
    color: 'blue',
    marginVertical: 5,
  },
  txtProposalStyle: {
    color: 'blue',
    fontSize: 14,
  },
  txtPostContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 3,
  },
  txtSkill: {
    fontSize: 18,
    color: 'black',
    // paddingHorizontal:10
    // fontFamily: 'inter',,
  },
  getTipContainer: {
    borderRadius: 10,
    backgroundColor: 'rgba(211, 239, 253, 1)',
    flexDirection: 'row',
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'grey',
    justifyContent: 'space-between',
    height: '100%',
  },
  getTipOuterConatiner: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    // marginTop: 10,
    flexDirection: 'column',
    width: '65%',
  },
  tipLearnTxt: {
    fontSize: 12,
    lineHeight: 14,
    color: 'grey',
    // textAlign: 'justify',
    paddingVertical: 5,
  },
  getTipTouch: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    flexDirection: 'row',
    width: '50%',
    height: '12%',
    marginTop: 5,
  },
  myJobTxt: {
    fontSize: 12,
    lineHeight: 14,
    color: 'grey',
    // textAlign: 'justify',
    paddingVertical: 10,
  },
  searchJobMessageContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(210, 212, 233, 1)',
    borderRadius: 10,
    width: '90%',
    marginTop: 10,
  },
  innerContainer: {
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  searchContainerFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  searchStyleFilter: {
    marginVertical: 12,
  },
  filterButton: {
    marginVertical: 5,
    marginHorizontal: 5,
  },

  sidebarContent: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: 'white',
  },
  filterText: {
    fontSize: 18,
    // marginBottom: 20,
  },
  closeText: {
    fontSize: 18,
    color: 'red',
  },

  filterSection: {
    marginBottom: 20,
  },

  salaryInput: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
    paddingVertical: 5,
  },

  searchTextFilter: {
    // height: 40,
    width: '90%',
    borderColor: 'rgba(210, 212, 233, 1)',
    borderWidth: 1,
    // marginBottom: 10,
    // paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    fontSize: 18,
    color: 'black',
    flexWrap: 'wrap',
    // , marginRight: 5
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  inputBid: {
    height: 50,
    width: 150,
    borderColor: 'rgba(210, 212, 233, 1)',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 18,
    color: 'black',
  },
  alancedCommison: {
    height: 40,
    width: 150,
    borderColor: 'rgba(210, 212, 233, 1)',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 18,
    color: 'black',
    paddingTop: 5,
  },
  txtBid: {
    fontSize: 18,
    color: 'black',
    paddingVertical: 15,
  },

  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  itemSelected: {
    backgroundColor: '#e0e0e0',
  },
  dropdownList: {
    maxHeight: 200,
  },
  dropdownContainer: {
    maxHeight: 200, // Adjust as needed
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
    margin: 5,
    fontSize: 16,
    color: 'black',
  },
  selectedItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  selectedContainer: {
    marginBottom: 10,
  },
  searchBar: {
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
  },
  multicontainer: {
    flex: 1,
  },
  linerTouch: {
    // width: '98%',
    // backgroundColor: 'white',
    // margin: 1,
    borderRadius: 5,
    // paddingVertical: 5,
    marginHorizontal: 5,
  },
  styleFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hireContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    // alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: Dimensions.get('window').width * 0.75,
    backgroundColor: 'white',
    zIndex: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  profileDetails: {
    flexDirection: 'column',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  noImageText: {
    fontSize: 14,
    color: '#999',
    marginVertical: 5,
  },
  noPortfolioText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginVertical: 10,
  },
  // imageStylePortfolio: {
  //   width: 200,
  //   height: 150,
  //   // borderRadius: 50,
  //   // marginHorizontal: 10,
  //   // alignContent: 'center',
  //   alignItems: 'center',
  // },
  imageStylePortfolio: {
    width: '100%',
    height: 250,
    alignSelf: 'center', // This will center the image horizontally
    resizeMode: 'cover', // Ensures the image covers the container completely
    borderRadius: 20,
  },
});

export default styles;
