/**
* MyTable
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyTable extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cube = new MyUnitCubeQuad(this.scene)

	};

	display() {
		this.scene.pushMatrix();
		this.scene.scale(5, 0.3, 3);
		this.scene.pushMatrix();
		this.scene.translate(0.5, 12,0.5);
		this.cube.display();
		this.scene.popMatrix();
		this.scene.popMatrix();
	};





};
