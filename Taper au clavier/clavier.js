let id = 0

function addLine(str) {
  id++
  f = document.getElementById('form')
  str.replace(' ', ' ')

  let div = document.createElement('div')
  let divId = 'div_ligne' + id
  div.setAttribute('contentEditable', 'true')
  div.setAttribute('id', divId)
  div.classList.add('ligne')

  let input = document.createElement('input')
  let inputId = 'ligne' + id
  input.classList.add('ligne')
  input.style.width = str.length + 1 + 'ch'
  input.setAttribute('id', inputId)
  input.setAttribute('type', 'text')
  input.setAttribute('name', inputId)
  input.setAttribute('maxlength', str.length)

  let label = document.createElement('label')
  let labelId = 'label_' + inputId
  label.innerHTML = str
  label.classList.add('ligne')

  label.setAttribute('id', labelId)
  label.setAttribute('for', inputId)

  div.addEventListener('keyup', () => {
    keyListener(div, input, label, str)
  })

  f.appendChild(label)
  f.appendChild(input)
  f.appendChild(div)

  let w = Math.ceil(
    parseFloat(window.getComputedStyle(document.getElementById(inputId)).width),
    2,
  )
  w = (parseInt(w / 10) + 1) * 10
  console.log('w' + w)
  label.style.width = w + 'px'
  input.style.width = w - 4 + 'px'
  div.style.width = w + 'px'
}

/*
  var offsetWidth = document.getElementById(labelId).offsetWidth
  var clientWidth = document.getElementById(labelId).clientWidth
  console.log('label offsetWidth ' + offsetWidth)
  console.log('label clientWidth ' + clientWidth)

  offsetWidth = document.getElementById(inputId).offsetWidth
  clientWidth = document.getElementById(inputId).clientWidth
  console.log('input offsetWidth ' + offsetWidth)
  console.log('labinputel clientWidth ' + clientWidth)
  */

function keyListener(div, input, label, str) {
  let text = div.innerText.replace(' ', '␣')
  let nbOk = 0
  let nbFaux = 0

  input.value = text
  div.innerHTML = ''
  //let initial = text.substring(0, text.length - 1)
  for (i = 0; i < text.length; i++) {
    let span = document.createElement('span')
    let sclass = ''
    if (
      str.charAt(i) === text.charAt(i) ||
      ((text.charAt(i) === '␣' ||
        text.charAt(i) === ' ' ||
        text.charAt(i) === ' ') &&
        (str.charAt(i) === ' ' || str.charAt(i) === ' '))
    ) {
      sclass = 'green'
      nbOk++
    } else {
      sclass = 'red'
      nbFaux++
    }

    span.innerText = text.charAt(i)
    span.classList.add(sclass)
    div.appendChild(span)
  }
  updateStat()
  moveCaret(div)

  if (input.value.length === str.length) {
    let id = input.id.replace('ligne', '')
    let nextId = parseInt(id) + 1
    let nextInputId = 'ligne' + nextId
    let nextDivId = 'div_ligne' + nextId
    let nextInput = document.getElementById(nextInputId)
    let nextDiv = document.getElementById(nextDivId)
    if (typeof nextInput != 'undefined' && nextInput != null) {
      nextInput.focus()
      nextDiv.focus()
    } else {
      document.links[0].focus()
    }
  }
}

function moveCaret(elem) {
  range = document.createRange()
  range.selectNodeContents(elem)
  range.collapse(false)
  selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
}

function nomLecon(nom) {
  document.getElementById('lecon').innerText = nom
  document.getElementsByTagName('title').innerText = 'Clavier - ' + nom
}

function suivante(dossier, nom) {
  document.getElementById('suivante').innerText = nom
  document
    .getElementById('suivante')
    .setAttribute('href', '../' + dossier + '/clavier.html')
}

function updateStat() {
  let nbOk = document.getElementsByClassName('green').length - 1
  let nbErr = document.getElementsByClassName('red').length - 1
  document.getElementById('good').innerText = nbOk + ' ok'
  let pl = nbErr > 1 ? 's' : ''
  document.getElementById('bad').innerText = nbErr + ' erreur' + pl
}

ajouterLigne = addLine

jQuery(document).ready(function ($) {
  console.log($('html').html())
})
