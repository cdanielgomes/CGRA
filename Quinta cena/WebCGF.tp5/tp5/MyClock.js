/**
 * MyClock
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


class MyClock extends CGFobject {

    constructor(scene) {
        super(scene);
        this.cil = new MyCylinder(this.scene, 12, 12);
        this.top = new MyTop(this.scene, 12);
        this.ponteiroSec = new MyClockHand(this.scene, Math.PI*90/180,0.4,0.03);
        this.ponteiroMin = new MyClockHand(this.scene, Math.PI*45/180,0.4,0.07);
        this.ponteiroHour = new MyClockHand(this.scene, Math.PI*180/180,0.4,0.05);
        
        this.clockAppearance = new CGFappearance(this.scene);
		this.clockAppearance.loadTexture("../resources/images/clock.png");
        this.cil.initBuffers();
        this.top.initBuffers();
    }

    

    display() {
        var deg = Math.PI / 180;

        this.scene.pushMatrix();
        this.cil.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        
        this.clockAppearance.apply();
                
        this.top.display();
       
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.translate(0,0.3,1.1);
       
        this.ponteiroMin.display();       
        this.ponteiroSec.display();
       // this.ponteiroHour.display();
        this.scene.popMatrix();
    }


};