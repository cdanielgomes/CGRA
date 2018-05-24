/**
 * MyTop
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


class MyTop extends CGFobject {

    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.normals = [];
        this.indices = [];

        var ang = (2 * Math.PI) / this.slices;

        for (let j = 0; j < this.slices; j++) {
            this.vertices.push(Math.cos(ang * j), Math.sin(ang * j), 0);
            this.normals.push(0, 0, 1);
        }

        this.vertices.push(0, 0, 0);
        this.normals.push(0, 0, 1);

        for (let i = 0; i < this.slices - 1; i++) {
            this.indices.push(i, i + 1, this.slices);
        }

        this.indices.push(this.slices - 1, 0, this.slices);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }




};