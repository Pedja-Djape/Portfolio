import React from 'react'
import classes from './PortfolioCard.module.css';

const PortfolioCard = (props) => {
  return (
    <>
        <div
            key={props.id}
            className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300'
        >
            <img
                src={props.visual}
                alt=""
                className="rounded-md"
                style={{borderBottom: '1px solid #d3d3d3', borderRadius: 0}}
            />
            <section className={classes.links}>
                <div className={classes.cardButton}  style={props.buttons.length > 1 ? {borderRight: '1px solid #d3d3d3'} : null}>
                    <a href={props.buttons[0].src} target='_blank' rel='noreferrer'>{props.buttons[0].text}</a>
                </div>
                {
                    props.buttons.length === 1 ? null : (
                        <div className={`${classes.cardButton} ${classes.cardButton__end}`}>
                            <a href={props.buttons[1].src} target='_blank' rel='noreferrer'>{props.buttons[1].text}</a>
                        </div>
                    )
                }
                
                
            </section>
        </div>
    </>
  )
}

export default PortfolioCard