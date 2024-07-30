// src/PointsComponent.js
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Points = () => {
    const pointsRef = useRef();

    // Generate a large number of random data points
    const positions = useMemo(() => {
        const points = new Float32Array(3000); // 1000 points * 3 coordinates (x, y, z)
        for (let i = 0; i < points.length; i++) {
            points[i] = (Math.random() * 10) - 5;
        }
        return points;
    }, []);

    useFrame(() => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.001; // Simple rotation animation
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attachObject={['attributes', 'position']}
                    array={positions}
                    itemSize={3}
                    count={positions.length / 3}
                />
            </bufferGeometry>
            <pointsMaterial attach="material" color="red" size={0.1} />
        </points>
    );
};

export default Points;
