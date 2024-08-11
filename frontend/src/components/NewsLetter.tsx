import { useState } from "react";

const NewsLetter = () => {

  const [input, setInput] = useState('');

  const toggleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    
  }


  return (
    <section className="bg-grad container m-auto flex-col items-center justify-center gap-8 text-zinc-700 py-24">
      <h1 className=" text-5xl font-semibold">
        Get Exclusive Offers in Your Email
      </h1>
      <p className="text-xl">Subscribe to our newsletter to stay updated</p>

      <form
        action=""
        className="flex w-6/12 items-center justify-between bg-white rounded-full border border-neutral-200 text-base"
      >
        <input
          type="email"
          value={input}
          onChange={toggleSubmit}
          placeholder="someone@example.com"
          className="w-9/12 h-full outline-none ml-8 font-[poppins] text-zinc-600"
        />
        <input
          type="submit"
          value="Subscribe"
          disabled={!input}
          className="px-12 py-5 bg-black hover:bg-slate-800 disabled:bg-black/90 disabled:text-zinc-400 disabled:pointer-events-none text-white rounded-full cursor-pointer"
        />
      </form>
    </section>
  );
}

export default NewsLetter