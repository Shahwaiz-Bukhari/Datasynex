"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero Three.js background.
 * Animated icosahedron particle field with orbital lines.
 * Reacts to mouse position and scroll.
 */

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uDistortion;
  uniform float uSize;
  uniform vec2 uMouse;
  uniform float uScroll;

  varying float vNoise;

  // Simplex noise (Ashima)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vec3 pos = position;
    float noiseFreq = 0.7;
    float noiseAmp = uDistortion + uScroll * 0.6;
    float noise = snoise(vec3(pos.x * noiseFreq + uTime * 0.18, pos.y * noiseFreq + uTime * 0.12, pos.z * noiseFreq));
    vNoise = noise;

    vec3 newPos = pos + normalize(pos) * noise * noiseAmp;

    // Mouse interaction
    float dist = distance(uMouse * 6.0, newPos.xy);
    float interaction = smoothstep(4.5, 0.0, dist);
    newPos += normalize(pos) * interaction * 1.1;

    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * (24.0 / -mvPosition.z) * (1.0 + noise * 0.25);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;
  varying float vNoise;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float d = length(center);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.05, d) * uOpacity;
    vec3 color = mix(uColorA, uColorB, vNoise * 0.6 + 0.5);
    gl_FragColor = vec4(color, alpha);
  }
`;

export default function HeroBackground({
  className,
  style,
  distortion = 0.55,
  size = 3.0,
  opacity = 0.9,
  colorA = "#1a6fff",
  colorB = "#38bdf8",
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const detail = isMobile ? 22 : 38;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(4.2, detail);
    const uniforms = {
      uTime: { value: 0 },
      uDistortion: { value: distortion },
      uSize: { value: size },
      uOpacity: { value: opacity },
      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    group.add(points);

    // Inner solid core (subtle wireframe)
    const coreGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x1a6fff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Orbital rings
    const orbitGroup = new THREE.Group();
    group.add(orbitGroup);

    const makeOrbit = (radius, rotation, color, op) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2, false, 0);
      const pts = curve.getPoints(160);
      const g = new THREE.BufferGeometry().setFromPoints(pts);
      const m = new THREE.LineBasicMaterial({ color, transparent: true, opacity: op });
      const orbit = new THREE.Line(g, m);
      orbit.rotation.x = rotation.x;
      orbit.rotation.y = rotation.y;
      orbitGroup.add(orbit);
      return orbit;
    };

    const orbits = [
      makeOrbit(6.0, { x: Math.PI / 2.2, y: 0 }, 0x38bdf8, 0.35),
      makeOrbit(5.6, { x: Math.PI / 3, y: Math.PI / 6 }, 0x1a6fff, 0.28),
      makeOrbit(6.6, { x: Math.PI / 1.7, y: Math.PI / 4 }, 0x38bdf8, 0.2),
    ];

    // Floating data dots
    const dotsGroup = new THREE.Group();
    group.add(dotsGroup);
    const dotCount = isMobile ? 18 : 32;
    for (let i = 0; i < dotCount; i++) {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 8, 8),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x38bdf8 : 0x1a6fff,
          transparent: true,
          opacity: 0.85,
        })
      );
      const r = 5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dot.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      dot.userData = { speed: 0.0005 + Math.random() * 0.0015, axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize() };
      dotsGroup.add(dot);
    }

    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const onMouse = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollY = Math.min(window.scrollY / max, 1);
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let frame;
    const tick = () => {
      const t = clock.getElapsedTime();
      uniforms.uTime.value = t;
      uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.06;
      uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.06;
      uniforms.uScroll.value += (scrollY - uniforms.uScroll.value) * 0.05;

      group.rotation.y = t * 0.08 + mouseX * 0.25;
      group.rotation.x = -mouseY * 0.18 + Math.sin(t * 0.2) * 0.04;
      group.position.y = -uniforms.uScroll.value * 1.2;
      group.scale.setScalar(1 - uniforms.uScroll.value * 0.15);

      core.rotation.x = -t * 0.15;
      core.rotation.y = t * 0.18;

      orbits.forEach((orbit, i) => {
        orbit.rotation.z += 0.0025 * (i + 1);
      });
      orbitGroup.rotation.y = Math.sin(t * 0.1) * 0.2;

      dotsGroup.children.forEach((dot) => {
        dot.position.applyAxisAngle(dot.userData.axis, dot.userData.speed);
      });

      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (mouseY * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      orbits.forEach((o) => {
        o.geometry.dispose();
        o.material.dispose();
      });
      dotsGroup.children.forEach((d) => {
        d.geometry.dispose();
        d.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} style={{ width: "100%", height: "100%", ...style }} aria-hidden />;
}
