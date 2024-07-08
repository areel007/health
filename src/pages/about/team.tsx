import "./team.css"
import DrJohn from "../../assets/Dr-Adesioye.jpg"
import { useEffect } from "react"
import TeamGridImg from "../../assets/team-grid.jpg"

export const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "PainDoc Africa - Practitioners"
    }, []);

    return <>
        <section>
            <div className="h-[60px] md:h-[100px]"></div>
            <div className="h-[200px] md:h-[400px] w-full our__team__page__hero">
                <div className="h-full max-w-[1200px] w-[90%] mx-auto flex items-center">
                    <span className="text-[24px] md:text-[30px] lg:text-[40px] font-[500] text-white">Practitioners</span>
                </div>
            </div>
        </section>

        <section>
            <div className="max-w-[1200px] w-[90%] mx-auto py-[30px] md:py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px]">
                <p className="text-[14px] md:text-[16px] leading-[1.6] font-[300]">
                    <span className="text-[18px] md:text-[22px] text-zinc-600">
                        Our practice consultants consist of highly skilled and experienced professionals committed to improving your quality of life through personalised treatment plans and innovative pain management techniques.
                    </span> <br /><br />
                    At the heart of our practice is a multidisciplinary team led by our medical director, Dr John A. Adesioye and includes board-certified pain management physicians, anesthesiologists, physical therapists, psychologists, and support staff who work collaboratively to address the physical, emotional, and psychological aspects of your pain. <br /><br />
                    Each member is not only highly qualified but also deeply passionate about helping patients find relief and regain control over their lives. We believe in the power of patient-centred care and strive to create a supportive and empathetic environment where patients feel heard, understood, and empowered.

                </p>

                {/* <div className="w-full h-[250px] md:h-full bg-zinc-200"></div> */}
                <img src={TeamGridImg} className="w-full" alt="paindoc africa limited" />

            </div>
        </section>

        <section className="bg-zinc-100">
            <div className="max-w-[1200px] w-[90%] mx-auto py-[30px] md:py-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-[20px] md:gap-[40px]">
                    <div className="hidden md:block"></div>
                    <p className="block capitalize text-[22px] md:text-[28px] leading-[.8] font-[600]">
                        Dr. John A. Adesioye, <br />
                        <span className="text-[12px] md:text-[14px] font-[400]">Medical Director, PainDocAfrica Limited</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-[20px] md:gap-[40px] mt-[15px] md:mt-[30px]">
                    <img src={DrJohn} alt="paindoc africa" className="w-full object-cover" />

                    <div className="columns-1 lg:columns-2 gap-[20px] md:gap-[40px] text-[14px] md:text-[16px] leading-[1.6] font-[300]">
                        <p>
                            With over 30 years of experience in medical practice, including the past 20 years dedicated to Pain and Interventional Spine Medicine, Dr. Adesioye is a distinguished professional in his field. He earned his Primary Medical Degree from Olabisi Onabanjo University (formerly Ogun State University) in Nigeria and holds a Master's degree in Pharmacology and Biotechnology from Sheffield Hallam University in South Yorkshire, United Kingdom. <br /><br />

                            Dr. Adesioye advanced his expertise in the United States, where he studied Anesthesiology at Howard University in Washington, D.C., and completed a Pain Management Fellowship at Baystate Medical Center, Tufts University School of Medicine in Springfield, MA.

                            <br /><br />
                            Throughout his distinguished career, Dr. Adesioye has held numerous medical director and hospital executive leadership positions. His accolades include being named Chief Resident and receiving the Roland and Waldean S. Nickens Scientific Research Award at Howard University Hospital. He is also a Foundation for Anesthesia Education and Research Scholar and a recipient of the prestigious Pfizer Scholar in Pain Management Award.

                            <br /><br />
                            He is passionate about promoting the unique speciality of Pain and Interventional Spine medicine as well as Perioperative Medicine in Africa.  He and his team will coordinate your treatment program to get you back to living your best possible life.<br /><br />

                            Dr. Adesioye is also the CEO of Utopian Health Services Limited, the premier healthcare consulting and business advisory firm in Nigeria.

                        </p>

                    </div>
                </div>
            </div>
        </section>

        <section className="parallax__team"></section>
    </>
}