var initialValueModule = angular.module('initialValue', [])
.directive('initialValue', function() {
  var removeIndent = function (str) {
		var arr = str.split("\n");
		var result = "";
		arr.forEach(function (it) {
			result += it.trim();
			result += '\n';
		});

		return result;
	};


  return{
    restrict: 'A',
    controller: ['$scope', '$element', '$attrs', '$parse', function($scope, $element, $attrs, $parse){

      var getter, setter, val, tag;
      tag = $element[0].tagName.toLowerCase();
      val = $attrs.initialValue || removeIndent($element.val());
      
      if(tag === 'input'){
        if($element.attr('type') === 'checkbox'){
          val = $element[0].checked;
        } else if($element.attr('type') === 'radio'){
          val = ($element[0].checked || $element.attr('selected') !== undefined) ? $element.val() : undefined;
        } else if($element.attr('type') === 'number'){
          val = ($element.val() !== undefined) ? parseFloat($element.val()) : undefined;
        } else if($element.attr('type') === 'color' || $element.attr('type') === 'range'){
          val = $element[0].getAttribute('value');
        } else if($element.attr('type') === 'date') {
          val = new Date(val);
        }
      } else if(tag === "select"){
        for (i=0; i < $element[0].options.length; i++) {
          option = $element[0].options[i];
          if(option.hasAttribute('selected')) {
            val = option.text;
          }
        }
      }

      if($attrs.ngModel){
        getter = $parse($attrs.ngModel);
        setter = getter.assign;
        setter($scope, val);
      }
    }]
  };
});

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = initialValueModule;
}
