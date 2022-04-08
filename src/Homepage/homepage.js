import  React, {  Suspense } from 'react'
import './homepage.css'
import {  Canvas } from 'react-three-fiber'
import {  ScrollControls, Scroll } from '@react-three/drei'
import StandardEffects from "../StandardEffects"



function Sphere() {
    return (
      <mesh
      rotation={[Math.PI / 2, 0, 0]}
        visible
        userData={{ test: "hello" }}
        position={[0, 1, 0]}
        castShadow 
      >
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    );
  }
function GroundPlane() {
    return (
      <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
        <planeBufferGeometry attach="geometry" args={[500, 500]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }
  function BackDrop() {
    return (
      <mesh receiveShadow position={[0, -1, -5]}>
        <planeBufferGeometry attach="geometry" args={[500, 500]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }


  function KeyLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-2, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  }
  function FillLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[2, 1, 4]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    );
  }
  function RimLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={2}
        height={2}
        intensity={brightness}
        color={color}
        position={[1, 4, -2]}
        rotation={[0, 180, 0]}
        castShadow
      />
    );
  }
  
function Homepage () {

    return(
<Canvas>


<ScrollControls
  pages={3} // Each page takes 100% of the height of the canvas
  distance={1} // A factor that increases scroll bar travel (default: 1)
  damping={4} // Friction, higher is faster (default: 4)
  horizontal={false} // Can also scroll horizontally (default: false)
  infinite={false} // Can also scroll infinitely (default: false)
>
  {/* You can have components in here, they are not scrolled, but they can still
      react to scroll by using useScroll! */}
  <Scroll>
    
  </Scroll>
  <Scroll html>
    <h1>html in here (optional)</h1>
    <h1 style={{ top: '100vh' }}>second page</h1>
    <h1 style={{ top: '200vh' }}>third page</h1>
  </Scroll>
</ScrollControls>



    <KeyLight brightness={5.6} color="#ffbdf4" />
    <FillLight brightness={2.6} color="#bdefff" />
    <RimLight brightness={54} color="#fff" />
    <GroundPlane />
    <Sphere />
    <Suspense fallback={null}>
      <StandardEffects bloom={{ luminanceThreshold: 0.99 }} />
    </Suspense>
    <BackDrop />
    
  
  </ Canvas>
    )
}

export default Homepage