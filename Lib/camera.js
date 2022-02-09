function FrontalCamera() {
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        3000
    );

    camera.position.set(0, 150, 600);
    camera.lookAt(0, 0, 0);

}

function LateralCamera() {
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        2,
        3000
    );


    console.log(camera);
    camera.position.set(300, 300, 400);
    camera.lookAt(0, 0, 0);
}

function TopCamera() {
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(0, 800, 0);
    camera.lookAt(0, 0, 0);
}

function TopCameraOrtographic() {
    camera =
        new THREE.OrthographicCamera(
            window.innerWidth / -1,
            window.innerWidth / 1,
            window.innerHeight / 1,
            window.innerHeight / -1, -750,
            2000
        );
    camera.position.set(0, 10, 0);
    camera.lookAt(scene.position);
}

function OrbitalCamera() {

    var camera_pivot = new THREE.Object3D()
    var X_AXIS = new THREE.Vector3(1, 0, 0);


    scene.add(camera_pivot);
    camera_pivot.add(camera);

    camera.lookAt(camera_pivot.position);

    camera_pivot.rotateOnAxis(X_AXIS, 0.10);
    camera.lookAt(0, 0, 0);

}