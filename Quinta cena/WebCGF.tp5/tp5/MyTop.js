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
        this.indices = [];
        this.normals = [];
        this.texCoords = [];
       
        var ang = 2 * Math.PI / this.slices;


        // Center
        this.vertices.push(0);
        this.vertices.push(0);
        this.vertices.push(0);

        this.normals.push(0);
        this.normals.push(0);
        this.normals.push(1);

        this.texCoords.push(0.5, 0.5);

        for (let i = 0; i < this.slices; i++) {
            this.vertices.push(Math.cos(ang * i));
            this.vertices.push(Math.sin(ang * i));
            this.vertices.push(1);

            this.normals.push(0);
            this.normals.push(0);
            this.normals.push(1);

            this.texCoords.push(0.5 + Math.cos(ang * i) / 2, 0.5 - Math.sin(ang * i) / 2);
        }

        this.primitiveType = this.scene.gl.TRIANGLES;


        for (let i = 1; i <= this.slices; i++) {

            this.indices.push(i);

            if (i + 1 > this.slices)
                this.indices.push(1);
            else
                this.indices.push(i + 1);

            this.indices.push(0);
        }

        this.initGLBuffers();
    }




};