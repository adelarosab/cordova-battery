Polymer(
  {
    is: 'cordova-battery',

    /**
     * Fired when the battery charge percentage reaches the critical charge
     * threshold.
     *
     * @event critical
     * @event cordova-battery-critical
     */

    /**
     * Fired when the battery charge percentage reaches the low charge
     * threshold.
     *
     * @event low
     * @event cordova-battery-low
     */

    hostAttributes: {
      hidden: true
    },

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

    _computeReady(ready, paused) {
      return ready && !paused;
    },

    _observeReady(ready) {
      if (ready) {
        window.addEventListener(
          'batterycritical',
          this._onCritical.bind(this),
          false
        );
        window.addEventListener(
          'batterylow',
          this._onLow.bind(this),
          false
        );
        window.addEventListener(
          'batterystatus',
          this._onStatusChanged.bind(this),
          false
        );
      }
    },

    _onCritical() {
      this.fire('critical', this.level);
      this.fire('cordova-battery-critical', this.level);
    },

    _onLow() {
      this.fire('low', this.level);
      this.fire('cordova-battery-low', this.level);
    },

    _onStatusChanged(status) {
      this._setIsPlugged(status.isPlugged);
      this._setLevel(status.level);
    },

    detached() {
      window.remogveEventListener('batterycritical', this._onCritical);
      window.removeEventListener('batterylow', this._onLow);
      window.removeEventListener('batterystatus', this._onStatusChanged);
    }
  }
);
