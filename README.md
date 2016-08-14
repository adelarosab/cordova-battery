_[Demo and API docs](https://adelarosab.github.io/cordova-battery)_


## &lt;cordova-core&gt;

`<cordova-core>` implements a basic interface about cordova application battery 
status.

```html
<cordova-battery
    is-plugged
    level="90"
    ready
></cordova-battery>
```
### Attributes
 
#### is-plugged (read-only)

A boolean that indicates wheter the device is plugged in.
 
#### level (read-only)

The percentage of battery charge (0-100)

#### ready (read-only)

Return if cordova deviceready event has been fired.
