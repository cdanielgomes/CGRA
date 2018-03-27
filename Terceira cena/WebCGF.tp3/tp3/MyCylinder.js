/**
 * MyCylinder
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCylinder extends CGFobject {

    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }



    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        this.primitiveType = this.scene.gl.TRIANGLES;


        var ang = 2 * Math.PI / this.slices;

        for (let j = 0; j < this.slices; j++) {
            for (let i = 0; i <= this.stacks; i++) {
                
                this.vertices.push(Math.cos(ang * j));
                this.vertices.push(Math.sin(ang * j));
                this.vertices.push((1 / this.stacks) * i);


                this.normals.push((Math.cos(ang * j + 0.5 * ang) + Math.cos(ang * (j +1) + 0.5 * ang))/2.0);
                this.normals.push((Math.sin(ang * j + 0.5 * ang) + Math.sin(ang * (j + 1) + 0.5 * ang)) / 2.0);
                this.normals.push(0);
                

            }

        }

        for (let i = 0; i < this.slices * 2 * (this.stacks + 1); i += 2) {

            if ((i - this.stacks * 2) % ((this.stacks + 1) * 2)  == 0 && i != 0)
                i += 2;

            if (i % (this.slices * 2 * (this.stacks + 1)) == 0)
                this.indices.push(0);
            else
                this.indices.push(i);

            if ((i + 1) % (this.slices * 2 * (this.stacks + 1) + 1) == 0)
                this.indices.push(1);
            else
                this.indices.push(i + 1);

            if ((i + 2) % (this.slices * 2 * (this.stacks + 1) + 2) == 0)
                this.indices.push(2);
            else
                this.indices.push(i + 2);

            if ((i + 3) % (this.slices * 2 * (this.stacks + 1) + 3) == 0)
                this.indices.push(3);
            else
                this.indices.push(i + 3);

            if ((i + 2) % (this.slices * 2 * (this.stacks + 1) + 2) == 0)
                this.indices.push(2);
            else
                this.indices.push(i + 2);

            if ((i + 1) % (this.slices * 2 * (this.stacks + 1) + 1) == 0)
                this.indices.push(1);
            else
                this.indices.push(i + 1);

        }

        
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();

    };
};
