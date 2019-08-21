import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = { 
    noticias : []
   }

  componentDidMount(){
      this.consultarNoticias();  
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${categoria}&apiKey=6f3bf767f6b24a4ea76603ccfbf6fb7c`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })

  }


  render() { 
    return (  
      <Fragment>
        <Header
        titulo="UK News with React"
        />

        <div className="container white contenedor-noticias">
          <Formulario 
          consultarNoticias={this.consultarNoticias}
          />
          
          <ListaNoticias
            noticias={this.state.noticias}
            />
        </div>

      </Fragment>
     );
  }
}
 
export default App;


