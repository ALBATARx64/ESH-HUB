import { React, useState } from 'react'
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc'
import Semester from './Semester';


const SingleListItem = ({name, semesters, state}) => {

const [showMainList, setMainShowList] = useState(false);

    return (
        <li className={`${state ? null : 'falsy'}`}>
           <div className='list-item-header' onClick={() => setMainShowList(!showMainList)}>
                {name}
                {showMainList ? <VscChevronUp /> : <VscChevronDown />}
            </div> 
            {showMainList && (
                <ul>
                    {semesters.map((semester, index) => {
                        return (
                           <Semester key={index} {...semester} />
                        )
                    })}
                </ul>
            )}
        </li>
    )
}

export default SingleListItem
