/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyUnitCubeQuad extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.quad = new MyQuad(this.scene)
		this.quad.initBuffers();
	};

	display(){
		var cvs = Math.PI/180;
		this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.quad.display();//front face
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(0,0,-0.5);
		this.scene.pushMatrix();
		this.scene.rotate(cvs*180, 0, 3,0);
		this.quad.display();//back face
		this.scene.popMatrix();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(0.5,0,0);
		this.scene.pushMatrix()
		this.scene.rotate(90*cvs, 0,1,0);
		this.quad.display();
		this.scene.popMatrix();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(-0.5,0,0);
		this.scene.pushMatrix();
		this.scene.rotate(-90*cvs, 0,1,0);
		this.quad.display();
		this.scene.popMatrix();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,-0.5,0);
		this.scene.pushMatrix();
		this.scene.rotate(90*cvs, 1,0,0);
		this.quad.display();
		this.scene.popMatrix();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.scene.pushMatrix();
		this.scene.rotate(-90*cvs, 1,0,0);
		this.quad.display();
		this.scene.popMatrix();
		this.scene.popMatrix();



};




	
};
