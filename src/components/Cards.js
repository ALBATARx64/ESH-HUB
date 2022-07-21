import { React } from 'react'
import SingleCard from './SingleCard'
import { RiContactsLine } from 'react-icons/ri'
import { GiFastArrow } from 'react-icons/gi'
import { VscNewFile } from 'react-icons/vsc'



function Cards() {
    return (
        <>
        <section className='cards'>
            <div className="container">
                <SingleCard Icon={GiFastArrow} title='Quick and Easy' text='Get to all the best resources in just one click, everything is organized, neat and prepared for you to start your journey.' />
                <SingleCard Icon={VscNewFile} title='Always Updated' text='We make sure to add new content every time we have the chance to, so that we keep the students up to date.' />
                <SingleCard Icon={RiContactsLine} title='We Are All Ears' text="You can contact us any time to ask for new documents and to suggest what you see is the best for this website." />
            </div>
        </section>
        </>
    )
}

export default Cards
