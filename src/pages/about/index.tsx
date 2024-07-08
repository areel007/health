import "./index.css"
import { useEffect } from "react";

export const WhoWeAre = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "PainDoc Africa - About us"
    }, []);
    return <>
        <section>
            <div className="h-[60px] md:h-[100px]"></div>
            <div className="h-[200px] md:h-[400px] w-full who__we__are__page__hero">
                <div className="h-full max-w-[1200px] w-[90%] mx-auto flex items-center">
                    <span className="text-[24px] md:text-[30px] lg:text-[40px] font-[500] text-white">About Us</span>
                </div>
            </div>
        </section>

        <section>
            <div className="max-w-[1200px] w-[90%] mx-auto py-[30px] md:py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[60px]">
                <h2 className="text-[32px] md:text-[55px] leading-[1.1]">Relieving Pain. <br />
                    Improving Function. <br />
                    Changing Lives.
                </h2>

                <p className="leading-[1.6] text-[14px] md:text-[16px] font-[300]">
                    <span className="text-[18px] md:text-[22px] font-[200]">
                        Welcome to PainDocAfrica, where we specialise in holistic pain management solutions tailored to your unique needs.
                    </span> <br /><br />

                    Our dedicated practitioners craft personalised treatment plans, carefully considering factors such as the nature and severity of your pain. <br /><br />

                    We conduct thorough assessments, utilising your medical history, clinical examinations, and advanced diagnostic tools to pinpoint the underlying causes of your discomfort. With our expertise, we not only diagnose your condition but also empower you with a deeper understanding of it. <br /><br />

                    Our customised and personalised plans encompass a range of options, including medication management, interventional procedures, physical therapy, and where beneficial, psychological support. Our goal is to alleviate your pain and enhance your functional capacity for a better quality of life. <br /><br />

                    Take the first step towards relief by discussing a referral to our comprehensive pain and interventional spine medicine program with your primary care physician.

                </p>
            </div>
        </section>

        <section className="bg-[#0a56b6]">
            <div className="max-w-[700px] w-[90%] mx-auto py-[30px] md:py-[60px]">
                <span className="block text-center font-[500] text-[16px] md:text-[20px] mb-[20px] text-white">Our Mission</span>

                <p className="text-center leading-[1.6] text-[14px] md:text-[16px] text-white">Our goal is to use our presence in Nigeria to start the promotion of interventional pain and spine medicine in Africa. To be the preferred providers of solutions to our patients’ painful conditions and partners in helping them improve their function and get back to living their best and most productive lives.</p>
            </div>
        </section>

        <section className="parallax__about"></section>
    </>
}