/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject {

    constructor(scene) {
        super(scene);

        this.tronco = 
        this.wheel = new MyWheel(scene);

    }

    display(){

        this.scene.pushMatrix();
        this.scene.rotate(0,1,0,Math.PI);
        this.scene.pushMatrix();
        this.scene.translate(2,2,-2);
        this.wheel.display();
        this.scene.popMatrix();

        //another 

        this.scene.pushMatrix();
        this.scene.translate(7,2,-2);
        this.wheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        
//
        this.scene.pushMatrix();
        this.scene.translate(2,2,2);
        this.wheel.display();
        this.scene.popMatrix();

        //another 

        this.scene.pushMatrix();
        this.scene.translate(7,2,2);
        this.wheel.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        
    }
}
