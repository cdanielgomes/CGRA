/**
 * MyWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyWheel extends CGFobject {

    constructor(scene) {
        super(scene);
        this.angulo = 0;
        this.angle = 0;
        this.wheel = new MyCylinderClosed(scene, 20, 20);
        this.tire = new CGFappearance(this.scene);
        this.tire.loadTexture("../resources/images/tire.png");
        this.raid = new CGFappearance(this.scene);
        this.raid.loadTexture("../resources/images/raid.png");
    }

    display() {


        this.raid.apply();
        this.scene.pushMatrix();
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.pushMatrix();
        this.scene.rotate(this.angulo, 0, 0, 1);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.wheel.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();


    }

    setAngulo(angulo, angle) {
        this.angulo += angulo;
        this.angle = angle;
    }

}