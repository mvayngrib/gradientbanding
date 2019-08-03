import React from 'react'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window')

export default () => {
	return <LinearGradient colors={['#0066ff', '#00aaff']} style={{ width, height }} />
}
