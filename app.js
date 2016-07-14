function writeTraffic() {
  firebase.database().ref('Traffic').transaction(function(value) {
    console.log('value', value);
    return value + 1;
  });
}

function writeAccident() {
  firebase.database().ref('Accident').transaction(function(value) {
    console.log('value', value);
    return value + 1;
  });
}

function writeDiversion() {
  firebase.database().ref('Diversion').transaction(function(value) {
    console.log('value', value);
    return value + 1;
  });
}

function writePickUp() {
  firebase.database().ref('PickUp/').transaction(function(value) {
    console.log('value', value);
    return value + 1;
  });
  fb.ref("/.info/serverTimeOffset").on('PickUp/Time', function(offset) {
    var offsetVal = offset.val()||0;
    var serverTime = Date.now() + offsetVal;
  });
}
