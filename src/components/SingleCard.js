import { React } from 'react'

function SingleCard({Icon, title, text}) {
    return (
        <article className='single-card'>
            <div className="header-icon">
                <Icon />
            </div>
            <h2 style={{whiteSpace: 'nowrap'}}>{title}</h2>
            <p>{text}</p>
        </article>
    )
}

export default SingleCard
