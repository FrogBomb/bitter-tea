this["RadioWars"] = this["RadioWars"] || {};
this["RadioWars"]["templates"] = this["RadioWars"]["templates"] || {};
this["RadioWars"]["templates"]["unitPanel"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "	<div>\r\n		"
    + this.escapeExpression(((helper = (helper = helpers.coolStuff || (depth0 != null ? depth0.coolStuff : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"coolStuff","hash":{},"data":data}) : helper)))
    + "\r\n"
    + ((stack1 = (helpers.paramFields || (depth0 && depth0.paramFields) || alias1).call(depth0,(depth0 != null ? depth0.paramArr : depth0),{"name":"paramFields","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "			<span style=\"\">"
    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span><input/><br/>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.unitPanel || (depth0 && depth0.unitPanel) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.funcName : depth0),(depth0 != null ? depth0.paramArr : depth0),{"name":"unitPanel","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});