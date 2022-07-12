import React from 'react'
import '../styles/CustomerReviews.css'
import CustomersSay from '../images/customers-say.png'

const CustomerReviews = () => {
  return (
    <section id='customer--reviews'>
        <div className='customer--reviews--container'> {/* make responsive */}
            <div className='customer--reviews--text'>
                <h2>What Our Customers Say</h2>
                <p>
                    Purus, eget vitae quam quam id neque. Risus integer pharetra viverra sit. 
                    Non, sed consequat morbi sit vitae mollis. Mauris eu diam adipiscing et amet, ut. 
                    Donec viverra sed est elit pretium nibh et. Ut varius erat vulputate augue nulla consectetur. 
                    Blandit tortor, bibendum mi magna sapien dictum. Ullamcorper ut risus pretium ac aliquam.
                    Risus ante in sit ac pellentesque aliquam ut. Commodo tristique commodo mi malesuada. 
                    Sed tristique pharetra tincidunt quis convallis in elementum, aliquam blandit. 
                    Purus tortor enim pharetra neque. Quisque sed ultricies fermentum malesuada. 
                    Nulla pharetra non pellentesque massa arcu. 
                    Feugiat odio sapien faucibus ante sit neque sagittis nibh massa. 
                    In commodo nisl mattis et amet diam orci pharetra.
                </p>
                <div className='rating'>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835"/>
                    </svg>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835"/>
                    </svg>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835"/>
                    </svg>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835"/>
                    </svg>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835"/>
                    </svg>
                </div>
                <strong>Oyeniyi Adedoyin</strong>
                <p>Digital Marketer</p>
            </div>
            <div className='customer--reviews--image'>
                <img src={CustomersSay} alt="customers-say" />
            </div>
        </div>
    </section>
  )
}

export default CustomerReviews