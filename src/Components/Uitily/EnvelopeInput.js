
import React from 'react'
import EnvelopeStyle from './../style/EnvelopeStyle.css'
import { useState } from 'react'

export default function EnvelopeInput({ children }) {
    const [style, setStyle] = useState(
        {
            logInCard: { bottom: '' },
            envelope: { top: '' }
        }

    )
    return (
        <div style={{ minHeight: "800px", position: "relative" }}>
            <div style={style.envelope} className='envelope'>
                <div onClick={() => {
                    if (style.logInCard.bottom === '') {
                        setStyle({
                            logInCard: { bottom: '50%' },
                            envelope: { top: '60%' }
                        })

                    }
                    else {
                        setStyle({
                            logInCard: { bottom: '' },
                            envelope: { top: '' }
                        })
                    }
                }} style={style.logInCard} className='log-in-card'>

                    {children}
                </div>
                <div className='envelope-fake'>
                    <span ></span>
                </div>
                <div className='envelope-fake2'>
                    <span ></span>
                </div>
            </div>

        </div>
    )
}
