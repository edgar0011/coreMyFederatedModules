

export default class AtomApp {
  constructor(props) {
    this.defaultProps = props || {
      id: 'app',
      title: 'Hello World!',
      styles: {
        outline: 'solid 1px #132D40',
        color: '#7C95A6',
        fontWeight: 500,
        padding: '1rem 1rem',
        margin: '1rem 1rem',
      },
    }
  }

  render({ id, title, styles } = this.defaultProps) {
    const element = document.createElement('div')
    AtomApp.utils.applyStyles(element, styles)
    element.innerHTML = title
    document.getElementById(id).appendChild(element)
  }
}

const utils = {
  applyStyles(element, styles) {
    Object.keys(styles).forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      element.style[key] = styles[key]
    })
    return element.style
  },
}

AtomApp.utils = utils
