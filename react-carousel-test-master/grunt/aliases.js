module.exports = function(grunt, options){
	return {
		"server": ["browserify:dist",  "connect:dev", "watch"]
	};
};
