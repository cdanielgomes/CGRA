/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCar extends CGFobject {
    constructor(scene) {
        super(scene);
        this.car = new MyVehicle(scene);
        this.crane = new MyCrane(scene);
        this.speed = 0;
        this.rotationspeed = 0;
        this.wheelsAngle = 0;
        this.turning = false;
        this.carSpot = false;
        this.gotCar = false;
        this.CraneAxisAngle = 0;
        this.CraneBaseAngle = 0;
    }


    craneUpdate() {

        if (this.CraneAxisAngle < Math.PI / 4 && !this.gotCar) {
            this.CraneAxisAngle += Math.PI / 32;

            if (this.CraneAxisAngle == Math.PI / 4) {
                this.gotCar = true;
            }
        }

        if (this.gotCar) {
            if (this.CraneAxisAngle > 0)
                this.CraneAxisAngle -= Math.PI / 32;
        }

        if (this.CraneBaseAngle < Math.PI && this.gotCar && this.CraneAxisAngle == 0)
            this.CraneBaseAngle += Math.PI / 36;



        this.crane.setAngle(this.CraneBaseAngle, this.CraneAxisAngle);


    }

    update() {

        if (this.carSpot) {
            this.craneUpdate();
        }
        else {
            if (!this.turning & this.speed != 0) {
                if (this.wheelsAngle > 0)
                    this.wheelsAngle -= Math.PI / 12;
                else if (this.wheelsAngle < 0)
                    this.wheelsAngle += Math.PI / 12;

            }

            this.turning = false;
            this.car.update(this.speed, this.wheelsAngle, this.rotationspeed);

            if(this.speed > 0){
                this.speed -= 0.0025;
            }else if(this.speed < 0){
                this.speed += 0.0025;
            }
        }


    }
    display() {
        this.car.display();
        this.scene.pushMatrix();
        this.scene.translate(10, 0, 10);
        this.crane.display();
        this.scene.popMatrix();
    }


    moveForward() {
        if(this.speed < 0.35){
            this.speed += 0.01;
        }
        this.update();

    }
    moveBack() {
        if(this.speed > -0.35){
            this.speed -= 0.01;
        }
        this.update();

    }


    moveRight() {
        this.wheelsAngle -= Math.PI /12;
        if (this.wheelsAngle < -Math.PI / 6)
            this.wheelsAngle = -Math.PI / 6;
        this.turning = true;
    }

    moveLeft() {
        this.wheelsAngle += Math.PI / 12;
        if (this.wheelsAngle > Math.PI / 6)
            this.wheelsAngle = Math.PI / 6;
        this.turning = true;
        

    }

    defaultMove(){
        this.turning = false;
    }




}