import { useState } from "react";

const DescriptionBox = () => {
  const [active, setActive] = useState("description");

  return (
    <section className="container max-container flex-col">
      <div className="flex font-semibold text-base">
        <div
          onClick={() => setActive("description")}
          className={`border border-stone-300 px-10 py-4 cursor-pointer ${active === "description" ? "bg-white text-black" : "bg-zinc-50 text-neutral-600/80"
          }`}>
          Description
        </div>
        <div
          onClick={() => setActive("review")}
          className={`border border-stone-300 px-10 py-4 cursor-pointer ${active === "review" ? "bg-white text-black" : "bg-zinc-50 text-neutral-600/80 "
          }`}>
          Reviews
        </div>
      </div>

      <div className="border border-stone-300 py-12 px-8 grid gap-8">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloremque error culpa, tenetur quos, minima quam asperiores ex
          animi labore fugiat reprehenderit, cumque optio in! Accusamus quas minima ipsam, ratione quia vero. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Exercitationem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit quas expedita recusandae illum doloremque esse, animi ex
          quaerat ipsam?
        </p>
      </div>
    </section>
  );
};

export default DescriptionBox;
