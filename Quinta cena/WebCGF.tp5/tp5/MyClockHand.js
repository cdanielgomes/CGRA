/**
* MyClockHand
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyClockHand extends CGFobject {
    constructor(scene, angle, height, width) {
        super(scene);
        this.ponteiro = new MyUnitCubeQuad(this.scene);
        this.angle = angle;
        this.height = height;
        this.width = width;

    };

    setAngle(angle) {
        this.angle = angle;
    }

    getAngle() {
        return this.angle;
    };

    display() {
        this.scene.pushMatrix();   
        this.scene.translate(0,0,0.5);
        this.scene.rotate(90,1,1,1);
        this.scene.scale(0.7,0.15,0.06);
        this.ponteiro.display();
        this.scene.popMatrix();
    };
};