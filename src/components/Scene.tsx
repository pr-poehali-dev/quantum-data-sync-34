import { useRef, useState, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

const images = [
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/acfe34bd-6575-4bdf-bc24-fe9e9baa9b11.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/d5c0ab68-1305-4537-8496-0c754c64a29b.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/332e9416-966c-42a5-9759-d88e1caa1e02.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/45cf9e45-505c-4621-a854-cb4d5f9b22e2.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/d3e1ca70-1fae-4b49-b122-e770611cc8df.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/beef7cc5-2989-43b8-9ec8-31d5ebccf122.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/ea72262a-cba6-4091-88bb-22a44fb72b6b.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/268c1bf7-c9c6-4b38-9078-c7e589b25034.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/acfe34bd-6575-4bdf-bc24-fe9e9baa9b11.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/d5c0ab68-1305-4537-8496-0c754c64a29b.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/beef7cc5-2989-43b8-9ec8-31d5ebccf122.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/332e9416-966c-42a5-9759-d88e1caa1e02.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/45cf9e45-505c-4621-a854-cb4d5f9b22e2.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/d3e1ca70-1fae-4b49-b122-e770611cc8df.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/ea72262a-cba6-4091-88bb-22a44fb72b6b.jpg",
  "https://cdn.poehali.dev/projects/28f95fd7-519b-4871-b637-10738a0198bf/files/268c1bf7-c9c6-4b38-9078-c7e589b25034.jpg",
]

const imagePositions = [
  { pos: [-3.2, 1.8, -2.5] as [number, number, number], rot: [0, 0.4, 0] as [number, number, number], scale: 0.7 },
  { pos: [2.8, -1.2, -3] as [number, number, number], rot: [0, -0.5, 0] as [number, number, number], scale: 0.8 },
  { pos: [-1.5, 2.5, -1.8] as [number, number, number], rot: [0, 0.3, 0] as [number, number, number], scale: 0.65 },
  { pos: [3.5, 0.8, -2.2] as [number, number, number], rot: [0, -0.4, 0] as [number, number, number], scale: 0.75 },
  { pos: [-2.8, -2.1, -2.8] as [number, number, number], rot: [0, 0.5, 0] as [number, number, number], scale: 0.7 },
  { pos: [1.2, 2.2, -2.5] as [number, number, number], rot: [0, -0.3, 0] as [number, number, number], scale: 0.8 },
  { pos: [-3.5, 0.5, -2] as [number, number, number], rot: [0, 0.6, 0] as [number, number, number], scale: 0.65 },
  { pos: [2.2, -2.5, -2.6] as [number, number, number], rot: [0, -0.4, 0] as [number, number, number], scale: 0.75 },
  { pos: [-1.8, -0.8, -3.2] as [number, number, number], rot: [0, 0.3, 0] as [number, number, number], scale: 0.7 },
  { pos: [3.2, 1.5, -1.9] as [number, number, number], rot: [0, -0.5, 0] as [number, number, number], scale: 0.8 },
  { pos: [-2.5, 2.8, -2.4] as [number, number, number], rot: [0, 0.4, 0] as [number, number, number], scale: 0.65 },
  { pos: [0.8, -1.8, -2.7] as [number, number, number], rot: [0, -0.3, 0] as [number, number, number], scale: 0.75 },
  { pos: [-3.8, -1.5, -2.3] as [number, number, number], rot: [0, 0.5, 0] as [number, number, number], scale: 0.7 },
  { pos: [2.5, 2.8, -2.9] as [number, number, number], rot: [0, -0.4, 0] as [number, number, number], scale: 0.8 },
  { pos: [-0.8, -2.8, -2.1] as [number, number, number], rot: [0, 0.3, 0] as [number, number, number], scale: 0.65 },
  { pos: [3.8, -0.5, -2.5] as [number, number, number], rot: [0, -0.5, 0] as [number, number, number], scale: 0.75 },
]

interface FloatingImageProps {
  texture: THREE.Texture
  index: number
  rotation: number
}

function FloatingImage({ texture, index, rotation }: FloatingImageProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const config = imagePositions[index]

  useFrame((state) => {
    if (!meshRef.current) return

    const targetRotY = config.rot[1] + rotation
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.12)

    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = config.pos[1] + Math.sin(time * 0.5 + index) * 0.1
  })

  return (
    <mesh ref={meshRef} position={config.pos} rotation={config.rot} scale={config.scale}>
      <planeGeometry args={[0.833, 1.2]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.95}
        side={THREE.DoubleSide}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  )
}

export default function Scene() {
  const [rotation, setRotation] = useState(0)
  const [targetRotation, setTargetRotation] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [lastInteraction, setLastInteraction] = useState(Date.now())
  const { camera, size } = useThree()
  const mousePosition = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const dragRotation = useRef(0)

  const textures = useTexture(images)

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const deltaX = e.clientX - dragStart.current.x
        const rotationAmount = (deltaX / size.width) * Math.PI * 2
        setTargetRotation(dragRotation.current + rotationAmount)
      } else {
        mousePosition.current = {
          x: (e.clientX / size.width) * 2 - 1,
          y: -(e.clientY / size.height) * 2 + 1,
        }
      }
      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [size])

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      dragStart.current = { x: e.clientX, y: e.clientY }
      dragRotation.current = targetRotation
      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    return () => {
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [targetRotation])

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      isDragging.current = true
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      dragRotation.current = targetRotation
      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current) {
        const deltaX = e.touches[0].clientX - dragStart.current.x
        const rotationAmount = (deltaX / size.width) * Math.PI * 2
        setTargetRotation(dragRotation.current + rotationAmount)
      }
      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    const handleTouchEnd = () => {
      isDragging.current = false
    }

    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleTouchEnd)
    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [targetRotation, size])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setTargetRotation((prev) => prev + Math.PI / 3)
        setLastInteraction(Date.now())
        setIsAutoPlaying(false)
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setTargetRotation((prev) => prev - Math.PI / 3)
        setLastInteraction(Date.now())
        setIsAutoPlaying(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    let isThrottled = false

    const handleWheel = (e: WheelEvent) => {
      if (isThrottled) return

      isThrottled = true
      setTimeout(() => {
        isThrottled = false
      }, 400)

      if (e.deltaY > 0) {
        setTargetRotation((prev) => prev + Math.PI / 3)
      } else {
        setTargetRotation((prev) => prev - Math.PI / 3)
      }

      setLastInteraction(Date.now())
      setIsAutoPlaying(false)
    }

    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  // Auto-play after 3s of inactivity
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteraction
      if (timeSinceLastInteraction > 3000) {
        setIsAutoPlaying(true)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [lastInteraction])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setTargetRotation((prev) => prev + Math.PI / 3)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useFrame(() => {
    if (!isDragging.current) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mousePosition.current.x * 0.5, 0.1)
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, mousePosition.current.y * 0.5, 0.1)
    }
    camera.lookAt(0, 0, 0)

    setRotation((prev) => THREE.MathUtils.lerp(prev, targetRotation, 0.12))
  })

  return (
    <>
      {/* DELINA LAB lighting — green + gold */}
      <ambientLight intensity={0.5} color="#2D5016" />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-8, -8, -5]} intensity={0.5} color="#D4AF37" />
      <pointLight position={[0, 6, 4]} intensity={0.4} color="#a8d060" />
      <spotLight position={[5, 8, 3]} intensity={0.6} angle={0.5} penumbra={1} color="#D4AF37" />

      {textures.map((texture, index) => (
        <FloatingImage key={index} texture={texture} index={index} rotation={rotation} />
      ))}

      {/* Reflection plane — dark green */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1a3009" transparent opacity={0.3} roughness={0.05} metalness={0.95} />
      </mesh>
    </>
  )
}