//creating the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //(FOV, aspect ratio, near clipping, far clippling)

//creating the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//creating the objects

    //const loader = new GLTFLoader();
    //loader.load('models/monkey.glb', function(gltf) {
    //    scene.add(gltf.scene);
    //}, undefined, function(error) {
    //    console.error(error);
    //});

const geometry = new THREE.BoxGeometry(); //creating the geometry
const material = new THREE.MeshBasicMaterial({
    color: 0x660000
}); //creating the material
const cube = new THREE.Mesh(geometry, material); //creating the mesh
scene.add(cube); //adding mesh to scene

//gizmo
const gizmo = new THREE.AxesHelper(2);
scene.add(gizmo); //x=red, y=green, z=blue

//camera.position.z = 5;
camera.position.set(0, 2, 5);//XYZ
camera.lookAt(cube.position);

function animate(time) {
    time *= 0.001;

    cube.rotation.x=time;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
