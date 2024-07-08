import Img1 from "../../assets/part1.png"
import Img2 from "../../assets/part2.png"
import Img3 from "../../assets/part3.png"
import Img4 from "../../assets/part4.png"
import Img5 from "../../assets/part5.png"

import "./Partners.css"

export const PartnersSlider = () => {

    const partners = [
        Img1, Img2, Img3, Img4, Img5
    ]
    return <div className="wrapper">
        {
            partners.map((partner, i) => <div className={`item item${i + 1}`} key={i}>
                <img src={partner} alt="pain doc africa" className="w-full md:w-auto" />
            </div>)
        }
    </div>
}