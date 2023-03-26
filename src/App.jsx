import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import { history } from '_helpers';
import { Nav, PrivateRoute } from '_components';
import { Home } from 'home';
import { Login } from 'login';
import New_Card from 'new_card/New_Card';
import Cards from 'cards/Cards';
import { useDispatch } from 'react-redux';
export { App };

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();
    
    return (
        <div className="app-container bg-light">
            <Nav />
            <div className="container pt-4 pb-4">
                <Routes>
                <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cards/new" element={<New_Card dispatch/>}/>
                    <Route path="/cards" element={<Cards />}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    );
}
