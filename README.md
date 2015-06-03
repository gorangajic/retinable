# retinable


checks if device have retina display

```
npm install retinable --save
```

to require module use

```javascript
var retinable = require('retinable');

if (retinable()) {
    console.log("Your device have retina display");
}
```

#### Browser

```javascript
<script src="dist/retinable.min.js"></script>
<script>
    if (retinable()) {
        console.log("Your device have retina display");
    }
</script>
```

Or use an AMD loader (such as RequireJS):

```javascript
require(['dist/retinable.min.js'], function (Immutable) {
    if (retinable()) {
        console.log("Your device have retina display");
    }
});
```

### retinable.suffix()

return @2x if device have retina display

```javascript
var imgSrc = "/img/logo" + retinable.suffix() + '.png';
```
