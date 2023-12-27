import React, { useEffect } from 'react'
import {
  useMatcapTexture,
  Center,
  Text3D,
  OrbitControls,
  Float,
} from '@react-three/drei'
import * as THREE from 'three'

const material = new THREE.MeshMatcapMaterial()

const HeroText = () => {
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace
    matcapTexture.needsUpdate = true

    material.matcap = matcapTexture
    material.needsUpdate = true
  }, [])

  return (
    <>
      <OrbitControls enableZoom={false} makeDefault />

      <Center>
        <Float speed={5} floatIntensity={2}>
          <Text3D
            material={material}
            font="./fonts/inter_semibold.json"
            size={0.45}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {"Hi, I'm Kang Wei"}
          </Text3D>
        </Float>
      </Center>
    </>
  )
}

export default HeroText
