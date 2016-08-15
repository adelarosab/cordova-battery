_[Demo and API docs](https://adelarosab.github.io/cordova-battery)_

### &lt;cordova-battery&gt;
`<cordova-battery>` implements a basic interface about cordova application 
status.

### Installation
In your `www` project:
```bash
bower install --save cordova-battery
```

In your `cordova` project:
```bash
cordova plugin add cordova-plugin-battery-status
```

### Usage
```html
<cordova-battery
    is-plugged
    level="90"
    ready
></cordova-battery>
```

`<cordova-battery>` provides an implementation of an old version of the 
Battery Status Events API. `ready` means cordova is fully operative and 
values of the element are readable.

---

###### Note
Due to restrictions `ready` attribute is not shown into attributes table.
