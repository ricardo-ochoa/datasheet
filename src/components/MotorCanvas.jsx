import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Bounds } from "@react-three/drei"

function MotorModel() {
  const { scene } = useGLTF("/models/motor.glb")
  return <primitive object={scene} />
}

useGLTF.preload("/models/motor.glb")

export default function MotorCanvas() {
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <Canvas style={{ width: "100%", height: "100%" }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 8, 5]} intensity={1.3} />
          <Environment preset="warehouse" />

          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={1.2}
            enableZoom={false}
            enablePan={false}
          />

          {/* Esto lo encuadra automáticamente aunque venga enorme o chiquito */}
          <Bounds fit clip observe margin={1.2}>
            <MotorModel />
          </Bounds>
        </Suspense>
      </Canvas>
    </div>
  )
}