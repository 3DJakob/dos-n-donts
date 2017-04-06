var dos = []
var donts = []
var doElement = document.getElementById('dos')
var dontElement = document.getElementById('donts')

function add (type) {
  var input = document.getElementById('input').value

  if (input === '') {
    document.getElementById('input').style.backgroundcolor = "red"
  } else {
    if (type == 'do') {
      dos.push(input)
    } else if (type == 'dont') {
      donts.push(input)
    }
    render()
  }
}

function render () {
  var htmlDos = ''
  var htmlDonts = ''
  dos.forEach(function (item) {
    htmlDos = htmlDos + '<li style="color: #89d877;">' + item + '</li>'
  })
  donts.forEach(function (item) {
    htmlDonts = htmlDonts + '<li style="color: #f47442;">' + item + '</li>'
  })
  doElement.innerHTML = htmlDos
  dontElement.innerHTML = htmlDonts
  document.getElementById('input').value = ''
}
