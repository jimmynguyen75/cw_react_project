import React, { useEffect } from 'react'
import './styles.less'
import f1 from './f3.jpg'

function Contest() {
    useEffect(() => {
        document.title = "Cuộc thi"
    })
    return (

        <div className="contest">
            <img src={f1} />
        </div>
    )
}

export default Contest;