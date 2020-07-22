import React from 'react';

export default function DonationCard(props){
const displayAmount = () => {
    return props.favorite.charity.donations.map(donation => {
        console.log(props.favorite.charity.charity_name)
        return (
            <p>Donated ${donation.amount} on {donation.created_at.slice(0,10)}</p>
        )
    })
}

const displayTotal = () => {
    const donations = props.favorite.charity.donations
    const result = Object.keys(donations).map(function (key){
        return donations[key].amount;
    })
    
    var sum = result.reduce(function(a,b){
        return a + b;
    }, 0)

    if(sum == 0){
        return <p className='no-donation-header'>You have not donated yet!</p>
    }
    else{
        return (
        <>   
            <h1 className='total-header'>Total Donated</h1>
            <p>${sum}.00</p>
        </>
        )
    }
}

return(
<div className='donations-card'>
    <h1 className='donations-header'>{props.favorite.charity.charity_name}</h1>
    {displayAmount()}
    {displayTotal()}
</div>
)
}