import { Btn } from "../components/button/Button"
import { Hero } from "../components/hero/hero"
import { Link } from "react-router-dom";
import "./home.css"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { PartnersSlider } from "../components/partners/Partners.Slider";
import { conditionsWeTreat } from "../utils/conditions.home.page";
import { useEffect } from "react";

import AboutImg from "../assets/about-home.jpg"

export const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "PainDoc Africa - Home"
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        draggable: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    autoplay: true, // Enable autoplay for responsive settings
                    autoplaySpeed: 10000, // Set the delay in milliseconds
                    pauseOnHover: true, // Pause autoplay on hover
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                    autoplay: true, // Enable autoplay for responsive settings
                    autoplaySpeed: 10000, // Set the delay in milliseconds
                    pauseOnHover: true, // Pause autoplay on hover
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true, // Enable autoplay for responsive settings
                    autoplaySpeed: 10000, // Set the delay in milliseconds
                    pauseOnHover: true, // Pause autoplay on hover
                }
            }
        ]
    };

    return <>
        <Hero />
        <section className="bg-gray-100">
            <div className="max-w-[1200px] w-[90%] mx-auto py-[30px] md:py-[100px]">
                <div className="h-[auto] grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[60px] items-start">
                    <img src={AboutImg} className="w-full object-cover" alt="paindoc africa limited" />
                    {/* <div className="w-[100%] h-[300px] md:h-[100%] mx-auto bg-gray-300 rounded-[10px]"></div> */}

                    <div>
                        <span className="inline-block mb-[10px] uppercase text-[14px] md:text-[16px] text-[#0a56b6]">about paindocafrica limited</span>

                        <h2 className="text-[20px] md:text-[28px] font-[500] leading-[1.2] mb-[20px] text-zinc-900">PainDocAfrica Limited is an organisation committed to a balanced treatment of your pain.</h2>

                        <p className="text-[14px] md:text-[16px] leading-[1.5] text-zinc-700 mb-[20px] md:mb-[50px] font-[300]">
                            Our practitioners will create individualised treatment plans based on several considerations, including the cause and level of pain. <br /><br />

                            We diligently and painstakingly evaluate all conditions and use your history, our examination and comprehensive, state-of-the-art diagnostic investigations to determine the root of the problem, help you understand your condition and design your personalised service. <br /><br />

                            The tailored plans may include medication management, interventional procedures, physical therapy and when required, psychological modalities to treat your pain and help restore function.
                            <br /><br />

                            Talk to your family doctor about a referral to our comprehensive pain and interventional spine medicine program.
                        </p>
                        <Link to="/about">
                            <Btn text="Learn more" customStyles="p-[10px_10px] md:p-[15px_20px] bg-[#0a56b6] text-white rounded" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="max-w-[1200px] w-[90%] mx-auto py-[30px] md:py-[60px]">
                <h1 className="text-[20px] md:text-[26px] font-[500] leading-[1.2] text-center">Conditions We Treat</h1>

                <div className="mt-[40px] carousel-container">
                    <Slider{...settings}>
                        {conditionsWeTreat.map((condition, index) => <div key={index} className="carousel-item relative p-[20px] rounded-[10px] overflow-hidden">
                            <img src={condition.img} alt="paindoc africa" className="absolute inset-0 h-full w-full object-cover" />
                            <div className="h-full w-full relative z-[1] text-white">
                                <span className="text-[16px] md:text-[18px] font-[600]">{condition.serviceName}</span>
                            </div>
                        </div>)}
                    </Slider>
                </div>

                <div className="flex justify-center mt-[20px]" id="form">
                    <Link to="/conditions-we-treat" className="p-[15px_20px] bg-[#0a56b6] text-white rounded">View other conditions</Link>
                </div>
            </div>
        </section>

        <section className="bg-[#f5f5f5]">
            <div className="max-w-[1100px] w-[90%] mx-auto py-[20px] md:py-[40px]">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[100px]">
                    <div>
                        <span className="inline-block uppercase text-[14px] mb-[20px] font-[500] leading-[1.4]">get the care you deserve</span>
                        <p className="text-[14px] md:text-[16px] leading-[1.6] text-zinc-700">Whether you have questions about our services or need to schedule a consultation, our team of experts is here to assist you. Reach out to us today and take the first step towards reclaiming your well-being.</p>


                    </div>

                    <div className="w-full border">
                        <div className="p-[10px] bg-zinc-700">
                            <p className="text-white text-[16px] md:text-[20px] font-[500] text-center">Schedule a consultation</p>
                        </div>

                        <form className="w-[90%] mx-auto my-[30px] flex flex-col gap-[10px]">
                            <div>
                                <input type="text" placeholder="Name*" className="p-[15px_20px] w-full border" />
                            </div>

                            <div>
                                <input type="email" placeholder="Email*" className="p-[15px_20px] w-full border" />
                            </div>

                            <div>
                                <input type="text" placeholder="Phone*" className="p-[15px_20px] w-full border" />
                            </div>

                            <div>
                                <input type="text" placeholder="Subject*" className="p-[15px_20px] w-full border" />
                            </div>

                            <div>
                                <textarea placeholder="Message*" className="p-[10px_20px] w-full border"></textarea>
                            </div>

                            <button type="submit" className="p-[15px_20px] bg-zinc-900 text-white w-[min-content] whitespace-nowrap">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>


            </div>
        </section>

        <section className="home__page__parallax"></section>
    </>
}