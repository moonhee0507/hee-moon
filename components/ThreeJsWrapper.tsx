// ThreeJsWrapper.tsx

'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJsWrapper = ({ children }: { children: React.ReactNode }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer, material: THREE.PointsMaterial;
        let mouseX = 0,
            mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        const init = () => {
            camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 2000);
            camera.position.z = 1000;

            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x000000, 0.001);

            const geometry = new THREE.BufferGeometry();
            const vertices: number[] = [];

            const sprite = new THREE.TextureLoader().load('textures/sprites/disc.png');
            sprite.colorSpace = THREE.SRGBColorSpace;

            for (let i = 0; i < 10000; i++) {
                const x = 2000 * Math.random() - 1000;
                const y = 2000 * Math.random() - 1000;
                const z = 2000 * Math.random() - 1000;
                vertices.push(x, y, z);
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

            material = new THREE.PointsMaterial({ size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true });
            material.color.setHSL(1.0, 0.3, 0.7, THREE.SRGBColorSpace);

            const particles = new THREE.Points(geometry, material);
            scene.add(particles);

            renderer = new THREE.WebGLRenderer({
                alpha: true,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setAnimationLoop(animate);

            if (mountRef.current) {
                mountRef.current.appendChild(renderer.domElement);
            }

            document.body.style.touchAction = 'none';
            document.body.addEventListener('pointermove', onPointerMove);

            window.addEventListener('resize', onWindowResize);
        };

        const onWindowResize = () => {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const onPointerMove = (event: PointerEvent) => {
            if (event.isPrimary === false) return;

            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };

        const animate = () => {
            render();
        };

        const render = () => {
            const time = Date.now() * 0.00005;

            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;

            camera.lookAt(scene.position);

            const h = ((360 * (1.0 + time)) % 360) / 360;
            material.color.setHSL(h, 0.5, 0.5);

            renderer.render(scene, camera);
        };

        init();

        return () => {
            window.removeEventListener('resize', onWindowResize);
            document.body.removeEventListener('pointermove', onPointerMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div ref={mountRef} className="absolute left-0 top-0 -z-10 h-full w-full">
            {children}
        </div>
    );
};

export default ThreeJsWrapper;
