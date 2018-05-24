/**
 * MyCylinderClosed
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCylinderClosed extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.cylinder = new MyCylinder(scene, slices, stacks);
        this.top1 = new MyTop(scene, slices);
        this.top2 = new MyTop(scene, slices);
        this.top1.initBuffers();
        this.top2.initBuffers();
    }

    display() {

        this.cylinder.display();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 1, 0, 0);

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