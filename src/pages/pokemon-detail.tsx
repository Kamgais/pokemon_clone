import React,{FunctionComponent,useState,useEffect} from 'react'
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import {useParams, Link} from 'react-router-dom'
import {formatDate} from '../helpers/format-date';
import formatType from '../helpers/format-type';
import Loader from '../components/loader';


 
const PokemonDetail: FunctionComponent = () => {

    
   
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  let {id} = useParams()
 
  useEffect(() => {
    console.log(id)
    PokemonService.getPokemon(Number(id)).then(pokemon => setPokemon(pokemon));
  }, [Number(id)]);
   
  return (
    <div>
      { pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ pokemon.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                <Link to={`/pokemons/edit/${pokemon.id}`} className="btn-floating halfway-fab waves-effect waves-light"><i className="material-icons">edit</i></Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Name</td> 
                        <td><strong>{ pokemon.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Lebenspunkte</td> 
                        <td><strong>{ pokemon.hp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Schaden</td> 
                        <td><strong>{ pokemon.cp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Typen</td> 
                        <td>
                          {pokemon.types.map(type => (
                           <span key={type} className={formatType(type)}>{type}</span>
                          ))}</td> 
                      </tr> 
                      <tr> 
                        <td>Herstellungsdatum</td> 
                        <td>{formatDate(pokemon.created)}</td> 
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Züruck</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center"><Loader /></h4>
      )}
    </div>
  );
}
 
export default PokemonDetail;
