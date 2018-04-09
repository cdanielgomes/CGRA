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

		this.scene.pushMatrix();
		this.scene.scale(0.3, 3.5, 0.3);
		this.cube2.display();
		this.scene.popMatrix();
	


	};





};
