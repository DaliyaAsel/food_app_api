import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Home from './pages/main/Home';
import About from './pages/main/About';
import Contacts from './pages/main/Contacts';
import NotFound from './pages/main/NotFound';
import Category from './pages/main/Category';
import Recipe from './pages/main/Recipe';

function App() {
  const text = {
    title: 'Welcome to TheMealDB',
    description: "Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. We also offer a free JSON API for anyone wanting to use it.If you like the site, please consider supporting us on Patreon by clicking the link below..."
  }

  return (
    <>
    <Router>
    <Header />
    <main className="content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about">
          <About text={text} />
        </Route>
        <Route path="/contacts"  component={Contacts} />
        <Route path='/category/:name' component={Category} />
        <Route path='/meal/:id' component={Recipe} />
        {/* Компонент NotFound, он должен быть перед закр тегом Switch самым последним */}
        <Route component={NotFound} /> 
      </Switch>
    </main>
    <Footer />
    </Router>
    </>
  );
}

export default App;
