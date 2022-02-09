var bulletCount = 0;


function onKeyDown(e) {
    "use strict";

    switch (e.keyCode) {
        case 48: //0
            camera.position.set(0, 400, 400);
            CameraMove();
            break;
        case 49: //1
            SpotLight1Up();
            break;
        case 50: //2
            SpotLight2Up();
            break;
        case 51: //3
            SpotLight3Up();
            break;
        case 52: //4
            SpotLight4Up();
            break;
        case 53: //5
            cancelAnimationFrame(momemtum);
            TopCamera();

            break;
        case 54: //6
            cancelAnimationFrame(momemtum);
            TopCameraOrtographic();
            break;
        case 55: //7
            cancelAnimationFrame(momemtum);
            LateralCamera();
            break;
        case 56: //8
            cancelAnimationFrame(momemtum);
            FrontalCamera();
            break;
        case 57: //9
            scene.traverse(function(node) {

                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;

                }
            });

            break;
        case 32:
            if (alterar == 2) {
                Dispara(ship.position.x, ship.position.y + 13, ship.position.z - 26);
            } else if (alterar == 1) {
                Dispara(ship.position.x - 21, ship.position.y + 0.1 + 13, ship.position.z - 8);
            } else if (alterar == 3) {
                Dispara(ship.position.x + 21, ship.position.y + 0.1 + 13, ship.position.z - 8);
            } else {
                return;
            }

            break;

        case 83: //alterar valor do congelar/ pausar
        case 115: //S s-115
            if (congelar = !congelar)
                animate();
            else
                pausa();
            break;
        case 88: //  dispara centro
        case 120: //  dispara centro
            ship.canhaoMeio.material.color.set("green");
            ship.canhaoEsq.material.color.set("blue");
            ship.canhaoDir.material.color.set("blue");
            alterar = 2;
            break;
        case 122:
        case 90: // dispara lado esquerdo
            ship.canhaoMeio.material.color.set("blue");
            ship.canhaoEsq.material.color.set("green");
            ship.canhaoDir.material.color.set("blue");
            alterar = 1;

            break;

        case 67: // dispara lado direito
        case 99: // dispara lado direito
            ship.canhaoMeio.material.color.set("blue");
            ship.canhaoEsq.material.color.set("blue");
            ship.canhaoDir.material.color.set("green");
            alterar = 3;
            break;
        case 81: //Desliga/liga luz direcional
        case 113:
            DirLightUp();
            break;
        case 82:
        case 114:
            location.reload();
            break;

    }

}
//funcao para pausar-----------------------------------------
function pausa() {
    if (congelar) {
        document.getElementById("pausa").style.display = "flex"
        congelar = true;
    } else {
        document.getElementById("pausa").style.display = "none"
        congelar = false;
    }
}



function SpotLight1Up() {

    if (spot1 == false) {
        scene.add(spotLight1);
        scene.add(helper1);
        spot1 = true;
    } else {
        scene.remove(spotLight1);
        scene.remove(helper1);
        spot1 = false;
    }

}

function SpotLight2Up() {

    if (spot2 == false) {
        scene.add(spotLight2);
        scene.add(helper2);
        spot2 = true;
    } else {
        scene.remove(spotLight2);
        scene.remove(helper2);
        spot2 = false;
    }

}

function SpotLight3Up() {

    if (spot3 == false) {
        scene.add(spotLight3);
        scene.add(helper3);
        spot3 = true;
    } else {
        scene.remove(spotLight3);
        scene.remove(helper3);
        spot3 = false;
    }

}

function SpotLight4Up() {

    if (spot4 == false) {
        scene.add(spotLight4);
        scene.add(helper4);
        spot4 = true;
    } else {
        scene.remove(spotLight4);
        scene.remove(helper4);
        spot4 = false;
    }

}

function DirLightUp() {

    if (directonalLight == false) {
        scene.add(light);
        scene.add(DirectionalHelper);
        directonalLight = true;
    } else {
        scene.remove(light);
        scene.remove(DirectionalHelper);
        directonalLight = false;
    }

}

function movemimentoTeclas() {
    const heroi = scene.getObjectByName("Hero");
    const limite = 190;
    const limitey_min = 75;
    const limitey_max = 400;
    const capt2 = heroi.position.z;

    if (keyStates["ArrowRight"]) {
        if (isColision(Dir, heroi)) {
            heroi.position.x -= passohero;
            passohero = 0;
            return;
        }
        passohero += speed;
        heroi.position.x += passohero;
    }

    if (keyStates["ArrowLeft"]) {
        //capt <= limite * -1
        if (isColision(Esq, heroi)) {
            heroi.position.x += passohero;
            passohero = 0;
            return;
        }
        passohero += speed;
        heroi.position.x -= passohero;
    }

    if (keyStates["ArrowUp"]) {
        if (capt2 <= limitey_min) {
            passohero = 0;
            return;
        }
        passohero += speed;
        heroi.position.z += passohero * -1;
    }

    if (keyStates["ArrowDown"]) {
        if (capt2 >= limitey_max) {
            passohero = 0;
            return;
        }
        passohero += speed;
        heroi.position.z += passohero;
    }
}



function calculandoAsColisoes() {
    // Criando novas BoundingBox nos 7 objectos
    //  var inimigo1 = new THREE.Box3().setFromObject(block);


    var inimigo2 = new THREE.Box3().setFromObject(block1);
    var inimigo7 = new THREE.Box3().setFromObject(block6);


    var cinzento = {
        xMin: inimigo7.min.x,
        xMax: inimigo7.max.x,
        yMin: inimigo7.min.y,
        yMax: inimigo7.max.y,
        zMin: inimigo7.min.z,
        zMax: inimigo7.max.z,
    };

    var ouro = {
        xMin: inimigo2.min.x,
        xMax: inimigo2.max.x,
        yMin: inimigo2.min.y,
        yMax: inimigo2.max.y,
        zMin: inimigo2.min.z,
        zMax: inimigo2.max.z,
    };





    if ((ouro.xMin <= cinzento.xMax && ouro.xMax >= cinzento.xMin) &&
        (ouro.yMin <= cinzento.yMax && ouro.yMax >= cinzento.yMin) &&
        (ouro.zMin <= cinzento.zMax && ouro.zMax >= cinzento.zMin)) {

        return true;
    }


    return false;
}


function isColision(elemento1, elemento2) {
    // Criando novas BoundingBox nos objectos


    var obj1 = new THREE.Box3().setFromObject(elemento1);
    var obj2 = new THREE.Box3().setFromObject(elemento2);


    var BounderObj1 = {
        xMin: obj1.min.x,
        xMax: obj1.max.x,
        yMin: obj1.min.y,
        yMax: obj1.max.y,
        zMin: obj1.min.z,
        zMax: obj1.max.z,
    };

    var BounderObj2 = {
        xMin: obj2.min.x,
        xMax: obj2.max.x,
        yMin: obj2.min.y,
        yMax: obj2.max.y,
        zMin: obj2.min.z,
        zMax: obj2.max.z,
    };


    if ((BounderObj2.xMin <= BounderObj1.xMax && BounderObj2.xMax >= BounderObj1.xMin) &&
        (BounderObj2.yMin <= BounderObj1.yMax && BounderObj2.yMax >= BounderObj1.yMin) &&
        (BounderObj2.zMin <= BounderObj1.zMax && BounderObj2.zMax >= BounderObj1.zMin)
    ) {

        return true;
    }


    return false;
}


var vBullet = 1,
    acc = 0.20;

function Dispara(x, y, z) {



    material = new THREE.MeshPhongMaterial({ color: 0xfff, wireframe: false });
    geometry = new THREE.SphereGeometry(5, 26, 20);
    bullet = new THREE.Mesh(geometry, material);
    bullet.castShadow = true;
    bullet.receiveShadow = true;
    bullet.position.set(x, y, z);

    scene.add(bullet);
    bullets.push(bullet);



    //movementBullet();

}

function bulletControl() {

    bullets.forEach(b => {

        ships_exist.forEach(_ship => {

            if (isColision(b, _ship)) {

                scene.remove(_ship);
                ships_exist.splice(ships_exist.indexOf(_ship), 1)
                scene.remove(b);

            } else
                b.position.z -= vBala;

        });

        // if (isColision(b, Back)) {
        //     //isColision(b, Back);
        //     // setTimeout(removeBullet(b), 3000);
        //     alert(b);
        //     scene.remove(b);


        // } else {
        //     b.position.z -= vBala;
        // }

    });

}



function removeBullet(b) {
    scene.remove(b);
}