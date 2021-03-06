import { useEffect, useState } from 'react';

export let useStorage = (key) => {
    const [data, setData] = useState(initialSet[key]);

    const setStorage = (list) => {
        window.localStorage.setItem([key], JSON.stringify(list));
    }

    const setList = (list) => {
        setStorage(list);
        setData(list);
    }

    useEffect( () => {
        const localData = JSON.parse(window.localStorage.getItem([key]));
        localData && setData(localData);
    }, [key]);

    return [data, setList];
}

const toReadList = [ 
    { 
        id: 'a',
        name: 'Moby Dick',
        start: null,
        end: null
    },
    {
        id: 'b',
        name: 'Pride and Prejudice',
        start: null,
        end: null
    },
    {
        id: 'c',
        name: 'Design as an Attitude',
        start: null,
        end: null
    }
];
  
const currentList = [
    {
        id: 'd',
        name: 'The Choice: Embrace the Possible',
        start: 18658,
        end: null
    }
];
  
const doneReadingList = [
    {
        id: 'e',
        name: 'Goodnight Moon',
        start: 18627,
        end: 18658
    }
];
  
const initialSet = {
    toRead: toReadList,
    current: currentList,
    done: doneReadingList
    // toRead: [],
    // current: [],
    // done: []
}