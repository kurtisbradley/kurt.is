import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Html, Lightformer, OrbitControls, Stage } from '@react-three/drei';

import styles from './three.module.css';
import Loader from './Loader';
import Model from './Model';

const AssetLoader = () => (
  <Html center>
    <Loader fullscreen={false} size="1.5rem" />
  </Html>
);

const Three = () => {
  const ref = useRef();

  return (
    <Canvas
      className={styles.canvas}
      shadows="percentage"
      dpr={[1, 1.25]}
      frameloop="demand"
      camera={{ fov: 50, position: [1.5, 1, 5] }}
    >
      <Suspense fallback={<AssetLoader />}>
        <Stage controls={ref} preset="rembrandt" intensity={1} environment={null} shadows="contact" adjustCamera={2}>
          <Model />
        </Stage>
        <Environment resolution={512} frames={1}>
          <Lightformer form="rect" intensity={15} color="#ffffff" scale={[20, 4]} position={[0, 10, 0]} target={[0, 0, 0]} />
          <Lightformer form="rect" intensity={18} color="#fff8f2" scale={[6, 16]} position={[-8, 2, 2]} target={[0, 0, 0]} />
          <Lightformer form="rect" intensity={20} color="#ffffff" scale={[12, 4]} position={[0, 5, -8]} target={[0, 0, 0]} />
          <Lightformer form="rect" intensity={6} color="#eef4ff" scale={[6, 12]} position={[8, 0, 2]} target={[0, 0, 0]} />
          <Lightformer form="rect" intensity={0.8} color="#ffffff" scale={[20, 20]} position={[0, 0, 10]} target={[0, 0, 0]} />
          <Lightformer form="rect" intensity={4} color="#ffffff" scale={[16, 2]} position={[0, -8, 0]} target={[0, 0, 0]} />
        </Environment>
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