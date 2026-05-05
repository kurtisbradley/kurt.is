import { useGLTF } from '@react-three/drei';

const modelPath = '/logo.glb';

const Model = (props) => {
  const { nodes, materials } = useGLTF(modelPath);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials.SVGMat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4}
        material-color="#A9A9A9"
        material-roughness={0.1}
        material-metalness={0.8}
        material-envMapIntensity={2.5}
      />
    </group>
  );
}

useGLTF.preload(modelPath);

export default Model;