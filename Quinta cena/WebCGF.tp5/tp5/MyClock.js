/**
 * MyClock
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


class MyClock extends CGFobject {
    
    constructor(scene) {
        super(scene);
        this.cil = new MyCylinder(this.scene, 12, 12);
        this.cil.initBuffers();
        this.top = new MyTop(this.scene, 12);
        this.top.initBuffers();
    }

    display(){
        var deg = Math.PI/180;

        this.scene.pushMatrix();
		this.cil.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.top.display();
		this.scene.popMatrix();
    }

    
};