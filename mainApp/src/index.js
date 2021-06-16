// import AtomComponent from './AtomComponent'

// eslint-disable-next-line import/no-unresolved
const AtomComponentModule = import('app2/AtomComponent')
// eslint-disable-next-line import/no-unresolved
const CallOutModule = import('app2/CallOut')

const make = async () => {
  const { default: AtomComponent } = await AtomComponentModule
  console.log(AtomComponentModule)
  console.log(AtomComponent)
  const app = new AtomComponent()

  const { CallOut } = await CallOutModule
  console.log(CallOutModule)
  console.log(CallOut)

  CallOut.render({
    id: 'callOut',
    title: 'Call Out',
    text: 'Call Out from shared dsdsds dsadd ada sadsa sadsa dsdsad asdsa dsd sdsad sdsa',
  })

  app.render({ ...app.defaultProps, title: 'Hello From Main App' })
}

make()
