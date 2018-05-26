/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject {

    constructor(scene) {
        super(scene);
        this.tronco = new MyTronco(scene);
        this.rightWheel = new MyWheel(scene);
        this.leftWheel = new MyWheel(scene);
        this.wheel = new MyWheel(scene);
        this.wheel2 = new MyWheel(scene);
        //car controllers
        this.x = 0;
        this.z = 0;
        this.angulo = -Math.PI/2;
        this.rotacao = 0;
        this.color = new CGFappearance(this.scene);
        //   this.color.setDiffuse(0.5, 0.5, 0.5, 1);

    }

    display() {

        var deg = Math.PI / 180;

        

        this.scene.pushMatrix();
        this.scene.translate(-this.x,0,this.z);
        this.scene.translate(2.0, 0, 0);
        this.scene.rotate(this.rotacao, 0, 1, 0);
        this.scene.translate(-2.0, 0, 0);
        this.scene.pushMatrix();

        

        //tronco
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(180*deg, 0, 1, 0)
        this.color.apply();
        this.tronco.display();
        
        this.scene.popMatrix();

        //direita

        this.scene.pushMatrix();
        this.scene.translate(-2.3, 0.5,-0.7);

        this.rightWheel.display();
        this.scene.popMatrix();


        //esquerda

        this.scene.pushMatrix();
        this.scene.translate(-2.3, 0.5, 1.2);

        this.leftWheel.display();
        this.scene.popMatrix();


        //roda de tras
        this.scene.pushMatrix();
        this.scene.translate(1.9, 0.5, -0.7);
        this.wheel.display();
        this.scene.popMatrix();


        //roda de tras 

        this.scene.pushMatrix();
        this.scene.translate(1.9, 0.5, 1.2);
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
        this.rotacao += angle * speed; 
        this.x += speed * Math.cos(this.rotacao);
        this.z += speed * Math.sin(this.rotacao);

    }



}
