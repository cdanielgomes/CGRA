/**
 * MyClock
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


class MyTronco extends CGFobject {

    constructor(scene){
    super(scene);
    
    this.topo = new MyTrapezio(scene, 4, 2 ,2);
    this.meio = new MyUnitCubeQuad(scene);
    this.frente = new MyUnitCubeQuad(scene);
    this.tras = new MyUnitCubeQuad(scene);
    this.separadorRodas = new MyUnitCubeQuad(scene);
    this.paralamas = new MyTrapezio(scene, 4, 2 ,2);
    this.eixoTraseiro = new MyCylinder(scene, 50, 50);
    this.eixoDianteiro = new MyCylinder(scene, 50, 50);
    
    }

    display(){
    
    var deg = Math.PI / 180;

    this.scene.pushMatrix();
    this.scene.rotate(90*deg,0,1,0);
    this.scene.translate(1,0.8,2);
    this.scene.scale(1,0.5,1);
    this.scene.rotate(90*deg, 0,0,1);
    this.scene.rotate(90*deg, 0,1,0);
    this.topo.display();
    this.scene.popMatrix();
   

    this.scene.pushMatrix();
    this.scene.translate(0.2, 0.8, 0);
    this.scene.scale(6,0.5,2);
    this.meio.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(3.1, 0.4, 0);
    this.scene.scale(0.2,0.6,2);
    this.frente.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-2.7, 0.4, 0);
    this.scene.scale(0.2,0.6,2);
    this.tras.display();
    this.scene.popMatrix();
    
    this.scene.pushMatrix();
    this.scene.translate(0.2, 0.4, 0);
    this.scene.scale(6,0.6,1);
    this.separadorRodas.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,0.8,0);
    this.scene.rotate(180*deg,0,0,1);
    this.scene.rotate(90*deg,0,1,0);
    this.scene.translate(1,0,2.3);
    this.scene.scale(1,0.3,1.2);
    this.scene.rotate(90*deg, 0,0,1);
    this.scene.rotate(90*deg, 0,1,0);
    this.paralamas.display();
    this.scene.popMatrix();


    this.scene.pushMatrix();
    this.scene.translate(-1.9, 0.05, -0.8);
    this.scene.scale(0.05,0.05,1.6);
    this.eixoTraseiro.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(2.3, 0.05, -0.8);
    this.scene.scale(0.05,0.05,1.6);
    this.eixoDianteiro.display();
    this.scene.popMatrix();

    }



}