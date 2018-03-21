/**
 * MyPrism
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyPrism extends CGFobject {

    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }



    initBuffers() {
        //Fraga code
        /*
                this.vertices = [
                ];
        
                this.indices = [
                ];
        
                this.normals = [
                ];
        
        
        
                //V1 
                var angulo = Math.PI * 2 / this.slices;
                var vertice2 = angulo;
                var vertice = 0;
                var altura = this.stacks;
                var indice = 0;
        
                for (var s = 0; s < this.stacks; s++) {
                    for (var i = 0; i <= this.slices; i++) {
                        //1 vertice
                        var y = Math.sin(vertice2) * 0.5;
                        var x = y / Math.tan(vertice2);
                        var z = s;
                        this.vertices.push(x);
                        this.vertices.push(y);
                        this.vertices.push(z);
                        //1 Normal
                        this.normals.push(Math.cos(angulo * (i + 0.5)));
                        this.normals.push(Math.sin(angulo * (i + 0.5)));
                        this.normals.push(0);
                        //2 vertice
                        var y = Math.sin(vertice) * 0.5;
                        var x = y / Math.tan(vertice);
                        var z = s;
                        this.vertices.push(x);
                        this.vertices.push(y);
                        this.vertices.push(z);
                        //2 Normal
                        this.normals.push(Math.cos(angulo * (i + 0.5)));
                        this.normals.push(Math.sin(angulo * (i + 0.5)));
                        this.normals.push(0);
                        //3 vertice
                        var y = Math.sin(vertice2) * 0.5;
                        var x = y / Math.tan(vertice2);
                        var z = s + 1;
                        this.vertices.push(x);
                        this.vertices.push(y);
                        this.vertices.push(z);
                        //3 Normal
                        this.normals.push(Math.cos(angulo * (i + 0.5)));
                        this.normals.push(Math.sin(angulo * (i + 0.5)));
                        this.normals.push(0);
                        //4 vertice
                        var y = Math.sin(vertice) * 0.5;
                        var x = y / Math.tan(vertice);
                        var z = s + 1;
                        this.vertices.push(x);
                        this.vertices.push(y);
                        this.vertices.push(z);
                        //4 Normal
                        this.normals.push(Math.cos(angulo * (i + 0.5)));
                        this.normals.push(Math.sin(angulo * (i + 0.5)));
                        this.normals.push(0);
        
                        vertice = vertice + angulo;
                        vertice2 = vertice2 + angulo;
        
                        //Indices
                        this.indices.push(indice);
                        this.indices.push(indice + 1);
                        this.indices.push(indice + 2);
        
                        this.indices.push(indice + 3);
                        this.indices.push(indice + 2);
                        this.indices.push(indice + 1);
        
        
                        this.indices.push(indice + 2);
                        this.indices.push(indice + 1);
                        this.indices.push(indice);
        
                        this.indices.push(indice + 1);
                        this.indices.push(indice + 2);
                        this.indices.push(indice + 3);
                        indice = indice + 4;
                    }
                    vertice2 = angulo;
                    vertice = 0;
                }
        */
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
                this.vertices.push(Math.cos(ang * (j + 1)));
                this.vertices.push(Math.sin(ang * (j + 1)));
                this.vertices.push((1 / this.stacks) * i);


                this.normals.push(Math.cos(ang * j + 0.5 * ang));
                this.normals.push(Math.sin(ang * j + 0.5 * ang));
                this.normals.push(0);
                this.normals.push(Math.cos(ang * j + 0.5 * ang));
                this.normals.push(Math.sin(ang * j + 0.5 * ang));
                this.normals.push(0);

            }

        }




        for (let i = 0; i < this.slices * 2 * (this.stacks); i += 2) {

            if (i % this.stacks == 0 && i != 0)
                i += 2;

            this.indices.push(i);
            this.indices.push(i + 1);
            this.indices.push(i + 2);

            this.indices.push(i + 3);
            this.indices.push(i + 2);
            this.indices.push(i + 1);

        }

        console.log(this.vertices);
        console.log(this.indices);
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();

    };
};
