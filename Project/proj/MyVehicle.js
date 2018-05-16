/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject {

    constructor(scene) {
        super(scene);

        this.tronco = new MyPrism(scene, 4, 20);
        this.wheel = new MyWheel(scene);

    }

    display() {

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 2, 0);
        this.scene.pushMatrix();
        this.scene.translate(-7, 2, 2);
        this.wheel.display();
        this.scene.popMatrix();
      
        //another 

        this.scene.pushMatrix();
        this.scene.translate(-2, 2, 2);
        this.wheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //
        this.scene.pushMatrix();
        this.scene.translate(2, 2, 2);
        this.wheel.display();
        this.scene.popMatrix();

        //another 

        this.scene.pushMatrix();
        this.scene.translate(7, 2, 2);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //  this.scene.rotate(0.5*Math.PI, 0,1,0);



        this.scene.pushMatrix();
        this.scene.scale(1.7, 2, 3);
        this.scene.pushMatrix();
        this.scene.rotate(0.25 * Math.PI, 0, 0, 3);
        // queria so meter o cubo entre as rodas
        this.scene.translate(0, 0, 0);
        this.tronco.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
