'use strict';

Polymer(
  {
    is: 'cordova-battery',

    properties: {
      /**
       * A boolean that indicates wheter the device is plugged in.
       */
      isPlugged: {
        notify: true,
        readOnly: true,
        type: Boolean,
        value: false
      },

      /**
       * The percentage of battery charge (0-100)
       */
      level: {
        notify: true,
        readOnly: true,
        type: Number
      },

      /**
       * Return if cordova deviceready event has been fired.
       */
      ready: {
        notify: true,
        observer: "_observeReady",
        value: false
      }
    },

    _observeReady(ready) {
      if (ready) {
        window.addEventListener(
          'batterycritical',
          this.fire.bind(this, 'cordova-batteory-critical', this.level),
          false
        );
        window.addEventListener(
          'batterylow',
          this.fire.bind(this, 'cordova-batteory-low', this.level),
          false
        );
        window.addEventListener(
          'batterystatus',
          this._onStatusChanged.bind(this),
          false
        );
      }
    },

    _onStatusChanged(status) {
      this._setIsPlugged(status.isPlugged);
      this._setLevel(status.level);
    },

    detached() {
      window.removeEventListener('batterycritical', this.fire);
      window.removeEventListener('batterylow', this.fire);
      window.removeEventListener('batterystatus', this._onStatusChanged);
    }
  }
);
