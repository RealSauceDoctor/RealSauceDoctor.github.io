//cursor
const cursorStart = {
    x: 0,
    y: 0
}

const aspectRatio = (window.innerWidth / window.innerHeight);

window.addEventListener('mousemove', (mouseEvent) => {
    cursorStart.x = mouseEvent.clientX / window.innerWidth - 0.5;
    cursorStart.y = mouseEvent.clientY / window.innerHeight - 0.5;
})

//creating the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //(FOV, aspect ratio, near clipping, far clippling)

//creating the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//creating the objects
const geometry = new THREE.BoxGeometry(); //creating the geometry
const material = new THREE.MeshPhongMaterial({
    color: 0x660000
}); //creating the material, MeshBasicMaterial don't catch light
const cube = new THREE.Mesh(geometry, material); //creating the mesh
scene.add(cube); //adding mesh to scene

//gizmo
const gizmo = new THREE.AxesHelper(2);
scene.add(gizmo); //x=red, y=green, z=blue

//lighting
const lampColor1 = 0xFFFFFF;
const lampIntensity1 = 2;
const lamp1 = new THREE.DirectionalLight(lampColor1, lampIntensity1);
lamp1.position.set(1, 2, 0);
scene.add(lamp1);

//camera
camera.position.set(0, 0, 5); //XYZ
//camera.lookAt(cube.position);

//rendering
function animate(time) {
    time *= 0.001;

    cube.rotation.set(time, time, time);
    cube.position.set(Math.cos(time), Math.sin(time), Math.cos(time / 2));

    camera.rotation.y = cursorStart.x / 2;
    camera.rotation.x = cursorStart.y / 2;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
