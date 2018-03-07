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
		this.scene.translate(0,0,0.5);
		this.quad.display();//front face
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(cvs*180, 0, 3,-0.5);
		this.quad.display();//back face
	};




	
};
