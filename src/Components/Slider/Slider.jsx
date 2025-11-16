import { Carousel } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <Carousel
      className="rounded-xl"
      autoplay={true}
      autoplayDelay={2000}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-8 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-12 bg-gradient-to-r from-amber-400 to-rose-400 shadow-lg"
                  : "w-6 bg-white/70 hover:bg-white"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {/* Slide 1 */}
      <div className="relative w-full max-h-[90vh] overflow-hidden">
        <img
          // src="https://i.ibb.co/st7TcgF/photos-by-lanty-0q-Ip-B-c-Is-XE-unsplash.jpg"
          src="/slide1.webp"
          alt="Romantic couple in nature"
          className="h-full w-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold font-cormorant text-white mb-6 leading-tight">
              Unlock the Path to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-rose-200">
                Everlasting Love
              </span>
            </h1>

            <NavLink to="/biodatas">
              <button className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold rounded-full shadow-2xl hover:shadow-amber-200/30 hover:scale-105 transition-all duration-300">
                Start Your Journey
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative w-full max-h-[90vh] overflow-hidden">
        <img
          // src="https://i.ibb.co/Wt0F0mD/edgar-chaparro-oyjkw-QLky-Ww-unsplash.jpg"
          src="/slide2.webp"
          alt="Happy couple embracing"
          className="h-full w-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/30 to-pink-900/20"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-7xl font-bold font-greatvibes text-white mb-6 leading-none">
              Find Your <br />
              <span className="text-amber-200">Perfect Match</span>
            </h1>

            <div className="mt-8 flex justify-center gap-4">
              <NavLink to="/biodatas">
                <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
                  Browse Profiles
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative w-full max-h-[90vh] overflow-hidden">
        <img
          // src="https://i.ibb.co/XyTj0kL/austin-pacheco-5-T9m-Hy-Qw-XM-unsplash.jpg"
          src="/slide3.webp"
          alt="Couple wedding rings"
          className="h-full w-full object-contain brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-amber-900/30"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="mb-6">
              <span className="text-amber-300 font-dancing text-4xl">
                Destiny Duos
              </span>
            </div>
            <h1 className="text-5xl font-bold font-playfair text-white mb-4 leading-tight">
              Your Love Story <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-amber-200">
                Starts Here
              </span>
            </h1>

            <div className="mt-8 flex items-center justify-center gap-6 text-white/70">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-300">10K+</div>
                <div className="text-sm">Success Stories</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-300">50K+</div>
                <div className="text-sm">Active Members</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300">99%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
