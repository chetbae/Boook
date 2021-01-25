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
    <div style={sidebarcss}>
      <Sidebar style={sidebarcss}
        toRead={toRead}
        current={current}
        finished={finished}
        setToRead={setToRead}
        setCurrent={setCurrent}
        setFinished={setFinished}
    />
    </div>
  );
}

const sidebarcss = {
  // marginLeft: '60%',
  // marginRight: '10px',
  // minWidth: '400px',
  // width: '30%',

  position: 'absolute',
  width: '30%',
  left: '70%'
}

export default App;
