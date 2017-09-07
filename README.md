# Angular Initial Value

A tiny AngularJS directive to set ng-model (and consequently field value) based on form fields attributes.

## Usage

1- Download plugin (`bower install angular-initial-value`) or use CDN address and import it after AngularJS:
```html
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
<script src="//cdn.jsdelivr.net/gh/glaucocustodio/angular-initial-value@latest/dist/angular-initial-value.min.js"></script>
```

2- Load the module in your application:
```js
var app = angular.module('myApp', ['initialValue']);
```

3- Add `initial-value` attribute for your form fields, it supports the most common inputs like `text`, `email`, `tel`, `number`, `color`, `range`, `search`, `date`, `url`, `password`, `checkbox`, `radio`, `select`, `textarea`.

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

After starting this project I found this <a target="_blank" href="https://github.com/johngeorgewright/angular-auto-value">another one</a> which intends deal with the same issue.

## License

This projected is licensed under the terms of the MIT license.
