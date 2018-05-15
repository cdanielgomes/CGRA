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
        this.ponteiroSec = new MyClockHand(this.scene, 0.5, 0.015);
        this.ponteiroMin = new MyClockHand(this.scene, 0.5, 0.025);
        this.ponteiroHour = new MyClockHand(this.scene, 0.4, 0.025);
        this.updating = 0;
        this.currTimeAnterior = 0;
        this.ponteiroHour.setAngle(Math.PI * 180 / 180);
        this.ponteiroMin.setAngle(Math.PI * 45 / 180);
        this.ponteiroSec.setAngle(Math.PI * 90 / 180);
        this.clockAppearance = new CGFappearance(this.scene);
        this.clockAppearance.loadTexture("../resources/images/clock.png");
        this.cil.initBuffers();
        this.top.initBuffers();

        this.materialDefault = new CGFappearance(this.scene);

        this.ponteirosAppearance = new CGFappearance(this.scene);
        this.ponteirosAppearance.setDiffuse(0, 0, 0, 1);
		this.ponteirosAppearance.setSpecular(0.5, 0.6, 0.8, 1);
		this.ponteirosAppearance.setShininess(120);


        this.redAppearance = new CGFappearance(this.scene);
        this.redAppearance.setDiffuse(1, 0, 0, 1);
		this.redAppearance.setSpecular(1, 1, 1, 1);
		this.redAppearance.setShininess(10);
    }



    display() {
        var deg = Math.PI / 180;

        this.scene.pushMatrix();
        this.ponteirosAppearance.apply();
        this.scene.translate(0.000, 0.000, 1);
        this.ponteiroHour.display();
        this.ponteiroMin.display();
     
        this.redAppearance.apply();
        this.ponteiroSec.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.materialDefault.apply();
        this.cil.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.clockAppearance.apply();

        this.top.display();

        this.scene.popMatrix();


    }

    update(currTime) {

        if (this.currTimeAnterior == 0)
            this.currTimeAnterior = currTime;
        
        else {
            this.updating = currTime - this.currTimeAnterior + this.updating;
            this.currTimeAnterior = currTime;
            if (this.updating >= 1000) {
                this.updating -= 1000;
                this.ponteiroHour.setAngle(this.ponteiroHour.getAngle() - (((2 * Math.PI) / 60) / 60) / 60);
                this.ponteiroMin.setAngle(this.ponteiroMin.getAngle() - ((2 * Math.PI) / 60) / 60);
                this.ponteiroSec.setAngle(this.ponteiroSec.getAngle() - (2 * Math.PI) / 60);
            }
        }
    };

};