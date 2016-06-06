# ScrolTable v1.0.0

> A lightweight jQuery plugin to create scrollable tables for better mobile experience.


## Quick Start

1. Install [jQuery](https://code.jquery.com/)

2. Copy the images to `<root>/images/` folder

3. Include the CSS and JS file into the `<head>`

    ```html
    <link rel="stylesheet" type="text/css" href="/css/jquery.scroltable.min.css" />
    ```

    ```html
    <script src="/js/jquery.scroltable.min.js"></script>
    ```

4. Call the `scroltable` method to initialize scrollable tables.

    ```js
    $('#sample-table').scroltable();
    ```


## Methods

| Method | Arguments | Description |
|:------:|:---------:|:-----------:|
| `scroltable` | (none) | Initializes ScrolTable |
| `destory` | (none) | Destroys ScrolTable |


#### Example

Destroy the scroltables.

```js
$('#sample-table').scroltable('destroy');
```

## Browser support

ScrolTable works on IE9+ in addition to other modern browsers such as Chrome, Firefox, and Safari.


## Dependencies

jQuery 1.7+


## License

Copyright (c) 2016 Tim Wong

Licensed under the MIT license.
