import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
	const ref = useRef();
	const gltf = useLoader(GLTFLoader, modelPath);

	useFrame((state, delta) => {
		ref.current.rotation.y += 0.002;
	});

	return (
		<>
			<primitive
				ref={ref}
				object={gltf.scene}
				position={position}
				scale={scale}
				rotation={[0, 4.2, 0.07]}
			/>
		</>
	);
};

export default GltfModel;