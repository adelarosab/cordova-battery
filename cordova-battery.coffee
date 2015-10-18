Polymer
  is: "cordova-battery"

  properties:
    ### A boolean that indicates whether the device is plugged in. ###
    isPlugged:
      readOnly: yes
      reflectToAttribute: yes
      type: Boolean
    ### The percentage of battery charge (0-100). ###
    level:
      readOnly: yes
      reflectToAttribute: yes
      type: Number

  _onStatusChanged: (info) ->
    @_setIsPlugged info.isPlugged
    @_setLevel info.level

  attached: ->
    window.addEventListener "batterystatus", (@_onStatusChanged.bind this), false
    window.addEventListener "batterylow",
      (@fire.bind this, "cordova-battery-low", @level),
      false
    window.addEventListener "batterycritical",
      (@fire.bind this, "cordova-battery-critical", @level),
      false

  detached: ->
    window.removeEventListener "batterystatus", @_onStatusChanged
    window.removeEventListener "batterylow", @fire
    window.removeEventListener "batterycritical", @fire
