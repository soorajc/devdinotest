import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  commentTile: {
    padding: '2%',
    borderBottomWidth: 1,
    borderColor: '#D3D9E2',
    backgroundColor: 'white',
  },
  userName: {
    color: '#9199E2',
    fontFamily: 'Montserrat-Bold',
  },
  comment: {
    color: '#181313',
    fontFamily: 'Montserrat-Regular',
  },
  commentTimeStamp: {
    color: 'black',
    fontSize: height * 0.013,
    fontFamily: 'Montserrat-Regular',
    marginTop: height * 0.01,
  },
});

export default styles;
