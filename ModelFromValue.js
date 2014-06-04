/**
 * Allow angular models to init their values from what zf2 form put in the html
 * value attribute
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
