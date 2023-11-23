import { Carousel } from "@material-tailwind/react";


const Slider = () => {
  return (
    
      <Carousel
        className="rounded-xl "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="w-full max-h-[100vh] overflow-hidden">
          <img
            src="https://i.ibb.co/st7TcgF/photos-by-lanty-0q-Ip-B-c-Is-XE-unsplash.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full max-h-[100vh] overflow-hidden">
          <img
            src="https://i.ibb.co/Wt0F0mD/edgar-chaparro-oyjkw-QLky-Ww-unsplash.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full max-h-[100vh] overflow-hidden">
          <img
            src="https://i.ibb.co/XyTj0kL/austin-pacheco-5-T9m-Hy-Qw-XM-unsplash.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>

  );
};

export default Slider;
