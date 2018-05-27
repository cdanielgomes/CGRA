/**
 * MyTrapezioBellow
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


class MyTrapezioBellow extends CGFobject {
   
    constructor(scene, B, b, h) {
        super(scene);

        this.B = B;
        this.b = b;
        this.h = h;

        this.initBuffers();
    }

    initBuffers() {

        var x1 = (this.B - this.b) / 2;
        var x2 = this.B - x1;

        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];


        for (var i = 0; i != 2; i++) {

            this.vertices.push(0, i * this.h, 0);
            this.vertices.push(this.B, i * this.h, 0);
            this.vertices.push(x1, i * this.h, this.h);
            this.vertices.push(x2, i * this.h, this.h);

            var n;

            if (i) {
                n = 1;
                this.indices.push(6, 5, 4);
                this.indices.push(7, 5, 6);
            } else {
                n = -1;
                this.indices.push(0, 1, 2);
                this.indices.push(2, 1, 3);

            }

            for (var j = 0; j < 4; j++)
                this.normals.push(0, n, 0);

        }

        for (var i = 0; i != 2; i++) {
            this.vertices.push(x1 * i, 0, this.h * i);
            this.vertices.push(x2 - x1 * (i - 1), 0, this.h * i);
            this.vertices.push(x2 - x1 * (i - 1), this.h, this.h * i);
            this.vertices.push(x1 * i, this.h, this.h * i);

            var n;

            if (i) {
                n = 1;
                this.indices.push(12, 13, 14);
                this.indices.push(12, 14, 15);
            } else {
                n = -1;
                this.indices.push(9, 8, 10);
                this.indices.push(8, 11, 10);

            }

            for (var j = 0; j < 4; j++)
                this.normals.push(0, 0, n);


        }

        for (var i = 0; i != 2; i++) {
            this.vertices.push(this.B * i, 0, 0);
            this.vertices.push(this.B * i, this.h, 0);

            var ang = Math.atan(x1 / this.h);


            if (i) {
                this.vertices.push(x2, 0, this.h);
                this.vertices.push(x2, this.h, this.h);

                this.indices.push(22, 20, 21);
                this.indices.push(22, 21, 23);


                for (var j = 0; j < 4; j++)
                    this.normals.push(Math.sin(ang), 0, Math.cos(ang));


            } else {

                this.vertices.push(x1, 0, this.h);
                this.vertices.push(x1, this.h, this.h);

                this.indices.push(16, 18, 19);
                this.indices.push(16, 19, 17);

                for (var j = 0; j < 4; j++)
                    this.normals.push(-Math.sin(ang), 0, Math.cos(ang));

            }

        }




       this.texCoords =[
            0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,

            0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,
		
            0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,

            0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,
        
            0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,

            0.483,0.063,
            0.483,0.063,
		    0.483,0.063,
		    0.483,0.063,
    ];

        console.log(this.vertices);
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

};