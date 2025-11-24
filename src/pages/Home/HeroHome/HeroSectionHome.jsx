import EmblaCarousel from "../../../components/Carrousel/EmblaCarousel";

const OPTIONS = { loop: true }
// const SLIDE_COUNT = 5
const SLIDES = [
    "/banners/cafe-hands.png",
    "/banners/banner01.png",
    "/banners/banner02.png",
    "/banners/banner03.png",
    "/banners/banner04.png",
    "/banners/banner05.png",
]

function HeroSectionHome() {
    return (
        <section>
            < EmblaCarousel slides={SLIDES} options={OPTIONS}/>
        </section>
    );
}

export default HeroSectionHome