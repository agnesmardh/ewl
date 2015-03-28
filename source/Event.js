var Event = function () {
	this.theEventName = "";
}

Event.prototype.getJSON = function() {
	if (this.theEventName === "") {
		return {};
	} else {
		return { eventName : this.theEventName };
	};
};

Event.prototype.set = function(sEventName) {
	this.theEventName = sEventName;
};

Event.prototype.get = function() {
	return this.theEventName;
};

Event.prototype.setName = function(sEventName) {
	this.theEventName = sEventName;
};

Event.prototype.getName = function() {
	return this.theEventName;
};