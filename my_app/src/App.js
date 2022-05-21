import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Templates
import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';
import TemplateClean from './templates/Clean';

// Components
import CustomersList from './pages/customers/List';
import CustomersRegister from './pages/customers/Register';
import CustomersEdit from './pages/customers/Edit';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <TemplateClean
            title='You do not have access to this'
            Component={Login}
          />
        </Route>

        <TemplateDefault>
          <Route path='/customers/edit/:id'>
            <TemplatePage title='Edit Customers' Component={CustomersEdit} />
          </Route>
          <Route path='/customers/add'>
            <TemplatePage title='Sign In' Component={CustomersRegister} />
          </Route>
          <Route path='/customers'>
            <TemplatePage title='Customers List' Component={CustomersList} />
          </Route>
          <Route path='/'>
            <TemplatePage title='Home' Component={Home} />
          </Route>
        </TemplateDefault>
      </Switch>
    </Router>
  );
};

export default App;
