
import './callout.scss'
import AtomComponent from './AtomComponent'

const template = ({ title, text, buttonLabel = 'Close', buttonClick }) => `<div class="callout callout-content">

    <h2>${title}</h2>
    <p>${text}</p>
    <button onclick="${buttonClick}">${buttonLabel}</button>

</div>
`

export const CallOut = new AtomComponent({ template })
