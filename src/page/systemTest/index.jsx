import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Sky, Environment, Stats } from '@react-three/drei'
import { useNavigate } from "react-router-dom";
import * as THREE from 'three';
import { SystemModel } from './component/systemModel'
import './style.css'


export default function Aaa(props) {
    console.log('-all');
    console.log('hhhhhhh', props)
    const navigate = useNavigate()

    const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 90;
    camera.position.x = 65;
    camera.position.y = 80;
    camera.zoom = 1.3

    const ref = useRef()
    return (
        <div className='App'>
            <Canvas shadows dpr={[1, 2]} camera={camera}>
                <primitive object={new THREE.AxesHelper(1000)} />
                <Suspense fallback={null}>
                    <SystemModel navigate={navigate} Child value={props} />
                    <Environment files="/pp.hdr" />
                    <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
                </Suspense>
                <OrbitControls ref={ref} />
                <Stats />
            </Canvas>
        </div>

    )
}



