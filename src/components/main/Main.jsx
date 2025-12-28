import { Content } from '../reuseable/Content';

export const Main = () => {
    const onClickHandler = () => {
        alert("Feature not added yet")
    }
    return (
        <main>
            <section className="services" aria-label="services">
                <div className="services-container">   
                    <Content 
                        imgSrc="/resources/time-icon.svg" 
                        title="Solve Problems Real Time"   
                        description="Real-time problem solving is not just about time, it's about time. This allows you to solve within a specified time problem has a solution."
                    />
                    <div className="service-divider"/>
                    <Content 
                        imgSrc="/resources/security-icon.svg" 
                        title="Secured & Safe Payments"   
                        description="By and large, credit cards are easily the most secure and safe payment method to use when you shop online. credit cards most secure."
                    />
                    <div className="service-divider"/>
                    <Content 
                        imgSrc="/resources/support-icon.svg" 
                        title="24//7 Customer Support"   
                        description="The biggest benefit of offering 24/7 support is that you provide a more convenient service for your customers providing clock support."
                    />
                </div>
            </section>

            <section className="features" aria-label="features">
                <div className="features-container">
                    <img className="features-image desktop" src="/resources/Image.svg" alt="Features Illustration"/>
                    <img className="features-image mobile" src="/resources/Image-mobile.png" alt="Features Illustration"/>
                    <Content
                        title="A fully integrated suite of payments products"   
                        subtitle="Instant Payment. Electronic payments are much faster than the traditional methods of payments."
                        description="Online invoice payment helps companies save time, are faster and save maximum effort for the clients. It also helps in reducing the excessive physical transactions."
                    />
                </div>
            </section>

            <section className="technology" aria-label="technology">
                <div className="technology-container">
                    <div className="technology-text-content">
                        <Content 
                            title="The backbone for internet business"   
                            description="Online payment companies are responsible for handling online or internetbased payment. The online payment systems."
                        />   
                        <p className='tech-author-comment'>“Simply the best. Better than all the rest. Recommend this product to beginners and advanced users.”</p>
                        <div className="technology-author-info">
                            <img className="author-image" src="/resources/ellipse.svg" alt="Author Avatar"/>
                            <div className="author-details">
                                <p className="author-name">Trevor Lane</p>
                                <p className="author-position">Director of Technology, CreativeGIG</p>
                            </div>
                        </div>
                    </div>
                    <div className='technology-image-container'>
                      <img className="technology-image" src="/resources/cards.png" alt="Technology Illustration"/>
                    </div>
                </div>
            </section>

            <section className='statistics' aria-label="statistics">
                <h2 className='statistics-title'>Join millions getting secured payment</h2>
                <div className="statistics-container">
                    <Content
                        subtitle= "1.5M"
                        description="which is approximately 56% of the consumer population of the US"
                    />
                    <div className="service-divider"/>
                    <Content  
                        subtitle= "41%"
                        description="The largest adopters due to being comfortable with technology"
                    />
                    <div className="service-divider"/>
                    <Content  
                        subtitle= "3964+"
                        description="The online payment system offers electronic alternatives to traditional"
                    />
                </div>
            </section>

            <section className='cta' aria-label="call to action">
                <div className="cta-container">
                    <div className='cta-item1'>
                        <Content
                            title="Ready to get started?"
                            description="Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks, you can easily build a page."
                        />
                        <div className="cta-button-container">
                            <button className="cta-button secondary" id="joinNowCtaButton" type="button" onClick={onClickHandler}>Join Now</button>
                            <button className="cta-button secondary" id="learnMoreCtaButton" type="button" onClick={onClickHandler}>Learn More</button>
                        </div>
                    </div>
                    <div className='cta-item2'>
                        <Content
                            imgSrc="/resources/cloud.svg"
                            title="Store data on the cloud."
                            description="Get your free JetPay card and start making secure payments online and in-store. Sign up today and experience the convenience of JetPay!"
                        />

                        <Content
                            imgSrc="/resources/dot.svg"
                            title="Connect dots smartly."
                            description="Get your free JetPay card and start making secure payments online and in-store. Sign up today and experience the convenience of JetPay!"
                        />

                    </div>
                </div>
            </section>
        </main>
    )
}
