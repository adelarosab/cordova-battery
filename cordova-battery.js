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
        type: Boolean
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
        computed: '_computeReady(_ready_, _paused_)',
        notify: true,
        observer: '_observeReady',
        type: Boolean,
        value: false
      }
    },

    _observeReady(ready) {
      if (ready) {
        window.addEventListener(
          'batterycritical',
          this.fire.bind(this, 'cordova-battery-critical', this.level),
          false
        );
        window.addEventListener(
          'batterylow',
          this.fire.bind(this, 'cordova-battery-low', this.level),
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
