import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, type RefObject } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Stars } from './Stars';
import { Planet } from './Planet';
import { Sun } from './Sun';
import { Group } from 'three';

const solarSystem = [
    { name: 'Mercury', distance: 8, size: 0.8, color: '#A5A5A5', speed: 1.2 },
    { name: 'Venus', distance: 12, size: 1.2, color: '#E3BB76', speed: 0.9 },
    { name: 'Earth', distance: 16, size: 1.3, color: '#2233FF', speed: 0.7 },
    { name: 'Mars', distance: 20, size: 1.0, color: '#FF3300', speed: 0.6 },
    { name: 'Jupiter', distance: 30, size: 3.5, color: '#D9A066', speed: 0.3 },
    { name: 'Saturn', distance: 42, size: 3.0, color: '#EAD6B8', speed: 0.25, hasRings: true },
    { name: 'Uranus', distance: 54, size: 2.2, color: '#D1F5F8', speed: 0.15 },
    { name: 'Neptune', distance: 64, size: 2.0, color: '#3F54BA', speed: 0.1 },
];

function VortexController({ systemRef }: { systemRef: RefObject<Group> }) {
    const { camera, controls } = useThree();

    useFrame((_, delta) => {
        const speed = delta * 4; // Upward speed

        if (systemRef.current) {
            systemRef.current.position.y += speed;
        }

        camera.position.y += speed;

        if (controls) {
            // @ts-ignore
            controls.target.y += speed;
        }
    });

    return null;
}

export function Scene() {
    const systemRef = useRef<Group>(null!);

    return (
        <Canvas camera={{ position: [0, 20, 35], fov: 45 }}>
            <Suspense fallback={null}>
                <color attach="background" args={['#050505']} />

                <ambientLight intensity={0.2} />
                <pointLight position={[0, 0, 0]} intensity={2} /> {/* Extra light from Sun center */}

                <Stars />

                <group ref={systemRef}>
                    <Sun />
                    {solarSystem.map((planet) => (
                        <Planet
                            key={planet.name}
                            distance={planet.distance}
                            size={planet.size}
                            color={planet.color}
                            speed={planet.speed}
                            hasRings={planet.hasRings}
                        />
                    ))}
                </group>

                <OrbitControls makeDefault enableZoom={true} enablePan={false} maxDistance={100} minDistance={10} />
                <VortexController systemRef={systemRef} />
            </Suspense>
        </Canvas>
    );
}
