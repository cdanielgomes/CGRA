/**
 * MyWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyWheel extends CGFobject {

    constructor(scene) {
        super(scene);
        this.angulo = 0;
        this.wheel = new MyCylinder(scene, 20, 20);
        this.top = new MyTop(this.scene, 20);
        this.top.initBuffers();
        this.tire = new CGFappearance(this.scene);
        this.tire.loadTexture("../resources/images/tire.png");
        this.raid = new CGFappearance(this.scene);
        this.raid.loadTexture("../resources/images/raid.png");
    }

    display() {


        this.tire.apply();
        this.raid.apply();

        this.scene.pushMatrix();
        this.scene.rotate(this.angulo, 0, 0, 2);
        this.wheel.display();
        this.top.display();

        this.scene.popMatrix();

        console.log(this.angulo);
    }

    setAngulo(angulo){
        this.angulo += angulo;
    }

}