import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";

import classes from "./HomePageSlider.module.css";
const HomePageSlider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 500px)": {
          loop: false,
        },
      },
    },

    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const sliderClickHandler = () => {};
  let slides = [
    <img key="1" src="advise.png" alt="1" />,
    <img key="2" src="assess.png" alt="2" />,
    <img key="3" src="identify.png" alt="3" />,
    <img key="4" src="shape.png" alt="4" />,
    <img key="5" src="strategize.png" alt="5" />,
  ];

  return (
    <div ref={sliderRef} className={`keen-slider ${classes.slider}`}>
      {slides.map((img) => {
        return (
          <Link href="/services">
            <div
              key={img.key}
              className={`keen-slider__slide ${classes.slide}`}
              onClick={sliderClickHandler}
            >
              {img}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePageSlider;
