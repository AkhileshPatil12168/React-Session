import React from 'react'

const Card = ({data}) => {
  return (
    <div className="pokemon-card">
        <img className="pokemon-img" src={data.image} alt={data.name} />

        <h2 className="pokemon-name">{data.name}</h2>

        {/* <span className={`pokemon-type ${typeClass}`}>{data.type}</span> */}

        <div className="pokemon-info">
          <p>
            <b>HP:</b> {data.hp}
          </p>
          <p>
            <b>Attack:</b> {data.attack}
          </p>
          <p>
            <b>Rarity:</b> {data.rarity}
          </p>
        </div>
      </div>
  )
}

export default Card