import React from 'react';
//import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cards from 'cards/Cards';
import "./Home.css"
import { history } from '_helpers';
import Animated_Card from 'animated_card/Animated_Card';
//import { userActions } from '_store';

export { Home };

function Home() {
    //const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth);

    // useEffect(() => {
    //     //dispatch(userActions.getAll());
        
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const addNewCard=()=>{
        history.navigate("/cards/new");
    }
    const showAllCards=()=>{
        history.navigate("/cards");
    }

    return (
        <div>
            <h1 className='home__heading'>Hi {authUser?.name}!</h1>
            <h1 className='home__heading'>Card Details: </h1>
            {/* <Cards /> */}
            {<Animated_Card/>}
            <div className='btn__div'>
                <button className="btn btn-primary" onClick={showAllCards}>View All Cards</button>
                <button className='btn btn-primary' onClick={addNewCard}>Add New Card</button>
            </div>
        </div>
    );
}
