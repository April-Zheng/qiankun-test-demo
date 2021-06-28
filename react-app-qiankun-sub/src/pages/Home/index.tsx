import { AppContext } from '@/context'
import React, { useContext} from 'react'
import { useHistory } from 'react-router'

/**
 * 子应用间的跳转 使用 window.history.pushState
 * @returns
 */

const Home = () => {
  const { globalState, setGlobalState } = useContext(AppContext)
  const history = useHistory()  
  return (
    <div>
      <div>Home</div>
      <div>react 子应用 {globalState?.user}</div>
      <button
        onClick={() => setGlobalState?.({ user: 'qiankun-react-子应用' })}
      >
        子应用changgeState
      </button>
      <button
        onClick={() => {
          history.push('/about')
        }}
      >
        前往about页面
      </button>
      <button
        onClick={() => {
          window.history.pushState('', '', '/vueapp')
        }}
      >
        前往vueapp页面
      </button>
    </div>
  )
}

export default Home
