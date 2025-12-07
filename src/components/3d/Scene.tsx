import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Stars } from './Stars';
import { Planet } from './Planet';
import { Sun } from './Sun';

const solarSystem = [
    { name: 'Mercury', distance: 4, size: 0.2, color: '#A5A5A5', speed: 0.8 },
    { name: 'Venus', distance: 6, size: 0.4, color: '#E3BB76', speed: 0.6 },
    { name: 'Earth', distance: 8, size: 0.45, color: '#2233FF', speed: 0.5, distort: 0.2 }, // Our home gets some distortion love
    { name: 'Mars', distance: 10, size: 0.3, color: '#FF3300', speed: 0.4 },
    { name: 'Jupiter', distance: 14, size: 1.2, color: '#D9A066', speed: 0.2 },
    { name: 'Saturn', distance: 18, size: 1.0, color: '#EAD6B8', speed: 0.15 },
    { name: 'Uranus', distance: 22, size: 0.8, color: '#D1F5F8', speed: 0.1 },
    { name: 'Neptune', distance: 25, size: 0.75, color: '#3F54BA', speed: 0.08 },
];

export function Scene() {
    return (
        <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
            <Suspense fallback={null}>
                <color attach="background" args={['#050505']} />

                <ambientLight intensity={0.1} />
                <Stars />

                <Sun />

                {solarSystem.map((planet) => (
                    <Planet
                        key={planet.name}
                        distance={planet.distance}
                        size={planet.size}
                        color={planet.color}
                        speed={planet.speed}
                        distort={planet.distort}
                    />
                ))}

                <OrbitControls enableZoom={true} enablePan={true} maxDistance={50} minDistance={5} />
            </Suspense>
        </Canvas>
    );
}
