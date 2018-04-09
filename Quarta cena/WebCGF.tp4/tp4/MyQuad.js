/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyQuad extends CGFobject {
	constructor(scene, minS, maxS, minT, maxT) {
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
			this.minS, this.minT,
			this.minS, this.maxT,
			this.maxS, this.minT,
			this.maxS, this.maxS
		];
		this.initGLBuffers();
	};
};
