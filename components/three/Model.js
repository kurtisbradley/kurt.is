import { useGLTF } from '@react-three/drei';

const Model = (props) => {
  const { nodes, materials } = useGLTF("./logo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials.SVGMat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4}
      />
    </group>
  );
}

useGLTF.preload("./logo.glb");

export default Model;