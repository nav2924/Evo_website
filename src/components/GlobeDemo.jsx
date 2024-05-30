import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Mesh, WebGLRenderer, Scene } from "three";
// import { createGlowMesh, defaultOptions } from "three-glow-mesh";
import countries from "../files/globe-data-min.json";
import travelHistory from "../files/my-flights.json";
import airportHistory from "../files/my-airports.json";

const GlobeDemo = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, camera, scene, controls;
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    let Globe;

    // SECTION Initializing core ThreeJS elements
    const init = () => {
      // Initialize renderer
      renderer = new WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Initialize scene, light
      scene = new Scene();
      scene.add(new THREE.AmbientLight(0xbbbbbb, 0.3));
      scene.background = new THREE.Color(0x00040F); // Set background to black

      // Initialize camera, light
      camera = new THREE.PerspectiveCamera();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dLight.position.set(-800, 2000, 400);
      camera.add(dLight);

      const dLight1 = new THREE.DirectionalLight(0x7982f6, 1);
      dLight1.position.set(-200, 500, 200);
      camera.add(dLight1);

      const dLight2 = new THREE.PointLight(0x8566cc, 0.5);
      dLight2.position.set(-200, 500, 200);
      camera.add(dLight2);

      camera.position.z = 400;
      camera.position.x = 0;
      camera.position.y = 0;

      scene.add(camera);

      // Additional effects
      scene.fog = new THREE.Fog(0x535ef3, 400, 2000);

      // Initialize controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.01;
      controls.enablePan = false;
      controls.minDistance = 200;
      controls.maxDistance = 500;
      controls.rotateSpeed = 0.8;
      controls.zoomSpeed = 1;
      controls.autoRotate = false;

      controls.minPolarAngle = Math.PI / 3.5;
      controls.maxPolarAngle = Math.PI - Math.PI / 3;

      window.addEventListener("resize", onWindowResize, false);
      document.addEventListener("mousemove", onMouseMove);
    };

    // SECTION Globe
    const initGlobe = () => {
      // Initialize the Globe
      Globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
      })
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(true)
        .atmosphereColor("#3a228a")
        .atmosphereAltitude(0.25)
        .hexPolygonColor((e) => {
          if (
            ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
              e.properties.ISO_A3
            )
          ) {
            return "rgba(255,255,255, 1)";
          } else return "rgba(255,255,255, 0.7)";
        });

      // // Add glow effect
      // // Add glow effect
      // const globeMesh = Globe.globeObject();
      // const glowMesh = createGlowMesh(globeMesh.geometry.clone(), {
      //   backside: false,
      //   coefficient: 0.2,
      //   color: "#2194e0",
      //   size: 0.3,
      // });
      // Globe.add(glowMesh);

      // NOTE Arc animations are followed after the globe enters the scene
      setTimeout(() => {
        Globe.arcsData(travelHistory.flights)
          .arcColor((e) => (e.status ? "#9cff00" : "#FF4000"))
          .arcAltitude((e) => e.arcAlt)
          .arcStroke((e) => (e.status ? 0.5 : 0.3))
          .arcDashLength(0.9)
          .arcDashGap(4)
          .arcDashAnimateTime(1000)
          .arcsTransitionDuration(1000)
          .arcDashInitialGap((e) => e.order * 1)
          .labelsData(airportHistory.airports)
          .labelColor(() => "#ffcb21")
          .labelDotOrientation((e) => (e.text === "ALA" ? "top" : "right"))
          .labelDotRadius(0.3)
          .labelSize((e) => e.size)
          .labelText("city")
          .labelResolution(6)
          .labelAltitude(0.01)
          .pointsData(airportHistory.airports)
          .pointColor(() => "#ffffff")
          .pointsMerge(true)
          .pointAltitude(0.07)
          .pointRadius(0.05);
      }, 1000);

      Globe.rotateY(-Math.PI * (5 / 9));
      Globe.rotateZ(-Math.PI / 6);
      const globeMaterial = Globe.globeMaterial();
      globeMaterial.color = new THREE.Color(0x3a228a);
      globeMaterial.emissive = new THREE.Color(0x00040f);
      globeMaterial.emissiveIntensity = 0.1;
      globeMaterial.shininess = 0.7;

      scene.add(Globe);
    };

    const onMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      camera.position.x +=
        Math.abs(mouseX) <= windowHalfX / 2
          ? (mouseX / 2 - camera.position.x) * 0.005
          : 0;
      camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
      camera.lookAt(scene.position);
      controls.update();
      renderer.render(scene, camera);
    };

    init();
    initGlobe();
    animate();

    return () => {
      // Clean up on component unmount
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize, false);
      document.removeEventListener("mousemove", onMouseMove, false);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default GlobeDemo;
