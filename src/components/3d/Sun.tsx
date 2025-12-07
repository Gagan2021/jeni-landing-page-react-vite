import { Sphere } from '@react-three/drei';

export function Sun() {
    return (
        <Sphere args={[2.5, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial
                emissive="#ffaa00"
                emissiveIntensity={2}
                color="#ffaa00"
            />
            <pointLight intensity={2} distance={100} decay={2} color="#ffaa00" />
        </Sphere>
    );
}
