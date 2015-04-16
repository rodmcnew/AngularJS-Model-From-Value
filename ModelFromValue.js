/**
 * Rendering forms fields with their values server side is not the angular way, 
 * ideally you should be rendering client side if you are using angular. But if
 * you must use angular with a server-side rendered form, this directive will 
 * help you do that.
 * 
 * This directive populates angular $scope vars from the values the form fields
 * had when the page loaded.
 *
 * Use like this:
 * <input data-ng-model="addSecondUser" data-init-from-form value="1">
 */
angular.module('ModelFromValue', []).directive(
    "modelFromValue",
    function ($parse) {
        return {
            link: function (scope, element, attrs) {
                var val;
                var element = element[0];
                switch (element.type) {
                    case 'checkbox':
                        val = element.checked;
                        break;
                    case 'radio':
                        if (!element.checked) {
                            return;
                        }
                        val = element.value;
                        break;
                    default:
                        val = element.value;
                }
                $parse(attrs.ngModel).assign(scope, val)
            }
        };
    }
);
