
const Offers = () => {
  return (
    <section className="bg-grad m-auto container">
      <div className="flex-1 flex flex-col gap-4 justify-center text-neutral-900 ">
        <h1 className="capitalize text-7xl font-semibold">
          Exclusive <span className="block">for you</span>
        </h1>
        <p className="text-xl font-medium">only on best sellers products</p>
        <button className="w-64 h-16 rounded-full text-xl text-white bg-red-500 hover:bg-red-500/80 font-medium mt-7">
          Check Now
        </button>
      </div>

      <div className="flex-1 items-center justify-end pt-12">
        <img
          src="/exclusive_image.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Offers