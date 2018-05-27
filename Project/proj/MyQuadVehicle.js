/**
 * MyQuadVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyQuadVehicle extends CGFobject {
	constructor(scene) {
		super(scene);

		
		this.initBuffers();

	};

	initBuffers() {
		
		this.vertices = [
			-0.5, -0.5, 0,
			0.5, -0.5, 0,
			-0.5, 0.5, 0,
			0.5, 0.5, 0
		];

		this.indices = [
			0, 1, 2,
			3, 2, 1
		];

		this.primitiveType = this.scene.gl.TRIANGLES;


		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];
		
		this.texCoords = [
		0.483,0.063,
		0.483,0.063,
		0.483,0.063,
		0.483,0.063,
		];
		this.initGLBuffers();
	};
};
