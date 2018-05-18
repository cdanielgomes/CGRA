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

    }
    update() {
        this.car.update(this.speed, this.wheelsAngle);
    }
    display() {
        this.car.display();
    }
    

    moveForward() {
        this.speed += 1;
        this.update();
    }
    moveBack() {
        this.speed -= 1;
        this.update();
    }

    moveRight() {
        this.wheelsAngle += Math.PI / 12;

        if (this.wheelsAngle > Math.PI / 6)
            this.wheelsAngle = Math.PI / 6;
    }

    moveLeft() {

        this.wheelsAngle -= Math.PI / 12;
        if (this.wheelsAngle < Math.PI / 6)
            this.wheelsAngle = -Math.PI / 6;
    }




}