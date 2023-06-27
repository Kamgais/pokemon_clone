import React,{FunctionComponent} from 'react';
import { Routes , Route, Link, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthenticationService from './services/authentification-service';
import Login from './pages/login'

import './App.css';
import PokemonList from './pages/pokemon-list';
import PokemonAdd from './pages/pokemon-add';
import PokemonEdit from './pages/pokemon-edit';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';

const App:FunctionComponent = ()  => {


  return (
    <>
    
       <div>

        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className='brand-logo center'>Pokedex</Link>
          </div>
        </nav>
     
    
     <Routes>
     <Route  path="/" element={<Login/>} />  
      <Route path='/login'  element={<Login/>}/>
      <Route  path="/pokemons" element={<PokemonList/>} />
      <Route  path="/pokemons/:id" element={<PokemonDetail/>} />
      <Route  path="/pokemons/add" element={<PokemonAdd/>} />
      <Route  path="/pokemons/edit/:id" element={<PokemonEdit/>} />
      <Route path='*'  element={<PageNotFound/>}/>
    </Routes>


    </div>

    </>
   
  );
}

export default App;
