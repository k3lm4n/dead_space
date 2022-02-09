var spotLight1, spotLight2, spotLight3, spotLight4, helper1, helper2, helper3, helper4;
var light, DirectionalHelper;

function lightDiretionalOn() {


    light = new THREE.DirectionalLight(0xffffff, 1, 100);
    light.position.set(200, 300, 0);

    light.castShadow = true;
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    light.shadowCameraVisible = true;


    DirectionalHelper = new THREE.DirectionalLightHelper(light, 10);




}

function spotLights() {
    spotLight1 = new THREE.SpotLight(0xffffff);
    spotLight1.position.set(200, 250, -450);
    //
    spotLight1.castShadow = true;
    spotLight1.shadow.mapSize.width = 512;
    spotLight1.shadow.mapSize.height = 512;
    spotLight1.shadow.camera.near = 0.5;
    spotLight1.shadow.camera.far = 500;
    spotLight1.shadow.focus = 1;
    spotLight1.intensity = 0.4;
    //

    helper1 = new THREE.DirectionalLightHelper(spotLight1, 10);
    helper1.update();




    spotLight2 = new THREE.SpotLight(0xffffff);
    spotLight2.position.set(-200, 250, -450);

    //
    spotLight2.castShadow = true;
    spotLight2.shadow.mapSize.width = 512;
    spotLight2.shadow.mapSize.height = 512;
    spotLight2.shadow.camera.near = 0.5;
    spotLight2.shadow.camera.far = 500;
    spotLight2.shadow.focus = 1;
    spotLight2.intensity = 0.4;
    //
    helper2 = new THREE.DirectionalLightHelper(spotLight2, 10);

    helper2.update();

    spotLight3 = new THREE.SpotLight(0xffffff);
    spotLight3.position.set(-200, 250, 450);
    //
    spotLight3.castShadow = true;
    spotLight3.shadow.mapSize.width = 512;
    spotLight3.shadow.mapSize.height = 512;
    spotLight3.shadow.camera.near = 0.5;
    spotLight3.shadow.camera.far = 500;
    spotLight3.shadow.focus = 1;
    spotLight3.intensity = 0.4;
    //
    helper3 = new THREE.DirectionalLightHelper(spotLight3, 10);

    helper3.update();

    spotLight4 = new THREE.SpotLight(0xffffff);
    spotLight4.position.set(200, 250, 450);
    //
    spotLight4.castShadow = true;
    spotLight4.shadow.mapSize.width = 512;
    spotLight4.shadow.mapSize.height = 512;
    spotLight4.shadow.camera.near = 0.5;
    spotLight4.shadow.camera.far = 500;
    spotLight4.shadow.focus = 1;
    spotLight4.intensity = 0.4;
    //

    helper4 = new THREE.DirectionalLightHelper(spotLight4, 10);
    helper4.update();
}

function ambientLight() {
    ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

}