import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F4D35E',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btn: {
    width: 100,
    height: 50,
    paddingVertical: 11,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#20A4F3',
  },
  btnTxt: {
    fontSize: 19,
  },
  row_container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 12,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 12,
    backgroundColor: '#E7ECEF',
  },
  img_container: {
    width: '30%',
  },
  img: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 15,
    color: 'black',
  },
  occupation: {
    fontSize: 8,
    fontStyle: 'italic',
  },
  name_container: {
    width: '70%',
    padding: 10,
  },
  nickname: {
    fontSize: 10,
  },
  line: {
    height: 1.5,
    width: '100%',
    backgroundColor: '#8B8C89',
    marginVertical: 8,
    opacity: 0.3,
  },
});
