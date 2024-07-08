// import { Link } from "react-router-dom"
import { Btn } from "../button/Button"
import "./hero.css"
// import HeroImg from "../../assets/health.jpg"
// import HeroImg1 from "../../assets/paindoc_hero1.jpg"
import HeroImg2 from "../../assets/paindoc_hero2.jpg"
import HeroImg3 from "../../assets/paindoc_hero3.jpg"
import HeroImg4 from "../../assets/paindoc_hero4.jpg"
import HeroImg5 from "../../assets/hero5.jpg"

const heroContents = [
    {
        img: HeroImg2,
        bigText: "Take Control of your Pain!",
        smallText: ""
    },
    {
        img: HeroImg3,
        bigText: "Enjoy Life’s Simple Pleasures",
        smallText: "Get Advanced Pain Management Solutions"
    },
    {
        img: HeroImg4,
        bigText: "Expert Care for a<br class='hidden lg:block' /> Life with less Pain",
        smallText: ""
    },
    {
        img: HeroImg5,
        bigText: "Personalised Treatment <br class='hidden lg:block' /> for Effective Pain Relief",
        smallText: ""
    }
]

// carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        arrows: false,
    };

    return <section className="relative slider-container">


        <Slider {...settings}>

            {heroContents.map((hero, index) => <div key={index} className="relative z-[3] slider__wrapper font-sans">
                <div className="h-[60px] md:h-[100px]"></div>
                <div className={`absolute inset-0 bg-black opacity-[0.3] z-[2]`}></div>
                <div className="relative">
                    <img src={hero.img} alt="pain doc africa" className="absolute w-full h-full z-[1] object-cover" />
                    <div className="w-full h-[250px] md:h-[825px] lg:h-[825px] 1920:h-[1000px] relative text-white flex flex-col justify-center z-[11]">
                        <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col gap-[20px] md:gap-[30px]">
                            {/* <h1 className={`text-[35px] md:text-[40px] lg:text-[62px] font-[500] max-w-[500px] leading-[1] ${index + 1 === 2 ? 'text-white' : 'text-white'}`}>{hero.bigText}</h1> */}
                            <div>
                                <h1 className="text-[35px] md:text-[40px] lg:text-[62px] font-[500] leading-[1] text-white" dangerouslySetInnerHTML={{ __html: hero.bigText }} />
                                <p className="text-[18px] md:text-[28px] font-[500] text-white leading-[1.2]">{hero.smallText}</p>
                            </div>

                            <a href="#form">
                                <Btn text="Book an Appointment" customStyles="bg-[#0a56b6] p-[10px] md:p-[15px_20px] rounded text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>)}

        </Slider>

    </section>
}

// Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.