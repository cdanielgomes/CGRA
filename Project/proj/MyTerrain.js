/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends Plane {

    constructor(scene, nrDivs, altimetry) {
        super(scene, 0, 10, 0, 10, nrDivs);

        this.floorAppearence = new CGFappearance(this.scene);

        this.floorAppearence.setAmbient(0.3, 0.3, 0.3, 1);
        this.floorAppearence.setDiffuse(0.8, 0.8, 0.8, 1);
        this.floorAppearence.setSpecular(0.0, 0.2, 0.8, 1);
        this.floorAppearence.setShininess(120);
		//  this.floorAppearence.setTextureWrap("REPEAT", "REPEAT");

        this.floorAppearence.loadTexture("../resources/images/ground.jpg");

        this.altimetry = altimetry;
        this.applyAltimetry();
        
    }


    display() {

        this.floorAppearence.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, -1, 0, 0);
        this.scene.pushMatrix();
        this.scene.scale(50,50,1);
        super.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    applyAltimetry() {

		let count = 2;

		for(let i = 0; i < this.nrDivs; i++){

			for(let j = 0; j < this.nrDivs; j++){

				this.vertices[count] = this.altimetry[i][j];
				count += 3;
			}
		}

		super.initGLBuffers();
	}
}


