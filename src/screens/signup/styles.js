import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E8EB',
  },
  formContainer: {
    flex: 1,
    paddingTop: height * 0.1,
    alignItems: 'center',
  },
  title: {
    marginBottom: height * 0.02,
    fontSize: height * 0.03,
    textAlign: 'center',
    width: width * 0.5,
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;
