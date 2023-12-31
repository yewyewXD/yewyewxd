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
  // alt: 313131_BBBBBB_878787_A3A4A4
  const [matcapTexture] = useMatcapTexture('584F3A_BEC3BD_C5A57D_A39073', 256)

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace
    matcapTexture.needsUpdate = true

    material.matcap = matcapTexture
    material.needsUpdate = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <OrbitControls enableZoom={false} makeDefault />

      <Center position={[0, 0.65, 0]}>
        <Float speed={3} floatIntensity={1}>
          <Text3D
            material={material}
            font="/fonts/inter_semibold.json"
            size={0.4}
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
