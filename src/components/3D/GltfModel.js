import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
	const ref = useRef();
	const gltf = useLoader(GLTFLoader, modelPath);
  
	useFrame((state, delta) => {
		let value = Math.round((ref.current.rotation.y + Number.EPSILON) * 100) / 100;
		if (value % 6.28 === 0) ref.current.rotation.y = 0;
		if (value >= 3.7 && value <= 5.5) ref.current.rotation.y += 0.001;
		else ref.current.rotation.y += 0.009;
	});

	return (
		<>
			<primitive
				ref={ref}
				object={gltf.scene}
				position={position}
				scale={scale}
			/>
		</>
	);
};

export default GltfModel;