import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
    
    //extraer los datos de las noticias
    const {urlToImage, url, title, description, source } = noticia;

    //cargar imagen si esta disponible "condicionalmente"

    const imagen = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title} />
        </div>
    
    : null;
    
    return ( 
       <div className="col s12 m6">
           <div className="card grey lighten-2">
               {imagen}
              
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="card-action">
                <a href={url} target="_blank" rel="noopener noreferrer" className="grey darken-3 btn">
                    See full news
                </a>
            </div>
               
           </div>
       </div>
     );
}

Noticia.propTypes = {
    noticia : PropTypes.object.isRequired
}
 
export default Noticia;