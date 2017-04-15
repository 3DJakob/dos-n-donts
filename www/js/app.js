var dos = []
var donts = []
var doElement = document.getElementById('dos')
var dontElement = document.getElementById('donts')

function add (type) {
  var input = document.getElementById('input').value

  dos.forEach(function (name) {
    if (name === input) {
      input = ''
    }
  })
  donts.forEach(function (name) {
    if (name === input) {
      input = ''
    }
  })

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
  for (var i = 0; i < dos.length; i++) {
    if (dos[i] === assignment) {
      dos.splice(i, 1)
      render()
    }
  }
  for (i = 0; i < donts.length; i++) {
    if (donts[i] === assignment) {
      donts.splice(i, 1)
      render()
    }
  }
}

function renderList (target, items, color) {
  target.innerHTML = ''

  items.forEach(function (item) {
    var li = document.createElement('li')
    var btn = document.createElement('button')

    btn.addEventListener('click', function () {
      done(item)
    })

    li.style.color = color
    li.textContent = item
    btn.textContent = '✓'

    li.appendChild(btn)
    target.appendChild(li)
  })
}

function render () {
  renderList(doElement, dos, '#89d877')
  renderList(dontElement, donts, '#f47442')
  document.getElementById('input').value = ''
}
