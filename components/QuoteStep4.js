import React from 'react'
import {TiTick} from 'react-icons/ti'
import QuoteStep4Styles from '../styles/QuoteStep4.module.css'
const QuoteStep4 = () => {
  return (
    <div className={QuoteStep4Styles.step4}>
      <TiTick className={QuoteStep4Styles.tick}/>
      <h1 className={QuoteStep4Styles.thanks}>Thank You!</h1>
      <h2 className={QuoteStep4Styles.confirmation}>Request sent successfully. One of our representative will contact you shortly.</h2>
      <div className={QuoteStep4Styles.linkAndMessage}>
        <a className={QuoteStep4Styles.refreshLink} type='button' href="https://www.rentaporta.com/quote">Click Here</a>
        <p className={QuoteStep4Styles.refreshLinkMessage}>to refresh this page to submit a new quote request.</p>
      </div>
    </div>
  )
}

export default QuoteStep4
