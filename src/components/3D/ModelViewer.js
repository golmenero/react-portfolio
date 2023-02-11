import React from "react";
import { Canvas } from "@react-three/fiber";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath, scale = 20, position = [0, 1, 0] }) => {
	return (
		<Canvas className="canvas" camera={{
			fov: 10,
			position: [0, 0, -250]
		}}>
			<ambientLight intensity={1}/>
			<spotLight position={[10, 10, -10]} angle={2} intensity={1} />
			<spotLight position={[10, 10, 10]} angle={3} intensity={1} />
			<GltfModel modelPath={modelPath} scale={scale} position={position} />
		</Canvas>

	);
};

export default ModelViewer;