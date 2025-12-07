import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

interface PlanetProps {
    distance: number;
    size: number;
    color: string;
    speed: number;
    rotationSpeed?: number;
    distort?: number;
}

export function Planet({ distance, size, color, speed, rotationSpeed = 0.01, distort = 0 }: PlanetProps) {
    const meshRef = useRef<Mesh>(null!);
    const [angle, setAngle] = useState(Math.random() * Math.PI * 2); // Random start angle

    useFrame((_, delta) => {
        if (meshRef.current) {
            // Self rotation
            meshRef.current.rotation.y += rotationSpeed;

            // Orbit logic
            setAngle((prev) => prev + speed * delta);
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            meshRef.current.position.set(x, 0, z);
        }
    });

    return (
        <group>
            {/* Orbit path visualization (optional) */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[distance - 0.05, distance + 0.05, 64]} />
                <meshBasicMaterial color="#ffffff" opacity={0.1} transparent side={2} />
            </mesh>

            <Sphere args={[1, 32, 32]} ref={meshRef} scale={[size, size, size]}>
                {distort > 0 ? (
                    <MeshDistortMaterial
                        color={color}
                        attach="material"
                        distort={distort}
                        speed={2}
                        roughness={0.5}
                    />
                ) : (
                    <meshStandardMaterial color={color} roughness={0.5} />
                )}
            </Sphere>
        </group>
    );
}
