import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Preload } from '@react-three/drei';

import styles from './three.module.css';
import Model from './Model';

const Three = () => {
  const ref = useRef();
  return (
    <Canvas 
      className={styles.canvas}
      shadows
      dpr={[1, 1.5]}
      camera={{ fov: 50, position: [-1, 0, 5] }}
    >
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1} environment="studio" shadows="contact" adjustCamera={2}>
          <Model />
          <Preload all />
        </Stage>
      </Suspense>
      <OrbitControls
        ref={ref} 
        autoRotate={false}
        enableZoom={false}
        enablePan={false}
        minAzimuthAngle={-0.8}
        maxAzimuthAngle={0.8}
        minPolarAngle={0.5}
        maxPolarAngle={1.5}
      />
    </Canvas>
  );
};

export default Three;
