import videoBg from "../assets/pexels_videos_2022396 (1080p).mp4";
const Banner = () => {
  return (
    <div className="h-full">
      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="../../public/marco-chilese-KWqXPLcsftg-unsplash.jpg"
            className="w-full h-[70vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="../../public/ryan-OywyPkrDEvg-unsplash.jpg"
            className="w-full h-[70vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="../../public/simone-impei-4_-2HJBQH8Q-unsplash.jpg"
            className="w-full h-[70vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="../../public/sam-moghadam-khamseh-bu_7B-G1eWg-unsplash.jpg"
            className="w-full h-[70vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
      {/* <div
        className="hero h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Swbq2sD/lautaro-andreani-xk-Baqlcqeb4-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      <div>
        <div className="w-full h-full relative">
          {/* <h3 className="text-4xl">This is login page</h3> */}
          <div className="absolute w-full h-full bg-[#000000cc]"></div>
          <video
            className="object-cover"
            src={videoBg}
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
            <h1 className=" text-center text-2xl lg:text-8xl mb-8 font-bold">
              Experience the Extraordinary
            </h1>
            <p className=" text-xs md:text-lg mx-auto text-center border-white border-y-2 p-4">
              we curate an eclectic mix of concerts, sports events, theater
              performances, <br /> comedy shows, and more, each promising a
              one-of-a-kind experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
