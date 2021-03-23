import AtomComponent from './components/AtomComponent'
import { CallOut } from './components/CallOut'

const app = new AtomComponent()

app.render()


const callOutElement = CallOut.render({ id: 'callout', title: 'Call Out', text: 'dsdsds dsadd ada sadsa sadsa dsdsad asdsa dsd sdsad sdsa' })


console.log('callOutElement')
console.log(callOutElement)

const formElement = document.getElementById('myForm')

formElement.addEventListener('input', (event) => {
  console.log('myForm input', event)
  console.log(formElement)
  console.log(formElement.elements)
  console.log(Array.prototype.map.apply(formElement.elements, [(item) => item.value]))
  console.log('formElement.email', formElement.email)
  console.log('formElement.password', formElement.password)
})

formElement.addEventListener('change', (event) => {
  console.log('myForm change', event)
  console.log(formElement)
  console.log(formElement.elements)
  console.log(Array.prototype.map.apply(formElement.elements, [(item) => item.value]))
  console.log('formElement.email', formElement.email)
  console.log('formElement.password', formElement.password)
})
