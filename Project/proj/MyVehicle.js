/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject {

    constructor(scene) {
        super(scene);
        this.tronco = new MyTronco(scene);
        this.rightWheel = new MyWheel(scene);
        this.leftWheel = new MyWheel(scene);
        this.wheel = new MyWheel(scene);
        this.wheel2 = new MyWheel(scene);
        //car controllers
        this.x = 0;
        this.z = 0;
        this.angulo = -Math.PI / 2;
        this.rotacao = 0;


        this.craneAxisRotate = 0;
        this.craneBaseRotate = 0;
        this.wheelsAngle = 0;
        this.turning = false;
        this.caught = false;
        this.up = false;
        this.speed = 0;
        this.down = false;
        this.rotate = false;
        this.alt = 0;

        this.tmpx = 0;
        this.tmpz = 0;
    }

    display() {

        var deg = Math.PI / 180;



        if (this.down) {
            this.scene.pushMatrix();
            this.scene.translate(-this.tmpx, this.alt, this.tmpz);
        }

        if (this.up) {
            this.scene.pushMatrix();
            this.scene.translate(0, this.alt, 0);

        }

        if (this.rotate) {
            this.scene.pushMatrix();
            this.scene.rotate(this.craneBaseRotate, 0, 1, 0);
        }

        this.scene.pushMatrix();
        this.scene.translate(-this.x, 0, this.z);
        this.scene.translate(2.1, 0, 0);
        this.scene.rotate(this.rotacao, 0, 1, 0);
        this.scene.translate(-2.1, 0, 0);
        this.scene.pushMatrix();



        //tronco
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(180 * deg, 0, 1, 0);
        this.tronco.display();

        this.scene.popMatrix();

        //direita

        this.scene.pushMatrix();
        this.scene.translate(-2.3, 0.5, -0.7);

        this.rightWheel.display();
        this.scene.popMatrix();


        //esquerda

        this.scene.pushMatrix();
        this.scene.translate(-2.3, 0.5, 1.2);

        this.leftWheel.display();
        this.scene.popMatrix();


        //roda de tras
        this.scene.pushMatrix();
        this.scene.translate(2, 0.5, -0.7);
        this.wheel.display();
        this.scene.popMatrix();


        //roda de tras 

        this.scene.pushMatrix();
        this.scene.translate(2, 0.5, 1.2);
        this.wheel2.display();
        this.scene.popMatrix();




        this.scene.popMatrix();
        this.scene.popMatrix();

        if (this.rotate)
            this.scene.popMatrix();
        if (this.up)
            this.scene.popMatrix();
        if (this.down)
            this.scene.popMatrix();
    }

    updateAllwheels(speed, angle) {
        this.leftWheel.setAngulo(speed, angle);
        this.rightWheel.setAngulo(speed, angle);
        this.wheel.setAngulo(speed, 0);
        this.wheel2.setAngulo(speed, 0);

    }

    updatepos(speed, angle) {
        this.updateAllwheels(speed, angle);
        if (Math.abs(speed) > 0.20) {
            this.rotacao += angle * speed * (1 / (Math.abs(speed) / 0.1));
        } else {
            this.rotacao += angle * speed;
        }

        this.x += speed * Math.cos(this.rotacao);
        this.z += speed * Math.sin(this.rotacao);

    }



    update() {
        if (!this.caught) {
            if (!this.turning & this.speed != 0) {
                if (this.wheelsAngle > 0)
                    this.wheelsAngle -= Math.PI / 12;
                else if (this.wheelsAngle < 0)
                    this.wheelsAngle += Math.PI / 12;

            }
            this.turning = false;
            if (this.speed < 1.3455678654 * Math.pow(10, -15) && this.speed > -1.3455678654 * Math.pow(10, -15))
                this.speed = 0;
            this.updatepos(this.speed, this.wheelsAngle);
        }

        if (this.caught) {
            this.followCrane();
        }


    }



    moveForward() {
        this.speed += 0.01;

        if (this.speed > 0.55) {
            this.speed = 0.55;
        }
        this.update();

    }

    moveBack() {
        this.speed -= 0.01;
        if (this.speed < -0.55) {
            this.speed = -0.55;
        }
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

    defaultMove() {
        this.turning = false;
    }

    downCar() {


        if (this.alt > 0)
            this.alt -= 0.2;
        if (this.alt <= 0) {
            this.alt = 0;
            this.down = false;
            this.caught = false;


        }



    }

    upCar() {


        if (this.craneAxisRotate < Math.PI / 4) {
            this.craneAxisRotate += Math.PI / 32;
            this.alt = Math.cos(this.craneAxisRotate) * 4;
        }
        else {
            this.up = false;
            this.rotate = true;
        }
    }

    followCrane() {

        if (this.up)
            this.upCar();

        if (this.rotate) {

            if (this.craneBaseRotate < Math.PI) {
                this.craneBaseRotate += Math.PI / 144;
                this.tmpz = Math.cos(this.craneBaseRotate) * 4 +0.2;
                this.tmpx = Math.sin(this.craneBaseRotate) * 4 + 0.2;
            }

            if (this.craneBaseRotate >= Math.PI) {
                this.craneBaseRotate = 0;
                this.rotate = false;
                this.down = true;
                this.x = this.tmpx;
                this.z = this.tmpz;
            }
        }

        if (this.down) {
            this.downCar();
        }

    }

    setCaught() {
        this.caught = true;
        this.up = true;
    }

    getCoords() {
        if (this.x >= -3 && this.x <= 3 && this.z < 7 && this.z > 3 && this.speed == 0)
            return true;
        else
            return false;
    }
};
