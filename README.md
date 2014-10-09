# Angular Initial Value

A simple AngularJS directive to set ng-model (and consequently field value) based on form fields attributes.

## Usage

1- Include `angular-initial-value.js` after AngularJS
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
<script src="dist/angular-initial-value.js"></script>
```

2- Add `initial-value` attribute to yours form fields

## How it works

The script will read values from `value`, `checked` and `selected` attributes and load them into its respectives `ng-model`.


## Contributing
Check [CONTRIBUTING.md](blob/master/CONTRIBUTING.md) for more information.

## License

This projected is licensed under the terms of the MIT license.