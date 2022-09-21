import React, { useRef, useState} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Box(props) {
    const ref = useRef()
    const map = props.map
    const size = props.size
  
    const colorMap = useLoader(TextureLoader, '/3D/dirt.jpg')
  
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
      if(clicked){
      ref.current.rotation.x -= 0.01
        ref.current.rotation.z -= 0.01
        ref.current.rotation.y -= 0.01
      }else{
      ref.current.rotation.x += delta
        ref.current.rotation.z += delta
        ref.current.rotation.y += delta
      }
    })
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? size + 0.5 : size}
        onClick={(event) => {
          click(!clicked)
        }}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1, 1]} />
        <meshStandardMaterial map={colorMap}/>
      </mesh>
    )
  }