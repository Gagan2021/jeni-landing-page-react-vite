import { Sphere } from '@react-three/drei';

export function Sun() {
    return (
        <Sphere args={[3.2, 64, 64]} position={[0, 0, 0]}>
            <meshBasicMaterial
                color="#FDB813"
            />
            <pointLight intensity={3} distance={200} decay={1} color="#ffffff" />
            <mesh scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[3.2, 64, 64]} />
                <meshBasicMaterial color="#FF8C00" transparent opacity={0.3} side={2} />
            </mesh>
        </Sphere>
    );
}
