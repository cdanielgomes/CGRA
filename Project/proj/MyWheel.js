/**
 * MyWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyWheel extends CGFobject {

    constructor(scene) {
        super(scene);

        this.wheel = new MyCylinder(scene, 20, 20);
        this.top = new MyTop(this.scene, 20);
        this.top.initBuffers();
    }

    display(){

        this.wheel.display();
        this.top.display();

        this.scene.pushMatrix();
        this.scene.translate(0,0,2);
        this.scene.popMatrix();
    }
}