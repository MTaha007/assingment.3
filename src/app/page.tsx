import Image from "next/image";
import Header from "./components/Header";
import Taha from "../img/Taha .jpg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <div className="bg-slate-700 bg-cover bg-no-repeat   hero">
        <Image
          src={Taha}
          alt="taha "
          className="max-w-sm rounded-full h-96 w-80 ml-8 inline-block    shadow-2xl -mt-16 mb-32"
        />
        <div className="max-w-sm inline-block ml-40  mt-32  ">
          <h1 className="mt-1 font-extrabold text-3xl  ">
            Hello!
            <br /> I'm Taha
          </h1>
          <p className=" text-slate-900 text-2xl font-extrabold inline-block  w-96">
            As a beginner, I embrace innovation by combining coding, design, and
            creative solutions for today and the future. My adaptable approach
            allows me to grow with the industry, while I stay committed to
            delivering quality work.
          </p>
        </div>
      </div>
      {/* About section begin */}
      <div className="bg-slate-400 h-96" id="about">
        <br />
        <div className="shadow-2xl bg-slate-800 h-3/4 w-10/12 rounded-2xl ml-24 mt-6 border-dashed border-8 border-slate-500">
          <h1 className="text-white ml-24 text-3xl font-extrabold">
            <br /> "My Intro"
          </h1>
          <br />
          <p className="w-3/4 ml-24 font-serif ">
            Hello <br />
            My name is Taha, and I'm a 17-year-old pre-engineering student
            currently in 12th grade with aspirations of becoming a software
            engineer. I've completed my first semester in Artificial
            Intelligence in GIAIC. During this time, I’ve learned HTML, CSS, and
            TypeScript. I’ve created this portfolio to highlight my skills.
          </p>
        </div>
      </div>
      {/* About section ends Here */}
      <Footer />
    </div>
  );
}
