Polymer
  is: "cordova-battery"

  properties:
    isPlugged:
      readOnly: yes
      reflectToAttribute: yes
      type: Boolean
    level:
      readOnly: yes
      reflectToAttribute: yes
      type: Number

  _statusChanged: (info) ->
    @_setIsPlugged info.isPlugged
    @_setLevel info.level

  attached: ->
    window.addEventListener "batterystatus", (@_statusChanged.bind this), false
    window.addEventListener "batterylow",
      (@fire.bind this, "cordova-battery-low", @level),
      false
    window.addEventListener "batterycritical",
      (@fire.bind this, "cordova-battery-critical", @level),
      false

  detached: ->
    window.removeEventListener "batterystatus", @_batteryChanged
    window.removeEventListener "batterylow", @fire
    window.removeEventListener "batterycritical", @fire
