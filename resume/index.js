var fs = require("fs");
var Handlebars = require("../node_modules/handlebars");
var moment = require("../node_modules/moment");
var _ = require("../node_modules/underscore");

function formatDate(dateString) {
	var date = moment(dateString);
	if (date.isValid() && !date.isSame(moment())) {
		return date.format("MM/YYYY");
	} else {
		return dateString;
	}
}

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");

	_.each(resume.work, function(work_experience) {
		work_experience.startDate = formatDate(work_experience.startDate);
		work_experience.endDate = formatDate(work_experience.endDate) || "Present";
	});
	_.each(resume.education, function(edu) {
		edu.endDate = formatDate(edu.endDate);
	});

	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

module.exports = {
	render: render
};
