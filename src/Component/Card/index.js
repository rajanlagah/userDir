import React from 'react'
import Button from '../Button'
import SmartInput from '../SmartInput'

import './style.css'

const Card = ({
    imageSrc='',
    name='rajan',
    email='rajan',
    dob='rajan',
    country='rajan',
}) => (
    <div className="card-container flex-row">
        <div className='flex-lg'>
            <img src={imageSrc}/>
        </div>
        <div className='flex-lg'>
            <ul>
                <li>Name: <SmartInput disable value={name}/></li>
                <li>Email: <SmartInput value={email}/></li>
                <li>Date of birth: <SmartInput value={dob}/></li>
                <li>Country: <SmartInput value={country}/></li>
            </ul>
        </div>
        <div className='flex-sm'>
           <Button plain label={'Edit'} onClick={()=>console.log("Clicked")}/> 
        </div>
    </div>
)

export default Card