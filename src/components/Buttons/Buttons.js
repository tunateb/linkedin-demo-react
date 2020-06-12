import React from 'react'
import './Buttons.scss'


 function Buttons({color='default',children,type='button',small=false,onClick,footer}) {
     const buttonClasses = `
     btn 
     btn-${color}
     ${small ? 'btn-small' : ''}
     ${footer ? 'btn-footer' : ''}
     `
    return (
        <div className="btn-div">
            <button className={buttonClasses} type={type} onClick={onClick}>{children}</button>
        </div>
    )
}

export default Buttons;

