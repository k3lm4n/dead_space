//const { EdgesHelper } = require("./three");
var Spoty;

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}



function SpotS() {


    Spoty = new THREE.Object3D();
    material0 = new THREE.MeshBasicMaterial({ color: '#fff' });


    const geometry = new THREE.BoxGeometry(20, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: "#b5e2fa" });
    const cabo = new THREE.Mesh(geometry, material);
    cabo.position.y = 30;
    scene.add(cabo);


    const geometry1 = new THREE.ConeGeometry(5, 10, 15);
    const material1 = new THREE.MeshBasicMaterial({ color: "#b5e2fa" });
    const holof = new THREE.Mesh(geometry1, material1);

    holof.position.x = 12;
    holof.position.y = 32;
    holof.rotation.z = degrees_to_radians(-20);
    scene.add(holof);
}

function addConeHero(obj, x, y, z) {
    'use strict'

    Geometry = new THREE.ConeGeometry(12, 26, 24);
    mesh = new THREE.Mesh(Geometry, material0);
    mesh.position.set(x, y, z);
    obj.add(mesh);


}

function createShipHero(x, y, z) {
    'use strict';

    ship = new THREE.Object3D();
    material0 = new THREE.MeshBasicMaterial({ color: '#fff' });

    addBolaHero(ship, 0, 1, 12);
    ship.canhaoEsq = addBolaLatHero(ship, -21, 0.1, 11);
    ship.canhaoDir = addBolaLatHero(ship, 21, 0.1, 11);
    addPlaneHero(ship, 28, 0.1, 11, 1);
    addPlaneHero(ship, -28, 0.1, 11, -1);
    ship.canhaoMeio = addBolaLatHero(ship, 0, 18, 11);

    ship.position.x = x;
    ship.position.y = y;
    ship.position.z = z;

    ship.name = "Hero";;


}



function addConeHero(obj, x, y, z) {
    'use strict'

    Geometry = new THREE.ConeGeometry(12, 26, 24);
    mesh = new THREE.Mesh(Geometry, material0);
    mesh.position.set(x, y, z);
    obj.add(mesh);


}

function addBolaHero(obj, x, y, z) {
    'use strict'

    Geometry = new THREE.SphereGeometry(14, 26, 20);
    let material50 = new THREE.MeshLambertMaterial({ color: '#fff' });
    mesh = new THREE.Mesh(Geometry, material50);
    mesh.castShadow = true;
    mesh.position.set(x, y, z);
    obj.add(mesh);


}

function addBolaLatHero(obj, x, y, z) {
    'use strict'

    Geometry = new THREE.SphereGeometry(7, 46, 20);
    let material40 = new THREE.MeshBasicMaterial({ color: '#0000ff' });
    mesh = new THREE.Mesh(Geometry, material40);
    mesh.position.set(x, y, z);
    obj.add(mesh);
    return mesh;


}


function addPlaneHero(obj, x, y, z, r) {
    'use strict'
    Geometry = new THREE.BoxGeometry(0.1, 30, 30);
    mesh = new THREE.Mesh(Geometry, material0);
    mesh.position.set(x, y, z);
    mesh.rotation.y = 2 * Math.PI / r;
    obj.add(mesh);


}
//Enemie


function createShipEnemie(x, y, z) {
    'use strict';
    n_enemie++;
    shipEnemie = new THREE.Object3D();
    material50 = new THREE.MeshBasicMaterial({ color: '#97BC62' });


    addConeEnemie(shipEnemie, 0, 15, 5);
    addBolaEnemie(shipEnemie, 0, 0, 0);
    addCanoEnemie(shipEnemie, -14, 5, 5);
    addCanoEnemie(shipEnemie, 14, 5, 5);



    shipEnemie.position.x = x;
    shipEnemie.position.y = y;
    shipEnemie.position.z = z;

    shipEnemie.name = "Enemie" + n_enemie;

    console.log(shipEnemie.name);


}


function addConeEnemie(obj, x, y, z) {
    'use strict'

    Geometry = new THREE.SphereGeometry(6, 13, 12);
    var mate = new THREE.MeshLambertMaterial({ color: '#2C5F2D' })
    mesh = new THREE.Mesh(Geometry, mate);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(x, y, z);
    obj.add(mesh);


}

function addBolaEnemie(obj, x, y, z) {
    'use strict'

    Geometry = new THREE.SphereGeometry(14, 26, 20);
    mesh = new THREE.Mesh(Geometry, material50);
    mesh.position.set(x, y, z);
    obj.add(mesh);


}

function addCanoEnemie(obj, x, y, z) {
    'use strict'

    Geometry = new THREE.BoxGeometry(0.1, 30, 30)
    var mate = new THREE.MeshBasicMaterial({ color: '#ffffff' })
    mesh = new THREE.Mesh(Geometry, mate);
    mesh.position.set(x, y, z);
    obj.add(mesh);
    return mesh;
}