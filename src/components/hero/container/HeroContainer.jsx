import { Header } from "../Header";
import { HeroContent } from "../HeroContent";

export const HeroContainer = () => {
    return (
        <section className="hero" aria-label="hero">
           <img className="hero-background-image" src="/resources/BG.png" alt="Background"/>
            <Header />
            <HeroContent />
            <div className="hero-image-container">
            <img className="hero-image" src="/resources/hero-image.svg" alt="Model and card image"/>
            </div>
        </section>
    );
}