import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";
import classes from "./HomePageSlider.module.css";
const HomePageSlider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },

    [
      (slider) => {
        let timeout;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 2500);
        }

        slider.on("created", () => {
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
    <Image key="1" src="/advise.png" alt="1" width="1900px" height="720px" />,
    <Image key="2" src="/assess.png" alt="2" width="1900px" height="720px" />,
    <Image key="3" src="/identify.png" alt="3" width="1900px" height="720px" />,
    <Image key="4" src="/shape.png" alt="4" width="1900px" height="720px" />,
    <Image
      key="5"
      src="/strategize.png"
      alt="5"
      width="1900px"
      height="720px"
    />,
  ];

  return (
    <div ref={sliderRef} className={`keen-slider ${classes.slider}`}>
      {slides.map((img) => {
        return (
          <Link key={img.key} href="/services" passHref>
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
