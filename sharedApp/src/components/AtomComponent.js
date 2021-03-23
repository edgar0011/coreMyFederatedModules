

class AtomComponent {
  static applyStyles(element, styles) {
    Object.keys(styles).forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      element.style[key] = styles[key]
    })
    return element.style
  }

  static applyClass(element, className) {
    // eslint-disable-next-line no-param-reassign
    element.className = className
  }

  static addClass(element, className) {
    if (!element.contains(className)) {
      element.classList.add(className)
    }
  }

  static removeClass(element, className) {
    if (element.contains(className)) {
      element.classList.remove(className)
    }
  }

  mounted = false

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

  render(renderProps = {}) {
    this.props = { ...this.defaultProps, ...renderProps }

    const { id, title, styles, template, ...props } = this.props

    console.log(this.props)
    console.log(this.props?.styles)

    this.element = document.createElement('div')

    styles && AtomComponent.applyStyles(this.element, styles)

    if (template) {
      const htmlFromTemplate = template({ title, styles, ...props })
      console.log('htmlFromTemplate')
      console.log(htmlFromTemplate)
      this.element.innerHTML = htmlFromTemplate

      console.log('htmlFrothis.elementmTemplate')
      console.log(this.element)
    } else {
      this.element.innerText = title
    }
    document.getElementById(id).appendChild(this.element)
    return this.element
  }

  mount() {
    if (this.element && !this.mounted) {
      document.getElementById(this.props.id).appendChild(this.element)
      this.mounted = true
    }
  }

  unmount() {
    if (this.element && this.mounted) {
      this.element.remove()
      this.mounted = false
    }
  }

  get elementId() {
    return this.props.id
  }

  addEventListener (...args) {
    return this.element.addEventListener.apply(this.element, ...args)
  }

  removeEventListener (...args) {
    return this.element.removeEventListener.apply(this.element, ...args)
  }
}


export default AtomComponent
