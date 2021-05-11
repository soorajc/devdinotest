import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E8EB',
  },
  header: {
    width: width,
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: 'white',
  },
  title: {
    fontSize: height * 0.03,
    textAlign: 'center',
    width: width * 0.5,
    fontFamily: 'Montserrat-Bold',
  },
  sectionTitle: {
    fontSize: height * 0.02,
    marginTop: height * 0.02,
    marginLeft: width * 0.02,
    textAlign: 'left',
    width: width * 0.8,
    fontFamily: 'Montserrat-Regular',
    color: '#493637',
  },
  listContainer: {
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  listItem: {
    borderRadius: 5,
    alignSelf: 'center',
    width: width * 0.9,
    padding: height * 0.02,
    marginTop: '2%',
    marginBottom: '2%',
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
  listLabel: {
    fontFamily: 'Montserrat-Bold',
    color: '#7E63FF',
  },
});

export default styles;
