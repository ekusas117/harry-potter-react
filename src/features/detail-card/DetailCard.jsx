import React from 'react'
import './DetailCard.css'

class Personaje extends React.Component {

  render() {
    return(
      <template className="cards-container">
        <fieldset className="card">
          <legend>{this.props.personaje.name}</legend>
          {(() => {
                  if (this.props.personaje.image){
                    return <img width="160" height="227" src={this.props.personaje.image} aria-labelledby="personaje-label" alt="Imagen del personaje"/>
                  } else {
                      
                    return <img width="160" height="227" src="https://www.kindpng.com/picc/m/52-526072_unknown-character-hd-png-download.png" alt="Imagen no encontrada del personaje"/>
                  }
            })()}
          <section className='card-description'>
            {this.props.personaje.ancestry} &nbsp;
            <span className={this.props.personaje.house}
              >{this.props.personaje.house}</span>
          </section>
        </fieldset>
      </template>
    )
  }
}

export default Personaje