import React from 'react';

export default function DonationCard(props){
const displayAmount = () => {
    return props.favorite.charity.donations.map(donation => {
        console.log(donation.created_at.slice(0,10))
        return (
            <p>Donated amount: ${donation.amount} on {donation.created_at.slice(0,10)}</p>
        )
    })
}

// const displayTotal = () => {
//     const amount = 
// }

return(
<>
    <h1>{props.favorite.charity.charity_name}</h1>
    {displayAmount()}
    {/* {displayTotal()} */}
</>
)
}