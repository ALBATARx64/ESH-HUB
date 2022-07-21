import { React } from 'react'
import { SiPluscodes } from 'react-icons/si'

function DocCard({Icon, title, items}) {
    return (
    <>
        {items.length > 0 && (
            <article className='single-card'>
            <div className="header-icon">
                <Icon />
            </div>
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <SiPluscodes className='list-icon' />
                            <a href={item.url} rel='noreferrer' target='_blank'>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </article>
        )}
    </>
    )
}

export default DocCard
