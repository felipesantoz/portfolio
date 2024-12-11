<script lang="ts">
	import { onMount } from 'svelte';
	import { Spring } from 'svelte/motion';
	import * as THREE from 'three';
	let container: HTMLDivElement;
	let cameraPositionZ = new Spring(90);

	onMount(() => {
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0x151520);
		const camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild(renderer.domElement);

		const geometry = new THREE.TorusKnotGeometry(12, 15, 200, 40);
		const torusKnot = new THREE.Mesh(geometry);
		const wireframe = new THREE.WireframeGeometry(geometry);

		const points = new THREE.Points(wireframe);
		const pointsMaterial = points.material as THREE.PointsMaterial;
		pointsMaterial.opacity = 0.25;
		pointsMaterial.transparent = true;
		pointsMaterial.size = 0.01;
		pointsMaterial.color = new THREE.Color(0xf97316);
		pointsMaterial.toneMapped = false;

		scene.add(points);

		const raycaster = new THREE.Raycaster();
		const pointer = new THREE.Vector2(-1, -1);

		function onPointerMove(event: { clientX: number; clientY: number }) {
			// calculate pointer position in normalized device coordinates
			// (-1 to +1) for both components

			pointer.x = (event.clientX / container.clientWidth) * 2 - 1;
			pointer.y = -(event.clientY / container.clientHeight) * 2 + 1;
		}

		window.addEventListener('pointermove', onPointerMove);

		function animate() {
			camera.position.z = cameraPositionZ.current;
			raycaster.setFromCamera(pointer, camera);
			// calculate objects intersecting the picking ray
			const intersects = raycaster.intersectObject(torusKnot);
			if (intersects.length) {
				cameraPositionZ.target = 56;
			} else {
				cameraPositionZ.target = 64;
			}
			points.rotation.x += 0.001;
			points.rotation.y += 0.001;
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		}
		animate();
	});
</script>

<div bind:this={container} class="h-2/3 w-full"></div>
