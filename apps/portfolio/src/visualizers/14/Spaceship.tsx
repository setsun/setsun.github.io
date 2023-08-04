/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 spaceship.gltf --transform --types 
Files: spaceship.gltf [932.92KB] > spaceship-transformed.glb [726.76KB] (22%)
*/

import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube005_2: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial003: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
  };
};

export function Spaceship(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/spaceship-transformed.glb",
  ) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube005.geometry}
        material={new THREE.MeshBasicMaterial({ wireframe: true })}
      />
      <mesh
        geometry={nodes.Cube005_1.geometry}
        material={new THREE.MeshBasicMaterial({ wireframe: true })}
      />
      <mesh
        geometry={nodes.Cube005_2.geometry}
        material={new THREE.MeshBasicMaterial({ wireframe: true })}
      />
    </group>
  );
}

useGLTF.preload("/spaceship-transformed.glb");
