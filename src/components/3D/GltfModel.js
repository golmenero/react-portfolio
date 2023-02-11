import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const GltfModel = (props) => {
	const { nodes, materials } = useGLTF('./logo/logo.glb');
	const { viewport } = useThree();

	const ref = useRef();

	console.log(materials)
  
	useFrame((state, delta) => {		
		ref.current.rotation.y += 0.002;
	});

	return (
		<group {...props} dispose={null} ref={ref} scale={(window.screen.availWidth > 992 ? viewport.width / 2.5 : viewport.width / 4.5)}>
			<mesh geometry={nodes['Cylinder003'].geometry} material={materials['Primary.002']} />
			<mesh geometry={nodes['Cylinder003_1'].geometry} material={materials['Secondary.002']} />
		</group>
	);
};

export default GltfModel;

useGLTF.preload('./logo/logo.glb');