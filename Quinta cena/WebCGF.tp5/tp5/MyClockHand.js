/**
* MyClockHand
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyClockHand extends CGFobject {
    constructor(scene, height, width) {
        super(scene);
        this.ponteiro = new MyUnitCubeQuad(this.scene);
        this.height = height;
        this.width = width;
        this.angle = 0;
    };

    setAngle(angle) {
        this.angle = angle;
    }

    getAngle() {
        return this.angle;
    };

    display() {
        this.scene.pushMatrix();
        this.scene.rotate(this.angle, 0, 0, 1);
        this.scene.scale(this.width, this.height, 0.1);
        this.scene.translate(0.2, 0.5, 0);
        this.ponteiro.display();
        this.scene.popMatrix();
    };
};