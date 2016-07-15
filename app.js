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
  firebase.database().ref('PickUp/Number').transaction(function(value) {
    console.log('value', value);

    var sessionsRef = firebase.database().ref('PickUp/Time');
    var mySessionRef = sessionsRef.push();
    mySessionRef.update({ startedAt: firebase.database.ServerValue.TIMESTAMP });

    return value + 1;
  });
}
