import React, { useState } from 'react'
import Sidebar from './containers/Sidebar'

const toReadList = [ 
  { 
      id: 'a',
      name: 'Moby Dick',
      start: null,
      end: null
  },
  {
      id: 'b',
      name: 'Emma',
      start: null,
      end: null
  },
  {
      id: 'c',
      name: 'The Hungry Caterpillar',
      start: null,
      end: null
  }
];

const currentList = [
  {
      id: 'd',
      name: 'Harry Potter',
      start: Date("2020-01-12"),
      end: null
  }
];

const doneReadingList = [
  {
      id: 'e',
      name: 'Atomic Habits',
      start: new Date("2020-12-01"),
      end: new Date("2020-12-31")
  }
];

function App() {
  const [toRead, setToRead] = useState(toReadList);
  const [current, setCurrent] = useState(currentList);
  const [finished, setFinished] = useState(doneReadingList);


  return (
    <div style={appcss}>
    <div style={sidebarcss}>
      <Sidebar
        toRead={toRead}
        current={current}
        finished={finished}
        setToRead={setToRead}
        setCurrent={setCurrent}
        setFinished={setFinished}
    />
    </div>
    </div>
  );
}

const appcss = {
}

const sidebarcss = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
}

export default App;
