
import './callout.scss'
import AtomComponent from './AtomComponent'

const template = ({ title, text, buttonLabel, buttonClick }) => `<div class="callout">
  <div class="callout-content">
    <h2>${title}</h2>
    <p>${text}</p>
    <button onclick="${buttonClick}">${buttonLabel}</button>
  </div>
</div>
`

export const CallOut = new AtomComponent({ template })
