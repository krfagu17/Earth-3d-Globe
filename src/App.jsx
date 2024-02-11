
import { OrbitControls, } from '@react-three/drei'
import './App.css'
import { Canvas,useLoader } from '@react-three/fiber'


import Earth from './component/Earth'


function App() {

 
  return (
    <>
       <Canvas  camera={{ position: [0, 3, 5], fov: 30 }}>
        <OrbitControls />
        <color attach="background" args={['black']} />
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

    <Earth position={[1.2, 0, 0]} />
  </Canvas>
    </>
  )
}

export default App



