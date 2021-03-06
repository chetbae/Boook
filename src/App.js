import React from 'react'
import Sidebar from './containers/Sidebar'
import Calendar from './containers/Calendar'
import { useStorage } from './components/useStorage'
import { Wip } from './components/wip.js'


function App() {
  const [toRead, setToRead] = useStorage('toRead');
  const [current, setCurrent] = useStorage('current');
  const [done, setDone] = useStorage('done');


  return (
    <div style={appcss}>
      <div style={sidebarcss}>
        <Sidebar
          toRead={toRead}
          current={current}
          finished={done}
          setFinished={setDone}
          setCurrent={setCurrent}
          setToRead={setToRead}
        />
      </div>
        <Calendar 
          current={current}
          done={done}
        />
        <Wip>
          Coming Soon!
        </Wip>
    </div>
    
  );
}

const appcss = {
}

const sidebarcss = {
  position: 'fixed',
  right: 0,
}

export default App;