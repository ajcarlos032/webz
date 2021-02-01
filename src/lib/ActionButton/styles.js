import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  actionBarItem: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  actionButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 2,
    shadowColor: '#444',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  actionButtonItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionContainer: {
    backgroundColor: 'transparent',
    bottom: 0,
    flexDirection: 'column',
    left: 0,
    padding: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#444',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  btnText: {
    backgroundColor: 'transparent',
    fontSize: 24,
    marginTop: -4,
    position: 'relative',
  },
  container: {
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  overlay: {
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
  },
  rtlRow: {
    flexDirection: 'row-reverse',
  },
})

export default styles
