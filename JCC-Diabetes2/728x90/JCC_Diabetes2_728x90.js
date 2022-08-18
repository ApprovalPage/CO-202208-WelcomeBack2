(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"JCC_Diabetes2_728x90_atlas_NP_1", frames: [[0,0,600,500],[0,502,600,500],[0,1004,600,500],[0,1506,600,500]]}
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



(lib.CO_Diabetes2_300x250Checkup = function() {
	this.initialize(ss["JCC_Diabetes2_728x90_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CO_Diabetes2_300x250Dental = function() {
	this.initialize(ss["JCC_Diabetes2_728x90_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CO_Diabetes2_300x250Dumbbells = function() {
	this.initialize(ss["JCC_Diabetes2_728x90_atlas_NP_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CO_Diabetes2_300x250Vision = function() {
	this.initialize(ss["JCC_Diabetes2_728x90_atlas_NP_1"]);
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
	this.instance = new lib.CO_Diabetes2_300x250Checkup();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC4, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.CO_Diabetes2_300x250Dental();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC3, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.CO_Diabetes2_300x250Vision();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.CO_Diabetes2_300x250Dumbbells();
	this.instance.setTransform(-150,-135,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(-150,-135,300,250), null);


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
	this.shape.setTransform(472,166.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBqIAAjTIAhAAIAADTg");
	this.shape_1.setTransform(460.175,160.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBuIAAiZIAgAAIAACZgAgNhKQgHgGAAgIQAAgJAHgGQAFgGAIAAQAIAAAHAGQAFAGABAJQgBAIgFAGQgHAGgIAAQgIAAgFgGg");
	this.shape_2.setTransform(452.5,160.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABNBPIAAhjQAAgcgZAAQgKAAgLAGQgJAGgFAIIAABrIghAAIAAhjQAAgcgZAAQgKAAgKAGQgJAGgHAJIAABqIggAAIAAiZIAgAAIAAAVQAHgIAMgIQAQgJAQAAQAgAAAIAdQAIgMANgIQAPgJAQAAQAsAAAAAvIAABug");
	this.shape_3.setTransform(435.45,163.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBEQgRgOAAgYQAAgYARgNQAPgMAVAAQAgAAAQATIAAgWQABgNgKgIQgKgIgPAAQgaAAgTAUIgPgYQAbgZAlABQAcAAARAMQATAOAAAdIAABlIgiAAIAAgRQgRAVgfgBQgVAAgPgMgAgYALQgKAHAAANQAAAMAKAHQAJAIAOAAQAYAAALgQIAAgXQgLgQgYAAQgOAAgJAIg");
	this.shape_4.setTransform(413.25,163.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhIBqIAAjTICRAAIAAAgIhrAAIAAA3IBoAAIAAAhIhoAAIAABbg");
	this.shape_5.setTransform(397.475,160.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBPIAAhfQAAgggfAAQgXAAgPAVIAABqIghAAIAAiZIAhAAIAAAVQAJgKAMgHQAPgIARAAQAyAAgBAyIAABrg");
	this.shape_6.setTransform(370.8,163.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5A5QgVgXAAgiQAAghAVgXQAWgYAjABQAkgBAWAYQAVAXAAAhQAAAigVAXQgWAXgkAAQgjAAgWgXgAgggiQgLAOAAAUQAAAWALAOQAMAPAUAAQAUAAANgPQALgOAAgWQAAgVgLgNQgNgQgUAAQgTAAgNAQg");
	this.shape_7.setTransform(353.475,163.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBpQgQgGgOgMIAQgYQARAUAgAAQARAAAMgJQAPgLAAgWIAAgTQgTAagdAAQgeAAgTgVQgTgVAAgkQAAgkATgWQATgVAeAAQAdAAATAZIAAgVIAhAAIAACRQAAAlgZASQgUAPggAAQgVAAgOgFgAgchCQgMAOAAAWQAAAWAMANQAMANATAAQALAAALgGQALgGAGgHIAAg5QgGgJgLgGQgLgGgLAAQgTAAgMANg");
	this.shape_8.setTransform(335.475,166.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1A6QgXgWAAgkQAAghAWgXQAXgXAgAAQAigBAVAYQAVAYAAAjIAAAIIh2AAQACATANALQANAMAUAAQAbAAARgQIAPAVQgXAXgngBQgiABgXgXgAgegnQgKAMgBAPIBVAAQAAgPgKgMQgMgNgVAAQgTAAgMANg");
	this.shape_9.setTransform(317.925,163.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBPIAAiZIAgAAIAAAWQAUgaAeAAIAAAiIgLgBQgLAAgMAFQgKAHgGAIIAABog");
	this.shape_10.setTransform(304.35,163.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhNBPQgeggAAgvQAAgvAegeQAfggAuAAQAwAAAeAgQAeAeAAAvQAAAwgeAfQgeAegwAAQguAAgfgegAgyg2QgTAWAAAgQAAAhATAVQAUAXAeAAQAgAAATgXQATgVAAghQAAgggTgWQgTgVggAAQgeAAgUAVg");
	this.shape_11.setTransform(286.475,160.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1A6QgXgWAAgkQAAghAWgXQAXgXAgAAQAigBAVAYQAVAYAAAjIAAAIIh2AAQACATANALQANAMAUAAQAbAAARgQIAPAVQgXAXgngBQgiABgXgXgAgdgnQgLAMgBAPIBVAAQAAgPgKgMQgMgNgVAAQgSAAgMANg");
	this.shape_12.setTransform(265.525,163.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpBPIAAiZIAiAAIAAAWQATgaAeAAIAAAiIgLgBQgKAAgMAFQgMAHgEAIIAABog");
	this.shape_13.setTransform(251.95,163.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyBEQgRgOAAgYQAAgYARgNQAPgMAVAAQAgAAARATIAAgWQAAgNgKgIQgKgIgPAAQgZAAgVAUIgNgYQAZgZAmABQAcAAARAMQATAOAAAdIAABlIghAAIAAgRQgSAVgfgBQgUAAgQgMgAgYALQgJAHAAANQAAAMAJAHQAJAIAOAAQAYAAAMgQIAAgXQgMgQgYAAQgOAAgJAIg");
	this.shape_14.setTransform(236.8,163.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhBBPQgggfAAgwQAAgvAggfQAfgeAtgBQA5AAAeAwIggAQQgHgNgOgIQgQgKgSABQgdgBgUAWQgVAWAAAgQAAAhAVAWQAUAVAdABQATAAAPgJQAOgIAHgOIAgAQQgeAvg5AAQgtAAgfgeg");
	this.shape_15.setTransform(218.2,160.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0A6QgYgWAAgkQABghAVgXQAXgXAgAAQAigBAVAYQAVAYgBAjIAAAIIh1AAQACATANALQANAMAUAAQAMABALgFQANgFAHgHIAQAVQgXAXgogBQghABgWgXgAgegnQgJAMgCAPIBWAAQgBgPgKgMQgMgNgVAAQgSAAgNANg");
	this.shape_16.setTransform(190.1,163.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjBqIAAhhQAAgegfAAQgXAAgPAVIAABqIgiAAIAAjTIAiAAIAABPQAIgJANgIQAPgHARAAQAxAAAAAwIAABsg");
	this.shape_17.setTransform(173,160.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWA8IAAhYIgZAAIAAgdIAZAAIAAgqIAhAAIAAAqIAeAAIAAAdIgeAAIAABQQAAASAOAAQAKAAAFgFIAIAZQgKAKgWgBQgmAAAAgng");
	this.shape_18.setTransform(158.95,161.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBsIAAh8IgZAAIAAgdIAZAAIAAgIQAAgaAOgOQAMgNAWAAQARAAAJAFIgHAZQgFgEgIABQgVAAAAAaIAAAIIAfAAIAAAdIgfAAIAAB8g");
	this.shape_19.setTransform(141.325,160.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag5A5QgVgXAAgiQAAghAVgXQAWgYAjABQAkgBAWAYQAVAXAAAhQAAAigVAXQgWAXgkAAQgjAAgWgXgAgggiQgLAOAAAUQAAAWALAOQAMAPAUAAQAUAAANgPQALgOAAgWQAAgVgLgNQgNgQgUAAQgTAAgNAQg");
	this.shape_20.setTransform(126.775,163.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWA8IAAhYIgZAAIAAgdIAZAAIAAgqIAhAAIAAAqIAfAAIAAAdIgfAAIAABQQAAASAOAAQALAAAEgFIAIAZQgKAKgVgBQgnAAAAgng");
	this.shape_21.setTransform(104.475,161.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoBPIAAiZIAhAAIAAAWQATgaAdAAIAAAiIgKgBQgKAAgNAFQgKAHgFAIIAABog");
	this.shape_22.setTransform(94.05,163.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgyBEQgRgOAAgYQAAgYARgNQAPgMAVAAQAgAAARATIAAgWQAAgNgKgIQgKgIgPAAQgZAAgVAUIgNgYQAagZAlABQAcAAARAMQATAOAAAdIAABlIghAAIAAgRQgSAVgfgBQgVAAgPgMgAgYALQgKAHAAANQAAAMAKAHQAJAIAOAAQAYAAAMgQIAAgXQgLgQgZAAQgOAAgJAIg");
	this.shape_23.setTransform(80.025,163.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhQBqIAAjTIBcAAQAgAAATAUQASATAAAcQAAAcgSARQgTAUggAAIg3AAIAABPgAgrgFIAyAAQAQAAAKgJQAKgKAAgOQAAgQgKgJQgKgKgQAAIgyAAg");
	this.shape_24.setTransform(64.275,160.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdAlIgCghIgBgfIgBAAIgJAcIgNAkIgGAAIgVhAIgBAAIgDBAIgJAAIAFhJIANAAIATA8IAWg8IAMAAIAEBJg");
	this.shape_25.setTransform(515.85,91.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAlIAAhBIgXAAIAAgIIA2AAIAAAIIgWAAIAABBg");
	this.shape_26.setTransform(508.65,91.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXCSQgSgSgBgiIAAiCIgpAAIAAg6IApAAIAAhFIBDAAIAABFIAzAAIAAA6IgzAAIAABxQgBAMAHAIQAGAHAKABQARgBAGgGIAPAxQgTARglAAQgiAAgSgSg");
	this.shape_27.setTransform(497.85,103.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhOBgQgmgmAAg6QAAg5AmgmQAmglA5AAQBDAAAhAuIgsApQgTgcgiAAQgdAAgTAVQgTAUAAAgQAAAhATAUQATAUAdAAQAiAAATgbIAsApQghAuhDAAQg6AAglglg");
	this.shape_28.setTransform(476.525,107.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhZBhQgnglAAg8QAAg3AlgmQAlgnA4AAQA4AAAkAnQAiAmABA9IAAAPIi7AAQADAZASARQAVARAeAAQARAAATgHQAUgHALgLIAeAqQgnAkhCAAQg5AAgmgkgAgqg8QgPAPgCAWIB8AAQgCgVgOgQQgRgTgeAAQgbAAgRATg");
	this.shape_29.setTransform(450.35,107.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA0CBIAAiXQAAgwgvAAQgRAAgQAKQgOAIgJANIAACoIhCAAIAAj7IBCAAIAAAhQANgRAWgKQAYgMAdAAQAogBAVAWQAVAWgBAlIAACxg");
	this.shape_30.setTransform(423.3,106.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA0CBIAAiXQAAgwgvAAQgiAAgWAfIAACoIhDAAIAAj7IBDAAIAAAhQANgRAWgKQAXgMAdAAQAogBAWAWQAVAWAAAlIAACxg");
	this.shape_31.setTransform(395.65,106.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhhBdQgkglAAg4QAAg3AkglQAlgoA8AAQA9AAAlAoQAkAlAAA3QAAA4gkAlQglAog9AAQg8AAglgogAgvgzQgRAVAAAeQAAAfARAUQASAWAdAAQAeAAASgWQARgUAAgfQAAgegRgVQgSgWgeAAQgdAAgSAWg");
	this.shape_32.setTransform(368.125,107.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhvCCQg2gzAAhPQAAhPA2gzQA0gyBMABQBlAAAwBUIhAAgQgMgXgVgNQgYgPgcAAQgsAAgfAhQgeAgAAAxQAAAxAeAhQAfAhAsgBQAdAAAXgOQAWgOALgWIBAAeQgyBWhjABQhMAAg0gzg");
	this.shape_33.setTransform(337.875,102.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhZBhQgnglAAg8QAAg3AlgmQAlgnA4AAQA5AAAiAnQAkAmgBA9IAAAPIi6AAQADAZATARQATARAeAAQATAAASgHQATgHAMgLIAeAqQgTASgcAJQgbAJgfAAQg5AAgmgkgAgqg8QgPAPgCAWIB8AAQgCgVgOgQQgRgTgeAAQgbAAgRATg");
	this.shape_34.setTransform(298.55,107.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhJCBIAAj7IBDAAIAAAiQANgRAVgLQAXgMAXAAIAABBQgIgCgLAAQgRAAgSAIQgTAJgHALIAACmg");
	this.shape_35.setTransform(278.2,106.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhXBwQgdgYAAgnQAAgpAdgVQAYgSAjAAQA2AAAZAfIAAgjQAAgTgPgMQgQgLgYAAQgpAAggAeIgZgtQAsgoBBAAQAwAAAdAVQAhAYAAAzIAACiIhCAAIAAgaQgNAPgVAJQgVAJgYAAQgiAAgZgVgAgjAWQgOALAAARQAAARAOALQANAKAUAAQAkAAARgWIAAggQgRgWgkAAQgUAAgNAKg");
	this.shape_36.setTransform(253.575,107.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhvCCQg2gzAAhPQAAhPA2gzQA0gyBMABQBlAAAwBUIhAAgQgMgXgVgNQgYgPgcAAQgsAAgfAhQgeAgAAAxQAAAxAeAhQAfAhAsgBQAcAAAYgOQAWgOALgWIBAAeQgyBWhjABQhMAAg0gzg");
	this.shape_37.setTransform(223.675,102.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA0CBIAAiXQAAgwgvAAQgQAAgRAKQgNAIgKANIAACoIhDAAIAAj7IBDAAIAAAhQANgRAWgKQAXgMAeAAQAogBAVAWQAVAVAAAmIAACxg");
	this.shape_38.setTransform(183.6,106.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhhBdQgkglAAg4QAAg3AkglQAlgoA8AAQA9AAAlAoQAkAlAAA3QAAA4gkAlQglAog9AAQg8AAglgogAgvgzQgRAVAAAeQAAAfARAUQASAWAdAAQAeAAASgWQARgUAAgfQAAgegRgVQgSgWgeAAQgdAAgSAWg");
	this.shape_39.setTransform(155.575,107.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag8B6QgegKgUgTIAdguQAOANAZAKQAZALAWAAQAqAAAAgZQAAgNgOgHQgLgFgZgFQgugJgUgLQghgTAAgnQAAgiAbgWQAdgYAvAAQA7AAAqAjIgaAtQgMgMgTgIQgVgJgWAAQgSAAgKAGQgLAHAAALQAAAKANAHQAKAFAYAFQAuAJAUAMQAjATAAApQAAAkgcAWQgeAYgzAAQggAAgegLg");
	this.shape_40.setTransform(129.9,107.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAoCuIhBhhIgfAgIAABBIhDAAIAAlbIBDAAIAADQIBehwIBSAAIhkBxIBoCKg");
	this.shape_41.setTransform(106.5,102.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhOBgQgmgmAAg6QAAg5AmgmQAlglA6AAQBDAAAhAuIgsApQgSgcgjAAQgdAAgTAVQgTAUgBAgQABAhATAUQATAUAdAAQAiAAATgbIAsApQghAuhDAAQg6AAglglg");
	this.shape_42.setTransform(79.95,107.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhXBwQgdgYAAgnQAAgpAdgVQAYgSAiAAQA3AAAZAfIAAgjQAAgTgPgMQgQgLgYAAQgpAAghAeIgZgtQAugoBAAAQAxAAAbAVQAiAYAAAzIAACiIhCAAIAAgaQgNAPgVAJQgVAJgZAAQghAAgZgVgAgjAWQgOALAAARQAAARAOALQAOAKATAAQAlAAAQgWIAAggQgQgWglAAQgTAAgOAKg");
	this.shape_43.setTransform(54.2,107.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhrCQIAgg6QAaAaAdAAQAYAAAPgPQAPgQAAgZIAAjpIBKAAIAADqQAAA7giAgQghAeg3AAQg7AAgigig");
	this.shape_44.setTransform(29.175,102.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EglRAA0QEGg0GXgwQOShrMqAAQMbAAOJBrQGOAuEKA0QETA4A1AtQo9hSqhgrQq5gsrlAAQrvAArBAtQqqAtpCBUQApgvESg5g");
	this.shape_45.setTransform(270.05,57.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AmIDpIANgoIA+gqIgxABIAhhqIAxggIgnABIA4ivIBKDyIg6AEIA/AkIBLgzIg/ABIAqiGIA+gqIgwABIBHjhIAuCaIgkgIIAsAkIAnCCIhIAEIBZA1IAmB+IhMgQIBeBJIADAJIAMgoIA+grIgwABIAhhpIAwghIgmABIA4ivIBJDzIg5ADIBGApIA+DLg");
	this.shape_46.setTransform(482.3,33);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AjlC4IBVhDIhFAPIAjhyIBRgvIhCgDIAkh2IAnggIggAHIAqiLIBADLIgsgBIA4AmIAmB5Ig4gCIBHAyIAHAXIAGgVIBAgmIg0gCIBDjbIAyCeIgjgBIAsAdIAAABIgDAFIAcBZIgsgBIA4AmIAeBUIoZBLg");
	this.shape_47.setTransform(42.15,35.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AjABvIAbgTIgbABIASg7IAbgTIgVABIAehiIArCIIghABIAoAYIADAJIAigYIgjABIAXhLIAjgYIgcABIAoh/IAZBXIgTgFIAZAUIAWBJIgoACIAyAdIAMAoIAOgBIABgCIAggbIgbADIAPg7IAagUIgWACIAYhlIAzCEIggAEIAqAUIAeBlImpAXg");
	this.shape_48.setTransform(124.1,42.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AxiBCQA/hTA5hKIAjgIQAlgHAMAAIAgidIPYgRIA1AiIDWgEIArgjIDngFIAsCyICiAAIGuEyIi1gDIkKjoIjaAAIAAgBIieAAIAbgYQAqgaBQgLIgghxIiPADIgrAkIj6AEIg0giItxARIgYBUQCeAACjAlQBSASAyASIpHAOQgrA6gsBCQhYCFgJAiIiIATQAag3B+iqg");
	this.shape_49.setTransform(196.775,29.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540.1,177.7);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgLA2QgFgFABgHQgBgIAFgEQAFgFAGAAQAIAAAEAFQAFAFgBAHQABAHgFAFQgEAEgIAAQgGAAgFgEgAgLgdQgFgFABgHQgBgHAFgFQAFgEAGAAQAIAAAEAEQAFAFgBAHQABAHgFAFQgEAFgIAAQgGAAgFgFg");
	this.shape.setTransform(126.1,49.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBAIgjhdIgiBdIgRAAIgkhqQgCgGgEAAIgLAAIAAgPIA6AAIAAAPIgLAAQgHAAACAHIAZBKIAbhKQADgHgHAAIgJAAIAAgPIA4AAIAAAPIgKAAQgHAAADAHIAcBKIAZhKQABgHgGAAIgMAAIAAgPIAyAAIAAAPIgLAAQgEAAgCAGIgkBqg");
	this.shape_1.setTransform(113,48.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAwQgSgTAAgdQAAgdASgSQATgSAcAAQAcAAASASQASASAAAdQAAAegSASQgSASgdAAQgcAAgSgSgAgcglQgLANAAAYIAAABQAAAyAngBQATABALgNQAKgNAAgYIAAgBQAAgygoABQgSgBgKANg");
	this.shape_2.setTransform(95.325,48.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANBAIAAgPIANAAQADAAAAgFIAAg+QAAgcgYAAQgPAAgJANQgKAOAAAXIAAAoQAAAFAEAAIAOAAIAAAPIg9AAIAAgPIAPAAQADAAAAgFIAAhSQAAgIgDABIgPAAIAAgQIAOAAQAQABANgDIAAAdQAMgdAgAAQAoAAgBAsIAAA/QABAFADAAIAPAAIAAAPg");
	this.shape_3.setTransform(80.7,48.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBJQgIgJAAgTIAAhNIgTAAIAAgNIANgBQAKgCABgJIACgXIARAAIAAAhIAcAAIAAAPIgdAAIAABNQAAATASAAQAFABAIgDIAAAQQgJADgLAAQgSAAgIgIg");
	this.shape_4.setTransform(62.775,46.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANBXIAAgPIANAAQAEAAAAgFIAAg/QAAgbgYAAQgQAAgJANQgJANAAAYIAAAoQgBAFAEAAIAOAAIAAAPIg9AAIAAgPIAPAAQAEAAAAgFIAAiBQAAgHgEAAIgPAAIAAgPIAPAAQARAAAMgCIAABKQANgcAeAAQAogBAAAsIAABAQAAAFAEAAIAOAAIAAAPg");
	this.shape_5.setTransform(51.35,45.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBHQAAgUAggHQgZgEAAgTQAAgTAWgFQgUgMAAgYQAAgTAQgNQAQgNAZAAQAXAAAQANQAEgaATAAQAHAAAEADQAEAFAAAGQAAAFgDAEQgEAFgFAAQgJAAgDgJQgFAEgDAJQAJALAAAPQAAAVgQAMQgPALgYAAQgQAAgLgEQgMACAAAJQAAALASAAIAzAAQAoAAAAAhQAAAUgTALQgTALghAAQhAAAAAgbgAgzBFQAAARAtAAQAzAAAAgXQAAgJgGgEQgGgDgPAAIgsAAQgZAGAAAQgAgdg+QgIAHAAAPIAAACQAAAPAIAIQAIAIAPAAQANAAAJgIQAIgIAAgPIAAgCQAAgPgIgHQgIgJgOABQgOgBgJAJg");
	this.shape_6.setTransform(37.125,50.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeBZIAAgPIAPAAQAEAAAAgGIAAhPQAAgKgGAAIgNAAIAAgPIAOAAQAQAAANgDIAABrQAAAGADAAIAPAAIAAAPgAgLg7QgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_7.setTransform(26.275,45.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BAIAAgPIAPAAQAEAAAAgFIAAhSQAAgIgEABIgPAAIAAgQIAOAAQARABAMgDIAAAdQAJgdAZAAQANAAAHAHQAIAIAAAMQAAAKgFAGQgGAFgHAAQgHAAgDgDQgFgFAAgFQAAgLAMgDQgEgFgIAAQgOAAgHANQgHANgBAWIAAArQAAAFAEAAIAPAAIAAAPg");
	this.shape_8.setTransform(17.15,48.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguAwQgSgTAAgdQAAgdASgSQATgSAcAAQAcAAASASQASASAAAdQAAAegSASQgSASgdAAQgcAAgSgSgAgcglQgLANAAAYIAAABQAAAyAngBQATABALgNQAKgNAAgYIAAgBQAAgygoABQgSgBgKANg");
	this.shape_9.setTransform(-1.725,48.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BHQgQgSgBgeQABgdAQgSQAQgSAZAAQAhAAANAcIAAgxQAAgIgEAAIgPAAIAAgPIAOAAQARAAAMgCIAACZQAAAGAEAAIAOAAIAAAPIgnAAIgCgaQgNAdgiAAQgZAAgQgSgAgkgNQgLANABAVIAAAEQgBAWALANQALAMARAAQARAAAKgMQAMgNAAgWIAAgEQAAgVgMgNQgKgNgRAAQgRAAgLANg");
	this.shape_10.setTransform(-16.5,45.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMBAIAAgPIAOAAQADAAAAgFIAAg+QABgcgZAAQgPAAgKANQgJAOAAAXIAAAoQAAAFAEAAIAOAAIAAAPIg9AAIAAgPIAOAAQAFAAAAgFIAAhSQAAgIgFABIgOAAIAAgQIAOAAQAQABANgDIAAAdQANgdAeAAQAoAAABAsIAAA/QgBAFAEAAIAPAAIAAAPg");
	this.shape_11.setTransform(-38.05,48.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1A5QgKgKAAgOQAAgWAVgLQAUgJAsgFIAAgIQgBgcgeAAQgRAAgJAHQAHAEAAAJQAAAHgFAEQgDAEgIAAQgQAAAAgRQAAgQAQgJQAPgIAZAAQAaAAAMAKQAMALAAAWIAABAQAAAGAEAAIAOAAIAAAPIglAAQgDgJgCgQQgFANgNAHQgMAIgRAAQgRAAgLgJgAgYAHQgPAIAAAOQgBAJAHAGQAGAGALAAQAQAAALgMQALgMAAgTIAAgJQggADgOAGg");
	this.shape_12.setTransform(-52.5,48.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrAwQgSgRAAgfQABgdARgTQATgRAeAAQAZAAAPAMQAPALABAUQAAAKgGAHQgFAFgIAAQgHAAgFgEQgEgFAAgGQAAgOAOgCQgGgTgcAAQgTAAgMANQgLANAAAWIAAADQgBAXALANQALANATAAQAgAAAJgdIAPAGQgMAngtAAQgeAAgRgSg");
	this.shape_13.setTransform(-66.2,48.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1AVIAAhAQAAgFgEAAIgPAAIAAgQIAsAAIAABUQAAAcAYAAQAPAAAJgNQAJgMAAgWIAAgsQAAgFgDAAIgQAAIAAgQIAsAAIAABoQAAAGAEAAIAPAAIAAAPIgPAAQgQABgNACIAAgcQgMAcgeAAQgoAAAAgrg");
	this.shape_14.setTransform(-86.575,48.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguAwQgSgTAAgdQAAgdASgSQATgSAcAAQAcAAASASQASASAAAdQAAAegSASQgSASgdAAQgcAAgSgSgAgcglQgLANAAAYIAAABQAAAyAngBQATABALgNQAKgNAAgYIAAgBQAAgygoABQgSgBgKANg");
	this.shape_15.setTransform(-101.075,48.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag+BQQgIgGAAgLQAAgJAFgFQAEgFAIAAQALAAACAJQADAJgJAIIAGABQAKAAAIgIQAHgHAJgUIAAgBIgwhkQgDgGgDAAIgLAAIAAgPIA7AAIAAAPIgMAAQgHAAADAHIAiBIIAfhIQADgHgHAAIgMAAIAAgPIAzAAIAAAPIgMAAQgEAAgDAGIgsBoQgKAagKAKQgLAMgSAAQgNAAgJgHg");
	this.shape_16.setTransform(-115.375,50.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxA3IAAghIATAAIAAAZQALAEASAAQAcAAAAgUQAAgKgJgFQgHgEgQgDQgUgEgKgFQgOgJAAgRQAAgSAOgLQANgKAXAAQAZAAAUAKIAAAhIgTAAIAAgXQgJgFgQAAQgcgBAAAUQAAAKAKAFQAFACARAEQAVAEAKAGQANAJAAASQAAARgNAMQgOAKgYAAQgaAAgWgLg");
	this.shape_17.setTransform(117.3,21.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhHBHQAAgUAggHQgZgEAAgUQAAgSAWgFQgUgLAAgZQAAgTAQgNQAQgNAZAAQAXAAAQANQAEgaATAAQAHAAAEADQAEAFAAAGQAAAFgDAEQgEAFgFAAQgJAAgDgJQgFAEgDAJQAJALAAAPQAAAVgQAMQgPALgYAAQgQAAgLgEQgMACAAAJQAAALASAAIAzAAQAoAAAAAhQAAAUgTALQgTALghAAQhAAAAAgbgAgzBFQAAARAtAAQAzAAAAgXQAAgJgGgEQgGgDgPAAIgsAAQgZAGAAAQgAgdg+QgIAHAAAPIAAACQAAAPAIAIQAIAIAPAAQANAAAJgIQAIgIAAgPIAAgCQAAgPgIgHQgIgJgOABQgOgBgJAJg");
	this.shape_18.setTransform(104.875,23.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANBAIAAgPIANAAQADAAABgFIAAg+QgBgcgYAAQgPAAgKANQgJAOAAAXIAAAoQAAAFAEAAIAOAAIAAAPIg9AAIAAgPIAPAAQADAAAAgFIAAhSQAAgIgDABIgPAAIAAgQIAOAAQARABAMgDIAAAdQANgdAeAAQApAAAAAsIAAA/QAAAFADAAIAPAAIAAAPg");
	this.shape_19.setTransform(90,21.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeBZIAAgPIAPAAQAEAAAAgGIAAhPQAAgKgGAAIgNAAIAAgPIAOAAQAQAAANgDIAABrQAAAGADAAIAPAAIAAAPgAgLg7QgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_20.setTransform(78.725,18.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANBXIAAgPIANAAQAEAAAAgFIAAg/QAAgbgYAAQgPAAgKANQgJANAAAYIAAAoQAAAFADAAIAOAAIAAAPIg9AAIAAgPIAPAAQAEAAAAgFIAAiBQAAgHgEAAIgPAAIAAgPIAPAAQAQAAANgCIAABKQANgcAeAAQAogBAAAsIAABAQAAAFAEAAIAOAAIAAAPg");
	this.shape_21.setTransform(67.65,18.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJBJQgIgJAAgTIAAhNIgTAAIAAgNIANgBQAKgCABgJIACgXIARAAIAAAhIAcAAIAAAPIgdAAIAABNQAAATASAAQAFABAIgDIAAAQQgJADgLAAQgSAAgIgIg");
	this.shape_22.setTransform(55.975,19.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgsAwQgRgSAAgeQAAgcASgTQASgSAbAAQAcAAAQARQAQARAAAeIAAAFIhiAAQABAVALANQALANATgBQAeABAKgeIAPAGQgLAnguAAQgeAAgSgSgAAlgIQgBgqgiAAQgjAAgDAqIBJAAIAAAAg");
	this.shape_23.setTransform(39.325,21.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgsAwQgRgSAAgeQAAgcASgTQASgSAbAAQAcAAAQARQAQARAAAeIAAAFIhiAAQABAVALANQALANATgBQAeABAKgeIAPAGQgLAnguAAQgeAAgSgSgAAlgIQgBgqgiAAQgjAAgDAqIBJAAIAAAAg");
	this.shape_24.setTransform(25.825,21.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag0BAIAAgPIAPAAQAEAAAAgFIAAhSQAAgIgEABIgPAAIAAgQIAOAAQARABAMgDIAAAdQAJgdAZAAQANAAAIAHQAHAIAAAMQAAAKgFAGQgGAFgHAAQgHAAgDgDQgFgFAAgFQABgLAKgDQgDgFgIAAQgOAAgHANQgHANAAAWIAAArQAAAFADAAIAPAAIAAAPg");
	this.shape_25.setTransform(13.45,21.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANBXIAAgPIANAAQAEAAAAgFIAAg/QAAgbgYAAQgPAAgKANQgJANAAAYIAAAoQAAAFADAAIAOAAIAAAPIg9AAIAAgPIAPAAQAEAAAAgFIAAiBQAAgHgEAAIgPAAIAAgPIAPAAQAQAAANgCIAABKQANgcAeAAQAogBAAAsIAABAQAAAFAEAAIAOAAIAAAPg");
	this.shape_26.setTransform(0.15,18.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJBJQgIgJAAgTIAAhNIgTAAIAAgNIANgBQAKgCABgJIACgXIARAAIAAAhIAcAAIAAAPIgdAAIAABNQAAATASAAQAFABAIgDIAAAQQgJADgLAAQgSAAgIgIg");
	this.shape_27.setTransform(-11.525,19.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgsAwQgRgSAAgeQAAgcASgTQASgSAbAAQAcAAAQARQAQARAAAeIAAAFIhiAAQABAVALANQALANATgBQAeABAKgeIAPAGQgLAnguAAQgeAAgSgSgAAlgIQgBgqgiAAQgjAAgDAqIBJAAIAAAAg");
	this.shape_28.setTransform(-28.175,21.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag0BAIAAgPIAPAAQAEAAAAgFIAAhSQAAgIgEABIgPAAIAAgQIAOAAQARABAMgDIAAAdQAJgdAZAAQANAAAHAHQAIAIAAAMQAAAKgFAGQgGAFgHAAQgHAAgDgDQgFgFAAgFQABgLAKgDQgDgFgIAAQgOAAgHANQgHANAAAWIAAArQAAAFADAAIAPAAIAAAPg");
	this.shape_29.setTransform(-40.55,21.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag0A5QgLgKAAgOQAAgWAWgLQATgJArgFIAAgIQAAgcgdAAQgSAAgIAHQAGAEAAAJQAAAHgEAEQgEAEgHAAQgRAAAAgRQAAgQARgJQAOgIAYAAQAaAAANAKQANALAAAWIAABAQgBAGAEAAIAOAAIAAAPIgkAAQgEgJgCgQQgFANgNAHQgMAIgQAAQgSAAgKgJgAgYAHQgQAIAAAOQABAJAGAGQAGAGALAAQARAAAKgMQAKgMAAgTIAAgJQgfADgOAGg");
	this.shape_30.setTransform(-53,21.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgsAwQgRgSAAgeQAAgcASgTQASgSAbAAQAcAAAQARQAQARAAAeIAAAFIhiAAQABAVALANQALANATgBQAeABAKgeIAPAGQgLAnguAAQgeAAgSgSgAAlgIQgBgqgiAAQgjAAgDAqIBJAAIAAAAg");
	this.shape_31.setTransform(-73.025,21.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgzBAIAAgPIAOAAQAEAAAAgFIAAhSQAAgIgEABIgPAAIAAgQIAOAAQARABAMgDIAAAdQAJgdAZAAQANAAAIAHQAHAIAAAMQAAAKgFAGQgFAFgJAAQgFAAgFgDQgDgFAAgFQgBgLALgDQgCgFgJAAQgPAAgGANQgIANABAWIAAArQAAAFADAAIAPAAIAAAPg");
	this.shape_32.setTransform(-85.4,21.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgsAwQgRgSAAgeQAAgcASgTQASgSAbAAQAcAAAQARQAQARAAAeIAAAFIhiAAQABAVALANQALANATgBQAeABAKgeIAPAGQgLAnguAAQgeAAgSgSgAAlgIQgBgqgiAAQgjAAgDAqIBJAAIAAAAg");
	this.shape_33.setTransform(-97.875,21.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAXBWIAAgPIAPAAQAEAAAAgGIAAg7IhUAAIAAA7QAAAGAFAAIAQAAIAAAPIhBAAIAAgPIAPAAQAFAAAAgGIAAiBQAAgGgFAAIgPAAIAAgPIBBAAIAAAPIgQAAQgFAAAAAGIAAA4IBUAAIAAg4QAAgGgEAAIgPAAIAAgPIBAAAIAAAPIgQAAQgDAAAAAGIAACBQAAAGADAAIAQAAIAAAPg");
	this.shape_34.setTransform(-113.8,18.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3type, new cjs.Rectangle(-139,0,278,64), null);


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
	this.shape.setTransform(60.825,37.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVBlIAAgXIANAAQAFAAAAgIIAAiGQAAgJgFAAIgOAAIAAgXIAYAAQAWAAANgDIAAAhQAOgiAlAAQAdAAARAVQARAVAAAjQAAAigRAVQgSAVgeAAQgjAAgNgfIAAAwQAAAIAFAAIANAAIAAAXgAgQg+QgKANAAAYIAAAEQAAAXAKANQAJAMAQAAQARAAAJgMQALgNAAgXIAAgEQAAgYgLgNQgJgMgRAAQgQAAgJAMg");
	this.shape_1.setTransform(48.125,34.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDAVIAAhBQAAgHgFgBIgOAAIAAgWIA7AAIAABeQAAAdAYAAQAeAAAAgrIAAgyQAAgHgFgBIgPAAIAAgWIA9AAIAABxQAAAJAFAAIAOAAIAAAXIgZAAQgVAAgOADIAAgbQgOAcghAAQgvAAAAg2g");
	this.shape_2.setTransform(30.275,32.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKBlIAAgXIALAAQAGABgEgHIgZgnIgWAWIAAAPQAAAIAFAAIAMAAIAAAXIhMAAIAAgXIAOAAQAEAAAAgIIAAiIQAAgIgEgBIgPAAIAAgWIAZAAQAWAAANgDIAACCIAugtQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgEAAIgQAAIAAgWIBNAAIAAAWIgKAAQgJAAgGAGIgdAZIApBAQAEAFAFAAIAJAAIAAAXg");
	this.shape_3.setTransform(12.875,29.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0A4QgVgUAAgkQAAgjAWgVQAVgUAkAAQAgAAASAOQASANAAAXQAAAPgJAIQgIAIgMAAQgLAAgGgFQgIgGAAgKQAAgTAUgFQgHgNgYAAQgpAAAAAyIAAAEQAAA0AoAAQAfAAAKgdIAXALQgRAqgxAAQgmAAgUgVg");
	this.shape_4.setTransform(-3.4,32.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1A4QgUgVAAgjQAAghAWgWQAUgVAhAAQAiAAAUAUQASAVAAAjIAAAIIhqAAQACAtAoAAQAcAAALgdIAXALQgPAqgzAAQglAAgWgVgAAhgMQAAgWgIgJQgHgKgQAAQgfAAgDApIBBAAIAAAAg");
	this.shape_5.setTransform(-19.25,32.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAMBlIAAgXIALAAQAFAAAAgIIAAg/QAAgcgYgBQgeABAAAuIAAAtQAAAIAFAAIALAAIAAAXIhLAAIAAgXIANAAQAFAAAAgIIAAiIQAAgIgFgBIgOAAIAAgWIAZAAQAVAAAOgDIAABRQANgdAiAAQAwAAAAA1IAABBQAAAIAFAAIANAAIAAAXg");
	this.shape_6.setTransform(-36.125,29.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0A4QgVgUAAgkQAAgjAWgVQAVgUAkAAQAgAAASAOQASANAAAXQAAAPgIAIQgJAIgNAAQgKAAgGgFQgIgGABgKQAAgTATgFQgGgNgZAAQgpAAAAAyIAAAEQAAA0AnAAQAgAAAKgdIAWALQgQAqgxAAQgmAAgUgVg");
	this.shape_7.setTransform(-52.65,32.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBBCQgLgLAAgQQAAgaAagNQAUgKAygHIAAgJQgBgbgeAAQgLAAgIACQAGAHAAAKQAAAJgGAHQgIAFgKAAQgZAAAAgXQABgoBFAAQAhAAAPALQAPAMAAAbIAABEQAAAIAFAAIAMAAIAAAXIgwAAQgGgKgDgPQgGAMgOAIQgPAJgRAAQgVAAgMgLgAgWAKQgQAHAAAOQAAAVAWAAQAQAAAJgMQALgLAAgSIAAgLQgdADgNAHg");
	this.shape_8.setTransform(-75.7,32.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBVQgKgKAAgZIAAhRIgUAAIAAgTIALgBQARgDABgOIADgbIAcAAIAAAqIAdAAIAAAWIgfAAIAABQQABAWASAAQAHAAAHgDIAAAYQgMADgOAAQgYABgLgLg");
	this.shape_9.setTransform(-96.35,30.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1A4QgUgVAAgjQAAghAWgWQAUgVAhAAQAiAAAUAUQASAVAAAjIAAAIIhpAAQABAtAoAAQAcAAALgdIAWALQgOAqgzAAQglAAgWgVgAAhgMQAAgWgIgJQgHgKgQAAQgfAAgDApIBBAAIAAAAg");
	this.shape_10.setTransform(-108.9,32.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDBMQgXgbAAgxQAAguAZgcQAZgcAoAAQAtgBAOAkIAIggIAYAAIAABKIgiAAQgJgzgqAAQg1AAAABIIAAAJQAABJA0AAQAUAAAMgMQAMgMAAgVIAAgIIgrAAIAAgVIBVAAIAABfIgSAAIgLggQgPAkgxABQgqgBgXgbg");
	this.shape_11.setTransform(-127.175,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3dtype, new cjs.Rectangle(-139,8,278,42.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgHgGAAgLQAAgJAHgHQAHgHAKAAQALAAAHAHQAHAHAAAJQAAALgHAGQgHAHgLAAQgKAAgHgHg");
	this.shape.setTransform(113.075,37.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BLIAAgXIALAAQAFAAAAgIIAAg6QAAghgYAAQgcAAAAArIAAAwQAAAIAGAAIAMAAIAAAXIhKAAIAAgXIALAAQAGAAAAgIIAAg+QAAgdgYAAQgcAAAAArIAAAwQAAAIAFAAIAMAAIAAAXIhMAAIAAgXIANAAQAGAAAAgIIAAhTQAAgJgGAAIgNAAIAAgWIAXAAQAWAAANgDIAAAcQAOgdAgAAQAjAAAHAiQANgiAjAAQAxAAAAA5IAAA9QAAAIAEAAIAOAAIAAAXg");
	this.shape_1.setTransform(96.45,31.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBCQgMgLABgQQAAgaAZgNQAWgKAwgHIAAgJQAAgbgdAAQgMAAgHACQAFAHAAAKQAAAJgGAHQgHAFgKAAQgaAAABgXQAAgoBFAAQAhAAAPALQAPAMAAAbIAABEQAAAIAFAAIANAAIAAAXIgxAAQgGgKgDgPQgGAMgOAIQgOAJgTAAQgTAAgNgLgAgWAKQgPAHAAAOQgBAVAWAAQAQAAAJgMQAKgLAAgSIAAgLQgcADgNAHg");
	this.shape_2.setTransform(74.85,32.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABBJIAAgXIAMAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgCgCgDIgWgeIgZAeQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAIAKAAIAAAXIg9AAIAAgXIALAAQAEAAAGgGIAngsIgmgqQgFgIgFAAIgJAAIAAgWIBQAAIAAAWIgLAAQgHABAFAGIAUAbIAWgbQABgBAAAAQAAgBAAAAQABgBAAAAQgBgBAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgKAAIAAgWIA/AAIAAAWIgNAAQgEAAgGAIIgkAnIAoAuQAGAIADgBIAKAAIAAAXg");
	this.shape_3.setTransform(57.825,32.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1A4QgUgVAAgjQAAghAVgWQAVgVAhAAQAiAAATAUQATAVAAAjIAAAIIhqAAQACAtAnAAQAdAAALgdIAWALQgOAqgzAAQgmAAgVgVgAAhgMQgBgWgGgJQgIgKgQAAQggAAgCApIBBAAIAAAAg");
	this.shape_4.setTransform(41.45,32.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBlIAAgXIANAAQAFAAAAgIIAAiIQAAgIgFgBIgOAAIAAgWIAZAAQAUAAAOgDIAACqQAAAIAEAAIAMAAIAAAXg");
	this.shape_5.setTransform(21.975,29.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBBCQgLgLAAgQQAAgaAagNQAVgKAwgHIAAgJQAAgbgdAAQgMAAgHACQAFAHAAAKQAAAJgGAHQgIAFgJAAQgaAAAAgXQABgoBFAAQAhAAAPALQAPAMAAAbIAABEQAAAIAFAAIANAAIAAAXIgxAAQgGgKgDgPQgGAMgOAIQgPAJgRAAQgVAAgMgLgAgWAKQgPAHgBAOQAAAVAWAAQAQAAAJgMQAKgLAAgSIAAgLQgcADgNAHg");
	this.shape_6.setTransform(9.7,32.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBVQgKgKAAgZIAAhRIgUAAIAAgTIALgBQARgDABgOIAEgbIAbAAIAAAqIAcAAIAAAWIgdAAIAABQQAAAWASAAQAHAAAHgDIAAAYQgMADgOAAQgYABgLgLg");
	this.shape_7.setTransform(-3.9,30.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALBLIAAgXIAMAAQAFAAAAgIIAAg/QAAgdgYAAQgfAAAAAwIAAAsQAAAIAFAAIAMAAIAAAXIhMAAIAAgXIANAAQAGAAAAgIIAAhTQAAgJgGAAIgNAAIAAgWIAYAAQAVAAANgDIAAAdQAOgeAjAAQAvAAAAA2IAABAQAAAIAFAAIAOAAIAAAXg");
	this.shape_8.setTransform(-17.425,31.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1A4QgUgVAAgjQAAghAWgWQAUgVAhAAQAiAAAUAUQASAVAAAjIAAAIIhqAAQACAtAoAAQAcAAALgdIAXALQgPAqgzAAQglAAgWgVgAAhgMQgBgWgGgJQgIgKgQAAQgfAAgDApIBBAAIAAAAg");
	this.shape_9.setTransform(-34.45,32.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBSQgSgVAAgjQAAgiASgVQATgVAdAAQAkAAAMAdIAAgvQAAgIgEgBIgPAAIAAgWIAZAAQAWAAANgDIAACqQAAAIAFAAIANAAIAAAXIg2AAIgCgcQgOAgglAAQgdAAgTgVgAgigMQgKAMAAAXIAAAFQAAAYAKANQAKAMARAAQAPAAAKgMQALgNgBgYIAAgFQAAgXgKgMQgJgMgQgBQgRABgKAMg");
	this.shape_10.setTransform(-51.35,29.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBBCQgLgLAAgQQAAgaAagNQAUgKAygHIAAgJQgBgbgeAAQgLAAgIACQAGAHAAAKQAAAJgGAHQgIAFgKAAQgZAAAAgXQABgoBFAAQAhAAAPALQAPAMAAAbIAABEQAAAIAFAAIAMAAIAAAXIgwAAQgGgKgDgPQgGAMgOAIQgPAJgRAAQgVAAgMgLgAgWAKQgQAHAAAOQAAAVAWAAQAQAAAJgMQALgLAAgSIAAgLQgdADgNAHg");
	this.shape_11.setTransform(-75.7,32.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBVQgKgKAAgZIAAhRIgUAAIAAgTIALgBQARgDABgOIADgbIAcAAIAAAqIAdAAIAAAWIgfAAIAABQQABAWASAAQAHAAAHgDIAAAYQgMADgOAAQgYABgLgLg");
	this.shape_12.setTransform(-96.35,30.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1A4QgUgVAAgjQAAghAWgWQAUgVAhAAQAiAAAUAUQASAVAAAjIAAAIIhpAAQABAtAoAAQAcAAALgdIAWALQgOAqgzAAQglAAgWgVgAAhgMQAAgWgIgJQgHgKgQAAQgfAAgDApIBBAAIAAAAg");
	this.shape_13.setTransform(-108.9,32.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhDBMQgXgbAAgxQAAguAZgcQAZgcAoAAQAtgBAOAkIAIggIAYAAIAABKIgiAAQgJgzgqAAQg1AAAABIIAAAJQAABJA0AAQAUAAAMgMQAMgMAAgVIAAgIIgrAAIAAgVIBVAAIAABfIgSAAIgLggQgPAkgxABQgqgBgXgbg");
	this.shape_14.setTransform(-127.175,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3ctype, new cjs.Rectangle(-139,8,278,42.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgHgGAAgLQAAgJAHgHQAHgHAKAAQALAAAHAHQAHAHAAAJQAAALgHAGQgHAHgLAAQgKAAgHgHg");
	this.shape.setTransform(108.675,37.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BLIAAgXIALAAQAFAAAAgIIAAg6QAAghgYAAQgcAAAAArIAAAwQAAAIAFAAIANAAIAAAXIhKAAIAAgXIALAAQAGAAgBgIIAAg+QABgdgYAAQgcAAAAArIAAAwQAAAIAFAAIALAAIAAAXIhLAAIAAgXIANAAQAFAAABgIIAAhTQgBgJgFAAIgNAAIAAgWIAXAAQAWAAANgDIAAAcQAOgdAgAAQAjAAAHAiQANgiAjAAQAxAAAAA5IAAA9QAAAIAEAAIAOAAIAAAXg");
	this.shape_1.setTransform(92.05,31.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBCQgLgLAAgQQAAgaAagNQAVgKAwgHIAAgJQAAgbgeAAQgLAAgHACQAFAHAAAKQAAAJgGAHQgIAFgJAAQgaAAAAgXQABgoBFAAQAhAAAPALQAPAMAAAbIAABEQAAAIAFAAIANAAIAAAXIgxAAQgGgKgDgPQgGAMgOAIQgPAJgRAAQgVAAgMgLgAgWAKQgPAHgBAOQAAAVAWAAQAQAAAJgMQAKgLAAgSIAAgLQgcADgNAHg");
	this.shape_2.setTransform(70.45,32.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABBJIAAgXIAMAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgCgCgDIgWgeIgZAeQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIAKAAIAAAXIg9AAIAAgXIALAAQAEAAAGgGIAngsIgmgqQgFgIgFAAIgJAAIAAgWIBQAAIAAAWIgLAAQgHABAFAGIAUAbIAWgbQABgBAAAAQAAgBAAAAQABgBAAAAQgBgBAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgKAAIAAgWIA/AAIAAAWIgNAAQgEAAgGAIIgkAnIAoAuQAGAIADgBIAKAAIAAAXg");
	this.shape_3.setTransform(53.425,32.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1A4QgUgVAAgjQAAghAVgWQAVgVAhAAQAiAAATAUQATAVAAAjIAAAIIhpAAQABAtAnAAQAdAAALgdIAWALQgOAqgzAAQgmAAgVgVgAAhgMQAAgWgIgJQgHgKgQAAQggAAgCApIBBAAIAAAAg");
	this.shape_4.setTransform(37.05,32.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALBLIAAgXIAMAAQAFAAAAgIIAAg/QAAgdgYAAQgfAAAAAwIAAAsQAAAIAFAAIAMAAIAAAXIhMAAIAAgXIANAAQAGAAAAgIIAAhTQAAgJgGAAIgNAAIAAgWIAYAAQAVAAANgDIAAAdQAOgeAjAAQAvAAAAA2IAABAQAAAIAFAAIAOAAIAAAXg");
	this.shape_5.setTransform(13.175,31.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3A4QgWgWAAgiQAAghAWgWQAWgVAiAAQAiAAAWAVQAVAWAAAhQAAAigWAWQgVAVgjAAQgiAAgVgVgAgkgBIAAADQAAAzAkAAQAlAAAAgzIAAgDQAAgzglAAQgkAAAAAzg");
	this.shape_6.setTransform(-4.325,32.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBoIAAgWIANAAQAFAAAAgIIAAhQQAAgMgHAAIgLAAIAAgXIAYAAQAUAAAOgDIAAB2QAAAIAEAAIANAAIAAAWgAgRg+QgHgHAAgKQAAgKAHgHQAHgHAKAAQALAAAHAHQAHAHAAAKQAAAKgHAHQgHAIgLAAQgKAAgHgIg");
	this.shape_7.setTransform(-16.975,29.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8BBIAAgnIAeAAIAAAbQAKADARAAQAbAAAAgUQAAgJgJgGQgHgDgRgEQgYgEgMgIQgQgJAAgVQAAgWAQgNQASgNAeAAQAeAAAZALIAAAoIgfAAIAAgaQgIgDgPAAQgbAAAAASQAAAKAKAEIAWAHQAaAEAKAHQARALAAAVQAAAXgRANQgSANgeAAQgbAAgegMg");
	this.shape_8.setTransform(-28,32.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBoIAAgWIANAAQAFAAAAgIIAAhQQAAgMgHAAIgLAAIAAgXIAYAAQAUAAAOgDIAAB2QAAAIAEAAIANAAIAAAWgAgRg+QgHgHAAgKQAAgKAHgHQAHgHAKAAQALAAAHAHQAHAHAAAKQAAAKgHAHQgHAIgLAAQgKAAgHgIg");
	this.shape_9.setTransform(-39.125,29.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBKIg0h1QgDgHgFgBIgMAAIAAgWIBOAAIAAAWIgMAAQgIAAADAJQAEANAaA7IAfhIQACgDgCgDQgBgDgEAAIgOAAIAAgWIBCAAIAAAWIgLAAQgIABgDAHIg0B1g");
	this.shape_10.setTransform(-51.925,32.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBBCQgLgLAAgQQAAgaAagNQAUgKAygHIAAgJQgBgbgeAAQgLAAgIACQAGAHAAAKQAAAJgGAHQgIAFgKAAQgZAAAAgXQABgoBFAAQAhAAAPALQAPAMAAAbIAABEQAAAIAFAAIAMAAIAAAXIgwAAQgGgKgDgPQgGAMgOAIQgPAJgRAAQgVAAgMgLgAgWAKQgQAHAAAOQAAAVAWAAQAQAAAJgMQALgLAAgSIAAgLQgdADgNAHg");
	this.shape_11.setTransform(-75.7,32.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBVQgKgKAAgZIAAhRIgUAAIAAgTIALgBQARgDABgOIADgbIAcAAIAAAqIAdAAIAAAWIgfAAIAABQQABAWASAAQAHAAAHgDIAAAYQgMADgOAAQgYABgLgLg");
	this.shape_12.setTransform(-96.35,30.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1A4QgUgVAAgjQAAghAWgWQAUgVAhAAQAiAAAUAUQASAVAAAjIAAAIIhpAAQABAtAoAAQAcAAALgdIAWALQgOAqgzAAQglAAgWgVgAAhgMQAAgWgIgJQgHgKgQAAQgfAAgDApIBBAAIAAAAg");
	this.shape_13.setTransform(-108.9,32.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhDBMQgXgbAAgxQAAguAZgcQAZgcAoAAQAtgBAOAkIAIggIAYAAIAABKIgiAAQgJgzgqAAQg1AAAABIIAAAJQAABJA0AAQAUAAAMgMQAMgMAAgVIAAgIIgrAAIAAgVIBVAAIAABfIgSAAIgLggQgPAkgxABQgqgBgXgbg");
	this.shape_14.setTransform(-127.175,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3btype, new cjs.Rectangle(-139,8,278,42.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgKALQgEgEAAgHQAAgFAEgFQAEgFAGAAQAGAAAFAFQAEAFAAAFQAAAHgEAEQgFAEgGABQgGgBgEgEg");
	this.shape.setTransform(-49.875,72.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAzIAAgeIASAAIAAAWQAKAFAQAAQAaAAAAgTQAAgKgJgEQgFgEgPgDQgUgDgIgFQgNgIAAgQQAAgQANgKQAMgKAWAAQAWAAASAKIAAAeIgRAAIAAgWQgJgFgOAAQgZAAAAATQgBAJAKAEQAEADAPADQAUAEAIAFQANAIAAAQQAAARgNAKQgMAKgWAAQgXAAgVgKg");
	this.shape_1.setTransform(-57.5,67.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoAsQgQgRAAgbQAAgaARgRQAQgRAZAAQAaAAAOAQQAPAQAAAbIAAAFIhZAAQAAATAKAMQAKAMASAAQAcAAAIgcIAOAGQgKAkgqAAQgcAAgQgRgAAigIQgBgmgfAAQggAAgCAmIBCAAIAAAAg");
	this.shape_2.setTransform(-69.05,67.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBDQgIgHAAgSIAAhHIgRAAIAAgNIALAAQAKgCABgIIACgWIAPAAIAAAfIAaAAIAAAOIgaAAIAABHQAAASAQAAQAFAAAHgCIAAAOQgJADgJAAQgQAAgIgIg");
	this.shape_3.setTransform(-79.125,66.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAsQgQgRAAgbQAAgaARgRQAQgRAZAAQAaAAAPAQQAOAQAAAbIAAAFIhaAAQAAATALAMQAKAMASAAQAcAAAIgcIAOAGQgKAkgqAAQgcAAgQgRgAAigIQgBgmgfAAQggAAgDAmIBDAAIAAAAg");
	this.shape_4.setTransform(-88.95,67.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA1IgHAaIgNAAQABgKABgeIAAhiQgBgGgDAAIgOAAIAAgOIANAAQARAAAKgCIAABGQAMgcAeAAQAZAAAOARQAOAQAAAbQAAAcgPAQQgOARgZAAQggAAgNgdgAgQgMQgLAMAAATIAAAEQAAAUALAMQAJALAPAAQARAAAJgLQAKgLAAgVIAAgEQAAgTgKgMQgJgLgRAAQgPAAgJALg");
	this.shape_5.setTransform(-102.6,65.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwA0QgKgIAAgOQAAgTAUgLQASgIAogFIAAgHQAAgagbAAQgRAAgIAGQAHAEAAAJQAAAGgFAEQgEADgGAAQgPAAAAgQQAAgOAPgIQAOgIAWAAQAYAAALAJQAMAKAAAVIAAA7QAAAFADAAIANAAIAAAOIgiAAQgDgIgBgPQgFAMgMAHQgMAHgOAAQgQAAgKgJgAgWAHQgOAHAAANQAAAIAGAGQAGAFAKAAQAPAAAJgLQAKgKAAgSIAAgIQgdACgNAGg");
	this.shape_6.setTransform(-115.625,67.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbBSIAAgOIAOAAQADAAAAgFIAAhJQAAgJgFAAIgMAAIAAgPIANAAQAOAAAMgBIAABiQgBAFAEAAIANAAIAAAOgAgKg2QgFgFABgGQgBgHAFgFQAEgEAGAAQAGAAAFAEQAFAFgBAHQABAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_7.setTransform(-125.55,65.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BBQgPgQAAgcQAAgbAPgQQAPgRAYAAQAeAAALAaIAAguQAAgGgDAAIgOAAIAAgOIANAAQAQAAALgCIAACNQAAAFAEAAIANAAIAAAOIglAAIgCgYQgLAbgfAAQgYAAgPgRgAghgMQgKAMAAATIAAAEQAAAVAKALQAKALAQAAQAQAAAJgLQAKgMAAgUIAAgEQAAgTgKgMQgJgLgQAAQgQAAgKALg");
	this.shape_8.setTransform(-135.875,65.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwA8IAAgOIAOAAQADAAAAgGIAAhLQAAgHgDAAIgOAAIAAgOIANAAQAPAAAMgCIAAAbQAIgcAXAAQAMAAAHAIQAHAGAAAMQAAAJgFAFQgEAGgJAAQgEAAgFgEQgDgEAAgFQAAgKAKgCQgDgFgHAAQgOAAgGAMQgHAMABAUIAAAnQAAAGADAAIAOAAIAAAOg");
	this.shape_9.setTransform(-153.9,67.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxATIAAg6QAAgGgEAAIgNAAIAAgOIAoAAIAABOQAAAZAWAAQAOAAAIgMQAJgLAAgUIAAgoQAAgGgEAAIgOAAIAAgOIApAAIAABfQAAAHADAAIAOAAIAAAOIgNAAQgQAAgLACIAAgZQgMAagbAAQglAAAAgpg");
	this.shape_10.setTransform(-166.175,67.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqAsQgRgRAAgbQAAgaARgRQARgRAaAAQAaAAAQARQARARAAAaQAAAbgRARQgQARgbAAQgaAAgQgRgAgagiQgKAMAAAWIAAABQAAAuAkAAQASAAAJgMQAKgMAAgWIAAgBQAAgtglAAQgRAAgJALg");
	this.shape_11.setTransform(-179.575,67.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5BKQgHgFAAgLQgBgIAFgEQAEgFAHAAQAKAAADAIQACAIgJAJIAGAAQAKAAAGgHQAIgIAHgSIAAgBIgshbQgCgGgDAAIgKAAIAAgOIA1AAIAAAOIgKAAQgHAAAEAGIAfBDIAdhCQACgHgHAAIgLAAIAAgOIAvAAIAAAOIgLAAQgEAAgCAGIgoBfQgKAYgIAJQgLALgRAAQgMAAgIgGg");
	this.shape_12.setTransform(-192.75,69.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhCBBQAAgSAegGQgXgEAAgSQAAgQAUgFQgSgLAAgWQAAgTAPgMQAPgMAWAAQAWAAAOAMQAEgXARAAQAHAAAEADQAEAEAAAFQAAAGgEADQgDAEgFAAQgIAAgCgIQgFAEgDAJQAIAKAAAOQAAATgOALQgOAKgXAAQgOAAgKgEQgMACAAAIQAAALARAAIAvgBQAlAAAAAfQAAATgSAKQgRAJgfAAQg7AAAAgZgAgvBAQAAAPApAAQAvAAAAgVQAAgIgFgDQgGgEgNAAIgpAAQgXAFAAAQgAgag6QgIAIAAANIAAADQAAANAHAHQAIAHANAAQANAAAHgHQAIgHAAgNIAAgDQAAgNgHgIQgIgHgMAAQgOAAgHAHg");
	this.shape_13.setTransform(-211.175,69.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AALA8IAAgOIANAAQADAAAAgGIAAg4QABgagXAAQgOAAgJAMQgIAMgBAWIAAAkQABAGADAAIANAAIAAAOIg4AAIAAgOIANAAQADAAAAgGIAAhLQAAgHgDAAIgNAAIAAgOIAMAAQAQAAALgCIAAAbQAMgcAcAAQAlAAAAAqIAAA5QAAAGAEAAIAOAAIAAAOg");
	this.shape_14.setTransform(-224.95,67.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbBSIAAgOIAOAAQADAAAAgFIAAhJQAAgJgFAAIgMAAIAAgPIANAAQAOAAAMgBIAABiQgBAFAEAAIANAAIAAAOgAgKg2QgFgFABgGQgBgHAFgFQAEgEAGAAQAGAAAFAEQAFAFgBAHQABAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_15.setTransform(-235.35,65.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbBRIAAgOIAOAAQADAAAAgGIAAh2QAAgHgDAAIgOAAIAAgOIANAAQAPAAALgCIAACNQAAAGADAAIANAAIAAAOg");
	this.shape_16.setTransform(-241.925,65.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbBRIAAgOIAOAAQADAAAAgGIAAh2QAAgHgDAAIgOAAIAAgOIANAAQAPAAALgCIAACNQAAAGADAAIANAAIAAAOg");
	this.shape_17.setTransform(-248.475,65.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgqAsQgRgRAAgbQAAgaARgRQARgRAaAAQAaAAAQARQARARAAAaQAAAbgRARQgQARgbAAQgaAAgQgRgAgagiQgKAMAAAWIAAABQAAAuAkAAQASAAAJgMQAKgMAAgWIAAgBQAAgtglAAQgRAAgJALg");
	this.shape_18.setTransform(-258.225,67.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwA8IAAgOIAOAAQAEAAgBgGIAAhLQABgHgEAAIgOAAIAAgOIANAAQAPAAAMgCIAAAbQAIgcAXAAQAMAAAHAIQAHAGAAAMQAAAJgEAFQgGAGgIAAQgFAAgEgEQgDgEAAgFQAAgKAKgCQgDgFgHAAQgOAAgGAMQgHAMABAUIAAAnQgBAGAEAAIAOAAIAAAOg");
	this.shape_19.setTransform(-269.9,67.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIBDQgIgHAAgSIAAhHIgRAAIAAgNIALAAQAKgCABgIIACgWIAPAAIAAAfIAaAAIAAAOIgaAAIAABHQAAASAQAAQAFAAAHgCIAAAOQgJADgJAAQgQAAgIgIg");
	this.shape_20.setTransform(-279.025,66.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALA8IAAgOIANAAQADAAABgGIAAg4QgBgagWAAQgOAAgJAMQgJAMABAWIAAAkQgBAGAEAAIAMAAIAAAOIg4AAIAAgOIAOAAQADAAAAgGIAAhLQAAgHgDAAIgOAAIAAgOIAOAAQAPAAALgCIAAAbQAMgcAcAAQAlAAAAAqIAAA5QAAAGAEAAIANAAIAAAOg");
	this.shape_21.setTransform(-289.6,67.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqAsQgRgRAAgbQAAgaARgRQARgRAaAAQAaAAAQARQARARAAAaQAAAbgRARQgQARgbAAQgaAAgQgRgAgagiQgKAMAAAWIAAABQAAAuAkAAQASAAAJgMQAKgMAAgWIAAgBQAAgtglAAQgRAAgJALg");
	this.shape_22.setTransform(-303.275,67.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgoAtQgQgRAAgcQAAgbARgRQAQgQAcAAQAYAAAOALQAOALAAASQAAAJgFAGQgFAFgIAAQgGAAgEgEQgEgEAAgGQAAgMANgCQgHgSgZAAQgRAAgLAMQgLAMAAAVIAAACQAAAVAKAMQAKAMASAAQAdAAAIgbIAOAGQgLAkgpAAQgcAAgQgQg");
	this.shape_23.setTransform(-315.75,67.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqAsQgRgRAAgbQAAgaARgRQARgRAaAAQAaAAAQARQARARAAAaQAAAbgRARQgQARgbAAQgaAAgQgRgAgagiQgKAMAAAWIAAABQAAAuAkAAQASAAAJgMQAKgMAAgWIAAgBQAAgtglAAQgRAAgJALg");
	this.shape_24.setTransform(-334.075,67.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIBDQgIgHAAgSIAAhHIgRAAIAAgNIALAAQAKgCABgIIACgWIAPAAIAAAfIAaAAIAAAOIgaAAIAABHQAAASAQAAQAFAAAHgCIAAAOQgJADgJAAQgQAAgIgIg");
	this.shape_25.setTransform(-344.425,66.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAGBvIAAghIAHAAQAFAAgDgIIgPgaIgTASIAAAFQgBALAHAAIAIAAIAAAhIheAAIAAghIAJAAQAGAAAAgLIAAiAQAAgMgGAAIgKAAIAAghIAoAAQAZAAAQgFIAACKIAkgiQAEgCgCgEQgBgDgEABIgNAAIAAgjIBdAAIAAAjIgMAAQgGgBgIAHIgVARIAmA/QADAHAHAAIAGAAIAAAhg");
	this.shape_26.setTransform(-129.15,23.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag7A/QgYgWAAgpQAAgnAYgWQAZgYApAAQAlAAAUAPQAUAOAAAbQAAASgJALQgKAJgQABQgOAAgJgJQgJgGAAgMQAAgXAXgFQgHgGgQAAQgigBAAAvIAAAHQAAAsAhABQAYgBALgYIAhASQgTAug5gBQgrABgYgXg");
	this.shape_27.setTransform(-147.975,26.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhNBKQgNgNAAgTQAAgeAigOQARgHAzgJIAAgJQAAgZgYAAIgNABQACAHAAAGQAAAMgIAIQgJAHgNAAQggAAAAgdQAAgtBTAAQAqABASANQASANAAAfIAABAQAAAKAGAAIAJAAIAAAiIhAAAQgJgJgFgQQgGANgOAIQgQAJgRgBQgXABgOgMgAgRANQgNAHAAANQAAAHAFAFQAEAEAHAAQAaABAAghIAAgMQgUAEgJAEg");
	this.shape_28.setTransform(-166.025,26.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbBMIgEAhIg0AAIABg3IAAh1QAAgMgHAAIgKAAIAAgiIAoAAQAZAAAQgEIAABXQAOgeAkAAQAfAAASAXQATAYAAAlQAAAngUAXQgTAYggAAQgrAAgNgmgAgSAZIAAAGQAAAsAZAAQAaAAAAgsIAAgGQAAgrgaAAQgZAAAAArg");
	this.shape_29.setTransform(-185.975,23.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag9A+QgYgXAAgnQAAgmAZgXQAXgXAogBQBSABAABZIAAAHIhoAAQACAjAjAAQAaAAALgXIAeAWQgWAog6gBQgrABgXgYgAAYgPQAAgTgEgJQgGgIgKAAQgWAAgCAkIAsAAIAAAAg");
	this.shape_30.setTransform(-212.85,26.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA6BTIAAghIAGAAQAHAAAAgLIAAg1QAAgbgTAAQgTAAAAAiIAAAuQAAALAGAAIAHAAIAAAhIhaAAIAAghIAHAAQAGAAAAgLIAAg2QAAgagSAAQgVAAAAAiIAAAuQAAALAHAAIAHAAIAAAhIhdAAIAAghIAIAAQAHAAAAgLIAAhHQAAgMgHAAIgIAAIAAgiIAmAAQAYAAAQgDIAAAdQAQgeAkAAQAlAAAJAhQANghApAAQA2AAAABBIAAA4QAAALAHAAIAIAAIAAAhg");
	this.shape_31.setTransform(-237,26.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhBA+QgZgXAAgnQAAglAZgYQAagXAogBQAoABAZAXQAZAXAAAmQAAAmgZAYQgZAYgpgBQgpABgYgYgAgTgnQgGALAAAaIAAAFQAAAbAGAKQAGAKANAAQAOAAAGgKQAGgKAAgbIAAgFQAAgagGgLQgGgLgOAAQgNAAgGALg");
	this.shape_32.setTransform(-261.825,26.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag7A/QgYgWAAgpQAAgnAYgWQAZgYApAAQAlAAAUAPQAUAOAAAbQAAASgJALQgKAJgQABQgOAAgJgJQgJgGAAgMQAAgXAXgFQgHgGgQAAQgigBAAAvIAAAHQAAAsAhABQAYgBALgYIAhASQgTAug5gBQgrABgYgXg");
	this.shape_33.setTransform(-279.875,26.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgtBvIAAghIAJAAQAHAAAAgLIAAiAQAAgMgHAAIgKAAIAAghIAnAAQAYAAARgFIAACyQAAALAGAAIAHAAIAAAhg");
	this.shape_34.setTransform(-293.9,23.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag+A+QgWgXAAgnQAAgmAYgXQAXgXAogBQBSABABBZIAAAHIhpAAQACAjAjAAQAaAAAKgXIAfAWQgVAog7gBQgrABgYgYgAAYgPQAAgTgEgJQgGgIgKAAQgWAAgCAkIAsAAIAAAAg");
	this.shape_35.setTransform(-307.9,26.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAnBtIgnhvIglBvIg1AAIg1isQgEgMgJAAIgKAAIAAghIBqAAIAAAhIgJAAQgFAAgCADQgBABACAIIAaBYIAchYQADgMgJAAIgKAAIAAghIBkAAIAAAhIgLAAQgIAAACAMIAeBaIAbhaQADgMgJAAIgNAAIAAghIBTAAIAAAhIgKAAQgFAAgDADQgDACgCAHIg0Csg");
	this.shape_36.setTransform(-330.925,23.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2type, new cjs.Rectangle(-350,0,446.1,82.3), null);


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
	this.shape.graphics.f("#285C4D").s().p("A3ZKVIAA0pMAuzAAAIAAUpg");
	this.shape.setTransform(0,66.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDblue, new cjs.Rectangle(-149.7,0,299.5,132.2), null);


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
	this.shape.setTransform(150,125.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD, new cjs.Rectangle(0,0,300,250.1), null);


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

}).prototype = getMCSymbolPrototype(lib.HEAD3d, new cjs.Rectangle(-139,8,278,42.1), null);


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

}).prototype = getMCSymbolPrototype(lib.HEAD3c, new cjs.Rectangle(-139,8,278,42.1), null);


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

}).prototype = getMCSymbolPrototype(lib.HEAD3b, new cjs.Rectangle(-139,8,278,42.1), null);


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

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(-139,0,278,64), null);


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
	this.instance.setTransform(2,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-348,0,446.1,82.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgdBNQgPgGgMgLQgLgKgGgQQgHgPAAgTQAAgQAGgPQAGgQALgLQALgLAPgHQAPgGARAAQASAAAPAGQAOAHALALQAKAMAGAQQAGAQAAASIAAAJIh1AAQACAPAMALQALALAUAAIAKgBIAMgDIALgFIAJgHIASAbQgLALgSAGQgRAFgTAAQgRAAgQgGgAAogOIgCgMQgCgGgFgFQgFgFgHgEQgHgDgLAAQgJAAgHADQgHADgEAGQgFAFgDAGIgDAMIBNAAg");
	this.shape.setTransform(12.225,16.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBRIAAidIAqAAIAAAVQAHgKAOgIQANgHAPAAIAAAoIgLgBIgLACIgLAEIgKAFIgGAIIAABng");
	this.shape_1.setTransform(-1.375,15.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBQQgLgDgHgHQgIgGgGgKQgEgKAAgNQAAgOAEgKQAGgJAIgGQAHgGALgDQAJgDAKAAQAPAAAMAFQAOAFAIAKIAAgWQAAgMgKgHQgJgHgPAAQgaAAgUATIgQgcQAPgNASgGQASgGARAAQAOAAAMADQANADAKAHQAJAHAGALQAFAMAAARIAABlIgpAAIAAgQQgJAJgNAGQgMAFgPAAQgKAAgJgDgAgWAOQgJAGAAAMQAAALAJAGQAJAGANAAQAIAAAKgDQAIgEAGgHIAAgTQgGgHgIgEQgKgDgIAAQgNAAgJAGg");
	this.shape_2.setTransform(-16.8,16.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBNQgQgGgLgLQgLgLgGgQQgHgPAAgSQAAgRAHgPQAGgQALgLQALgLAQgGQAPgGASAAQAYAAAPAJQAQAIAIALIgcAaQgMgRgVAAQgTAAgMANQgMAMAAAUQAAAUAMANQAMANATAAQALAAAIgFQAJgEAFgIIAcAZQgIALgQAJQgPAJgYAAQgSAAgPgGg");
	this.shape_3.setTransform(-32.5,16.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBcQgMgLAAgWIAAhRIgaAAIAAglIAaAAIAAgrIAqAAIAAArIAfAAIAAAlIgfAAIAABGQAAAIADAFQAEAFAHAAIAIgCIAGgDIAJAfQgFAFgIADQgJADgNAAQgUAAgMgLg");
	this.shape_4.setTransform(5.1,-11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBNQgPgGgMgLQgLgKgGgQQgHgPAAgTQAAgQAGgPQAGgQALgLQALgLAPgHQAPgGARAAQASAAAPAGQAOAHALALQAKAMAGAQQAGAQAAASIAAAJIh1AAQACAPAMALQALALAUAAIAKgBIAMgDIALgFIAJgHIASAbQgLALgSAGQgRAFgTAAQgRAAgQgGgAAogOIgCgMQgCgGgFgFQgFgFgHgEQgHgDgLAAQgJAAgHADQgHADgEAGQgFAFgDAGIgDAMIBNAAg");
	this.shape_5.setTransform(-8.775,-9.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBpQgUgIgRgOQgPgQgKgUQgJgWAAgZQAAgZAJgWQAKgUAPgPQARgPAUgIQAWgIAXAAQARAAAOAFQAOAEALAGQALAHAJAIQAIAKAGAKIgnAVQgHgMgNgIQgNgJgSAAQgOAAgNAFQgNAFgIAKQgKAKgFANQgFANAAAPQAAAPAFAOQAFANAKAJQAIAKANAFQANAGAOAAQAPAAAMgGQAMgEAHgHIAAgaIg6AAIAAgpIBpAAIAABUQgRATgXALQgYALgdAAQgXABgWgJg");
	this.shape_6.setTransform(-29.3,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bkgd shape
	this.instance = new lib.CTA_Ribbonsvg("synched",0);
	this.instance.setTransform(-0.05,0.1,1,2.2199,0,0,0,67,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-67,-37.4,189.2,75.1), null);


// stage content:
(lib.JCC_Diabetes2_728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,454];
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
	this.frame_454 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(454).call(this.frame_454).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(455));

	// logo
	this.instance = new lib.jcchwhiteRGBai();
	this.instance.setTransform(530.05,35.6,0.35,0.35,0,0,0,0.3,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(419).to({regX:0.5,regY:56,x:530.1},0).to({regX:0.1,x:376.1},14,cjs.Ease.quadInOut).wait(22));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(694.95,45,0.8014,0.8011);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(439).to({_off:false},0).to({alpha:1},13).wait(3));

	// HEAD2
	this.instance_2 = new lib.HEAD2();
	this.instance_2.setTransform(559.15,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({y:37,alpha:0},7).to({_off:true},1).wait(306).to({_off:false,y:36},0).to({alpha:1},7).wait(6).to({x:359.15},20,cjs.Ease.quadInOut).wait(45));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:100,y:45}).wait(168).to({graphics:null,x:0,y:0}).wait(287));

	// PIC1
	this.instance_3 = new lib.PIC1();
	this.instance_3.setTransform(100.05,170.2,0.6667,0.6667,0,0,0,0.1,130.3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160).to({alpha:0},7).to({_off:true},1).wait(287));

	// mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_160 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(160).to({graphics:mask_1_graphics_160,x:100,y:45}).wait(73).to({graphics:null,x:0,y:0}).wait(222));

	// PIC2
	this.instance_4 = new lib.PIC2();
	this.instance_4.setTransform(100.05,163.05,0.6665,0.6665,0,0,0,0.1,130.2);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160).to({_off:false},0).wait(65).to({alpha:0},7).to({_off:true},1).wait(222));

	// mask copy 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_225 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(225).to({graphics:mask_2_graphics_225,x:100,y:45}).wait(78).to({graphics:null,x:0,y:0}).wait(152));

	// PIC3
	this.instance_5 = new lib.PIC3();
	this.instance_5.setTransform(100.05,143,0.6667,0.6667,0,0,0,0.1,95.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(225).to({_off:false},0).wait(71).to({alpha:0},6).to({_off:true},1).wait(152));

	// mask copy 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_296 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_390 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_391 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_392 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_393 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_394 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_395 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_396 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_397 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_398 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_399 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_400 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_401 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_402 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_403 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_404 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_405 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_406 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_407 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_408 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_409 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");
	var mask_3_graphics_410 = new cjs.Graphics().p("AvnHCIAAuDIfPAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(296).to({graphics:mask_3_graphics_296,x:100,y:45}).wait(94).to({graphics:mask_3_graphics_390,x:100,y:45}).wait(1).to({graphics:mask_3_graphics_391,x:99,y:45}).wait(1).to({graphics:mask_3_graphics_392,x:96,y:45}).wait(1).to({graphics:mask_3_graphics_393,x:91,y:45}).wait(1).to({graphics:mask_3_graphics_394,x:84,y:45}).wait(1).to({graphics:mask_3_graphics_395,x:75,y:45}).wait(1).to({graphics:mask_3_graphics_396,x:64,y:45}).wait(1).to({graphics:mask_3_graphics_397,x:51,y:45}).wait(1).to({graphics:mask_3_graphics_398,x:36,y:45}).wait(1).to({graphics:mask_3_graphics_399,x:19,y:45}).wait(1).to({graphics:mask_3_graphics_400,x:0,y:45}).wait(1).to({graphics:mask_3_graphics_401,x:-19,y:45}).wait(1).to({graphics:mask_3_graphics_402,x:-36,y:45}).wait(1).to({graphics:mask_3_graphics_403,x:-51,y:45}).wait(1).to({graphics:mask_3_graphics_404,x:-64,y:45}).wait(1).to({graphics:mask_3_graphics_405,x:-75,y:45}).wait(1).to({graphics:mask_3_graphics_406,x:-84,y:45}).wait(1).to({graphics:mask_3_graphics_407,x:-91,y:45}).wait(1).to({graphics:mask_3_graphics_408,x:-96,y:45}).wait(1).to({graphics:mask_3_graphics_409,x:-99,y:45}).wait(1).to({graphics:mask_3_graphics_410,x:-100,y:45}).wait(1).to({graphics:null,x:0,y:0}).wait(44));

	// PIC4
	this.instance_6 = new lib.PIC4();
	this.instance_6.setTransform(99.8,127.65,0.6667,0.6674,0,0,0,-0.3,76.8);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(296).to({_off:false},0).wait(94).to({x:-100.2},20,cjs.Ease.quadInOut).to({_off:true},1).wait(44));

	// BKGD-orange
	this.instance_7 = new lib.BKGD();
	this.instance_7.setTransform(200.9,39.9,0.8766,0.18,0,0,0,1,221.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(63).to({alpha:0},7).to({_off:true},1).wait(306).to({_off:false},0).to({alpha:1},7).wait(6).to({x:0.9},20,cjs.Ease.quadInOut).wait(45));

	// HEAD3
	this.instance_8 = new lib.HEAD3();
	this.instance_8.setTransform(365,43,1,1,0,0,0,0,32);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).to({alpha:1},7).wait(83).to({alpha:0},7).to({_off:true},1).wait(287));

	// HEAD3b
	this.instance_9 = new lib.HEAD3b();
	this.instance_9.setTransform(449,47,1,1,0,0,0,0,32);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(161).to({_off:false},0).to({x:379,alpha:1},7,cjs.Ease.quadOut).wait(61).to({alpha:0},7).to({_off:true},1).wait(218));

	// HEAD3c
	this.instance_10 = new lib.HEAD3c();
	this.instance_10.setTransform(449,47,1,1,0,0,0,0,32);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(233).to({_off:false},0).to({x:379,alpha:1},7,cjs.Ease.quadOut).wait(60).to({alpha:0},7).to({_off:true},1).wait(147));

	// HEAD3d
	this.instance_11 = new lib.HEAD3d();
	this.instance_11.setTransform(449,47,1,1,0,0,0,0,32);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(304).to({_off:false},0).to({x:379,alpha:1},7,cjs.Ease.quadOut).wait(58).to({alpha:0},7).to({_off:true},1).wait(78));

	// BKGD-blue
	this.instance_12 = new lib.BKGDblue();
	this.instance_12.setTransform(364.25,45.75,2.4307,0.6808,0,0,0,0.1,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(455));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(164,44.5,628.9,46);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 728,
	height: 90,
	fps: 36,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/JCC_Diabetes2_728x90_atlas_NP_1.jpg?1660738284360", id:"JCC_Diabetes2_728x90_atlas_NP_1"}
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