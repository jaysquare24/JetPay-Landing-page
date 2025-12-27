import { motion } from "framer-motion";

export const HeroContent = () => {

    const onClickHandler = () => {
        alert("Functionality not added yet")
    }
    return(
        
        <div className="heroContent">
            <div className="heroTextContent">
                <motion.h1 className="heroTitle"
                  initial = {{ x: -100, opacity: 0 }}
                  animate = {{ x: 0, opacity: 1 }}
                  transition={{duration:0.5, ease: "easeOut"}}
                >The next gen payment method.</motion.h1>

                <motion.p className="heroDescription"
                   initial ={{opacity: 0 }}
                   animate ={{ opacity: 0.7 }}
                   transition={{ duration:1, delay:0.8}}
                >Join thousands of satisfied users who trust JetPay for their fast, secure, and seamless payment solutions. Sign up today and take the first step towards a smarter financial future!</motion.p>
                
                <motion.div
                   initial ={{opacity: 0 }}
                   animate ={{ opacity: 1 }}
                   transition={{ duration:1, delay:0.8}} >
                    <button className="heroButton" id="getStartedButton" type="button" onClick={onClickHandler}>Get Started</button>
                    
                    <div className="stats">
                        <div className="stats-item">
                            <p className="stats-num" >2943</p>
                            <p className="stats-text">Cards Delivered</p>
                        </div>
                        <div className="line"></div>
                        <div className="stats-item">
                            <p className="stats-num" >$1M+</p>
                            <p className="stats-text">Transactions Completed</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        
                
    )
}