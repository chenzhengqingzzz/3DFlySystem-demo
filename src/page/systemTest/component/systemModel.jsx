import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function SystemModel(props) {

  const { nodes, materials } = useGLTF("/system.gltf");

  const cube = useRef();

  // 通过useEffect 勾子检测一下的参数变了没有变了就进行渲染飞行

  // 让无人机飞行或者停机的boolean 参数
  var flag = true;

  // 后台计算出飞行的时间
  var flyTime = 3000;

  // 飞行速率的系数
  var xSpeed = 1;
  var ySpeed = 1;
  var zSpeed = 1;
  // 飞行速率
  var speed = 0.05;

  // 方向 1 or -1
  var direction = 1;



  setTimeout(function(){
    flag = true
  }, 9000)

  // 需要有判断条件
  useFrame(() => {
    if(flag){
      cube.current.position.set(cube.current.position.x + direction * (xSpeed * speed), 
      cube.current.position.y + direction * (ySpeed * 0), cube.current.position.z + direction * (zSpeed * speed))
      setTimeout(function(){
      flag = false;
      },flyTime);
    }else{
      cube.current.position.set(cube.current.position.x, cube.current.position.y, cube.current.position.z)
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={[54.58, 0.55, 54.58]}
      />
      <mesh
        ref={cube}
        castShadow
        receiveShadow
        geometry={nodes.立方体.geometry}
        material={nodes.立方体.material}
        position={[0, 1, 0]}
      />
    </group>
  );
}

useGLTF.preload("/system.gltf");
