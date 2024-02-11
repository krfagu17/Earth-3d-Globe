
import world from "../assets/worldmap.webp"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
function Earth(props) {
    const myTexture = useLoader(TextureLoader, world)
    
    return (
      <mesh>
       <sphereGeometry args={[1, 30, 30]} />
       <meshStandardMaterial map={myTexture} />
      </mesh>
    )
  }
  export default Earth