import { Link } from "react-router-dom";

const LoginSingUp = () => {
  return (
    <main className="max-container container bg-fuchsia-100 h-[90vh] items-center justify-center ">
      <div className="bg-white p-10 grid gap-5">
        <form action="" className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl mb-3">Sign Up</h1>
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Your Email" className="input" />
          <input
            type="password"
            placeholder="Your Password"
            className="input"
          />
          <input
            type="submit"
            value="Sign Up"
            className="bg-red-500 text-white text-2xl px-5 py-4 hover:bg-red-500/90 cursor-pointer"
          />
        </form>

        <div className="flex gap-4 text-zinc-600 text-lg font-medium">
          <p>Already have an account?</p>
          <button
            role="link"
            className="text-red-500 font-medium animate-pulse hover:animate-none">
            Login here
          </button>
        </div>

        <div className="flex gap-1 text-zinc-600 font-medium">
          <input type="checkbox" id="terms" className="cursor-pointer" />
          <label htmlFor="terms" className="cursor-pointer">
            By continuing, I agree to our{" "}
            <Link to="/" className="text-red-500/80">
              Terms of Use and privacy Policy
            </Link>
          </label>
        </div>
      </div>
    </main>
  );
};

export default LoginSingUp;
