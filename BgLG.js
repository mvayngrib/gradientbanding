import React from 'react'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window')

// <LinearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
// <Stop offset="0%" stopColor="#313352" />
// <Stop offset="45.139%" stopColor="#22243A" />
// <Stop offset="81.321%" stopColor="#202035" />
// <Stop offset="100%" stopColor="#1F2135" />
// </LinearGradient>

// export default () => {
// 	return (
// 		<LinearGradient
// 			colors={['#313352', '#22243A', '#202035', '#1F2135']}
// 			style={{ width, height }}
// 			locations={[0, 0.45139, 0.81321, 1]}
// 		/>
// 	)
// }

export default () => {
	return <LinearGradient colors={['#ffffff', '#dddddd']} style={{ width, height }} />
}
