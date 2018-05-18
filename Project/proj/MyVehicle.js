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
        this.wheel2 = new MyWheel(scene);

        this.normal = true;
        this.left = true;
        //car controllers

        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.angulo = 0;
        //wheels rotation
        this.a = 2;
        this.b = 2;
        this.c = 3;

        this.pissas = 0;

        this.color = new CGFappearance(this.scene);
        //   this.color.setDiffuse(0.5, 0.5, 0.5, 1);

    }

    display() {

        this.scene.pushMatrix();
        this.scene.rotate(this.pissas, 0, 1, 0);

        this.scene.pushMatrix();
        this.scene.translate(-1.4, 0, 0);

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
  
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.pushMatrix();
        this.scene.translate(-2.5 - this.x * 2, 1, -2 + this.y * 2);

        this.rightWheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //another 

        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.pushMatrix();
        this.scene.translate(-2.5 - this.x * 2, 1, 2 + this.y * 2);
        this.leftWheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        //back


        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);

        this.scene.pushMatrix();
        this.scene.translate(2 - this.x * 2, 1, -2 + this.y * 2);
        this.wheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //another 
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.pushMatrix();
        this.scene.translate(2 - this.x * 2, 1, 2 + this.y * 2);
        this.wheel2.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

      
        this.scene.popMatrix();

        this.scene.popMatrix();

    }

    updateAllwheels(speed, angle) {
        this.leftWheel.setAngulo(speed * 0.5, angle);
        this.rightWheel.setAngulo(speed * 0.5, angle);
        this.wheel.setAngulo(speed * 0.5, 0);

    }

    update(speed, angle) {
        console.log("x = " + this.x + " - y = " + this.y);
        this.updateAllwheels(speed, angle);
        this.pissas += angle * speed * 0.2;
        this.x += speed * 0.2*Math.cos(angle);
        this.y += speed * 0.2*Math.sin(angle);
    }

    setLeft(bool) {
        this.left = bool;
    }

    turnNormal() {
        if (this.left) {
            this.leftWheel.setAngulo(0, Math.PI / 12);
            this.rightWheel.setAngulo(0, Math.PI / 12);

        }
        else {
            this.leftWheel.setAngulo(0, -Math.PI / 12);
            this.rightWheel.setAngulo(0, -Math.PI / 12);

        }
    }
}
