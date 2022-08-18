(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"JCC_Diabetes2_160x600_atlas_1", frames: [[0,0,600,1200],[602,0,600,1200],[1204,0,600,1200],[1806,0,600,1200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CO_Diabetes2_300x600Checkup = function() {
	this.initialize(ss["JCC_Diabetes2_160x600_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CO_Diabetes2_300x600Dental = function() {
	this.initialize(ss["JCC_Diabetes2_160x600_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CO_Diabetes2_300x600Dumbbells = function() {
	this.initialize(ss["JCC_Diabetes2_160x600_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CO_Diabetes2_300x600Vision = function() {
	this.initialize(ss["JCC_Diabetes2_160x600_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.PIC4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CO_Diabetes2_300x600Checkup();
	this.instance.setTransform(-100,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC4, new cjs.Rectangle(-100,-125,300,600), null);


(lib.PIC3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CO_Diabetes2_300x600Dental();
	this.instance.setTransform(-194,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC3, new cjs.Rectangle(-194,-125,300,600), null);


(lib.PIC2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CO_Diabetes2_300x600Vision();
	this.instance.setTransform(-180,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-180,-125,300,600), null);


(lib.PIC1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CO_Diabetes2_300x600Dumbbells();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(-150,-125,300,600), null);


(lib.jcchwhiteRGBai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// jcc-h-white-RGB.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABqIAFgeQAGACAHAAQAQAAAFgNIAIgRIg/ibIAkAAIAsByIAthyIAkAAIhKC0QgNAignABQgKAAgJgCg");
	this.shape.setTransform(203.9,166.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBqIAAjTIAhAAIAADTg");
	this.shape_1.setTransform(192.075,160.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBuIAAiZIAgAAIAACZgAgNhKQgHgGAAgIQAAgJAHgGQAFgGAIAAQAIAAAHAGQAFAGABAJQgBAIgFAGQgHAGgIAAQgIAAgFgGg");
	this.shape_2.setTransform(184.4,160.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABNBPIAAhjQAAgcgZAAQgKAAgLAGQgJAGgFAIIAABrIghAAIAAhjQAAgcgZAAQgKAAgKAGQgJAGgHAJIAABqIggAAIAAiZIAgAAIAAAVQAHgIAMgIQAQgJAQAAQAgAAAIAdQAIgMANgIQAPgJAQAAQAsAAAAAvIAABug");
	this.shape_3.setTransform(167.35,163.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBEQgRgOAAgYQAAgYARgNQAPgMAVAAQAgAAAQATIAAgWQABgNgKgIQgKgIgPAAQgaAAgTAUIgPgYQAbgZAlABQAcAAARAMQATAOAAAdIAABlIgiAAIAAgRQgRAVgfgBQgVAAgPgMgAgYALQgKAHAAANQAAAMAKAHQAJAIAOAAQAYAAALgQIAAgXQgLgQgYAAQgOAAgJAIg");
	this.shape_4.setTransform(145.15,163.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhIBqIAAjTICRAAIAAAgIhrAAIAAA3IBoAAIAAAhIhoAAIAABbg");
	this.shape_5.setTransform(129.375,160.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBPIAAhfQAAgggfAAQgXAAgPAVIAABqIghAAIAAiZIAhAAIAAAVQAJgKAMgHQAPgIARAAQAyAAgBAyIAABrg");
	this.shape_6.setTransform(102.7,163.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5A5QgVgXAAgiQAAghAVgXQAWgYAjABQAkgBAWAYQAVAXAAAhQAAAigVAXQgWAXgkAAQgjAAgWgXgAgggiQgLAOAAAUQAAAWALAOQAMAPAUAAQAUAAANgPQALgOAAgWQAAgVgLgNQgNgQgUAAQgTAAgNAQg");
	this.shape_7.setTransform(85.375,163.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBpQgQgGgOgMIAQgYQARAUAgAAQARAAAMgJQAPgLAAgWIAAgTQgTAagdAAQgeAAgTgVQgTgVAAgkQAAgkATgWQATgVAeAAQAdAAATAZIAAgVIAhAAIAACRQAAAlgZASQgUAPggAAQgVAAgOgFgAgchCQgMAOAAAWQAAAWAMANQAMANATAAQALAAALgGQALgGAGgHIAAg5QgGgJgLgGQgLgGgLAAQgTAAgMANg");
	this.shape_8.setTransform(67.375,166.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1A6QgXgWAAgkQAAghAWgXQAXgXAgAAQAigBAVAYQAVAYAAAjIAAAIIh2AAQACATANALQANAMAUAAQAbAAARgQIAPAVQgXAXgngBQgiABgXgXgAgegnQgKAMgBAPIBVAAQAAgPgKgMQgMgNgVAAQgTAAgMANg");
	this.shape_9.setTransform(49.825,163.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBPIAAiZIAgAAIAAAWQAUgaAeAAIAAAiIgLgBQgLAAgMAFQgKAHgGAIIAABog");
	this.shape_10.setTransform(36.25,163.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhNBPQgeggAAgvQAAgvAegeQAfggAuAAQAwAAAeAgQAeAeAAAvQAAAwgeAfQgeAegwAAQguAAgfgegAgyg2QgTAWAAAgQAAAhATAVQAUAXAeAAQAgAAATgXQATgVAAghQAAgggTgWQgTgVggAAQgeAAgUAVg");
	this.shape_11.setTransform(18.375,160.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1A6QgXgWAAgkQAAghAWgXQAXgXAgAAQAigBAVAYQAVAYAAAjIAAAIIh2AAQACATANALQANAMAUAAQAbAAARgQIAPAVQgXAXgngBQgiABgXgXgAgdgnQgLAMgBAPIBVAAQAAgPgKgMQgMgNgVAAQgSAAgMANg");
	this.shape_12.setTransform(-2.575,163.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpBPIAAiZIAiAAIAAAWQATgaAeAAIAAAiIgLgBQgKAAgMAFQgMAHgEAIIAABog");
	this.shape_13.setTransform(-16.15,163.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyBEQgRgOAAgYQAAgYARgNQAPgMAVAAQAgAAARATIAAgWQAAgNgKgIQgKgIgPAAQgZAAgVAUIgNgYQAZgZAmABQAcAAARAMQATAOAAAdIAABlIghAAIAAgRQgSAVgfgBQgUAAgQgMgAgYALQgJAHAAANQAAAMAJAHQAJAIAOAAQAYAAAMgQIAAgXQgMgQgYAAQgOAAgJAIg");
	this.shape_14.setTransform(-31.3,163.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhBBPQgggfAAgwQAAgvAggfQAfgeAtgBQA5AAAeAwIggAQQgHgNgOgIQgQgKgSABQgdgBgUAWQgVAWAAAgQAAAhAVAWQAUAVAdABQATAAAPgJQAOgIAHgOIAgAQQgeAvg5AAQgtAAgfgeg");
	this.shape_15.setTransform(-49.9,160.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0A6QgYgWAAgkQABghAVgXQAXgXAgAAQAigBAVAYQAVAYgBAjIAAAIIh1AAQACATANALQANAMAUAAQAMABALgFQANgFAHgHIAQAVQgXAXgogBQghABgWgXgAgegnQgJAMgCAPIBWAAQgBgPgKgMQgMgNgVAAQgSAAgNANg");
	this.shape_16.setTransform(-78,163.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjBqIAAhhQAAgegfAAQgXAAgPAVIAABqIgiAAIAAjTIAiAAIAABPQAIgJANgIQAPgHARAAQAxAAAAAwIAABsg");
	this.shape_17.setTransform(-95.1,160.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWA8IAAhYIgZAAIAAgdIAZAAIAAgqIAhAAIAAAqIAeAAIAAAdIgeAAIAABQQAAASAOAAQAKAAAFgFIAIAZQgKAKgWgBQgmAAAAgng");
	this.shape_18.setTransform(-109.15,161.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBsIAAh8IgZAAIAAgdIAZAAIAAgIQAAgaAOgOQAMgNAWAAQARAAAJAFIgHAZQgFgEgIABQgVAAAAAaIAAAIIAfAAIAAAdIgfAAIAAB8g");
	this.shape_19.setTransform(-126.775,160.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag5A5QgVgXAAgiQAAghAVgXQAWgYAjABQAkgBAWAYQAVAXAAAhQAAAigVAXQgWAXgkAAQgjAAgWgXgAgggiQgLAOAAAUQAAAWALAOQAMAPAUAAQAUAAANgPQALgOAAgWQAAgVgLgNQgNgQgUAAQgTAAgNAQg");
	this.shape_20.setTransform(-141.325,163.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWA8IAAhYIgZAAIAAgdIAZAAIAAgqIAhAAIAAAqIAfAAIAAAdIgfAAIAABQQAAASAOAAQALAAAEgFIAIAZQgKAKgVgBQgnAAAAgng");
	this.shape_21.setTransform(-163.625,161.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoBPIAAiZIAhAAIAAAWQATgaAdAAIAAAiIgKgBQgKAAgNAFQgKAHgFAIIAABog");
	this.shape_22.setTransform(-174.05,163.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgyBEQgRgOAAgYQAAgYARgNQAPgMAVAAQAgAAARATIAAgWQAAgNgKgIQgKgIgPAAQgZAAgVAUIgNgYQAagZAlABQAcAAARAMQATAOAAAdIAABlIghAAIAAgRQgSAVgfgBQgVAAgPgMgAgYALQgKAHAAANQAAAMAKAHQAJAIAOAAQAYAAAMgQIAAgXQgLgQgZAAQgOAAgJAIg");
	this.shape_23.setTransform(-188.075,163.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhQBqIAAjTIBcAAQAgAAATAUQASATAAAcQAAAcgSARQgTAUggAAIg3AAIAABPgAgrgFIAyAAQAQAAAKgJQAKgKAAgOQAAgQgKgJQgKgKgQAAIgyAAg");
	this.shape_24.setTransform(-203.825,160.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdAlIgCghIgBgfIgBAAIgJAcIgNAkIgGAAIgVhAIgBAAIgDBAIgJAAIAFhJIANAAIATA8IAWg8IAMAAIAEBJg");
	this.shape_25.setTransform(245.8,91.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAlIAAhBIgXAAIAAgIIA2AAIAAAIIgWAAIAABBg");
	this.shape_26.setTransform(238.6,91.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXCSQgSgSgBgiIAAiCIgpAAIAAg6IApAAIAAhFIBDAAIAABFIAzAAIAAA6IgzAAIAABxQgBAMAHAIQAGAHAKABQARgBAGgGIAPAxQgTARglAAQgiAAgSgSg");
	this.shape_27.setTransform(227.8,103.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhOBgQgmgmAAg6QAAg5AmgmQAmglA5AAQBDAAAhAuIgsApQgTgcgiAAQgdAAgTAVQgTAUAAAgQAAAhATAUQATAUAdAAQAiAAATgbIAsApQghAuhDAAQg6AAglglg");
	this.shape_28.setTransform(206.475,107.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhZBhQgnglAAg8QAAg3AlgmQAlgnA4AAQA4AAAkAnQAiAmABA9IAAAPIi7AAQADAZASARQAVARAeAAQARAAATgHQAUgHALgLIAeAqQgnAkhCAAQg5AAgmgkgAgqg8QgPAPgCAWIB8AAQgCgVgOgQQgRgTgeAAQgbAAgRATg");
	this.shape_29.setTransform(180.3,107.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA0CBIAAiXQAAgwgvAAQgRAAgQAKQgOAIgJANIAACoIhCAAIAAj7IBCAAIAAAhQANgRAWgKQAYgMAdAAQAogBAVAWQAVAWgBAlIAACxg");
	this.shape_30.setTransform(153.25,106.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA0CBIAAiXQAAgwgvAAQgiAAgWAfIAACoIhDAAIAAj7IBDAAIAAAhQANgRAWgKQAXgMAdAAQAogBAWAWQAVAWAAAlIAACxg");
	this.shape_31.setTransform(125.6,106.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhhBdQgkglAAg4QAAg3AkglQAlgoA8AAQA9AAAlAoQAkAlAAA3QAAA4gkAlQglAog9AAQg8AAglgogAgvgzQgRAVAAAeQAAAfARAUQASAWAdAAQAeAAASgWQARgUAAgfQAAgegRgVQgSgWgeAAQgdAAgSAWg");
	this.shape_32.setTransform(98.075,107.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhvCCQg2gzAAhPQAAhPA2gzQA0gyBMABQBlAAAwBUIhAAgQgMgXgVgNQgYgPgcAAQgsAAgfAhQgeAgAAAxQAAAxAeAhQAfAhAsgBQAdAAAXgOQAWgOALgWIBAAeQgyBWhjABQhMAAg0gzg");
	this.shape_33.setTransform(67.825,102.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhZBhQgnglAAg8QAAg3AlgmQAlgnA4AAQA5AAAiAnQAkAmgBA9IAAAPIi6AAQADAZATARQATARAeAAQATAAASgHQATgHAMgLIAeAqQgTASgcAJQgbAJgfAAQg5AAgmgkgAgqg8QgPAPgCAWIB8AAQgCgVgOgQQgRgTgeAAQgbAAgRATg");
	this.shape_34.setTransform(28.5,107.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhJCBIAAj7IBDAAIAAAiQANgRAVgLQAXgMAXAAIAABBQgIgCgLAAQgRAAgSAIQgTAJgHALIAACmg");
	this.shape_35.setTransform(8.15,106.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhXBwQgdgYAAgnQAAgpAdgVQAYgSAjAAQA2AAAZAfIAAgjQAAgTgPgMQgQgLgYAAQgpAAggAeIgZgtQAsgoBBAAQAwAAAdAVQAhAYAAAzIAACiIhCAAIAAgaQgNAPgVAJQgVAJgYAAQgiAAgZgVgAgjAWQgOALAAARQAAARAOALQANAKAUAAQAkAAARgWIAAggQgRgWgkAAQgUAAgNAKg");
	this.shape_36.setTransform(-16.475,107.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhvCCQg2gzAAhPQAAhPA2gzQA0gyBMABQBlAAAwBUIhAAgQgMgXgVgNQgYgPgcAAQgsAAgfAhQgeAgAAAxQAAAxAeAhQAfAhAsgBQAcAAAYgOQAWgOALgWIBAAeQgyBWhjABQhMAAg0gzg");
	this.shape_37.setTransform(-46.375,102.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA0CBIAAiXQAAgwgvAAQgQAAgRAKQgNAIgKANIAACoIhDAAIAAj7IBDAAIAAAhQANgRAWgKQAXgMAeAAQAogBAVAWQAVAVAAAmIAACxg");
	this.shape_38.setTransform(-86.45,106.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhhBdQgkglAAg4QAAg3AkglQAlgoA8AAQA9AAAlAoQAkAlAAA3QAAA4gkAlQglAog9AAQg8AAglgogAgvgzQgRAVAAAeQAAAfARAUQASAWAdAAQAeAAASgWQARgUAAgfQAAgegRgVQgSgWgeAAQgdAAgSAWg");
	this.shape_39.setTransform(-114.475,107.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag8B6QgegKgUgTIAdguQAOANAZAKQAZALAWAAQAqAAAAgZQAAgNgOgHQgLgFgZgFQgugJgUgLQghgTAAgnQAAgiAbgWQAdgYAvAAQA7AAAqAjIgaAtQgMgMgTgIQgVgJgWAAQgSAAgKAGQgLAHAAALQAAAKANAHQAKAFAYAFQAuAJAUAMQAjATAAApQAAAkgcAWQgeAYgzAAQggAAgegLg");
	this.shape_40.setTransform(-140.15,107.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAoCuIhBhhIgfAgIAABBIhDAAIAAlbIBDAAIAADQIBehwIBSAAIhkBxIBoCKg");
	this.shape_41.setTransform(-163.55,102.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhOBgQgmgmAAg6QAAg5AmgmQAlglA6AAQBDAAAhAuIgsApQgSgcgjAAQgdAAgTAVQgTAUgBAgQABAhATAUQATAUAdAAQAiAAATgbIAsApQghAuhDAAQg6AAglglg");
	this.shape_42.setTransform(-190.1,107.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhXBwQgdgYAAgnQAAgpAdgVQAYgSAiAAQA3AAAZAfIAAgjQAAgTgPgMQgQgLgYAAQgpAAghAeIgZgtQAugoBAAAQAxAAAbAVQAiAYAAAzIAACiIhCAAIAAgaQgNAPgVAJQgVAJgZAAQghAAgZgVgAgjAWQgOALAAARQAAARAOALQAOAKATAAQAlAAAQgWIAAggQgQgWglAAQgTAAgOAKg");
	this.shape_43.setTransform(-215.85,107.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhrCQIAgg6QAaAaAdAAQAYAAAPgPQAPgQAAgZIAAjpIBKAAIAADqQAAA7giAgQghAeg3AAQg7AAgigig");
	this.shape_44.setTransform(-240.875,102.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EglRAA0QEGg0GXgwQOShrMqAAQMbAAOJBrQGOAuEKA0QETA4A1AtQo9hSqhgrQq5gsrlAAQrvAArBAtQqqAtpCBUQApgvESg5g");
	this.shape_45.setTransform(0,57.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AmIDpIANgoIA+gqIgxABIAhhqIAxggIgnABIA4ivIBKDyIg6AEIA/AkIBLgzIg/ABIAqiGIA+gqIgwABIBHjhIAuCaIgkgIIAsAkIAnCCIhIAEIBZA1IAmB+IhMgQIBeBJIADAJIAMgoIA+grIgwABIAhhpIAwghIgmABIA4ivIBJDzIg5ADIBGApIA+DLg");
	this.shape_46.setTransform(212.25,33);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AjlC4IBVhDIhFAPIAjhyIBRgvIhCgDIAkh2IAnggIggAHIAqiLIBADLIgsgBIA4AmIAmB5Ig4gCIBHAyIAHAXIAGgVIBAgmIg0gCIBDjbIAyCeIgjgBIAsAdIAAABIgDAFIAcBZIgsgBIA4AmIAeBUIoZBLg");
	this.shape_47.setTransform(-227.9,35.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AjABvIAbgTIgbABIASg7IAbgTIgVABIAehiIArCIIghABIAoAYIADAJIAigYIgjABIAXhLIAjgYIgcABIAoh/IAZBXIgTgFIAZAUIAWBJIgoACIAyAdIAMAoIAOgBIABgCIAggbIgbADIAPg7IAagUIgWACIAYhlIAzCEIggAEIAqAUIAeBlImpAXg");
	this.shape_48.setTransform(-145.95,42.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AxiBCQA/hTA5hKIAjgIQAlgHAMAAIAgidIPYgRIA1AiIDWgEIArgjIDngFIAsCyICiAAIGuEyIi1gDIkKjoIjaAAIAAgBIieAAIAbgYQAqgaBQgLIgghxIiPADIgrAkIj6AEIg0giItxARIgYBUQCeAACjAlQBSASAyASIpHAOQgrA6gsBCQhYCFgJAiIiIATQAag3B+iqg");
	this.shape_49.setTransform(-73.275,29.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,0,540.1,177.7);


(lib.HEAD3type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAvQgEgEAAgGQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAQgGAAgEgFgAgKgaQgEgEAAgGQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgGAAQgGAAgEgEg");
	this.shape.setTransform(52.325,96.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfA4IgehRIgeBRIgPAAIghhdQgBgFgDAAIgLAAIAAgNIAzAAIAAANIgKAAQgFAAACAGIAWBBIAYhBQACgGgGAAIgIAAIAAgNIAxAAIAAANIgJAAQgFAAACAGIAZBBIAWhBQABgGgGAAIgKAAIAAgNIAsAAIAAANIgKAAQgDAAgCAFIggBdg");
	this.shape_1.setTransform(40.7,95.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpAqQgPgQAAgaQAAgZAQgQQAQgRAYAAQAaAAAPARQAQAQAAAZQAAAagQAQQgQARgZAAQgZAAgQgRgAgZggQgJALAAAVIAAABQAAAsAiAAQARAAAJgMQAJgLAAgVIAAgBQAAgsgjAAQgQAAgJAMg");
	this.shape_2.setTransform(25.125,95.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALA5IAAgNIAMAAQADAAAAgFIAAg3QABgZgXAAQgNAAgIAMQgJAMABAVIAAAjQAAAFADAAIAMAAIAAANIg2AAIAAgNIAOAAQACAAAAgFIAAhJQAAgGgCAAIgOAAIAAgNIANAAQAOAAAMgCIAAAaQAKgbAcAAQAjAAAAAoIAAA3QAAAFADAAIAOAAIAAANg");
	this.shape_3.setTransform(12.15,95.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBAQgHgHAAgRIAAhEIgRAAIAAgMIALgBQAKgBABgIIACgVIAOAAIAAAeIAZAAIAAANIgaAAIAABEQAAARAQAAQAFAAAHgCIAAAOQgJADgJgBQgPAAgIgHg");
	this.shape_4.setTransform(-3.725,94.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALBNIAAgNIAMAAQAEAAAAgFIAAg4QAAgYgWAAQgNAAgJANQgIAKAAAWIAAAjQAAAFADAAIANAAIAAANIg2AAIAAgNIANAAQADAAAAgFIAAhxQAAgHgDAAIgOAAIAAgNIANAAQAPAAALgDIAABDQALgaAbAAQAjAAAAAmIAAA5QAAAFAEAAIANAAIAAANg");
	this.shape_5.setTransform(-13.825,93.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/A/QAAgRAcgHQgWgDAAgSQAAgPAUgFQgRgLgBgVQABgSAOgLQANgLAWAAQAVAAAOALQADgXARAAQAGAAAEAEQAEADAAAGQAAAFgDADQgDAEgFAAQgIAAgCgIQgFAEgDAIQAIAKAAANQAAASgOALQgNAKgWAAQgNAAgKgEQgLACAAAIQAAAKAQAAIAuAAQAiAAAAAdQAAASgQAJQgRAKgeAAQg4AAAAgYgAguA9QAAAPAoAAQAuAAAAgUQAAgIgGgDQgFgDgNAAIgnAAQgXAFAAAOgAgag3QgGAHgBANIAAACQABANAGAHQAIAHAMAAQAMAAAIgHQAHgHAAgNIAAgCQAAgNgHgHQgHgHgMAAQgNAAgIAHg");
	this.shape_6.setTransform(-26.4,97.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaBOIAAgNIANAAQAEAAAAgFIAAhFQAAgJgGAAIgLAAIAAgOIAMAAQAOAAALgCIAABeQAAAFAEAAIAMAAIAAANgAgJg0QgFgEAAgHQAAgGAFgEQAEgEAFAAQAHAAADAEQAFAEAAAGQAAAHgFAEQgDAEgHAAQgFAAgEgEg");
	this.shape_7.setTransform(-36.05,93.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtA5IAAgNIANAAQADAAAAgFIAAhJQAAgGgDAAIgOAAIAAgNIANAAQAOAAALgCIAAAaQAIgbAWAAQAMAAAHAHQAGAGAAALQAAAJgFAFQgEAFgIAAQgEAAgEgDQgEgEAAgFQAAgJAKgDQgDgFgHAAQgNAAgGAMQgGAMAAATIAAAmQAAAFADAAIANAAIAAANg");
	this.shape_8.setTransform(-44.125,95.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpAqQgPgQAAgaQAAgZAQgQQAQgRAYAAQAaAAAPARQAQAQAAAZQAAAagQAQQgQARgZAAQgZAAgQgRgAgZggQgJALAAAVIAAABQAAAsAiAAQARAAAJgMQAJgLAAgVIAAgBQAAgsgjAAQgQAAgJAMg");
	this.shape_9.setTransform(50.325,72.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyA/QgOgRAAgaQAAgZAOgRQAPgQAXAAQAcAAALAZIAAgrQAAgHgDABIgOAAIAAgOIANAAQAQABAKgDIAACHQAAAFADABIANAAIAAANIgjAAIgCgXQgLAagdAAQgYAAgOgQgAgfgMQgKALAAAUIAAADQAAATAKAMQAJALAQAAQAOAAAJgLQAKgMAAgTIAAgDQAAgTgKgMQgJgKgOgBQgQABgJAKg");
	this.shape_10.setTransform(37.275,70.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALA5IAAgNIAMAAQAEAAAAgFIAAg3QAAgZgXAAQgNAAgIAMQgIAMAAAVIAAAjQgBAFAEAAIAMAAIAAANIg1AAIAAgNIANAAQACAAAAgFIAAhJQAAgGgCAAIgNAAIAAgNIAMAAQAPAAALgCIAAAaQALgbAaAAQAkAAAAAoIAAA3QAAAFADAAIAOAAIAAANg");
	this.shape_11.setTransform(18.2,72.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvAyQgJgIAAgNQAAgTATgKQASgIAmgFIAAgGQAAgZgaAAQgQAAgIAGQAGAEAAAIQAAAGgEADQgDAEgGAAQgPAAAAgPQAAgOAOgIQAOgIAVAAQAXAAALAKQALAJAAAUIAAA4QAAAFADAAIANAAIAAAOIghAAQgDgIgCgOQgEALgMAHQgKAHgPAAQgPAAgKgJgAgVAHQgOAGAAANQAAAIAGAFQAGAFAJAAQAOAAAKgKQAJgLAAgQIAAgIQgcACgMAGg");
	this.shape_12.setTransform(5.425,72.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmArQgQgQAAgbQABgaAQgQQAQgQAaAAQAWAAAOALQAOALgBARQAAAJgEAFQgFAFgIAAQgGAAgEgDQgDgEAAgGQAAgMAMgCQgFgRgZAAQgSAAgJALQgLAMAAAUIAAABQAAAVAKAMQAJALASAAQAcAAAIgaIAMAGQgKAjgoAAQgaAAgPgQg");
	this.shape_13.setTransform(-6.7,72.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvASIAAg4QAAgFgDAAIgNAAIAAgNIAmAAIAABKQAAAYAWAAQANAAAIgLQAIgLAAgTIAAgnQAAgFgDAAIgOAAIAAgNIAnAAIAABbQAAAGADAAIANAAIAAANIgNAAQgOAAgLACIAAgYQgLAZgaAAQgkAAAAgng");
	this.shape_14.setTransform(-24.725,72.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpAqQgPgQAAgaQAAgZAQgQQAQgRAYAAQAaAAAPARQAQAQAAAZQAAAagQAQQgQARgZAAQgZAAgQgRgAgZggQgJALAAAVIAAABQAAAsAiAAQARAAAJgMQAJgLAAgVIAAgBQAAgsgjAAQgQAAgJAMg");
	this.shape_15.setTransform(-37.525,72.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2BHQgIgGAAgKQAAgHAEgFQAEgEAHAAQAKAAACAIQACAIgIAHIAGABQAJAAAGgHQAHgHAHgSIAAAAIgphYQgDgFgDAAIgJAAIAAgOIAzAAIAAAOIgKAAQgGAAADAFIAdBAIAcg/QACgGgGAAIgKAAIAAgOIAsAAIAAAOIgKAAQgEAAgCAFIgnBbQgJAXgIAJQgKALgQAAQgMAAgHgGg");
	this.shape_16.setTransform(-50.175,74.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrAxIAAgdIARAAIAAAVQAKAFAOAAQAaAAAAgTQAAgIgJgFQgFgDgOgDQgSgEgJgEQgMgIAAgPQAAgQAMgJQAMgKAUAAQAWAAARAKIAAAdIgRAAIAAgVQgHgFgOAAQgZAAAAASQAAAJAJAEQAEACAPADQASAEAJAFQAMAIAAAPQAAAQgMAKQgNAKgUAAQgWAAgUgKg");
	this.shape_17.setTransform(56.25,49.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag/A/QAAgRAcgHQgWgDAAgSQAAgPATgFQgQgLgBgVQABgSAOgLQAOgLAVAAQAVAAAOALQADgXARAAQAGAAAEAEQAEADAAAGQAAAFgEADQgCAEgFAAQgIAAgCgIQgFAEgDAIQAIAKAAANQAAASgNALQgOAKgWAAQgOAAgJgEQgLACAAAIQAAAKAQAAIAuAAQAiAAABAdQAAASgRAJQgRAKgeAAQg4AAAAgYgAguA9QABAPAoAAQAtAAAAgUQAAgIgGgDQgGgDgNAAIgmAAQgXAFAAAOgAgag3QgGAHAAANIAAACQAAANAGAHQAIAHAMAAQAMAAAIgHQAHgHAAgNIAAgCQAAgNgHgHQgHgHgMAAQgNAAgIAHg");
	this.shape_18.setTransform(45.25,50.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AALA5IAAgNIAMAAQAEAAAAgFIAAg3QAAgZgXAAQgNAAgIAMQgJAMABAVIAAAjQgBAFAEAAIAMAAIAAANIg2AAIAAgNIAOAAQACAAAAgFIAAhJQAAgGgCAAIgOAAIAAgNIANAAQAOAAAMgCIAAAaQAKgbAbAAQAkAAAAAoIAAA3QAAAFADAAIAOAAIAAANg");
	this.shape_19.setTransform(32.05,49.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaBPIAAgOIANAAQADAAAAgFIAAhGQAAgJgEAAIgMAAIAAgNIANAAQANAAAMgCIAABeQAAAFACAAIANAAIAAAOgAgKg0QgDgFAAgGQAAgGADgEQAFgFAFAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_20.setTransform(22.05,46.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALBOIAAgOIAMAAQAEAAAAgFIAAg3QAAgYgWAAQgNgBgJAMQgIAMAAAVIAAAjQAAAFADAAIANAAIAAAOIg2AAIAAgOIANAAQADAAAAgFIAAhyQAAgGgDAAIgOAAIAAgNIANAAQAPAAALgCIAABCQALgaAbAAQAjAAAAAnIAAA4QAAAFAEAAIANAAIAAAOg");
	this.shape_21.setTransform(12.275,47.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIBAQgHgHAAgRIAAhEIgRAAIAAgMIALgBQAKgBABgIIACgUIAOAAIAAAcIAZAAIAAAOIgaAAIAABDQAAASAQAAQAFAAAHgCIAAAOQgJADgJAAQgPAAgIgIg");
	this.shape_22.setTransform(1.925,47.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmAqQgPgQgBgaQAAgZAQgQQAQgRAYAAQAZAAAOAQQANAPAAAaIAAAFIhVAAQAAASAKALQAKAMAQAAQAbAAAJgbIAMAGQgJAjgoAAQgbAAgPgRgAAhgHQgBglgeAAQgfAAgCAlIBAAAIAAAAg");
	this.shape_23.setTransform(-12.8,49.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnAqQgPgQAAgaQABgZAPgQQAPgRAZAAQAZAAANAQQAPAPAAAaIAAAFIhWAAQAAASAJALQAKAMARAAQAbAAAIgbIANAGQgJAjgoAAQgbAAgQgRgAAggHQAAglgeAAQgfAAgCAlIA/AAIAAAAg");
	this.shape_24.setTransform(-24.75,49.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgtA5IAAgNIANAAQADAAAAgFIAAhJQAAgGgDAAIgOAAIAAgNIANAAQAOAAALgCIAAAaQAIgbAWAAQAMAAAHAHQAGAGAAALQAAAJgFAFQgEAFgIAAQgEAAgEgDQgEgEAAgFQAAgJAKgDQgDgFgHAAQgNAAgGAMQgGAMAAATIAAAmQAAAFADAAIANAAIAAANg");
	this.shape_25.setTransform(-35.725,49.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AALBOIAAgOIAMAAQAEAAAAgFIAAg3QAAgYgWAAQgNgBgJAMQgIAMAAAVIAAAjQAAAFADAAIANAAIAAAOIg2AAIAAgOIANAAQADAAAAgFIAAhyQAAgGgDAAIgOAAIAAgNIANAAQAPAAALgCIAABCQALgaAbAAQAjAAAAAnIAAA4QAAAFAEAAIANAAIAAAOg");
	this.shape_26.setTransform(-47.475,47.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIBAQgHgHAAgRIAAhEIgRAAIAAgMIALgBQAKgBABgIIACgUIAOAAIAAAcIAZAAIAAAOIgaAAIAABDQAAASAQAAQAFAAAHgCIAAAOQgJADgJAAQgPAAgIgIg");
	this.shape_27.setTransform(-57.825,47.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnAqQgPgQABgaQAAgZAPgQQAQgRAYAAQAYAAAOAQQAOAPABAaIAAAFIhXAAQABASAJALQALAMAQAAQAbAAAIgbIAOAGQgKAjgpAAQgaAAgQgRgAAggHQAAglgeAAQgfAAgDAlIBAAAIAAAAg");
	this.shape_28.setTransform(39,26.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgtA5IAAgNIANAAQADAAAAgFIAAhJQAAgGgDAAIgOAAIAAgNIANAAQAOAAALgCIAAAaQAIgbAWAAQAMAAAHAHQAGAGAAALQAAAJgFAFQgEAFgIAAQgEAAgEgDQgEgEAAgFQAAgJAKgDQgDgFgHAAQgNAAgGAMQgGAMAAATIAAAmQAAAFADAAIANAAIAAANg");
	this.shape_29.setTransform(28.025,25.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgvAyQgJgIAAgNQAAgTATgKQASgIAmgFIAAgGQAAgZgaAAQgQAAgIAGQAGAEAAAIQAAAGgEADQgDAEgGAAQgPAAAAgPQAAgOAOgIQAOgIAVAAQAXAAALAKQALAJAAAUIAAA4QAAAFADAAIANAAIAAAOIghAAQgDgIgCgOQgEALgMAHQgKAHgPAAQgPAAgKgJgAgVAHQgOAGAAANQAAAIAGAFQAGAFAJAAQAOAAAKgKQAJgLAAgQIAAgIQgcACgMAGg");
	this.shape_30.setTransform(17.025,26.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgnAqQgOgQAAgaQAAgZAPgQQAQgRAYAAQAYAAAOAQQAOAPABAaIAAAFIhXAAQABASAJALQAKAMARAAQAbAAAIgbIAOAGQgKAjgpAAQgaAAgQgRgAAggHQAAglgeAAQgfAAgDAlIBAAAIAAAAg");
	this.shape_31.setTransform(-0.7,26.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgtA5IAAgNIANAAQADAAAAgFIAAhJQAAgGgDAAIgOAAIAAgNIANAAQAOAAALgCIAAAaQAIgbAWAAQAMAAAHAHQAGAGAAALQAAAJgFAFQgEAFgIAAQgEAAgEgDQgEgEAAgFQAAgJAKgDQgDgFgHAAQgNAAgGAMQgGAMAAATIAAAmQAAAFADAAIANAAIAAANg");
	this.shape_32.setTransform(-11.675,25.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgmAqQgPgQgBgaQAAgZAQgQQAQgRAYAAQAZAAAOAQQANAPAAAaIAAAFIhVAAQAAASAKALQAKAMAQAAQAbAAAJgbIAMAGQgJAjgoAAQgbAAgPgRgAAhgHQgBglgeAAQgfAAgCAlIBAAAIAAAAg");
	this.shape_33.setTransform(-22.7,26.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAUBMIAAgNIAOAAQADAAAAgGIAAg0IhJAAIAAA0QAAAGADAAIAOAAIAAANIg5AAIAAgNIAOAAQAEAAAAgGIAAhyQAAgFgEAAIgOAAIAAgNIA5AAIAAANIgOAAQgDAAAAAFIAAAyIBJAAIAAgyQAAgFgDAAIgOAAIAAgNIA5AAIAAANIgOAAQgDAAAAAFIAAByQAAAGADAAIAOAAIAAANg");
	this.shape_34.setTransform(-36.825,23.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3type, new cjs.Rectangle(-74.2,7,148.5,102.8), null);


(lib.HEAD3dtype = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgHgGAAgLQAAgJAHgHQAHgHAKAAQALAAAHAHQAHAHAAAJQAAALgHAGQgHAHgLAAQgKAAgHgHg");
	this.shape.setTransform(62.575,52.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVBlIAAgXIANAAQAFAAAAgIIAAiGQAAgJgFAAIgOAAIAAgXIAYAAQAWAAANgDIAAAhQAOgiAlAAQAdAAARAVQARAVAAAjQAAAigRAVQgSAVgeAAQgjAAgNgfIAAAwQAAAIAFAAIANAAIAAAXgAgQg+QgKANAAAYIAAAEQAAAXAKANQAJAMAQAAQARAAAJgMQALgNAAgXIAAgEQAAgYgLgNQgJgMgRAAQgQAAgJAMg");
	this.shape_1.setTransform(49.875,49.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDAWIAAhCQAAgIgFAAIgOAAIAAgWIA7AAIAABeQAAAdAYAAQAeAAAAgrIAAgyQAAgIgFAAIgPAAIAAgWIA9AAIAAByQAAAIAFABIAOAAIAAAWIgZAAQgVAAgOADIAAgbQgOAcghAAQgvAAAAg1g");
	this.shape_2.setTransform(32.025,47.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKBlIAAgWIALAAQAGAAgEgHIgZgmIgWAVIAAAQQAAAHAFABIAMAAIAAAWIhMAAIAAgWIAOAAQAEgBAAgHIAAiJQAAgIgEgBIgPAAIAAgWIAZAAQAWAAANgDIAACBIAugsQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgEAAIgQAAIAAgWIBNAAIAAAWIgKAAQgJAAgGAGIgdAZIApBAQAEAFAFABIAJAAIAAAWg");
	this.shape_3.setTransform(14.625,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1A4QgUgTAAglQAAgkAVgTQAWgVAlAAQAfAAASAOQASANAAAXQAAAPgJAJQgHAHgOAAQgKAAgHgFQgGgHgBgJQABgTATgFQgHgNgYAAQgpAAAAAyIAAADQAAA1AnAAQAfgBALgcIAWALQgPAqgyAAQgmAAgVgVg");
	this.shape_4.setTransform(-1.65,47.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1A3QgUgUAAgjQAAghAVgWQAVgVAhAAQAiAAATAVQATAUAAAjIAAAIIhqAAQACAtAnAAQAdAAALgcIAWAKQgOAqgzAAQgmAAgVgWgAAhgMQgBgWgGgKQgIgJgQAAQggAAgCApIBBAAIAAAAg");
	this.shape_5.setTransform(-17.5,47.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMBlIAAgWIALAAQAFgBAAgHIAAhAQAAgdgYAAQgeAAAAAwIAAAtQAAAHAFABIALAAIAAAWIhLAAIAAgWIANAAQAFgBAAgHIAAiJQAAgIgFgBIgOAAIAAgWIAZAAQAVAAAOgDIAABRQANgdAiAAQAwAAAAA1IAABCQAAAHAFABIANAAIAAAWg");
	this.shape_6.setTransform(-34.375,44.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1A4QgUgTAAglQAAgkAVgTQAWgVAlAAQAfAAASAOQASANAAAXQAAAPgJAJQgHAHgNAAQgLAAgHgFQgHgHAAgJQAAgTAUgFQgHgNgYAAQgpAAAAAyIAAADQAAA1AoAAQAegBALgcIAXALQgQAqgyAAQglAAgWgVg");
	this.shape_7.setTransform(-50.9,47.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBBCQgMgLAAgRQAAgZAagNQAWgKAwgHIAAgJQAAgbgdAAQgMAAgHACQAFAHAAAKQAAAJgGAHQgIAFgJAAQgZAAAAgXQgBgoBGAAQAhAAAPAMQAPALAAAbIAABFQAAAHAFAAIANAAIAAAXIgxAAQgGgKgDgPQgGANgOAHQgOAJgTAAQgTAAgNgLgAgWAKQgPAHAAAOQgBAVAWAAQAQAAAJgMQALgLgBgTIAAgKQgcAEgNAGg");
	this.shape_8.setTransform(26.6,15.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOBVQgLgKAAgZIAAhRIgUAAIAAgUIAMAAQAQgDACgOIACgbIAbAAIAAAqIAdAAIAAAWIgeAAIAABQQAAAWATAAQAHAAAHgDIAAAYQgNADgNAAQgYAAgKgKg");
	this.shape_9.setTransform(5.95,13.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1A3QgUgUAAgjQAAghAVgWQAVgVAhAAQAiAAATAVQATAUAAAjIAAAIIhpAAQABAtAnAAQAdAAALgcIAWAKQgOAqgzAAQgmAAgVgWgAAhgMQAAgWgIgJQgHgKgQAAQggAAgCApIBBAAIAAAAg");
	this.shape_10.setTransform(-6.6,15.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDBMQgXgaAAgyQAAguAZgdQAZgbAoAAQAtgBAOAkIAIggIAYAAIAABLIgiAAQgJg0gqAAQg1AAAABIIAAAJQAABJA0AAQAUAAAMgMQAMgMAAgVIAAgIIgrAAIAAgVIBVAAIAABfIgSAAIgLggQgPAlgxAAQgqgBgXgbg");
	this.shape_11.setTransform(-24.875,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3dtype, new cjs.Rectangle(-72.7,-9,145.5,74.1), null);


(lib.HEAD3ctype = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgHgGAAgLQAAgKAHgGQAHgHAKAAQALAAAHAHQAHAGAAAKQAAALgHAGQgHAHgLAAQgKAAgHgHg");
	this.shape.setTransform(41.625,69.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BLIAAgXIALAAQAFABAAgJIAAg7QAAgggYAAQgcAAAAArIAAAwQAAAJAFgBIANAAIAAAXIhKAAIAAgXIALAAQAGABgBgJIAAg+QABgdgYAAQgcAAAAArIAAAwQAAAJAFgBIALAAIAAAXIhLAAIAAgXIANAAQAFABABgJIAAhSQgBgKgFABIgNAAIAAgXIAXAAQAWAAANgDIAAAcQAOgdAgAAQAjAAAHAiQANgiAjAAQAxAAAAA5IAAA9QAAAJAEgBIAOAAIAAAXg");
	this.shape_1.setTransform(25,64.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBCQgLgLAAgQQAAgaAagNQAVgKAwgIIAAgIQAAgbgeAAQgLAAgHACQAFAHAAAJQAAAKgGAGQgIAHgJAAQgaAAAAgZQABgnBFAAQAhAAAPALQAPAMAAAaIAABFQAAAJAFgBIANAAIAAAXIgxAAQgGgKgDgPQgGAMgOAIQgPAJgRAAQgVAAgMgLgAgWAJQgQAJAAAOQAAAUAWAAQAQAAAJgLQAKgMAAgSIAAgLQgcADgNAGg");
	this.shape_2.setTransform(3.4,64.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABBJIAAgXIAMAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgCgCgDIgWgeIgZAeQgBABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIAKAAIAAAXIg9AAIAAgXIALAAQAEABAGgIIAngrIgmgqQgFgIgFABIgJAAIAAgXIBQAAIAAAXIgLAAQgHAAAFAGIAUAbIAWgbQABAAAAgBQAAgBAAAAQABgBAAAAQgBgBAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgXIA/AAIAAAXIgNAAQgEgBgGAIIgkAoIAoAtQAGAHADAAIAKAAIAAAXg");
	this.shape_3.setTransform(-13.625,64.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1A4QgUgVAAgjQAAgiAVgVQAVgVAhAAQAiAAATAUQATAVAAAjIAAAHIhpAAQABAuAnAAQAdAAALgdIAWALQgOAqgzAAQgmAAgVgVgAAhgMQAAgWgIgKQgHgJgQAAQggAAgCApIBBAAIAAAAg");
	this.shape_4.setTransform(-30,64.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBlIAAgWIANAAQAFAAAAgIIAAiIQAAgKgFABIgOAAIAAgXIAZAAQAUAAAOgDIAACrQAAAIAEAAIAMAAIAAAWg");
	this.shape_5.setTransform(39.025,29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBBCQgMgLAAgQQAAgaAbgNQAVgKAxgIIAAgIQAAgbgfAAQgLAAgIACQAGAHAAAJQAAAKgHAGQgGAHgLAAQgZAAABgZQAAgnBEAAQAiAAAPALQAPAMAAAaIAABGQAAAIAFAAIAMAAIAAAWIgwAAQgGgKgDgPQgGAMgOAJQgPAIgSAAQgTAAgNgLgAgWAJQgPAJgBAOQABAUAVAAQAQAAAKgLQAKgMAAgTIAAgKQgdAEgNAFg");
	this.shape_6.setTransform(26.75,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBWQgLgLAAgYIAAhRIgUAAIAAgVIAMgBQAQgDACgNIACgaIAbAAIAAApIAdAAIAAAXIgeAAIAABQQAAAVATAAQAHAAAHgCIAAAWQgNAFgNAAQgYgBgKgJg");
	this.shape_7.setTransform(13.15,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALBLIAAgWIAMAAQAFAAAAgIIAAg/QAAgdgYAAQgfAAAAAvIAAAtQAAAIAFAAIAMAAIAAAWIhMAAIAAgWIANAAQAGAAAAgIIAAhTQAAgJgGAAIgNAAIAAgXIAYAAQAVAAANgDIAAAdQAOgeAjAAQAvAAAAA3IAABAQAAAIAFAAIAOAAIAAAWg");
	this.shape_8.setTransform(-0.375,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1A3QgUgUAAgjQAAgiAVgVQAVgVAhAAQAiAAATAUQATAUAAAkIAAAHIhpAAQABAuAnAAQAdAAALgdIAWALQgOAqgzAAQgmAAgVgWgAAhgMQAAgWgIgKQgHgJgQAAQggAAgCApIBBAAIAAAAg");
	this.shape_9.setTransform(-17.4,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhDBRQgTgUABgjQgBgiATgVQARgVAeAAQAjAAAOAdIAAguQgBgKgFABIgOAAIAAgXIAZAAQAVAAAOgDIAACrQAAAIAFAAIAMAAIAAAWIg1AAIgCgdQgOAhglAAQgeAAgRgWgAghgMQgLAMAAAYIAAAEQAAAYALANQAJAMARAAQAQAAAJgMQALgNAAgYIAAgEQAAgYgLgMQgKgMgPAAQgRAAgJAMg");
	this.shape_10.setTransform(-34.3,29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBBCQgMgLAAgRQAAgZAagNQAWgKAwgIIAAgIQAAgbgdAAQgMAAgHACQAFAHAAAJQAAAKgGAGQgIAGgJABQgZAAAAgZQgBgnBGAAQAhAAAPAMQAPALAAAaIAABGQAAAHAFABIANAAIAAAWIgxAAQgGgKgDgPQgGAMgOAJQgOAIgTAAQgTAAgNgLgAgWAJQgPAJAAAOQgBAUAWAAQAQAAAJgLQALgMgBgTIAAgKQgcAEgNAFg");
	this.shape_11.setTransform(26.6,0.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBWQgLgLAAgYIAAhRIgUAAIAAgVIAMgBQAQgCACgOIACgbIAbAAIAAAqIAdAAIAAAXIgeAAIAABQQAAAVATAAQAHAAAHgCIAAAWQgNAFgNAAQgYgBgKgJg");
	this.shape_12.setTransform(5.95,-1.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1A3QgUgUAAgjQAAgiAVgVQAVgVAhAAQAiAAATAVQATATAAAkIAAAHIhpAAQABAuAnAAQAdAAALgcIAWAKQgOAqgzAAQgmAAgVgWgAAhgMQAAgWgIgKQgHgJgQAAQggAAgCApIBBAAIAAAAg");
	this.shape_13.setTransform(-6.6,0.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhDBMQgXgaAAgyQAAguAZgdQAZgcAoAAQAtABAOAiIAIgeIAYAAIAABKIgiAAQgJg1gqAAQg1AAAABJIAAAJQAABIA0AAQAUAAAMgLQAMgMAAgVIAAgHIgrAAIAAgXIBVAAIAABhIgSAAIgLgiQgPAmgxgBQgqABgXgcg");
	this.shape_14.setTransform(-24.875,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3ctype, new cjs.Rectangle(-76.2,-24,152.5,106.2), null);


(lib.HEAD3btype = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgHgGAAgLQAAgKAHgGQAHgHAKAAQALAAAHAHQAHAGAAAKQAAALgHAGQgHAHgLAAQgKAAgHgHg");
	this.shape.setTransform(41.625,69.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BLIAAgXIALAAQAFABAAgJIAAg7QAAgggYAAQgcAAAAArIAAAwQAAAJAFgBIANAAIAAAXIhKAAIAAgXIALAAQAGABgBgJIAAg+QABgdgYAAQgcAAAAArIAAAwQAAAJAFgBIALAAIAAAXIhLAAIAAgXIANAAQAFABABgJIAAhSQgBgKgFABIgNAAIAAgXIAXAAQAWAAANgDIAAAcQAOgdAgAAQAjAAAHAiQANgiAjAAQAxAAAAA5IAAA9QAAAJAEgBIAOAAIAAAXg");
	this.shape_1.setTransform(25,64.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBCQgLgLAAgQQAAgaAagNQAVgKAwgIIAAgIQAAgbgeAAQgLAAgHACQAFAHAAAJQAAAKgGAGQgIAHgJAAQgaAAAAgZQABgnBFAAQAhAAAPALQAPAMAAAaIAABFQAAAJAFgBIANAAIAAAXIgxAAQgGgKgDgPQgGAMgOAIQgPAJgRAAQgVAAgMgLgAgWAJQgQAJAAAOQAAAUAWAAQAQAAAJgLQAKgMAAgSIAAgLQgcADgNAGg");
	this.shape_2.setTransform(3.4,64.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABBJIAAgXIAMAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgCgCgDIgWgeIgZAeQgBABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIAKAAIAAAXIg9AAIAAgXIALAAQAEABAGgIIAngrIgmgqQgFgIgFABIgJAAIAAgXIBQAAIAAAXIgLAAQgHAAAFAGIAUAbIAWgbQABAAAAgBQAAgBAAAAQABgBAAAAQgBgBAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgXIA/AAIAAAXIgNAAQgEgBgGAIIgkAoIAoAtQAGAHADAAIAKAAIAAAXg");
	this.shape_3.setTransform(-13.625,64.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1A4QgUgVAAgjQAAgiAVgVQAVgVAhAAQAiAAATAUQATAVAAAjIAAAHIhpAAQABAuAnAAQAdAAALgdIAWALQgOAqgzAAQgmAAgVgVgAAhgMQAAgWgIgKQgHgJgQAAQggAAgCApIBBAAIAAAAg");
	this.shape_4.setTransform(-30,64.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALBLIAAgWIAMAAQAFAAAAgIIAAg/QAAgdgYAAQgfAAAAAvIAAAtQAAAIAFAAIAMAAIAAAWIhMAAIAAgWIANAAQAGAAAAgIIAAhTQAAgJgGAAIgNAAIAAgXIAYAAQAVAAANgDIAAAdQAOgeAjAAQAvAAAAA3IAABAQAAAIAFAAIAOAAIAAAWg");
	this.shape_5.setTransform(32.425,32);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3A3QgWgVAAgiQAAgiAWgVQAWgVAiAAQAiAAAWAVQAVAVAAAiQAAAigWAVQgVAWgjAAQgiAAgVgWgAgkgBIAAADQAAAzAkAAQAlAAAAgzIAAgDQAAgzglAAQgkAAAAAzg");
	this.shape_6.setTransform(14.925,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBoIAAgWIANAAQAFAAAAgIIAAhQQAAgMgHAAIgLAAIAAgXIAYAAQAUAAAOgDIAAB2QAAAIAEAAIANAAIAAAWgAgRg+QgHgHAAgKQAAgKAHgHQAHgHAKAAQALAAAHAHQAHAHAAAKQAAAKgHAHQgHAIgLAAQgKAAgHgIg");
	this.shape_7.setTransform(2.275,29.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9BBIAAgoIAfAAIAAAbQAKADARAAQAbAAAAgTQAAgKgJgEQgHgEgRgDQgYgFgMgHQgQgLAAgUQAAgWAQgNQASgNAeAAQAeAAAZALIAAAnIgfAAIAAgZQgIgDgPgBQgbAAAAATQAAAKAKAFIAWAFQAaAFAKAIQARAJAAAWQAAAXgRAMQgSAOgeAAQgbAAgfgMg");
	this.shape_8.setTransform(-8.75,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBoIAAgWIANAAQAFAAAAgIIAAhQQAAgMgHAAIgLAAIAAgXIAYAAQAUAAAOgDIAAB2QAAAIAEAAIANAAIAAAWgAgRg+QgHgHAAgKQAAgKAHgHQAHgHAKAAQALAAAHAHQAHAHAAAKQAAAKgHAHQgHAIgLAAQgKAAgHgIg");
	this.shape_9.setTransform(-19.875,29.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBKIg0h1QgDgIgFABIgMAAIAAgXIBOAAIAAAXIgMAAQgIgBADAJQAEANAaA8IAfhIQACgEgCgDQgBgCgEAAIgOAAIAAgXIBCAAIAAAXIgLAAQgIgBgDAIIg0B1g");
	this.shape_10.setTransform(-32.675,32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBBCQgMgLAAgRQAAgZAagNQAWgKAwgIIAAgIQAAgbgdAAQgMAAgHACQAFAHAAAJQAAAKgGAGQgIAGgJABQgZAAAAgZQgBgnBGAAQAhAAAPAMQAPALAAAaIAABGQAAAHAFABIANAAIAAAWIgxAAQgGgKgDgPQgGAMgOAJQgOAIgTAAQgTAAgNgLgAgWAJQgPAJAAAOQgBAUAWAAQAQAAAJgLQALgMgBgTIAAgKQgcAEgNAFg");
	this.shape_11.setTransform(26.6,0.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBWQgLgLAAgYIAAhRIgUAAIAAgVIAMgBQAQgCACgOIACgbIAbAAIAAAqIAdAAIAAAXIgeAAIAABQQAAAVATAAQAHAAAHgCIAAAWQgNAFgNAAQgYgBgKgJg");
	this.shape_12.setTransform(5.95,-1.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1A3QgUgUAAgjQAAgiAVgVQAVgVAhAAQAiAAATAVQATATAAAkIAAAHIhpAAQABAuAnAAQAdAAALgcIAWAKQgOAqgzAAQgmAAgVgWgAAhgMQAAgWgIgKQgHgJgQAAQggAAgCApIBBAAIAAAAg");
	this.shape_13.setTransform(-6.6,0.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhDBMQgXgaAAgyQAAguAZgdQAZgcAoAAQAtABAOAiIAIgeIAYAAIAABKIgiAAQgJg1gqAAQg1AAAABJIAAAJQAABIA0AAQAUAAAMgLQAMgMAAgVIAAgHIgrAAIAAgXIBVAAIAABhIgSAAIgLgiQgPAmgxgBQgqABgXgcg");
	this.shape_14.setTransform(-24.875,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3btype, new cjs.Rectangle(-67.2,-24,134.5,106.2), null);


(lib.HEAD2type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(69,44.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpAvIAAgcIAQAAIAAAUQAJAFAPAAQAYAAAAgRQAAgJgIgFQgGgCgNgEQgRgDgIgEQgMgIAAgOQAAgPALgJQAMgJATAAQAVAAARAJIAAAbIgQAAIAAgTQgIgFgOABQgXAAAAAQQAAAJAIAEQAFACAOADQASADAIAFQALAIAAAOQAAAQgLAJQgMAJgUAAQgVAAgTgJg");
	this.shape_1.setTransform(62.025,40.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAoQgOgPAAgZQAAgYAPgPQAPgQAXAAQAYAAANAPQANAPAAAYIAAAFIhSAAQAAASAKAKQAJALAQAAQAaAAAIgZIAMAFQgJAhgnAAQgZAAgPgQgAAfgHQAAgjgdAAQgdAAgDAjIA9AAIAAAAg");
	this.shape_2.setTransform(51.425,40.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA+QgHgHAAgRIAAhBIgQAAIAAgMIAKAAQAJgBABgJIACgTIAOAAIAAAcIAXAAIAAANIgYAAIAABBQAAARAPAAQAFAAAGgCIAAANQgIACgIAAQgPAAgHgGg");
	this.shape_3.setTransform(42.225,38.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAoQgOgPAAgZQAAgYAPgPQAPgQAXAAQAYAAANAPQANAPAAAYIAAAFIhSAAQAAASAKAKQAJALAQAAQAaAAAIgZIAMAFQgJAhgnAAQgZAAgPgQgAAfgHQAAgjgdAAQgdAAgDAjIA9AAIAAAAg");
	this.shape_4.setTransform(33.225,40.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAwIgGAZIgNAAQACgJAAgcIAAhaQAAgGgDAAIgNAAIAAgMIAMAAQAPAAAKgCIAABAQALgaAbAAQAWAAANAQQANAPAAAYQAAAagNAPQgNAPgXAAQgeAAgLgbgAgPgLQgJALAAASIAAADQAAATAJALQAJAKAOAAQAPAAAJgKQAJgLAAgTIAAgDQAAgSgJgLQgJgKgPAAQgOAAgJAKg");
	this.shape_5.setTransform(20.725,38.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsAwQgJgIAAgMQAAgSASgKQARgIAkgEIAAgGQAAgYgZAAQgPAAgHAGQAGAEAAAHQAAAGgEAEQgEADgGAAQgOAAAAgPQAAgOAOgHQANgHAUAAQAWAAALAJQAKAJAAATIAAA2QAAAEADAAIAMAAIAAAOIgfAAQgDgIgBgOQgFALgLAGQgKAHgNAAQgPAAgJgIgAgUAGQgNAGAAAMQAAAIAGAGQAFAEAJAAQANAAAJgKQAJgJAAgRIAAgHQgaACgMAFg");
	this.shape_6.setTransform(8.775,40.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZBLIAAgNIANAAQADAAAAgFIAAhCQAAgJgFAAIgLAAIAAgMIAMAAQANAAALgCIAABZQAAAFADAAIAMAAIAAANgAgJgyQgEgEAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_7.setTransform(-0.325,37.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwA8QgNgPAAgaQAAgYAOgPQANgQAWAAQAbAAAKAYIAAgqQAAgGgCAAIgOAAIAAgMIANAAQAPAAAJgCIAACBQAAAFAEAAIAMAAIAAANIgiAAIgCgXQgKAZgcAAQgWAAgOgPgAgegLQgJALAAASIAAADQAAATAJALQAIAKAQAAQANAAAJgKQAKgLgBgTIAAgDQABgSgKgLQgJgKgNAAQgQAAgIAKg");
	this.shape_8.setTransform(-9.75,38.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsA3IAAgNIANAAQADAAAAgFIAAhFQAAgGgDAAIgNAAIAAgNIAMAAQAOAAALgCIAAAZQAHgaAVAAQALAAAHAHQAGAGAAAKQAAAJgFAFQgEAFgHAAQgFAAgDgDQgEgEAAgEQAAgKAJgCQgCgFgHAAQgMAAgGAMQgGALAAASIAAAkQAAAFADAAIAMAAIAAANg");
	this.shape_9.setTransform(-26.325,40.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtARIAAg1QAAgFgDAAIgMAAIAAgNIAkAAIAABHQAAAXAVAAQAMAAAIgKQAIgLgBgSIAAglQAAgFgDAAIgMAAIAAgNIAlAAIAABXQAAAGACAAIAOAAIAAANIgNAAQgOAAgKACIAAgXQgLAXgZAAQgiAAAAglg");
	this.shape_10.setTransform(-37.6,40.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAoQgPgPAAgZQAAgYAQgQQAPgPAYAAQAYAAAPAPQAPAQAAAYQAAAZgPAPQgQAQgYAAQgYAAgPgQgAgYgfQgJALAAAUIAAABQAAAqAhAAQAQAAAJgLQAJgLAAgUIAAgBQAAgpgiAAQgPgBgJALg");
	this.shape_11.setTransform(-49.875,40.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BEQgHgGAAgJQAAgHAEgEQAEgFAGAAQAJAAACAIQACAHgHAIIAFAAQAJAAAGgGQAGgHAHgRIAAgBIgohUQgBgFgEAAIgJAAIAAgMIAyAAIAAAMIgKAAQgGAAACAGIAdA9IAbg9QACgGgGAAIgLAAIAAgMIAsAAIAAAMIgKAAQgEAAgCAFIgmBYQgIAWgIAIQgKAKgPAAQgLAAgHgFg");
	this.shape_12.setTransform(-61.95,42.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8A8QAAgQAbgHQgVgDAAgQQAAgPATgFQgRgKAAgVQAAgQANgLQAOgLAUAAQAVAAAMALQAFgWAPAAQAGAAADADQAEAEAAAFQAAAFgDADQgDADgFAAQgHABgCgIQgEAEgDAIQAIAJgBAMQAAASgNAKQgMAKgWAAQgMAAgJgEQgLACAAAHQAAAKAPAAIArgBQAjAAAAAcQAAASgRAJQgQAJgcAAQg2AAAAgXgAgrA7QAAAOAmAAQArAAAAgUQAAgHgFgDQgFgDgNAAIglAAQgVAEAAAPgAgYg1QgHAIAAALIAAADQAAAMAGAHQAIAGALAAQANAAAGgGQAIgHgBgMIAAgDQABgLgIgIQgGgGgMgBQgMABgHAGg");
	this.shape_13.setTransform(58.8,19.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKA3IAAgNIAMAAQADAAAAgFIAAg0QAAgYgVAAQgNAAgHALQgIAMAAAUIAAAhQAAAFADAAIAMAAIAAANIg0AAIAAgNIAMAAQAEAAAAgFIAAhFQAAgGgEAAIgMAAIAAgNIAMAAQAOAAAKgCIAAAZQAMgaAZAAQAiAAAAAmIAAA1QAAAFADAAIANAAIAAANg");
	this.shape_14.setTransform(46.2,18.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZBLIAAgNIANAAQADAAAAgFIAAhCQAAgJgFAAIgLAAIAAgMIAMAAQANAAALgCIAABZQAAAFADAAIAMAAIAAANgAgJgyQgEgEAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_15.setTransform(36.675,16.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZBKIAAgNIANAAQADAAAAgFIAAhsQAAgHgDABIgNAAIAAgNIANAAQANAAAKgCIAACBQAAAFADAAIAMAAIAAANg");
	this.shape_16.setTransform(30.65,16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYBKIAAgNIAMAAQADAAAAgFIAAhsQAAgHgDABIgNAAIAAgNIANAAQAMAAALgCIAACBQAAAFADAAIAMAAIAAANg");
	this.shape_17.setTransform(24.65,16.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnApQgPgQAAgZQAAgYAQgPQAPgQAYAAQAYAAAPAQQAPAPAAAYQAAAZgPAQQgQAPgYAAQgYAAgPgPgAgYgeQgJAKAAAUIAAABQAAAqAhAAQAQAAAJgLQAJgLAAgUIAAgBQAAgpgiAAQgPAAgJALg");
	this.shape_18.setTransform(15.725,18.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsA3IAAgNIANAAQADAAAAgFIAAhFQAAgGgDAAIgNAAIAAgNIAMAAQAOAAALgCIAAAZQAHgaAVAAQALAAAHAHQAGAGAAAKQAAAJgFAFQgEAFgHAAQgFAAgDgDQgEgEAAgEQAAgKAJgCQgCgFgHAAQgMAAgGAMQgGALAAASIAAAkQAAAFADAAIAMAAIAAANg");
	this.shape_19.setTransform(5.025,18.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHA9QgHgGAAgRIAAhBIgQAAIAAgLIAKgBQAJgCABgHIACgTIAOAAIAAAcIAXAAIAAAMIgYAAIAABBQAAAQAPAAQAFAAAGgCIAAAOQgIACgIABQgPAAgHgIg");
	this.shape_20.setTransform(-3.325,17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAKA3IAAgNIAMAAQADAAAAgFIAAg0QAAgYgUAAQgOAAgHALQgIAMAAAUIAAAhQAAAFADAAIAMAAIAAANIg0AAIAAgNIANAAQADAAAAgFIAAhFQAAgGgDAAIgNAAIAAgNIAMAAQAOAAAKgCIAAAZQAMgaAZAAQAiAAAAAmIAAA1QAAAFAEAAIAMAAIAAANg");
	this.shape_21.setTransform(-13,18.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnApQgPgQAAgZQAAgYAQgPQAPgQAYAAQAYAAAPAQQAPAPAAAYQAAAZgPAQQgQAPgYAAQgYAAgPgPgAgYgeQgJAKAAAUIAAABQAAAqAhAAQAQAAAJgLQAJgLAAgUIAAgBQAAgpgiAAQgPAAgJALg");
	this.shape_22.setTransform(-25.525,18.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkApQgPgPAAgaQAAgYAPgPQAQgQAZAAQAVAAANAKQANAKAAARQAAAIgEAGQgFAEgHAAQgGAAgDgDQgEgDAAgGQAAgMAMgCQgGgQgYAAQgQAAgJALQgKALAAATIAAABQAAAVAJALQAJALAQAAQAbgBAIgZIAMAGQgKAhglAAQgZAAgPgPg");
	this.shape_23.setTransform(-36.925,18.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnApQgPgQAAgZQAAgYAQgPQAPgQAYAAQAYAAAPAQQAPAPAAAYQAAAZgPAQQgQAPgYAAQgYAAgPgPgAgYgeQgJAKAAAUIAAABQAAAqAhAAQAQAAAJgLQAJgLAAgUIAAgBQAAgpgiAAQgPAAgJALg");
	this.shape_24.setTransform(-53.725,18.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHA9QgHgGAAgRIAAhBIgQAAIAAgLIAKgBQAJgCABgHIACgTIAOAAIAAAcIAXAAIAAAMIgYAAIAABBQAAAQAPAAQAFAAAGgCIAAAOQgIACgIABQgPAAgHgIg");
	this.shape_25.setTransform(-63.175,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2type, new cjs.Rectangle(-140,0,278,53.8), null);


(lib.HEAD1type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGBRIAAgVIAHAAQAEAAgDgGIgOgZIgQAQIAAAIQgBAHAFAAIAHAAIAAAVIhAAAIAAgVIAJAAQAEAAAAgHIAAhmQAAgHgEgBIgJAAIAAgVIAYAAQASAAALgCIAABlIAfgdQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgLAAIAAgVIBAAAIAAAVIgIAAQgFAAgGAFIgTAPIAeAxQACAFAFAAIAFAAIAAAVg");
	this.shape.setTransform(20.35,38.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqAuQgRgRAAgdQAAgcARgQQASgRAdAAQAaAAAPAKQAOALAAATQAAAMgHAIQgGAGgMAAQgJAAgGgFQgFgEAAgJQAAgQAQgDQgGgIgPAAQgdAAAAAlIAAAEQAAAlAcAAQAVAAAIgUIAVALQgNAhgpAAQgeAAgRgQg");
	this.shape_1.setTransform(6.975,41.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2A1QgJgJAAgOQAAgVAXgJQAPgHAlgHIAAgGQAAgUgUAAQgHAAgGABQADAFAAAHQAAAHgFAGQgGAFgJAAQgWAAAAgVQAAgfA6AAQAdAAAMAKQANAJAAAVIAAAzQAAAIAEAAIAIAAIAAAUIgrAAQgFgHgDgMQgFAKgKAHQgMAGgNAAQgRAAgKgJgAgPAJQgLAFAAAKQAAAOAPAAQALABAGgJQAGgHAAgNIAAgIQgSACgJAFg");
	this.shape_2.setTransform(-5.975,41.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA1IgGAaIgcAAIAAgoIAAhZQAAgIgEAAIgJAAIAAgVIAYAAQATAAAKgDIAABCQALgYAbAAQAXAAAOARQANAQAAAbQAAAdgOARQgOARgYAAQggAAgKgegAgRATIAAAEQAAAjAXAAQAYAAAAgjIAAgEQAAgjgYAAQgXAAAAAjg");
	this.shape_3.setTransform(-20.375,39.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrAsQgQgQAAgcQgBgbASgRQARgRAbAAQAdAAAPARQAOARAAAdIAAAFIhPAAQABAgAcgBQAVABAIgVIAUAMQgNAggqAAQgeAAgRgSgAAWgKQAAgQgFgHQgEgHgLABQgUAAgCAdIAqAAIAAAAg");
	this.shape_4.setTransform(45,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsA8IAAgVIAGAAQAFAAAAgHIAAgrQAAgWgRAAQgSAAAAAdIAAAkQAAAHAEAAIAIAAIAAAVIg+AAIAAgVIAHAAQAEAAAAgHIAAgsQAAgVgQAAQgTAAAAAdIAAAkQAAAHAFAAIAHAAIAAAVIhAAAIAAgVIAIAAQAFAAAAgHIAAg7QAAgIgFAAIgIAAIAAgVIAXAAQARAAAMgDIAAAWQALgWAaAAQAbAAAGAZQAKgZAdAAQAnAAAAAuIAAAtQAAAHAFAAIAIAAIAAAVg");
	this.shape_5.setTransform(27.725,16.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAtQgRgRAAgcQAAgbASgRQASgRAcAAQAcAAASARQARARAAAbQAAAcgSAQQgRASgdAAQgcAAgSgRgAgRgeQgGAJAAAUIAAADQAAAUAGAIQAFAJAMAAQANAAAGgJQAFgIAAgUIAAgDQAAgUgFgJQgGgJgNABQgMgBgFAJg");
	this.shape_6.setTransform(9.925,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqAtQgRgQAAgdQAAgcARgRQASgQAdAAQAaAAAPAKQAOALAAATQAAANgHAHQgGAGgMAAQgJAAgGgFQgFgFAAgHQAAgRAQgDQgGgIgPAAQgdAAAAAlIAAADQAAAmAcAAQAVAAAIgVIAVALQgNAigpAAQgeAAgRgRg");
	this.shape_7.setTransform(-3.025,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBRIAAgVIAJAAQAEAAAAgHIAAhlQAAgIgEAAIgJAAIAAgWIAYAAQARAAALgCIAACFQgBAHAFAAIAHAAIAAAVg");
	this.shape_8.setTransform(-13.05,14.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrAsQgRgQAAgcQABgbAQgRQARgRAbAAQAdAAAQARQAPARAAAdIAAAFIhQAAQABAgAcgBQAVABAIgVIAVAMQgOAggqAAQgeAAgRgSgAAWgKQAAgQgFgHQgFgHgKABQgUAAgBAdIApAAIAAAAg");
	this.shape_9.setTransform(-23,16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhBQIghhgIgiBgIgdAAIgoiCQgEgIgFAAIgJAAIAAgVIBIAAIAAAVIgJAAQgGAAACAIIAXBLIAahLQACgIgHAAIgKAAIAAgVIBGAAIAAAVIgKAAQgGAAACAIIAbBMIAXhMQACgIgGAAIgMAAIAAgVIA8AAIAAAVIgKAAQgGAAgCAIIgqCCg");
	this.shape_10.setTransform(-38.9,14.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1type, new cjs.Rectangle(-75,-3,150,58.9), null);


(lib.CTA_Ribbonsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CTA_Ribbon.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2DCCD3").s().p("AqeCpIBHinIhHiqIT1AAIBHCsIhHClg");
	this.shape.setTransform(67.05,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.1,33.8);


(lib.BKGDblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#285C4D").s().p("A3ZMMIAA4XMAuzAAAIAAYXg");
	this.shape.setTransform(0,77.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDblue, new cjs.Rectangle(-149.7,0,299.5,156), null);


(lib.BKGD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2DCCD3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(0,125.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD, new cjs.Rectangle(-150,0,300,250.1), null);


(lib.HEAD3d = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD3dtype();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3d, new cjs.Rectangle(-72.7,-9,145.5,74.1), null);


(lib.HEAD3c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD3ctype();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3c, new cjs.Rectangle(-76.2,-24,152.5,106.2), null);


(lib.HEAD3b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD3btype();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3b, new cjs.Rectangle(-67.2,-24,134.5,106.2), null);


(lib.HEAD3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD3type();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(-74.2,7,148.5,102.8), null);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD2type();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-140,0,278,53.8), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD1type();
	this.instance.setTransform(0,24,1,1,0,0,0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-75,-3,150,58.9), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUA4QgMgFgIgHQgIgIgFgLQgEgMAAgNQAAgMAEgLQAFgLAHgIQAIgHALgFQALgFAMAAQANAAAKAFQALAEAHAIQAIAJAEALQAEAMAAANIAAAHIhUAAQACALAIAHQAIAIAOAAIAIgBIAIgCIAIgEIAHgEIANATQgJAIgMAEQgNAEgNAAQgMAAgLgEgAAdgKIgCgIQgBgFgEgDQgDgEgFgDQgGgCgHAAQgGAAgFACQgFACgEAFIgFAIIgCAIIA3AAg");
	this.shape.setTransform(36.625,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA7IAAhyIAeAAIAAAQQAFgHAKgGQAJgGALABIAAAdIgIgBIgIABIgIADIgHAEIgEAFIAABLg");
	this.shape_1.setTransform(27.075,1.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaA5QgIgCgFgFQgFgEgFgHQgDgIAAgJQAAgKADgHQAFgGAFgFQAFgEAIgCQAHgCAHAAQALAAAJAEQAKAEAFAGIAAgQQAAgIgHgGQgHgEgKAAQgTAAgPANIgLgUQALgKANgDQANgFAMAAQAKAAAJACQAJACAGAFQAIAGAEAIQAEAIAAAMIAABJIgeAAIAAgMQgGAHgJAEQgJAEgLAAQgHAAgHgDgAgQAKQgFAFgBAHQABAJAFAEQAHAFAJgBQAGABAGgDQAHgDAEgFIAAgNQgEgGgHgCQgGgDgGAAQgJAAgHAFg");
	this.shape_2.setTransform(16.15,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQA4QgLgFgIgIQgIgIgEgLQgFgLAAgNQAAgMAFgLQAEgLAIgIQAIgJALgDQAMgFAMAAQARAAALAHQALAGAGAHIgUATQgIgNgQAAQgNAAgIAKQgJAJAAAOQAAAOAJAKQAIAJANAAQAIAAAGgDQAGgEAEgFIAUASQgGAIgLAHQgLAGgRAAQgMAAgMgEg");
	this.shape_3.setTransform(5.025,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBCQgIgIAAgPIAAg7IgTAAIAAgaIATAAIAAgfIAdAAIAAAfIAXAAIAAAaIgXAAIAAAzQAAAFADAEQACADAFAAIAHgBIAEgCIAGAXQgDADgGACQgHACgJAAQgPAAgIgIg");
	this.shape_4.setTransform(-9.675,-0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA4QgMgFgIgHQgIgIgFgLQgEgMAAgNQAAgMAEgLQAFgLAHgIQAIgHALgFQALgFAMAAQANAAAKAFQALAEAHAIQAIAJAEALQAEAMAAANIAAAHIhUAAQACALAIAHQAIAIAOAAIAIgBIAIgCIAIgEIAHgEIANATQgJAIgMAEQgNAEgNAAQgMAAgLgEgAAdgKIgCgIQgBgFgEgDQgDgEgFgDQgGgCgHAAQgGAAgFACQgFACgEAFIgFAIIgCAIIA3AAg");
	this.shape_5.setTransform(-19.525,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXBMQgPgGgMgKQgLgLgHgPQgGgPgBgTQABgSAGgPQAHgPALgLQAMgKAPgGQAPgGARAAQALAAALADQAKADAIAFQAIAFAGAGQAGAHAFAHIgcAPQgGgIgJgHQgKgGgMAAQgKAAgJAEQgJAEgHAHQgGAHgFAJQgDAKAAAKQAAALADAKQAFAKAGAGQAHAHAJAEQAJAEAKAAQAKAAAJgEQAJgEAFgEIAAgTIgpAAIAAgdIBKAAIAAA8QgMANgQAJQgRAIgVAAQgRAAgPgGg");
	this.shape_6.setTransform(-34.1,-0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bkgd shape
	this.instance = new lib.CTA_Ribbonsvg("synched",0);
	this.instance.setTransform(-0.05,0,1,1,0,0,0,67,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-82.8,-17.4,165.7,34.3), null);


// stage content:
(lib.JCC_Diabetes2_160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,431];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_431 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(431).call(this.frame_431).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(432));

	// logo
	this.instance = new lib.jcchwhiteRGBai();
	this.instance.setTransform(80.15,545.2,0.26,0.26,0,0,0,0.6,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(432));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(72.1,468.95,1,1,0,0,0,-10.4,3.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(415).to({_off:false},0).to({alpha:1},14).wait(3));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(80,329.05,1,1,0,0,0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({alpha:0},7).to({_off:true},1).wait(306).to({_off:false},0).to({alpha:1},7).wait(48));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(80,394.05,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({alpha:0},7).to({_off:true},1).wait(306).to({_off:false},0).to({alpha:1},7).wait(48));

	// HEAD3
	this.instance_4 = new lib.HEAD3();
	this.instance_4.setTransform(81,354,1,1,0,0,0,0,32);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).to({alpha:1},7).wait(83).to({alpha:0},7).to({_off:true},1).wait(264));

	// HEAD3b
	this.instance_5 = new lib.HEAD3b();
	this.instance_5.setTransform(230,386,1,1,0,0,0,0,32);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(161).to({_off:false},0).to({x:80,alpha:1},7,cjs.Ease.quadOut).wait(61).to({alpha:0},7).to({_off:true},1).wait(195));

	// HEAD3c
	this.instance_6 = new lib.HEAD3c();
	this.instance_6.setTransform(230,386,1,1,0,0,0,0,32);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(233).to({_off:false},0).to({x:80,alpha:1},7,cjs.Ease.quadOut).wait(60).to({alpha:0},7).to({_off:true},1).wait(124));

	// HEAD3d
	this.instance_7 = new lib.HEAD3d();
	this.instance_7.setTransform(230,386,1,1,0,0,0,0,32);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(304).to({_off:false},0).to({x:80,alpha:1},7,cjs.Ease.quadOut).wait(58).to({alpha:0},7).to({_off:true},1).wait(55));

	// BKGD-orange
	this.instance_8 = new lib.BKGD();
	this.instance_8.setTransform(80,352.2,1,0.2198,0,0,0,0,220.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({alpha:0},7).to({_off:true},1).wait(306).to({_off:false},0).to({alpha:1},7).wait(48));

	// BKGD-blue
	this.instance_9 = new lib.BKGDblue();
	this.instance_9.setTransform(80.1,457.05,1.0017,2.2694,0,0,0,0.1,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(432));

	// PIC4
	this.instance_10 = new lib.PIC4();
	this.instance_10.setTransform(230,201.4,1,1,0,0,0,0,76.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(304).to({_off:false},0).to({x:80,alpha:1},7,cjs.Ease.quadOut).wait(121));

	// PIC3
	this.instance_11 = new lib.PIC3();
	this.instance_11.setTransform(230,220.5,1,1,0,0,0,0,95.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(233).to({_off:false},0).to({x:80,alpha:1},7,cjs.Ease.quadOut).to({_off:true},72).wait(120));

	// PIC2
	this.instance_12 = new lib.PIC2();
	this.instance_12.setTransform(230,255.1,1,1,0,0,0,0,130.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(161).to({_off:false},0).to({x:80,alpha:1},7,cjs.Ease.quadOut).to({_off:true},73).wait(191));

	// PIC1
	this.instance_13 = new lib.PIC1();
	this.instance_13.setTransform(80,255.1,1,1,0,0,0,0,130.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},169).wait(263));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-34,299.5,464,359.4);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
	fps: 36,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/JCC_Diabetes2_160x600_atlas_1.jpg?1660738365482", id:"JCC_Diabetes2_160x600_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;