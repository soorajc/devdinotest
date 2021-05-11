import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E8EB',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  scrollView: {
    paddingBottom: height * 0.08,
  },
  cover: {
    width: width,
    height: height * 0.3,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  postTitle: {
    color: 'black',
    textAlign: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    fontFamily: 'Montserrat-Black',
  },
  sectionTitle: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    marginLeft: width * 0.02,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
