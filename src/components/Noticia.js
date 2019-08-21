import React from 'react';

const Noticia = ({noticia}) => {
    
    //extraer los datos de las noticias
    const {urlToImage, url, title, description, source } = noticia;

    //cargar imagen si esta disponible "condicionalmente"

    const imagen = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
    
    : null;
    
    return ( 
       <div className="col s12 m6">
           <div className="card">
               {imagen}
              
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="card-action">
                <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                    See full news
                </a>
            </div>
               
           </div>
       </div>
     );
}
 
export default Noticia;