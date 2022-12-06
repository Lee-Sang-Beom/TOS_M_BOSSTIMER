import React from 'react'

import Lottie from 'react-lottie-player'
import lottieJson from '../public/animation.json'

// lottie animation 출력을 위한 component
export default function Aniamtion() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 300 }}
      className="animate__animated animate__bounce"
    />
  )
}