import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath, scale = 7, position = [0, 0, -10] }) => {
    return (
        <Canvas className="canvas">
            <ambientLight />
            <spotLight position={[20, 0, -10]} angle={0.5} intensity={2} />
            <spotLight position={[-20, 0, -10]} angle={0.5} intensity={2} />
            <Suspense fallback={null}>
                <GltfModel modelPath={modelPath} scale={scale} position={position} />
            </Suspense>
		</Canvas>
	);
}

export default ModelViewer;