/**
 * MyPrismClosed
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyPrismClosed extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene, slices, stacks);
        this.prism = new MyPrism(scene, slices, stacks);
        this.top1 = new MyQuad(scene);
        this.top2 = new MyQuad(scene);

    }

    display() {


        this.prism.display();


        this.scene.pushMatrix();
        this.scene.scale(1.415, 1.415, 1.415);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.705);
        this.top1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.top2.display();

        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }

}