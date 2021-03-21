// import AtomApp from './AtomApp'

// eslint-disable-next-line import/no-unresolved
const AtomAppModule = import('app2/AtomApp')

const make = async () => {
  const { default: AtomApp } = await AtomAppModule
  console.log(AtomAppModule)
  console.log(AtomApp)
  const app = new AtomApp()

  app.render({ ...app.defaultProps, title: 'Hello From Main App' })
}

make()
