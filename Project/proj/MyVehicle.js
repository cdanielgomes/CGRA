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
        this.angulo = -Math.PI/2;
        this.rotacao = 0;
        
        this.wheelsAngle = 0;
        this.turning = false;

        this.speed = 0;

    }

    display() {

        var deg = Math.PI / 180;

        

        this.scene.pushMatrix();
        this.scene.translate(-this.x,0,this.z);
        this.scene.translate(2.1, 0, 0);
        this.scene.rotate(this.rotacao, 0, 1, 0);
        this.scene.translate(-2.1, 0, 0);
        

        

        //tronco
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(180*deg, 0, 1, 0);
        this.tronco.display();
        
        this.scene.popMatrix();

        //direita

        this.scene.pushMatrix();
        this.scene.translate(-2.3, 0.5,-0.7);

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

    }

    updateAllwheels(speed, angle) {
        this.leftWheel.setAngulo(speed, angle);
        this.rightWheel.setAngulo(speed, angle);
        this.wheel.setAngulo(speed, 0);
        this.wheel2.setAngulo(speed, 0);

    }

    updatepos(speed, angle) {
        this.updateAllwheels(speed, angle);
        if(Math.abs(speed)> 0.20){
            this.rotacao += angle * speed * (1/(Math.abs(speed)/0.1)); 
        }else{
            this.rotacao += angle * speed; 
        }
        
        this.x += speed * Math.cos(this.rotacao);
        this.z += speed * Math.sin(this.rotacao);

    }



    update() {

            if (!this.turning & this.speed != 0) {
                if (this.wheelsAngle > 0)
                    this.wheelsAngle -= Math.PI / 12;
                else if (this.wheelsAngle < 0)
                    this.wheelsAngle += Math.PI / 12;

            }

            this.turning = false;
            this.updatepos(this.speed, this.wheelsAngle);
            
            //atrito
            /*
            if(this.speed > 0){
                this.speed -= 0.0025;
                if(this.speed < 0){
                    this.speed = 0;
                }
            }else if(this.speed < 0){
                this.speed += 0.0025;
                if(this.speed > 0){
                    this.speed = 0;
                }
            }*/
    }



    moveForward(speed) {
        this.speed += 0.01 * speed;
        if(this.speed > 0.55){
            this.speed = 0.55;
        }
        this.update();

    }
    moveBack(speed) {
        this.speed -= 0.01 * speed;
        if(this.speed < -0.55){
            this.speed = -0.55;
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
