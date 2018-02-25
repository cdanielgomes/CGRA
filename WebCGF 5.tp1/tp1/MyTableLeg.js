/**
 * MyTableLeg
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


 class MyTableLeg extends CGFobject
 {
    constructor() {
        super();
        this.leg = new MyUnitCubeQuad(this.scene);
    }

    display(){
        
    }
    
 }