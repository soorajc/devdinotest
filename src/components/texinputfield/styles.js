import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.1,
    width: width * 0.8,
    marginTop: '2%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    height: height * 0.06,
    borderWidth: 1,
    fontSize: height * 0.018,
    borderColor: '#3F3F3F',
    color: '#070606',
    textAlign: 'center',
    borderRadius: 5,
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles;
