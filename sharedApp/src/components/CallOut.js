
import './callout.scss'
import AtomComponent from './AtomComponent'

const template = function _template({ title, text, buttonLabel = 'Close', buttonClick }) {
  _template.buttonClick = buttonClick
  console.log('this', this)
  console.log('_template', _template)
  return `
    <div class="callout callout-content">
      <h2>${title}</h2>
      <p>${text}</p>
      <button onclick="_template.buttonClick(); return false;">${buttonLabel}</button>


      <form id="myForm" onsubmit="myFormSubmit()">
        <label>Email:<input id="email" type="email"></label>
        <label>Password:<input name="password" type="password"></label>
      </form>
    </div>
  `
}

export const CallOut = new AtomComponent({
  template,
  buttonClick: () => {
    alert('Call Out')
    console.log('buttonClick, this', this)
  },
})
