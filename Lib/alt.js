var camera,
    scene,
    renderer,
    cube,
    material0,
    mesh,
    Geometry,
    Dir,
    Esq,
    Back,
    Front,
    ship,
    shipEnemie1,
    max = 200,
    min = -200,
    passoenimie = 0,
    aume = 0.020,
    passoenimie1 = 0,
    aume1 = 0.020,
    material50,
    passohero = 1,
    speed = 0.24,
    n_enemie = 0,
    ironTexture = THREE.ImageUtils.loadTexture('Lib/textures/ball.png'),
    planeTexture = THREE.ImageUtils.loadTexture('Lib/textures/concrete.png'),
    brickTexture = THREE.ImageUtils.loadTexture('Lib/textures/brick.png'),
    oGrito = THREE.ImageUtils.loadTexture('Lib/textures/paints/ogrito.jpg'),
    monaLisa = THREE.ImageUtils.loadTexture('Lib/textures/paints/monal.jpg'),
    blocodire;
var shipEnemie, col, ver = 0;
var block, block1, block2, block3, block4, block5, block6;
var alterar = 0;
var keyStates = {};
var directonalLight = false;
var momemtum;
var bullets = [];
var bullet;
var posicao;
var vBala = 10;
var angle = 0;
var radius = 500;
var spot1 = true,
    spot2 = true,
    spot3 = true,
    spot4 = true;
var hits, ship;
var Ships = {
    id: 0,
    hits: 0,
    ship: undefined
};
let startGame = false;
var ships_exist = [];
var congelar = Boolean;

document.querySelector("#start-btn").addEventListener("click", () => {
    const gameMenu = document.querySelector(".game-menu");
    gameMenu.style.display = "none";
    startGame = true;
    start();
});


function createScene() {
    "use strict";
    scene = new THREE.Scene();
    FrontalCamera();

    const axesHelper = new THREE.AxesHelper(200);

    scene.add(axesHelper);

    const background = new THREE.Mesh(new THREE.SphereGeometry(1000, 200), new THREE.MeshBasicMaterial({
        color: "#0000ff",
        wireframe: true
    }));
    scene.add(background);


    const chao = new THREE.MeshPhongMaterial({
        map: planeTexture
    });


    var plane = new THREE.Mesh(new THREE.BoxGeometry(1000, 1500, 1), chao);
    plane.rotation.x = Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);





    const material2 = new THREE.MeshPhongMaterial({
        map: brickTexture
    });
    const materialO = new THREE.MeshPhongMaterial({
        map: brickTexture
    });

    Esq = new THREE.Mesh(new THREE.BoxGeometry(1500, 250, 30), material2);
    Esq.receiveShadow = true;
    Esq.position.set(-500, 160, 0);


    Esq.rotation.y = Math.PI / 2;
    scene.add(Esq);

    Dir = new THREE.Mesh(new THREE.BoxGeometry(1500, 250, 30), materialO);
    Dir.receiveShadow = true;
    Dir.position.set(500, 160, 0);

    Dir.rotation.y = Math.PI / 2;

    scene.add(Dir);


    const material5 = new THREE.MeshBasicMaterial({
        map: brickTexture
    });
    Back = new THREE.Mesh(new THREE.BoxGeometry(1000, 250, 30), material5);
    Back.position.set(0, 160, -750);

    scene.add(Back);

    Front = new THREE.Mesh(new THREE.BoxGeometry(1000, 250, 30), material5);
    Front.position.set(0, 160, 750);
    scene.add(Front);

    var paintful = new THREE.MeshPhongMaterial({
        map: oGrito
    });
    var paint = new THREE.Mesh(new THREE.BoxGeometry(300, 180, 2), paintful);
    paint.position.set(482, 150, 0);
    paint.rotation.y = Math.PI / 2;
    scene.add(paint);

    paintful = new THREE.MeshPhongMaterial({
        map: monaLisa
    });
    var paint = new THREE.Mesh(new THREE.BoxGeometry(300, 180, 2), paintful);
    paint.position.set(-482, 150, 0);
    paint.rotation.y = Math.PI / 2;
    scene.add(paint);

    createShipEnemie(0, 30, -350);
    shipEnemie.rotation.x = Math.PI / 2;
    scene.add(shipEnemie);
    Ships.id++;
    Ships.hits = 3;
    Ships.ship = shipEnemie;

    ships_exist.push(shipEnemie);



    createShipEnemie(-100, 30, -350);
    shipEnemie.rotation.x = Math.PI / 2;
    scene.add(shipEnemie);

    Ships.id++;
    Ships.hits = 3;
    Ships.ship = shipEnemie;

    ships_exist.push(shipEnemie);


    createShipEnemie(-200, 30, -250);
    shipEnemie.rotation.x = Math.PI / 2;
    scene.add(shipEnemie);
    Ships.id++;
    Ships.hits = 3;
    Ships.ship = shipEnemie;

    ships_exist.push(shipEnemie);

    createShipEnemie(200, 30, -200);
    shipEnemie.rotation.x = Math.PI / 2;
    scene.add(shipEnemie);

    Ships.id++;
    Ships.hits = 3;
    Ships.ship = shipEnemie;

    ships_exist.push(shipEnemie);

    createShipEnemie(-150, 30, -100);
    shipEnemie.rotation.x = Math.PI / 2;
    scene.add(shipEnemie);
    Ships.id++;
    Ships.hits = 3;
    Ships.ship = shipEnemie;
    ships_exist.push(shipEnemie);

    createShipEnemie(120, 30, -20);
    shipEnemie.rotation.x = Math.PI / 2;
    scene.add(shipEnemie);
    Ships.id++;
    Ships.hits = 3;
    Ships.ship = shipEnemie;

    ships_exist.push(shipEnemie);

    createShipEnemie(200, 30, -300);
    shipEnemie.rotation.x = Math.PI / 2;
    scene.add(shipEnemie);
    Ships.id++;
    Ships.hits = 3;
    Ships.ship = shipEnemie;
    ships_exist.push(shipEnemie);
    console.log(ships_exist);


    createShipHero(0, 20, 300);


    ship.rotation.x = -Math.PI / 2;
    scene.add(ship);
    ambientLight();
    lightDiretionalOn();
    spotLights();

    //SpotS();


}




function render() {
    "use strict";
    renderer.render(scene, camera);

}




function init() {
    "use strict";
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMapBias = 0.0039;
    renderer.shadowMapDarkness = 0.5;
    renderer.shadowMapWidth = 1024;
    renderer.shadowMapHeight = 1024;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    createScene();
    render();

    document.addEventListener('keydown', (event) => {
        keyStates[event.code] = true;
    });

    document.addEventListener('keyup', (event) => {
        keyStates[event.code] = false;
    });



    window.addEventListener("keydown", onKeyDown);


}

function CameraMove() {

    // Use Math.cos and Math.sin to set camera X and Z values based on angle. 
    camera.position.x = radius * Math.cos(angle);
    camera.position.z = radius * Math.sin(angle);
    angle += 0.01;
    OrbitalCamera();
    momemtum = requestAnimationFrame(CameraMove);

}

function animate() {

    bulletControl();
    //console.log(bullet[0]);





    //aux = 1 + aume;


    block = scene.getObjectByName("Enemie1");
    block1 = scene.getObjectByName("Enemie2");
    block3 = scene.getObjectByName("Enemie4");
    block2 = scene.getObjectByName("Enemie3");
    block4 = scene.getObjectByName("Enemie5");
    block5 = scene.getObjectByName("Enemie6");

    block6 = scene.getObjectByName("Enemie7");


    if (!colision_in_block() && ver == 0 || passoenimie <= 0) {
        passoenimie += aume;
        ver = 0;
        if (block != null)
            block.position.x = -410 * (Math.cos(passoenimie));
        if (block1 != null)
            block1.position.x = -240 * (Math.cos(passoenimie));
        if (block2 != null)
            block2.position.x = 50 * (Math.cos(passoenimie));
        if (block3 != null)
            block3.position.x = -60 * (Math.cos(passoenimie));
        if (block4 != null)
            block4.position.x = -250 * (Math.cos(passoenimie));
        if (block5 != null)
            block5.position.x = 280 * (Math.cos(passoenimie));
        if (block6 != null)
            block6.position.x = 370 * (Math.cos(passoenimie));
    } else {
        passoenimie -= aume;
        if (ver == 0) {
            ver = 1;
        }

        if (block != null)
            block.position.x = -410 * (Math.cos(passoenimie));
        if (block1 != null)
            block1.position.x = -240 * (Math.cos(passoenimie));
        if (block2 != null)
            block2.position.x = 50 * (Math.cos(passoenimie));
        if (block3 != null)
            block3.position.x = -60 * (Math.cos(passoenimie));
        if (block4 != null)
            block4.position.x = -250 * (Math.cos(passoenimie));
        if (block5 != null)
            block5.position.x = 280 * (Math.cos(passoenimie));
        if (block6 != null)
            block6.position.x = 370 * (Math.cos(passoenimie));
    }





    movemimentoTeclas();
    render();

    //para congelar
    if (congelar) {

        requestAnimationFrame(animate);
    }

}


function colision_in_block() {
    for (let i = 0; i < ships_exist.length; i++) {
        for (let j = i + 1; j < ships_exist.length; j++) {
            if (isColision(ships_exist[i], ships_exist[j]))
                return true;
        }

    }
    return false;
}




function render() {
    "use strict";
    renderer.render(scene, camera);
}