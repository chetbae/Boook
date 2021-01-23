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

var exampleStartDate = new Date("2021-01-01");

const currentList = [
  {
      id: 'd',
      name: 'Harry Potter',
      start: {exampleStartDate},
      end: null
  }
];

exampleStartDate = new Date("2020-01-12");
var exampleEndDate = new Date("2020-30-12");

const doneReadingList = [
  {
      id: 'e',
      name: 'Atomic Habits',
      start: {exampleStartDate},
      end: {exampleEndDate}
  }
];

// const fullList = {
//   toread: toReadList,
//   current: currentList,
//   done: doneReadingList
// }

function App() {
  const [toRead, setToRead] = useState(toReadList);
  const [current, setCurrent] = useState(currentList);
  const [finished, setFinished] = useState(doneReadingList);


  return (
    <Sidebar
      toRead={toRead}
      current={current}
      finished={finished}
      setToRead={setToRead}
      setCurrent={setCurrent}
      setFinished={setFinished}
    />
  );
}

export default App;
