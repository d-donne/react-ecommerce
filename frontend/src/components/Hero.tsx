import { MoveRight } from 'lucide-react'


const Hero = () => {
  return (
    <section className="md:h-screen py-10 container max-container bg-grad flex items-center">
      <div className="flex-1 flex-col  gap-5  pt-9">
        <h2 className="uppercase text-neutral-950 text-2xl font-semibold">
          new arrivals only
        </h2>

        <div className="text-neutral-900 font-bold text-5xl md:text-8xl">
          <div className="flex items-center gap-5">
            <span>new</span>
            <img
              src="/hand_icon.png"
              alt="hand"
              className="w-[6.5625rem]"
            />
          </div>

          <div className="flex flex-col">
            <span>collections</span>
            <span>for everyone</span>
          </div>

          <a
            href="/#newCollection"
            className="flex items-center justify-center gap-3.5  py-3 w-[19.375rem] rounded-full bg-red-500 hover:bg-red-500/80 mt-8 text-white text-xl font-semibold"
          >
            <span className="">Latest Collection</span>
            <MoveRight
              className="text-white"
              strokeWidth={3}
            />
          </a>
        </div>
      </div>

      <div className="flex-1 items-center justify-center hidden md:flex">
        <img
          src="/hero_image.png"
          alt="fashion lady"
        />
      </div>
    </section>
  );
}

export default Hero