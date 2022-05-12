import React, { useState } from 'react';

// Components
import Albums from './Albums';
import Counter from './Counter';
import Users from './Users';

const defaultPage = 'albums';

const pages = {
  albums: {
    text: 'Albums',
    component: Albums,
  },
  counter: {
    text: 'Counter',
    component: Counter,
  },
  users: {
    text: 'Users',
    component: Users,
  },
}

function App() {
  const [ page, setPage ] = useState(defaultPage);

  const handleChangePage = page => {
    setPage(page);
  }

  const Page = pages[page].component;

  // Essa é uma maneira de fazer isso!
  // const Page = page === 'albums'
  //   ? Albums
  //   : Counter

  const pageNames = Object.keys(pages);

  return(
    <>
      {
        pageNames.map(page => <button onClick={ () => handleChangePage(page) }>{ pages[page].text }</button>)
      }

      { Page && <Page /> }
    </>
  )
}

export default App;
