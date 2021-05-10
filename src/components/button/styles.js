import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    height: height * 0.065,
    width: width * 0.8,
    borderRadius: 5,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    color: 'white',
    fontSize: height * 0.02,
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;
