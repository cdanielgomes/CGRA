/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


 class MyTable extends CGFobject
 {
    constructor() {
        super();
        this.cube = new MyUnitCubeQuad(this.scene);
        this.cube.initBuffers();        
        
    }
    
    display(){
        this.scene.scale(5,0.3,3);
        cube.display();
    }
 }