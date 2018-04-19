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
        this.scene.translate(0.22,-0.071,0.5);
        this.scene.pushMatrix();   
        
        this.scene.rotate(this.angle,0,0,1);
        
        this.scene.pushMatrix();   
        this.scene.scale(this.height,this.width ,0.06);
        this.ponteiro.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
    };
};