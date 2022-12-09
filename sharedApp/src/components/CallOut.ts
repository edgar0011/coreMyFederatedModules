
import './callout.scss'
import AtomComponent from './AtomComponent'

const template = function _template({ title, text, buttonLabel = 'Close', buttonClick }) {
  _template.buttonClick = buttonClick
  _template.value = 0
  // for inline event handler
  const token = 'mySpecialFunction1'
  window[token] = buttonClick

  return `
    <div class="callout callout-content">
      <h2>${title}</h2>
      <p>${text}</p>
      <div>_template.buttonClick:${_template.buttonClick}</div>
      <button onclick="${token}()">${buttonLabel}</button>
      <button onClick="buttonClick">${buttonLabel}</button>
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
    console.log('buttonClick, this.value', this.value += 1)
  },
})
