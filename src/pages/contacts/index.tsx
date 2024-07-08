import { useEffect } from "react";
import "./contacts.css"

export const Contacts = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "PainDoc Africa - Contacts"
    }, []);

    return <main>
        <div>
            <div className="h-[60px] md:h-[100px]"></div>
            <div className="h-[200px] md:h-[400px] w-full contacts__page__hero">
                <div className="h-full max-w-[1200px] w-[90%] mx-auto flex items-center">
                    <span className="text-[24px] md:text-[30px] lg:text-[40px] font-[500] text-white">Contact Us</span>
                </div>
            </div>
        </div>

        <div>
            <div className="max-w-[1000px] w-[90%] mx-auto py-[30px] md:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[100px] justify-center">
                <div>
                    <p className="text-[14px] md:text-[18px] leading-[1.6] mb-[20px] md:mb-[40px] font-[300]">
                        Whether you have questions about our services or need to schedule a consultation, our team of experts is here to assist you.
                        Reach out to us today and take the first step towards reclaiming your well-being.
                    </p>
                    <p className="text-[14px]"> <b className="">A: </b>&nbsp;&nbsp; 54A, Adeola Odeku, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Victoria Island, Lagos <br />
                        <b className="">T: </b>&nbsp;&nbsp;&nbsp; 0815PAINDOC (08157246362) <br />
                        <b className="">E:</b>&nbsp;&nbsp;&nbsp; coordinator@paindocafrica.com
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-[20px]">
                    <p className="text-[18px] md:text-[20px] font-[600]">Contact us to find out about us</p>
                    <form className="grid grid-cols-1 gap-[10px]">
                        <input type="text" placeholder="Name*" className="p-[15px] bg-transparent border border-zinc-200 w-full" />
                        <input type="email" placeholder="Email*" className="p-[15px] bg-transparent border border-zinc-200 w-full" />
                        <input type="text" placeholder="Telephone*" className="p-[15px] bg-transparent border border-zinc-200 w-full" />
                        <input type="text" placeholder="Subject*" className="p-[15px] bg-transparent border border-zinc-200 w-full" />
                        <textarea name="" placeholder="Message*" className="p-[15px] bg-transparent border border-zinc-200 w-full"></textarea>
                        <button className="p-[15px] bg-zinc-900 text-white">Send Message</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="max-w-[1000px] w-[90%] mx-auto h-[300px] md:h-[400px] mb-[30px] md:mb-[60px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.721155780841!2d3.4082869752185294!3d6.429857024244022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad04038320b%3A0xee858ecdb3942197!2s54%20Adeola%20Odeku%20St%2C%20Victoria%20Island%2C%20Lagos%20101007%2C%20Lagos!5e0!3m2!1sen!2sng!4v1718412024815!5m2!1sen!2sng" className="w-full h-full" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>



        <section className="parallax__about"></section>
    </main>
}