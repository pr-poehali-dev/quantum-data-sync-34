import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Scene from "./Scene"
import Overlay from "./Overlay"
import LoadingScreen from "./LoadingScreen"

export default function Gallery3D() {
  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f06 0%, #1a3009 50%, #0d1f06 100%)" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: false }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Overlay />
      <LoadingScreen />
    </div>
  )
}