import "./index.css"
import { conditionsWeTreat } from "../../utils/conditions.we.treat"
import { ConditionsCard } from "../../components/cards/Conditions.Card"
import { useEffect } from "react"
import ConditionsImg from "../../assets/condition-we-treat-grid.jpg"

export const ConditionsWeTreat = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "PainDoc Africa - Conditions We Treat"
    }, []);

    return <main>
        <div>
            <div className="h-[60px] md:h-[100px]"></div>
            <div className="h-[200px] md:h-[400px] w-full conditions__we__treat__page__hero">
                <div className="h-full max-w-[1200px] w-[90%] mx-auto flex items-center">
                    <span className="text-[24px] md:text-[30px] lg:text-[40px] font-[500] text-white">Conditions We Treat</span>
                </div>
            </div>
        </div>

        <div className="">
            <div className="py-[30px] md:py-[60px] max-w-[1200px] w-[90%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[60px] mb-[80px]">
                    <div className="leading-[1.6] text-zinc-800 font-[300] text-[18px] md:text-[20px]">
                        <p className="text-[24px] md:text-[30px] text-zinc-800 leading-[1.2] max-w-[900px] mb-[10px] md:mb-[20px]">Pain is a highly subjective condition, <br className="hidden lg:block" /> varying greatly from person to person.</p>
                        <span className="inline-block mb-[10px]">
                            While some individuals can manage daily tasks despite their pain, others may find it debilitating and limiting.
                        </span>
                        <span className="inline-block mb-[10px]">
                            Our pain management physicians will work closely with you to understand your pain, assessing factors like duration, intensity, type, and location. They also consider your pain threshold and tolerance to provide an accurate diagnosis. Using an interdisciplinary approach that integrates medical and behavioural management, we'll create a personalised treatment plan to help you control your pain and improve your quality of life.
                        </span>

                        <p className="text-[18px] md:text-[20px] leading-[1.6] text-zinc-800 font-[300]">
                            Our treatment covers both acute and chronic pain conditions including:
                        </p>
                    </div>

                    <img src={ConditionsImg} className="w-full" alt="paindoc africa limited" />
                </div>

                <div className="conditions__grid gap-[40px]">
                    {conditionsWeTreat.map((condition, index) => {
                        return <ConditionsCard key={index} svg={condition.img} title={condition.serviceName} description={condition.desc} />
                    })}

                </div>

            </div>
        </div>

        <section className="parallax__about"></section>
    </main>
}