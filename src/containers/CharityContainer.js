import React from 'react'
import CharityCard from '../components/CharityCard'




export default function CharityContainer(props){

   const {clickAction} = props
    
   const createCharityCard = () => {
        return ( 
            props.charities.map(charity => {
                return <CharityCard key={charity.id} {...charity} charity={charity} clickAction={clickAction}/>
            })
        )
    }
    return (
        <section className="charity-container">
                 {createCharityCard()}  
        </section>
       
    )
}

