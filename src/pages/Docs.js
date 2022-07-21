import { useState, useEffect , useRef} from 'react'
import { data } from './data'
import { Helmet } from 'react-helmet'
import SingleListItem from '../components/SingleListItem'
import { useGlobalContext } from './context'
import { BsFiles, BsLink45Deg } from 'react-icons/bs'
import { AiOutlineYoutube } from 'react-icons/ai'
import DocCard from '../components/DocCard'

function Docs() {
    const [database, setDatabase] = useState(data);
    // const [value, setValue] = useState(0);
    let {modulesArr, number, scroll, setScroll} = useGlobalContext(); 

    let {name: moduleName, info, desc, docs, videos, websites} = modulesArr[number];

    let [documents, setDocuments] = useState(docs);
    let [vids, setVids] = useState(videos);
    let [webs, setWebs] = useState(websites);
    let [books, setBooks] = useState(books);

    let content = useRef(null)
    
    useEffect(() => {
        let {name: moduleName, desc, docs, videos, websites, books} = modulesArr[number];
        setDocuments(docs);
        setVids(videos);
        setWebs(websites);
        setBooks(books);
    }, [number]);

    useEffect(() => {
        let pos = content.current.getBoundingClientRect().top
        if (scroll) {
            window.scrollTo({
                top: pos,
                behavior: 'smooth'
            })
            setScroll(false)
        }
    }, [scroll])

    return (
     <>
    <Helmet>
            <title>ESI Hub - Docs</title>
            <meta name='description' content='Esi Hub is your friend in your Esi journey' /> 
            <meta name='keywords' content='Esi Hub'></meta>
    </Helmet>
      <section className='sample main-sample-page'>
            <div className='container'>
                <div className='sample-doc main-doc'>
                    <div className='list'>     
                        <ul>
                            {database.map((item) => {
                            return (
                                <SingleListItem key={item.id} {...item} />
                            )
                        })}
                        </ul>
                    </div>
                    <div className="content" ref={content}>
                        <h2>{moduleName}</h2>
                        <p>{desc}</p>
                        <ul className='module-info'>
                            {info.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}
                        </ul>
                            <div className="container">
                                <h2>Resources</h2>
                                <div className="grid-cards">
                                    <DocCard Icon={BsFiles} title='Google Drives' items={documents} />
                                    <DocCard Icon={AiOutlineYoutube} title='Youtube Videos' items={vids} />
                                    <DocCard Icon={BsLink45Deg} title='Documents' items={webs} />
                                    {books && (
                                        <DocCard Icon={BsLink45Deg} title='Recommended books' items={books} />
                                    )}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section></>
    )
}

export default Docs
