var dos = []
var donts = []
var doElement = document.getElementById('dos')
var dontElement = document.getElementById('donts')

function add (type) {
  var input = document.getElementById('input').value

  if (input === '') {
    document.getElementById('input').style.background = 'rgba(255, 170, 150, 1)'
  } else {
    document.getElementById('input').style.background = 'rgba(255, 255, 250, 1)'
    if (type === 'do') {
      dos.push(input)
    } else if (type === 'dont') {
      donts.push(input)
    }
    render()
  }
}

function done (assignment) {
  for (var i = 0; i < dos.lenght; i++) {
    if (dos[i] === assignment) {
      dos.splice(i, 1)
      render()
    }
  }
}

function render () {
  var htmlDos = ''
  var htmlDonts = ''
  dos.forEach(function (item) {
    // htmlDos = htmlDos + '<li style="color: #89d877;">' + item + '</li>'
    htmlDos = htmlDos + '<li style="color: #89d877;">' + item + '<button type="button" name="button" onclick="done(' + item + ')">&#x2713;</button></li>'
  })
  donts.forEach(function (item) {
    // htmlDonts = htmlDonts + '<li style="color: #f47442;">' + item + '</li>'
    htmlDonts = htmlDonts + '<li style="color: #f47442;">' + item + '<button type="button" name="button" onclick="done("' + item + '")">&#x2713;</button></li>'
  })
  doElement.innerHTML = htmlDos
  dontElement.innerHTML = htmlDonts
  document.getElementById('input').value = ''
}
