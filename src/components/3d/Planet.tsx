import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export function Planet() {
    const meshRef = useRef<Mesh>(null!);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta / 5;
        }
    });

    return (
        <Sphere args={[1, 64, 64]} ref={meshRef} position={[2, 0, 0]}>
            <MeshDistortMaterial
                color="#4a00e0"
                attach="material"
                distort={0.3}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
}
