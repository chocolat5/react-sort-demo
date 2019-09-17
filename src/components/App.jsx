import React, { useState, useMemo } from 'react';

import Button from './Button';
import List from './List';

import '../scss/style.scss';

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Dunkirk',
      category: 'Action',
      year: '2017'
    },
    {
      id: 2,
      title: 'Interstellar',
      category: 'Sci-Fi',
      year: '2014'
    },
    {
      id: 3,
      title: 'Inception',
      category: 'Sci-Fi',
      year: '2010'
    },
    {
      id: 4,
      title: 'The Dark Knight',
      category: 'Action',
      year: '2008'
    },
    {
      id: 5,
      title: 'Memento',
      category: 'Mystery',
      year: '2000'
    }
  ]
};

const KEYS = Object.keys(initialState.tasks[0]);

const App = () => {
  const [tasks, setTasks] = useState(initialState.tasks);

  //ソート条件
  const [sort, setSort] = useState({});

  const filteredTask = useMemo(() => {
    let tmpTasks = tasks;
    if (sort.key) {
      tmpTasks = tmpTasks.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];
        
        if(a === b) {
          return 0;
        }
        if(a > b) {
          return 1 * sort.order;
        }
        if(a < b) {
          return -1 * sort.order;
        }
      });
    }
    return tmpTasks;
  }, [sort, tasks]);

  const handleSort = column => {
    if (sort.key === column) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: column,
        order: 1
      })
    }
  };

  return (
    <div className="app">
      <header className="app_header">
        <h1>React Sort Demo</h1>
      </header>
      <div className="sort_buttons">
        <h2>Sort by</h2>
        {
          KEYS.map((key, index) => (
            <Button
              key={index}
              button={key}
              sort={sort}
              handleSort={handleSort} />
          ))
        }
      </div>
      <ul className="task_list">
        {
          filteredTask.map((task, index) => (
            <List
              key={index}
              task={task} />
          ))
        }
      </ul>
    </div>
  )

}

export default App;
