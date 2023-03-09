import React from 'react'

const Place = (props) => {
    console.log(props);
  return (
    < div className='parentBlock'>
        <div className='mainBlock'>
            <img src={props.data[0].photo} alt=""></img>
            <h1>{props.data[0].touristplace}</h1>
            <h2>{props.data[0].Country}</h2>
            <h3>{props.data[0].State}</h3>
            <h4>{props.data[0].BuildBy}</h4>
            <h5>{props.data[0].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[1].photo} alt=""></img>
            <h1>{props.data[1].touristplace}</h1>
            <h2>{props.data[1].Country}</h2>
            <h3>{props.data[1].State}</h3>
            <h4>{props.data[1].BuildBy}</h4>
            <h5>{props.data[1].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[2].photo} alt=""></img>
            <h1>{props.data[2].touristplace}</h1>
            <h2>{props.data[2].Country}</h2>
            <h3>{props.data[2].State}</h3>
            <h4>{props.data[2].BuildBy}</h4>
            <h5>{props.data[2].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[3].photo} alt=""></img>
            <h1>{props.data[3].touristplace}</h1>
            <h2>{props.data[3].Country}</h2>
            <h3>{props.data[3].State}</h3>
            <h4>{props.data[3].BuildBy}</h4>
            <h5>{props.data[3].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[4].photo} alt=""></img>
            <h1>{props.data[4].touristplace}</h1>
            <h2>{props.data[4].Country}</h2>
            <h3>{props.data[4].State}</h3>
            <h4>{props.data[4].BuildBy}</h4>
            <h5>{props.data[4].Color}</h5>
        </div>
        <div className='mainBlock'> 
            <img src={props.data[5].photo} alt=""></img>
            <h1>{props.data[5].touristplace}</h1>
            <h2>{props.data[5].Country}</h2>
            <h3>{props.data[5].State}</h3>
            <h4>{props.data[5].BuildBy}</h4>
            <h5>{props.data[5].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[6].photo} alt=""></img>
            <h1>{props.data[6].touristplace}</h1>
            <h2>{props.data[6].Country}</h2>
            <h3>{props.data[6].State}</h3>
            <h4>{props.data[6].BuildBy}</h4>
            <h5>{props.data[6].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[7].photo} alt=""></img>
            <h1>{props.data[7].touristplace}</h1>
            <h2>{props.data[7].Country}</h2>
            <h3>{props.data[7].State}</h3>
            <h4>{props.data[7].BuildBy}</h4>
            <h5>{props.data[7].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[8].photo} alt=""></img>
            <h1>{props.data[8].touristplace}</h1>
            <h2>{props.data[8].Country}</h2>
            <h3>{props.data[8].State}</h3>
            <h4>{props.data[8].BuildBy}</h4>
            <h5>{props.data[8].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[9].photo} alt=""></img>
            <h1>{props.data[9].touristplace}</h1>
            <h2>{props.data[9].Country}</h2>
            <h3>{props.data[9].State}</h3>
            <h4>{props.data[9].BuildBy}</h4>
            <h5>{props.data[9].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[10].photo} alt=""></img>
            <h1>{props.data[10].touristplace}</h1>
            <h2>{props.data[10].Country}</h2>
            <h3>{props.data[10].State}</h3>
            <h4>{props.data[10].BuildBy}</h4>
            <h5>{props.data[10].Color}</h5>
        </div>
        <div className='mainBlock'>
            <img src={props.data[11].photo} alt=""></img>
            <h1>{props.data[11].touristplace}</h1>
            <h2>{props.data[11].Country}</h2>
            <h3>{props.data[11].State}</h3>
            <h4>{props.data[11].BuildBy}</h4>
            <h5>{props.data[11].Color}</h5>
        </div>
        </div>
  )
}

export default Place