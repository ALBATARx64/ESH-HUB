import { useState } from 'react'
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc'
import SingleSemester from './SingleSemester';

const Semester = ({name, modules}) => {
    const [showModules, setShowModules ] = useState(false);
  
    return (
        <li>
            <div className="list-item-header inner" onClick={() => setShowModules(!showModules)}>
                {name}
                {showModules ? <VscChevronUp /> : <VscChevronDown />}
            </div>
            {showModules && (
                <ul>
                    {modules.map((module, index) => {
                        const {name, id} = module;
                        return (
                            <SingleSemester key={index} name={name} id={id} />
                        )
                    })}
                </ul>
            )}
        </li>
    )
}

export default Semester
