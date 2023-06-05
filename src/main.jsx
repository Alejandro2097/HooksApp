import React from 'react'
import ReactDOM from 'react-dom/client'

// import { Layout } from './05-useLayoutEffect/Layout'

import './index.css'
import { Memorize } from './06-memos/Memorize'

// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>,
)
