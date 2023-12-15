import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const guideLineBaseWidth = 375
const guideLineBaseHeight = height < 812 ? 736 : 812

export const wScale = ({ size }: { size: number }) => {
  return width / guideLineBaseWidth * size
}

export const hScale = ({ size }: { size: number }) => {
  return height / guideLineBaseHeight * size
}
