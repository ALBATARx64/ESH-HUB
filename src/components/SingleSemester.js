import { useGlobalContext } from '../pages/context';
import { useState, useRef, useEffect } from 'react'

const SingleSemester = ({name, id, state}) => {
    const {setNumber, setFirstRender, number, setScroll} = useGlobalContext();
    
    const handleClick = (i) => {
        setNumber(i);
        setScroll(true)
    }
    
    return (
        <li onClick={() => handleClick(id-1)} className={`${number===(id-1) && 'activated'}`}>{name}</li>
    )
}

export default SingleSemester
