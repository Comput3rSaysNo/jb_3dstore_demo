import * as BABYLON from "@babylonjs/core";

export class JbStore {
    public static CreateScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene {
        
        var groundWidth = 3500.0;
        var groundLength = 3500.0;
        var wallHeight = 1300.0;

        var scene = new BABYLON.Scene(engine);

        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        var light2 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

        // Our built-in 'ground' shape. Params: name, options, scene
        var ground = BABYLON.MeshBuilder.CreateGround("ground",{width: groundWidth, height: groundLength}, scene);

        var pillar1 = BABYLON.MeshBuilder.CreateBox("box", {height: wallHeight, width: 50, depth:  50}, scene);
        pillar1.position.x = groundLength /2 * -1;
        pillar1.position.y = wallHeight / 2;
        pillar1.position.z = groundWidth /2 ;

        var wall1 = BABYLON.MeshBuilder.CreateBox("box", {height: wallHeight, width: groundWidth, depth: 10 }, scene);
        wall1.position.x = 0;
        wall1.position.y = wallHeight / 2;
        wall1.position.z = groundLength / 2;

        var wall2 = BABYLON.MeshBuilder.CreateBox("box", {height: wallHeight, width: groundLength, depth: 10 }, scene);
        wall2.position.x = -1.0 * groundWidth/2;
        wall2.position.y = wallHeight / 2;
        wall2.position.z = 0;
        wall2.rotation.y = Math.PI / 2;
        wall2.rotation.z = Math.PI ;

        var jbFloorMaterial = new BABYLON.StandardMaterial("", scene);
        jbFloorMaterial.alpha = 1;
        jbFloorMaterial.diffuseColor = BABYLON.Color3.FromHexString("#555555");
        jbFloorMaterial.diffuseTexture = new BABYLON.Texture("https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb3IlMjB0ZXh0dXJlfGVufDB8fDB8fHww&w=1000&q=80", scene);

        var jbBlackMaterial = new BABYLON.StandardMaterial("", scene);
        jbBlackMaterial.alpha = 1;
        jbBlackMaterial.diffuseColor = BABYLON.Color3.FromHexString("#000000");

        var jbYellowMaterial = new BABYLON.StandardMaterial("", scene);
        jbYellowMaterial.alpha = 1;
        jbYellowMaterial.diffuseColor = BABYLON.Color3.FromHexString("#fcd804");
        
        var jbYellowMaterialWithLogo = new BABYLON.StandardMaterial("", scene);
        jbYellowMaterialWithLogo.alpha = 1;
        jbYellowMaterialWithLogo.diffuseColor = BABYLON.Color3.FromHexString("#fce93d");
        jbYellowMaterialWithLogo.diffuseTexture = new BABYLON.Texture("https://assets-us-01.kc-usercontent.com/7af951a6-2a13-004b-f0eb-a87382a5b2e7/9836871f-3305-4fd7-ba13-395819037e7a/JB_HI_FI.png", scene);

        var jbTableMaterial = new BABYLON.StandardMaterial("", scene);
        jbTableMaterial.alpha = 1;
        jbTableMaterial.diffuseColor = BABYLON.Color3.FromHexString("#402F1D");
        jbTableMaterial.diffuseTexture = new BABYLON.Texture("https://images.unsplash.com/photo-1625496235025-d783abf061c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhYmxlJTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", scene);

        

        ground.material = jbFloorMaterial;
        wall1.material = jbYellowMaterial;
        wall2.material = jbYellowMaterialWithLogo;
        pillar1.material = jbBlackMaterial;

        var table1 = BABYLON.MeshBuilder.CreateBox("box", {height: 50, width: 500, depth: 1000 }, scene);
        table1.position.y = 250;
        table1.position.z = 600;

        var table1_leg1 = BABYLON.MeshBuilder.CreateBox("box", {height: 250, width: 50, depth: 50 }, scene);
        table1_leg1.position.y = 125;
        table1_leg1.position.x = -200;
        table1_leg1.position.z = 1045;

        var table1_leg2 = BABYLON.MeshBuilder.CreateBox("box", {height: 250, width: 50, depth: 50 }, scene);
        table1_leg2.position.y = 125;
        table1_leg2.position.x = 200;
        table1_leg2.position.z = 1045;

        var table1_leg3 = BABYLON.MeshBuilder.CreateBox("box", {height: 250, width: 50, depth: 50 }, scene);
        table1_leg3.position.y = 125;
        table1_leg3.position.x = -200;
        table1_leg3.position.z = 145;

        var table1_leg4 = BABYLON.MeshBuilder.CreateBox("box", {height: 250, width: 50, depth: 50 }, scene);
        table1_leg4.position.y = 125;
        table1_leg4.position.x = 200;
        table1_leg4.position.z = 145;

        table1.material = jbTableMaterial;
        table1_leg1.material = jbTableMaterial;
        table1_leg2.material = jbTableMaterial;
        table1_leg3.material = jbTableMaterial;
        table1_leg4.material = jbTableMaterial;


        var iphoneMaterial = new BABYLON.StandardMaterial("", scene);
        iphoneMaterial.diffuseTexture = new BABYLON.Texture("https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", scene);


        var iphone1 = BABYLON.MeshBuilder.CreateBox("box", {height: 100, width: 40, depth: 5 }, scene);
        iphone1.position.x = 150;
        iphone1.position.y = 280;
        iphone1.position.z = 600;
        iphone1.rotation.x = Math.PI /2 ;
        iphone1.rotation.y = Math.PI /2 ;
        iphone1.material = iphoneMaterial;
        
        var iphone2 = BABYLON.MeshBuilder.CreateBox("box", {height: 100, width: 40, depth: 5 }, scene);
        iphone2.position.x = 150;
        iphone2.position.y = 280;
        iphone2.position.z = 800;
        iphone2.rotation.x = Math.PI /2 ;
        iphone2.rotation.y = Math.PI /2 ;
        iphone2.material = iphoneMaterial;

        var iphone3 = BABYLON.MeshBuilder.CreateBox("box", {height: 100, width: 40, depth: 5 }, scene);
        iphone3.position.x = 150;
        iphone3.position.y = 280;
        iphone3.position.z = 400;
        iphone3.rotation.x = Math.PI /2 ;
        iphone3.rotation.y = Math.PI /2 ;
        iphone3.material = iphoneMaterial;

        var tv = BABYLON.MeshBuilder.CreateBox("box", {height: 500, width: 900, depth: 5 }, scene);
        tv.position.x = 0;
        tv.position.y = 550;
        tv.position.z = groundLength / 2 - 100;

        var tvMaterial = new BABYLON.StandardMaterial("", scene);
        tvMaterial.diffuseTexture = new BABYLON.Texture("https://media.istockphoto.com/id/1475562738/photo/alpine-landscape-in-bernina-pass-engadine-valley-graubunden-swiss-alps-border-with-italy.webp?b=1&s=170667a&w=0&k=20&c=59ZN2J9PhK2V5bm9z2hTpi1o-ANiQIlHkVV8ivaNYFQ=", scene);
        tv.material = tvMaterial;


        // jb catalogue
        var jbcatalogue = BABYLON.MeshBuilder.CreateBox("box", {height: 150, width: 100, depth: 5 }, scene);
        jbcatalogue.position.x = 110;
        jbcatalogue.position.y = 280;
        jbcatalogue.position.z = 220;
        jbcatalogue.rotation.x = Math.PI /2 ;
        jbcatalogue.rotation.y = Math.PI /2 ;
        jbcatalogue.rotation.z = Math.PI + 0.1 ;

        var jbcatalogueMaterial = new BABYLON.StandardMaterial("", scene);
        jbcatalogueMaterial.diffuseTexture = new BABYLON.Texture("https://image.isu.pub/130221050051-e0c9290ca6dd41cfaf562215964cf229/jpg/page_1_thumb_large.jpg", scene);
        jbcatalogue.material = jbcatalogueMaterial;

        var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 4, 4, new BABYLON.Vector3(1000, 800,0), scene);
        camera.attachControl(canvas, true);
        camera.setTarget(table1);
        camera.attachControl(canvas, true);

        
        // register actions
        jbcatalogue.actionManager = new BABYLON.ActionManager(scene);
        jbcatalogue.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger
                },
                function () { 
                    document.getElementById("catalogue_dialog").style.display = 'block';
                    
                }
            )
        );

        iphone1.actionManager = new BABYLON.ActionManager(scene);
        iphone1.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger
                },
                function () { 
                    document.getElementById("iphone_dialog").style.display = 'block';
                    
                }
            )
        );
        iphone2.actionManager = new BABYLON.ActionManager(scene);
        iphone2.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger
                },
                function () { 
                    document.getElementById("iphone_dialog").style.display = 'block';
                    
                }
            )
        );

        iphone3.actionManager = new BABYLON.ActionManager(scene);
        iphone3.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger
                },
                function () { 
                    document.getElementById("iphone_dialog").style.display = 'block';
                    
                }
            )
        );


        tv.actionManager = new BABYLON.ActionManager(scene);
        tv.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger
                },
                function () { 
                    document.getElementById("tv_dialog").style.display = 'block';
                    
                }
            )
        );
        return scene;
    }
};
