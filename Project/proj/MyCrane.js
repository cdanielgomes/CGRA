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
        this.tronco1 = new MyPrism(scene, 4, 20);
        this.tronco2 = new MyPrism(scene, 4, 20);
        this.axisAngle = Math.PI / 7;
        this.baseAngle = Math.PI;
    }

    display() {

        this.scene.pushMatrix();
        this.scene.rotate(this.baseAngle, 0,1,0);
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0.2);
        this.base.display();
        this.scene.popMatrix();




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
        this.scene.translate(0.35,-Math.sin(this.axisAngle)*4 + 0.2, Math.cos(this.axisAngle)*4) - 0.2;

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
        this.baseAngle += baseAngle;
        this.axisAngle += axisAngle;
    }
}