/**
* MyLegs
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyLegs extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cube2 = new MyUnitCubeQuad(this.scene)

	};

	display() {
    
        this.scene.scale(0.3, 3.5, 0.3);
    
        this.scene.translate(0.5,0.5,0.5);
        this.cube2.display();    
        
	};





};
