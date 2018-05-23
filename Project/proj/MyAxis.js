/**
 * MyCrane
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


class MyAxis extends CGFobject {
    constructor(scene, slices, stacks, rotation) {
        super(scene);
        this.axi = new MyCylinderClosed(scene, slices, stacks);
        this.top = new MyTop(scene, slices);
        this.top2 = new MyTop(scene, slices);
      
        this.rotation = rotation;
        this.top.initBuffers();
        this.top2.initBuffers();
        
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(0.7, 0.7, 0.7);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, this.rotation[0], this.rotation[1], this.rotation[2]);
        this.axi.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
     

    }

}