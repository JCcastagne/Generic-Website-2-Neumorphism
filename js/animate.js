
var waypoint = new Waypoint({
  element: document.getElementById('pageOne'),
  handler: function() {
    console.log('first page hit');
    document.getElementById('creditCard').classList.add('animate');
    document.getElementById('contentOne').classList.add('animate');
  },
  context: document.getElementById('pages'),
  offset: '50%'
})

var waypoint = new Waypoint({
  element: document.getElementById('pageTwo'),
  handler: function() {
    console.log('second page hit');
    document.getElementById('chain').classList.add('animate');
    document.getElementById('contentTwo').classList.add('animate');
  },
  context: document.getElementById('pages'),
  offset: '50%'
})

var waypoint = new Waypoint({
  element: document.getElementById('pageThree'),
  handler: function() {
    console.log('third page hit');
    document.getElementById('cashback').classList.add('animate');
    document.getElementById('contentThree').classList.add('animate');
  },
  context: document.getElementById('pages'),
  offset: '50%'
})

console.log('init')