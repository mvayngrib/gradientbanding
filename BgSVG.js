import React from 'react'
import { Dimensions } from 'react-native'

import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg'
const { width } = Dimensions.get('window')

const SvgBg = (props) => (
	<Svg width={width} height="100%" {...props}>
		<Defs>
			<LinearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
				<Stop offset="0%" stopColor="#0066ff" />
				<Stop offset="100%" stopColor="#00aaff" />
			</LinearGradient>
		</Defs>
		<Rect fill="url(#a)" width={width} height="100%" />
	</Svg>
)

export default React.memo(SvgBg)
