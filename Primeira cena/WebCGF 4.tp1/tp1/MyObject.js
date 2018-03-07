/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyObject extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [
				-0.5,-0.5,0.5,//0
				0.5,-0.5,0.5,//1
				-0.5,0.5,0.5,//2
				0.5,0.5,0.5, //3 - end of the positive face at Z
				-0.5,-0.5,-0.5,//4
				0.5,-0.5,-0.5,//5
				-0.5,0.5,-0.5,//6
				0.5,0.5,-0.5//7
				];

		this.indices = [
				0, 1, 2, 
				3, 2, 1,
				6,5,4,
				7,5,6,
				3,7,6,
				2,3,6,
				0,2,4,
				4,2,6,
				1,5,3,
				5,7,3,
				0,4,1,
				1,4,5,


			];
			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
