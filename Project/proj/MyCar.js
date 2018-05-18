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
    update(){
        this.car.update(this.speed);
    }
    display(){
        this.car.display();
    }

    moveForward(){
        this.speed+=1;
        this.update();
    }
    moveBack(){
        this.speed-=1;
        this.update();
    }

    
}