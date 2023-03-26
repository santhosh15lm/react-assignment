import React from 'react'
import Card from "react-credit-cards";

export default function 
() {
  return (
    <div className="App-cards-list">
        <Card
            name="John Smith"
            number="5555 4444 3333 1111"
            expiry="10/20"
            cvc="737"
          />
    </div>
  )
}
