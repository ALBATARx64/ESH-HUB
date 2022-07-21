import React from "react"
import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

function TopModal() {
    const [showModal, setShowModal] = useState(true);

    if (!localStorage.getItem('modal')) {
        localStorage.setItem('modal', JSON.stringify(true));
    }

    console.log(JSON.parse(localStorage.getItem('modal')));

    const handleModal = () => {
        setShowModal(false);
        localStorage.setItem('modal', JSON.stringify(false));
    }

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('modal'))) {
            setShowModal(false);
        }
    }, [])

    return (
        <>
        {showModal && (
                <div className='top-modal'>
                    <div></div>
                    <p>🙋‍♂️ Are you a third-year student? Please contact us</p>
                    <FaTimes onClick={handleModal} className='close-btn' />
                </div>
        )}
        </>
)}

export default TopModal
