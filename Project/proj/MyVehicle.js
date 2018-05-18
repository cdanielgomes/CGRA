/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject {

    constructor(scene) {
        super(scene);
        this.tronco = new MyUnitCubeQuad(scene);
        this.rightWheel = new MyWheel(scene);
        this.leftWheel = new MyWheel(scene);
        this.wheel = new MyWheel(scene);
        this.testWheel = new MyWheel(scene);
        //car controllers
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.angulo = 0;
        //wheels rotation
        this.a = 2;
        this.b = 2;
        this.c = 3;

        this.color = new CGFappearance(this.scene);
        //   this.color.setDiffuse(0.5, 0.5, 0.5, 1);

    }

    display() {


        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 2, 0);
        this.scene.pushMatrix();
        this.scene.translate(2.5 + this.x * 2, 1, 2 + this.y);
        this.scene.pushMatrix();
        this.scene.rotate(this.angulo, 0, 0, 2);
        this.rightWheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        //another 

        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.pushMatrix();
        this.scene.translate(-2.5 - this.x * 2, 1, 2 + this.y);
        this.scene.pushMatrix();
        this.scene.rotate(this.angulo, 0, 0, 2);
        this.leftWheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        //back


        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 2, 0);
        this.scene.pushMatrix();
        this.scene.translate(-2 + this.x * 2, 1, 2 + this.y);
        this.scene.pushMatrix();
        this.scene.rotate(this.angulo, 0, 0, 2);
        this.wheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();

         //another 
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.pushMatrix();
        this.scene.translate(2 - this.x * 2, 1, 2 + this.y);
        this.scene.pushMatrix();
        this.scene.rotate(this.angulo, 0, 0, 2);
        this.wheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
       
        //tronco
        this.scene.pushMatrix();
        this.scene.translate(0 - this.x, 0.5, 0 + this.y);
        this.scene.pushMatrix();
        this.scene.scale(4, 1.2, 2);
        this.scene.pushMatrix();
        this.scene.translate(0, 0.3, 0);
        this.color.apply();
        this.tronco.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();


    }

    update(speed) {

        this.x += speed * 0.2;
        //this.y += speed * 0.2;

        this.a = 0;
        this.b = 0;
        this.c = 1;

        this.angulo += speed*0.5;

    }
}
