/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject {

    constructor(scene) {
        super(scene);

        this.tronco = new MyUnitCubeQuad(scene);
        this.wheel = new MyWheel(scene);

    }

    display() {

        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(Math.PI, 0, 2, 0);
        this.scene.pushMatrix();
        this.scene.translate(2.5, 1, 2);
        this.wheel.display();
        this.scene.popMatrix();
      
        //another 

        this.scene.pushMatrix();
        this.scene.translate(-2, 1, 2);
        this.wheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(2, 1, 2);
        this.wheel.display();
        this.scene.popMatrix();

        //another 

        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(-2.5, 1, 2);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //  this.scene.rotate(0.5*Math.PI, 0,1,0);



        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.scale(4, 1.2, 2);
        this.scene.translate(0, 0.3, 0);
        this.scene.pushMatrix();
        //this.scene.rotate(0.25 * Math.PI, 0, 0, 3);
        // queria so meter o cubo entre as rodas
        this.tronco.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
