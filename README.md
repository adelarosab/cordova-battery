_[Demo and API docs](https://adelarosab.github.io/cordova-battery)_

### Note:
Due to restrictions `ready` attribute is not shown into attributes table.

## &lt;cordova-battery&gt;

`<cordova-battery>` provides information about the battery status.

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

### Events

#### cordova-battery-critical
Fires when the battery charge percentage reaches the critical charge threshold.

#### cordova-battery-low
Fires when the battery charge percentage reaches the low charge threshold.
