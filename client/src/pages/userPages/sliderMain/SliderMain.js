import "./SliderMain.scss";
import { useState, useEffect } from "react";

function SliderMain({ imgArr }) {
    const [currentSlide, setCurrentSlide] = useState(Math.round(imgArr.length / 2) - 1);
    const sliderLength = imgArr.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevcurrentSlide) => (prevcurrentSlide + 1) % sliderLength);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    function setNewSlide() {
        setCurrentSlide(currentSlide => (currentSlide + 1) % imgArr.length - 1);
        setTimeout(setNewSlide, 1000);
        console.log(currentSlide);
    }

    return (
        <section className="slider">
            <div className="slider_line">
                {imgArr.map((item, index) => (
                    <div className={(currentSlide === index) ? "slider_image-choosen"
                        : (currentSlide - 1 === index) ? "slider_image_second slider_image_pre"
                            : (currentSlide - 2 === index) ? "slider_image_third slider_image_pre_pre"
                                : (currentSlide + 1 === index) ? "slider_image_third slider_image_next"
                                    : (currentSlide + 2 === index) ? "slider_image_third slider_image_next_next"
                                        : "slider_image"} style={{ backgroundImage: `url("` + item + `")`, backgroundSize: "cover", backgroundPosition: "bottom" }} key={index} >
                    </div>
                ))}
            </div>
            <div className="slider_bar">
                {imgArr.map((item, index) => (
                    <div key={index} className={(index === currentSlide) ? "slider_bar-celected" : "slider_bar-circle"}></div>
                ))}
            </div>
        </section>
    );
}

export default SliderMain;
