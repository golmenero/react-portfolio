import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import GltfModel from "./GltfModel";
import { OrbitControls } from "@react-three/drei";

const ModelViewer = ({ modelPath, scale = 45, position = [0, 0, -3] }) => {
	return (
		<Canvas className="canvas">
			<ambientLight />
			<spotLight position={[10, 10, 10]} angle={1} intensity={0.75} />
			<spotLight position={[10, 10, -10]} angle={1} intensity={1} />
			<spotLight position={[-10, -10, 10]} angle={1} intensity={1} />
			<spotLight position={[-10, -10, -10]} angle={1} intensity={0.75} />
			<Suspense fallback={null}>
				<GltfModel modelPath={modelPath} scale={scale} position={position} />
			</Suspense>
		</Canvas>
	);
};

export default ModelViewer;