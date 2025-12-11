import { Sphere } from '@react-three/drei';
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
    hasRings?: boolean;
}

export function Planet({ distance, size, color, speed, rotationSpeed = 0.005, hasRings = false }: PlanetProps) {
    const meshRef = useRef<Mesh>(null!);
    const [angle, setAngle] = useState(Math.random() * Math.PI * 2);

    useFrame((_, delta) => {
        if (meshRef.current) {
            // Self rotation
            meshRef.current.rotation.y += rotationSpeed;

            // Orbit logic
            setAngle((prev) => prev + speed * delta * 0.5);
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            meshRef.current.position.set(x, 0, z);
        }
    });

    return (
        <group>
            {/* Orbit path visualization */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[distance - 0.02, distance + 0.02, 128]} />
                <meshBasicMaterial color="#ffffff" opacity={0.05} transparent side={2} />
            </mesh>

            <Sphere args={[1, 64, 64]} ref={meshRef} scale={[size, size, size]}>
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.7}
                    metalness={0.2}
                    clearcoat={0.1}
                />

                {hasRings && (
                    <mesh rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 1.5]}>
                        <ringGeometry args={[1.2, 2.2, 64]} />
                        <meshStandardMaterial color="#CDBA96" opacity={0.7} transparent side={2} />
                    </mesh>
                )}
            </Sphere>
        </group>
    );
}
