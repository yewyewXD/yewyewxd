import React, { useEffect } from 'react'
import { Center, Text3D, OrbitControls, Float } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const material = new THREE.MeshMatcapMaterial()

const HeroText = () => {
  const texture = useLoader(THREE.TextureLoader, '/matcap_texture.png')

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.needsUpdate = true

    material.matcap = texture
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
            {"Hi, I'm Kang"}
          </Text3D>
        </Float>
      </Center>
    </>
  )
}

export default HeroText
