import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
	const ref = useRef();
	const gltf = useLoader(GLTFLoader, modelPath);

	document.addEventListener("mousemove", function(event) {
		ref.current.rotation.y += 0.002;

		let x = event.clientX / window.screen.width;
		let y = event.clientY / window.screen.height;

		const targetRotationX = x * 0.5;
		const targetRotationY = y * 0.5;
	
		// Smoothly interpolate rotation towards the target rotation
		ref.current.rotation.x += (targetRotationY - ref.current.rotation.x) * 0.05;
		ref.current.rotation.y += (targetRotationX - ref.current.rotation.y) * 0.05;
	});

	return (
		<>
			<primitive
				ref={ref}
				object={gltf.scene}
				position={position}
				scale={scale}
				rotation={[0, 0.2, 0]}
			/>
		</>
	);
};

export default GltfModel;