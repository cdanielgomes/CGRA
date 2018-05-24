/**
 * MySemiSphere
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
class MySemiSphere extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.scene = scene;
        this.slices = slices;
        this.stacks = stacks;

        this.semiSphere = new MySemi(scene, slices, stacks);
       this.bottom = new MyTop(scene, slices);
    }

    display() {
        this.semiSphere.display();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.bottom.display();
        this.scene.popMatrix();
    }

};
