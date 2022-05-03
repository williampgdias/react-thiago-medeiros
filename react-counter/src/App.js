import React, { useState } from 'react';

import Albums from './Components/Albums';
import Counter from './Components/Counter';
import Users from './Components/Users';

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
  }
}

function App() {
  const [page, setPage] = useState(defaultPage);

  const handleChangePage = page => {
    setPage(page);
  }

  const Page = pages[page].component;

  const pageNames = Object.keys(pages);

  return (
    <>
      {
        pageNames.map(page => <button onClick={() => handleChangePage(page) }>{ pages[page].text }</button>)
      }

      { Page && <Page /> }
    </>
  )
}

export default App;
