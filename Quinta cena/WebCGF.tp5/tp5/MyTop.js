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

    initBuffers(){
    this.vertices = [];
    this.indices = [];
    this.normals = [];

    this.primitiveType = this.scene.gl.TRIANGLES;

    var ang = 2 * Math.PI / this.slices;


    // Center
    this.vertices.push(0);
    this.vertices.push(0);
    this.vertices.push(0);

    this.normals.push(0);
    this.normals.push(0);
    this.normals.push(1);

    for(let i = 0; i < this.slices; i++){
            this.vertices.push(Math.cos(ang * i));
            this.vertices.push(Math.sin(ang * i));
            this.vertices.push(1);

            this.normals.push(0);
            this.normals.push(0);
            this.normals.push(1);
    }

    for(let i = 1; i <= this.slices; i++){
        
        this.indices.push(i);

        if(i+1 > this.slices)
            this.indices.push(1);
        else
            this.indices.push(i+1);

        this.indices.push(0);
    }

    console.info(this.indices);
    console.info(this.vertices);
    
    this.initGLBuffers();
    }
    
   
};