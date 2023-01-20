import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath, scale = 35, position = [0, 1, 0] }) => {
	return (
		<Canvas className="canvas">
			<ambientLight />
			<spotLight position={[10, 10, 10]} angle={0.7} intensity={1} />
			<spotLight position={[0, 0, 10]} angle={0.4} intensity={1} />
			<Suspense fallback={null}>
				<GltfModel modelPath={modelPath} scale={scale} position={position} />
			</Suspense>
		</Canvas>

	);
};

export default ModelViewer;