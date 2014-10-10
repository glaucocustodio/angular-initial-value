# Angular Initial Value

A tiny AngularJS directive to set ng-model (and consequently field value) based on form fields attributes.

## Usage

1- Include `angular-initial-value.js` after AngularJS
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
<script src="dist/angular-initial-value.js"></script>
```

2- Load the module in your application
```js
var app = angular.module('myApp', ['initialValue']);
```

3- Add `initial-value` attribute for your form fields, it supports the most common inputs like `text`, `email`, `tel`, `color`, `range`, `search`, `url`, `password`, `checkbox`, `radio`, `select`, `textarea`.

```html
<body ng-app="myApp">
  <input type="text" value="John" name="text" initial-value ng-model="text" id="text"/>
</body>
```

You can pass the start value to attribute as well (this feature is not available only for `checkbox` and `radio`)
```html
<body ng-app="myApp">
  <input type="text" name="text" initial-value="John" ng-model="text" id="text"/>
</body>
```

## How it works

The script will read values from `value`, `checked` and `selected` attributes and load them into its respectives `ng-model`'s.


## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Related projects

After starting this project I found this <a target="_blank" href="https://github.com/johngeorgewright/angular-auto-value">another one</a> which pretends deal with the same issue.

## License

This projected is licensed under the terms of the MIT license.
