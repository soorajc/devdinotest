import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E8EB',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginTop: height * 0.02,
    fontSize: height * 0.03,
    width: width * 0.6,
    alignSelf: 'center',
  },
  listItem: {
    borderRadius: 5,
    alignSelf: 'center',
    width: width * 0.9,
    padding: '5%',
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  postTitle: {
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontSize: height * 0.02,
    width: width * 0.8,
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Bold',
    marginTop: height * 0.02,
    marginLeft: width * 0.02,
    fontSize: height * 0.02,
  },
  formContainer: {
    height: height * 0.3,
    paddingTop: height * 0.02,
    alignItems: 'center',
  },
  listContainer: {
    height: height * 0.5,
  },
  loadingContainer: {
    height: height * 0.5,
    alignItems: 'center',
  },
  listInnerContainer: {
    paddingBottom: height * 0.1,
  },
});

export default styles;
