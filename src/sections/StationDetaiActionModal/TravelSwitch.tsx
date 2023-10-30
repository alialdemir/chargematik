import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, Animated, StyleSheet, PanResponder } from 'react-native'

import { useThemeColor } from '../../components/Themed'
import SwitchRightIcon from '../../assets/icons/SwitchRightIcon'

const TravelSwitch = ({ onSwitch }: any) => {
  const colors = useThemeColor()

  const [isSwitchOn, setIsSwitchOn] = useState(false)
  const switchPosition = new Animated.Value(-50)

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const dragDistance = gestureState.dx
      const newSwitchPosition = Math.min(140, Math.max(-50, dragDistance))
      setIsSwitchOn(newSwitchPosition > 0)
      switchPosition.setValue(newSwitchPosition)
    },
    onPanResponderRelease: () => {
      onSwitch()
    },
  })

  const switchStyle = {
    transform: [{ translateX: switchPosition }],
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={isSwitchOn ? ['#0CE8A6', '#0CE8A6'] : ['#FFFFFF', '#FFFFFF']}
        style={{
          marginTop: -80,
          height: 55,
          borderRadius: 15,
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Animated.View {...panResponder.panHandlers} style={[styles.switch, switchStyle]}>
          <View
            style={{
              ...styles.box,
              backgroundColor: colors.stationDetailSwitchButton,
            }}
          >
            <SwitchRightIcon />
          </View>
        </Animated.View>
        {!isSwitchOn ? (
          <Text
            style={{
              color: colors.stationDetailTitle,
              fontWeight: 'bold',
              fontSize: 14,
              alignSelf: 'center',
            }}
          >
            Swipe To Start the Travel
          </Text>
        ) : null}
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000000',
    shadowOpacity: 33,
    shadowOffset: 3,
  },
  switch: {
    display: 'flex',
    alignSelf: 'center',
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 10,
    paddingTop: 15,
    paddingLeft: 10,
  },
})

export default TravelSwitch
