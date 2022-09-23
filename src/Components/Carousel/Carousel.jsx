import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const Carousel = ({data, direction}) => {
  let items = data.map((item) => {
    return (
      <div className="flex justify-center items-center">
      {/* <TechStack key={item} img={item.img} name={item.name} /> */}
      <img className="w-full h-[40vh] lg:h-[65vh]" src={item.images} alt="" />
      </div>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 1,
    },
    720: {
      items: 1,
    },
    2000: {
      items: 1,
    },
  };
  return (
    <div className="flex justify-center">
      <AliceCarousel
        mouseTracking
        controlsStrategy={"default"}
        items={items}
        infinite
        autoPlayInterval={500}
        animationDuration={1000}
        // autoPlayDirection={"rtl"}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
