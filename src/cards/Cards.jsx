import React, { useEffect, useState } from 'react'
import Card from "react-credit-cards";
import { useDispatch, useSelector } from 'react-redux';
import { store, cardsActions } from "_store";

export default function Cards() {
 
  //console.log("all cards from selector",allCards);
  const dispatch = useDispatch();
  //const [get_allCards , set_allCards ] = useState({});
  useEffect(()=>{
    //console.log("from useEffect",store.getState().cards.cards);
    dispatch(cardsActions.getAllCards());
  },[])
  
  const { cards: allCards } = useSelector(x => x.cards);
  // console.log("store.getState().cards : "+ store.getState().cards.results[1]?.name);
  //const get_allCards = store.getState().cards.cards;
  //console.log("store val",store.getState().cards.cards);
  // if(get_allCards.length >= 0){
  //   set_allCards(store.getState().cards.cards)
  // }
  
  console.log("allCards from useSelector :",allCards);
  const listCards_ele = allCards.length >= 0 ? allCards.map(
    element => 
        <div key = {element.id}>
        <Card
          name = {element.name}
          number = {element.cardNumber}
          expiry = {element.cardExpiration}
          preview = {false}
          category = {element.category}
        />
        </div>
  ) : null

  return (
    <div className="App-cards">
        <div className="App-cards-list">
          {listCards_ele}
        </div>
    </div>
  )
}
