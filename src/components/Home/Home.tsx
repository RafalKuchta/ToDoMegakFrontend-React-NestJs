import React, {useContext, useState} from 'react';
import {SearchContext} from "../../context/search.context";

import './Home.css';
import {LoadingContext} from "../../context/loading.context";

export const Home = ({setIsLogined}: any) => {
    const {search, setSearch} = useContext(SearchContext);
    const [isActive, setIsActive] = useState(false);
    const {loading, setLoading} = useContext(LoadingContext);


    return (
        <header className="header-home">
           <h2>Witaj na mojej stronie :)</h2>
        </header>
    );
};
