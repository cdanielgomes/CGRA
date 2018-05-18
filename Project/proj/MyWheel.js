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
        this.scene.rotate(this.angle, 0, 2, 0);
        this.scene.pushMatrix();
        this.scene.rotate(this.angulo, 0, 0, 2);
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.wheel.display();
        this.top.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
    
        
    }

    setAngulo(angulo, angle){
        this.angulo += angulo;
        this.angle = angle;
    }

}