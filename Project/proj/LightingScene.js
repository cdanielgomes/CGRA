var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

class LightingScene extends CGFscene {
	constructor() {
		super();
	};

	init(application) {

		super.init(application);

		this.initCameras();

		this.initLights();

		this.enableTextures(true);

		this.gl.clearColor(0.529, 0.807, 0.922, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.Light1 = true;
		this.Light2 = true;
		this.Light3 = true;
		this.Light4 = true;
		this.speed = 3;

		this.Axis = false;

		this.axis = new CGFaxis(this);

		// Scene elements

		this.vehicle = new MyCar(this);
		this.floor = new MyTerrain(this, 1, 2);


		// Materials
		this.materialDefault = new CGFappearance(this);

		this.materialA = new CGFappearance(this);
		this.materialA.setAmbient(0.3, 0.3, 0.3, 1);
		this.materialA.setDiffuse(0.8, 0.8, 0.8, 1);
		this.materialA.setSpecular(0.0, 0.2, 0.8, 1);
		this.materialA.setShininess(120);

		this.materialB = new CGFappearance(this);
		this.materialB.setAmbient(0.3, 0.3, 0.3, 1);
		this.materialB.setDiffuse(0.6, 0.6, 0.6, 1);
		this.materialB.setSpecular(0.8, 0.8, 0.8, 1);
		this.materialB.setShininess(120);


		this.setUpdatePeriod(100);
		
	};

	initCameras() {
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights() {
		//this.setGlobalAmbientLight(0, 0, 0, 1.0);
		this.setGlobalAmbientLight(0.5, 0.5, 0.5, 1.0);
		// Positions for four lights
		this.lights[0].setPosition(4, 6, 1, 1);
		//this.lights[0].setVisible(true); // show marker on light position (different from enabled)

		this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
		//this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
		//	this.lights[2].setVisible(true); // show marker on light position (different from enabled)

		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
		//this.lights[3].setVisible(true); // show marker on light position (different from enabled)

		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1.0, 1.0, 0, 1.0);
		this.lights[0].enable();

		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[1].enable();

		this.lights[2].setAmbient(0, 0, 0, 1);
		this.lights[2].setSpecular(1, 1, 1, 1);
		this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[2].setConstantAttenuation(0);
		this.lights[2].setLinearAttenuation(1);
		this.lights[2].setQuadraticAttenuation(0);
		this.lights[2].enable();

		this.lights[3].setAmbient(0, 0, 0, 1);
		this.lights[3].setSpecular(1.0, 1.0, 0, 1.0);
		this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[3].setConstantAttenuation(0);
		this.lights[3].setLinearAttenuation(0);
		this.lights[3].setQuadraticAttenuation(0.2);
		this.lights[3].enable();



	};

	updateLights() {
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();

		if (this.Light1)
			this.lights[0].enable();
		else
			this.lights[0].disable();


		if (this.Light2)
			this.lights[1].enable();
		else
			this.lights[1].disable();

		if (this.Light3)
			this.lights[2].enable();
		else
			this.lights[2].disable();

		if (this.Light4)
			this.lights[3].enable();
		else
			this.lights[3].disable();


		if (!this.Axis) {
			this.axis.display();
		}

	}


	display() {


		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene

		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
		//	

		this.materialDefault.apply();



		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section

		this.vehicle.display();
	//	this.floor.display();

		// ---- END Scene drawing section
	};

	doSomething() {
		console.log("Doing something...");
	};

	checkKeys() {
		var text = "Keys pressed: ";
		var keysPressed = false;
		if (this.gui.isKeyPressed("KeyW")) {
			this.vehicle. moveForward();
		}
		if (this.gui.isKeyPressed("KeyS")) {
			this.vehicle.moveBack();
		}
		if (keysPressed)
			console.log(text);
	}


	update(){
		this.checkKeys();
		this.vehicle.update();
	}

};
