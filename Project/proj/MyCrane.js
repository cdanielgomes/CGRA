/**
 * MyCrane
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


class MyCrane extends CGFobject {

    constructor(scene) {
        super(scene);
        this.base = new MyAxis(scene, 20, 20, [1, 0, 0]);
        this.axis = new MyAxis(scene, 20, 20, [0, 1, 0]);
        this.iman = new MyCylinderClosed(scene, 20, 20);
        this.linha = new MyCylinderClosed(scene, 20, 20);
        this.tronco1 = new MyPrismClosed(scene, 4, 20);
        this.tronco2 = new MyPrismClosed(scene, 4, 20);
        this.target = new MyTop(scene, 20);
        this.axisAngle = 0;
        this.baseAngle = 0;

        this.startCar = false;
        this.carSpot = false;
        this.gotCar = false;
        this.releaseCar = false;
        this.back = false;
        this.CraneAxisAngle = 0;
        this.CraneBaseAngle = 0;
    }

    display() {



        this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/2, 1, 0, 0);
        
        this.scene.pushMatrix();
        this.scene.translate(0, -5.45,0 );
        this.target.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(this.baseAngle, 0, 1, 0);

        this.base.display();


        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 3, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.scale(0.3, 0.3, 6);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.tronco1.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-0.35, 5.45, 3.5);
        this.axis.display();


        this.scene.pushMatrix();
        this.scene.rotate(this.axisAngle, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.scale(0.3, 0.3, 4);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.pushMatrix();
        this.scene.translate(1.5, 0, 0);
        this.tronco2.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();

     
        this.scene.pushMatrix();
        this.scene.translate(0.35, -Math.sin(this.axisAngle) * 4 + 0.2, Math.cos(this.axisAngle) * 4 - 0.2);

        this.scene.pushMatrix();
        this.scene.translate(0, -2, 0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 0.3);
        this.iman.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.scale(0.05, 0.05, 2);
        this.linha.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();

        this.scene.popMatrix();
        this.scene.popMatrix();
    }


    setAngle(baseAngle, axisAngle) {
        this.baseAngle = baseAngle;
        this.axisAngle = axisAngle;
    }



    update() {

        if (this.carSpot) {
            this.craneUpdate();
        }
    }



    craneUpdate() {
        if (!this.back) {
            if (this.CraneAxisAngle < Math.PI / 4 && !this.gotCar) {
                this.CraneAxisAngle += Math.PI / 32;

                if (this.CraneAxisAngle == Math.PI / 4) {
                    this.gotCar = true;
                }
            }

            if (this.gotCar) {
                if (this.CraneAxisAngle > 0)
                    this.CraneAxisAngle -= Math.PI / 32;
                else
                    this.startCar = true;


            }

            if (this.CraneBaseAngle < Math.PI && this.gotCar && this.CraneAxisAngle == 0)
                this.CraneBaseAngle += Math.PI / 144;

            if (Math.PI < this.CraneBaseAngle) {
                this.releaseCar = true;
                //update car position
            }

        }

        if (this.releaseCar) {
            if (this.CraneBaseAngle > 0)
                this.CraneBaseAngle -= Math.PI / 32;

            if (this.CraneBaseAngle <= 0) {
                this.CraneBaseAngle = 0;
                this.carSpot = false;
                this.gotCar = false;
                this.releaseCar = false;
                this.back = false;
            }

        }

        this.setAngle(this.CraneBaseAngle, this.CraneAxisAngle);
    }

    getStart(){
        return this.startCar;
    }

    setSpot(bool){
        this.carSpot = bool;
    }

    getMoving(){
        return this.carSpot == false && this.gotCar == false && this.releaseCar == false && this.back ==false;
    }
}