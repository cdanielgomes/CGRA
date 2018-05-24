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
        //car controllers
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.angulo = 0;

        this.pissas = 0;
        this.color = new CGFappearance(this.scene);
        //   this.color.setDiffuse(0.5, 0.5, 0.5, 1);

    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(-1.2, 0, 0);
        this.scene.pushMatrix();
        this.scene.rotate(this.pissas, 0, 1, 0);

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

        //direita

        this.scene.pushMatrix();
        this.scene.translate(this.x, 1,-2 + this.y);

        this.rightWheel.display();
        this.scene.popMatrix();



        //esquerda

        this.scene.pushMatrix();
        this.scene.translate(-2.5 - this.x, 1, 2 + this.y);

        this.leftWheel.display();
        this.scene.popMatrix();


        //roda de tras
        this.scene.pushMatrix();
        this.scene.translate(2 - this.x, 1, -2 + this.y);

        this.wheel.display();
        this.scene.popMatrix();


        //roda de tras 

        this.scene.pushMatrix();
        this.scene.translate(2 - this.x, 1, 2 + this.y);
        this.wheel2.display();
        this.scene.popMatrix();


        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    updateAllwheels(speed, angle) {
        this.leftWheel.setAngulo(speed, angle);
        this.rightWheel.setAngulo(speed, angle);
        this.wheel.setAngulo(speed, 0);
        this.wheel2.setAngulo(speed, 0);

    }

    update(speed, angle) {
        this.updateAllwheels(speed, angle);
        this.pissas += angle * speed;
        this.x += speed * Math.cos(angle);
        this.y += speed * Math.sin(angle);
        this.xrot += speed;
        this.zrot += speed;
    }


}
