import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  arcContainer: {
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
  },
  box: {
    overflow: 'visible',
    transform: [{ rotate: '-90deg' }],
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  innerCircle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  },
  outterCircle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
})

export default styles
