/**
 * MyCylinderClosedWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCylinderClosedWheel extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.cylinder = new MyCylinder(scene, slices, stacks);
        this.top1 = new MyTop(scene, slices);
        this.top2 = new MyTop(scene, slices);
        this.top1.initBuffers();
        this.top2.initBuffers();

        this.tire = new CGFappearance(this.scene);
        this.tire.loadTexture("../resources/images/tire.png");
        this.raid = new CGFappearance(this.scene);
        this.raid.loadTexture("../resources/images/raid.png");
    }

    display() {
        
        this.tire.apply();
        this.cylinder.display();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 1, 0, 0);
        

        this.raid.apply();
        this.top1.display();
       
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -1);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.top2.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}