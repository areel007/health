import "./treatment-modalities.css"
import { useEffect } from "react";
import TreatmentModalitiesImg from "../../assets/treatment-modalities.jpg"

export const TreatmentModalities = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        window.document.title = "PainDoc Africa - Treatment Modalities"
    }, []);

    return <main>
        <div>
            <div className="h-[60px] md:h-[100px]"></div>
            <div className="h-[200px] md:h-[400px] w-full treatment__modalities__page__hero">
                <div className="h-full max-w-[1200px] w-[90%] mx-auto flex items-center">
                    <span className="text-[24px] md:text-[30px] lg:text-[40px] font-[500] text-white">Treatment Modalities</span>
                </div>
            </div>
        </div>

        <div>
            <div className="py-[30px] md:py-[60px] xl:py-[80px] max-w-[860px] w-[90%] mx-auto">
                <img src={TreatmentModalitiesImg} alt="paindoc africa limited" />

                <div className="mt-[30px] md:mt-[40px] xl:mt-[60px]">
                    <p className="text-[18px] md:text-[22px] font-[300] leading-[1.4] mb-[20px]">We offer the most advanced treatment modalities available including:</p>
                    <ul className="leading-[1.4] list-disc ml-[20px] font-[300] text-[14px] md:text-[16px] grid grid-cols-1 md:grid-cols-2 gap-[10px_40px]">
                        <li>Physical therapy evaluation and treatment</li>
                        <li>Diagnostic and therapeutic injections</li>
                        <li>Myofascial and trigger point and other soft-tissue injections</li>
                        <li>Joint steroid and viscosupplementation injections</li>
                        <li>Peripheral nerve blocks including major joints such as the knee and hip joints</li>
                        <li>Epidural injections, interlaminar, transforaminal caudal</li>
                        <li>Facet intra-articular joint and medial branch nerve blocks</li>
                        <li>Sacroiliac joint injections</li>
                        <li>Sympathetic nerve blocks</li>
                        <li>Vertebral augmentation procedures</li>
                        <li>Radiofrequency ablation procedures</li>
                        <li>Spinal cord stimulation procedures</li>
                    </ul>
                </div>
            </div>
        </div>

        <section className="parallax__about"></section>
    </main>
}