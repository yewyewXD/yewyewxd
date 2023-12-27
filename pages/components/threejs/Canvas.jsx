import React from 'react'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

const Canvas = ({ children }) => {
  return (
    <ThreeCanvas
      style={{
        height: '100vh',
        width: '100%',
        zIndex: '10',
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 6],
      }}
    >
      {children}
    </ThreeCanvas>
  )
}

export default Canvas
