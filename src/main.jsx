import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { MainApp } from './09-useContext/MainApp'

// import { Padre } from './07-tarea-memo/Padre'

// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Memorize } from './06-memos/Memorize'

// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import  './08-useReducer/intro-reducer';
// import { Layout } from './05-useLayoutEffect/Layout'

import './index.css'

// import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)