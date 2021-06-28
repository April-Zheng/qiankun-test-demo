import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import { AppContext } from '@/context'
import './App.css'

interface IProps {
  baseName: string
  [name: string]: any
}

function App(props: IProps) {
  const { baseName, onGlobalStateChange, setGlobalState, getGolbalState } =
    props

  const [internalGlobalState, setInternalGlobalState] = useState(() => {
    return getGolbalState?.()
  })

  useEffect(() => {
    /** 子应用监听 GlobalStateChange */
    onGlobalStateChange?.((value: any, prev: any) => {
      setInternalGlobalState(value)
      console.log('[onGlobalStateChange - react-app-sub]:', value, prev, props)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppContext.Provider
      value={{ globalState:{...internalGlobalState}, onGlobalStateChange, setGlobalState }}
    >
      <div className='App'>        
        <Router basename={baseName}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path={`/about`} component={About} />
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  )
}

export default App
