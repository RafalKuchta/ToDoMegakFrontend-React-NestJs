import React, {SyntheticEvent, useContext, useState} from 'react';
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {SearchContext} from "../../../context/search.context";
import './Search.css';

export const Search = ({setIsLogined}: any) => {
    const {search, setSearch} = useContext(SearchContext);
    const [isActive, setIsActive] = useState(false);

    // const setSearchFromLocalState = (e: SyntheticEvent) => {
    //     e.preventDefault();
    //     setSearch(search)
    // }

    const handleClick = () => {
        setIsActive(current => !current);
    };


    return (
        <div className="wrapper-search">
            <input
                type="text"
                className="search-input"
                placeholder="Szukaj zadania..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    );
};
