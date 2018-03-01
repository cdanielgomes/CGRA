/**
* MyTable
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyTable extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cube = new MyUnitCubeQuad(this.scene)
		this.leg = new MyLegs(this.scene);


	};

	display() {
		this.scene.pushMatrix();
		this.scene.translate(0,3.65,0);//altura das pernas 3.5 + metade da altura do tampo 0.3/2=0.15
		this.scene.pushMatrix();
		this.scene.scale(5, 0.3, 3);
		this.cube.display();
		this.scene.popMatrix();
		this.scene.popMatrix();
		


		this.scene.pushMatrix();
		this.scene.translate(-2.35,1.75,-1.35); //metade do x do tampo 5/2 = 2.5 - metade da largura da perna 0.3/2= 0.15
		this.leg.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2.35,1.75,1.35);
		this.leg.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2.35,1.75,1.35);
		this.leg.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2.35,1.75,-1.35);
		this.leg.display();
		this.scene.popMatrix();


	};





};
