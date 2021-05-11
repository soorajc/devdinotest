import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  postDetailsContainer: {
    elevation: 2,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: 'white',
    borderColor: '#D3D9E2',
    marginBottom: height * 0.02,
    padding: '2%',
  },
  postContent: {
    color: 'black',
    textAlign: 'left',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    fontFamily: 'Montserrat-Regular',
  },
  postMetaDataLabel: {
    color: '#6F686A',
    textAlign: 'left',
    marginBottom: height * 0.02,
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles;
