/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCar extends CGFobject {
    constructor(scene) {
        super(scene);
        this.car = new MyVehicle(this.scene);
        this.speed = 0;
        this.wheelsAngle = 0;
        this.turning = false;

    }
    update() {

        if (!this.turning & this.speed != 0) {
            if (this.wheelsAngle > 0)
                this.wheelsAngle -= Math.PI / 12;
            else if (this.wheelsAngle < 0)
                this.wheelsAngle += Math.PI / 12;

        }

        this.turning = false;
        this.car.update(this.speed, this.wheelsAngle);
console.log(this.wheelsAngle);

    }
    display() {
        this.car.display();
    }


    moveForward() {
        this.speed += 0.02;
        this.update();

    }
    moveBack() {
        this.speed -= 0.02;
        this.update();

    }


    moveRight() {
        this.wheelsAngle -= Math.PI / 12;
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




}