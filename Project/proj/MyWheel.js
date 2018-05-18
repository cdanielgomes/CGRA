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
        this.tire = new CGFappearance(this.scene);
        this.tire.loadTexture("../resources/images/tire.png");
        this.raid = new CGFappearance(this.scene);
        this.raid.loadTexture("../resources/images/raid.png");
    }

    display(){
        
        
        this.tire.apply();
        this.wheel.display();
        
        this.raid.apply();
        this.top.display();

        this.scene.pushMatrix();
        this.scene.translate(0,0,2);
        this.scene.popMatrix();
    }
}