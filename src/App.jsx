import "./App.css";
import { Helmet } from "react-helmet";
import logo from "./assets/logo.svg";
import imageDesktop from "./assets/image-web-3-desktop.jpg";
import fav from "./assets/favicon.png";
import retro from "./assets/image-retro-pcs.jpg";
import topLaptops from "./assets/image-top-laptops.jpg";
import gaming from "./assets/image-gaming-growth.jpg";

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>News Page</title>
        <meta name="News Page" content="News" />
        <link rel="icon" type="image/png" href={fav} />
      </Helmet>
      <nav className=" px-52 py-10" id="mainContent">
        <div className="flex items-center justify-between" id="topNav">
          <div className=" object-contain">
            <img
              src={logo}
              alt="logo"
              className=" hover:animate-spin object-cover topImg"
            />
          </div>
          <input type="checkbox" id="checkBox" className="checkBox1" />
          <label htmlFor="checkBox" id="label2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.9"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
          <div className="menu transition duration-500 ease-out">
            <label htmlFor="checkBox" id="buttonX">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.0"
                stroke="currentColor"
                className="w-6 h-6 stroke-red-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
            <ul
              className=" text-lg font-semibold text-slate-500 flex space-x-8"
              id="upperul"
            >
              <li className="home">
                <a href="#mainContentHome" className="links">
                  Home
                </a>
              </li>
              <li>
                <a href="#section" className="links">
                  New
                </a>
              </li>
              <li>
                <a href="" className="links">
                  Popular
                </a>
              </li>
              <li>
                <a href="" className="links">
                  Trending
                </a>
              </li>
              <li>
                <a href="" className="links">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className=" px-52 flex gap-5 mainContent1" id="mainContent">
        <div className="">
          <div className=" overflow-hidden">
            <img
              src={imageDesktop}
              alt="image-web-3-desktop"
              className="hover:scale-105 transitiosn duration-500 ease-out object-cover w-[65rem] rounded"
              id="topImg"
            />
          </div>
          {/* flex */}
          <div
            className=" mt-9 flex items-center justify-between"
            id="mainContent2"
          >
            <div>
              <h1
                className=" font-extrabold text-[4rem] leading-[4rem]"
                id="upperH1"
              >
                The Bright <span className="block">Future of</span> Web 3.0?
              </h1>
            </div>
            <div>
              <p
                className=" text-slate-600 font-semibold text-[1.2rem] leading-[1.5rem] "
                id="upperP"
              >
                We dive into the next evolution of the web that{" "}
                <span className=" block">
                  claims to put the power of the platforms back
                </span>
                <span className=" block">
                  into the hands of the people. But is it really
                </span>
                fulfilling it's promise?
              </p>
              <button className=" hover:rounded-md hover:shadow-2xl text-[1.4] uppercase tracking-[0.3rem] font-bold bg-red-500 text-white px-6 py-3 hover:bg-red-600 hover:-translate-y-1 transition duration-300 ease-out mt-10">
                read more
              </button>
            </div>
          </div>
        </div>

        <section className=" p-6 rounded-lg group w-[27rem]" id="section">
          <h1
            className=" text-yellow-400 font-semibold text-[2.5rem] group-hover:text-white mt-6"
            id="new"
          >
            New
          </h1>
          <div className=" mt-4 divide-y-2 divide-slate-500">
            <div className=" py-6 space-y-3">
              <h1
                className=" text-white font-bold text-[1.5rem] group-hover:text-yellow-400 "
                id="upperHtag"
              >
                Hydrogen VS Electric Cars
              </h1>
              <p
                className=" font-semibold text-slate-500 text-[1.1rem] "
                id="upperPtag"
              >
                Will Hydrogen-fueled cars ever catch up
                <span className="block">to EVs?</span>
              </p>
            </div>
            <div className=" py-6 space-y-3">
              <h1
                className=" text-white font-bold text-[1.5rem] group-hover:text-yellow-400 "
                id="upperHtag"
              >
                The Downside of AI Artistry
              </h1>
              <p
                className=" font-semibold text-slate-500 text-[1.1rem] "
                id="upperPtag"
              >
                what are the possible adverse effects of
                <span className="block">on-demand AI image generation?</span>
              </p>
            </div>
            <div className=" py-6 space-y-3">
              <h1
                className=" text-white font-bold text-[1.5rem] group-hover:text-yellow-400 "
                id="upperHtag"
              >
                Is VC Funding Drying Up?
              </h1>
              <p
                className=" font-semibold text-slate-500 text-[1.1rem] "
                id="upperPtag"
              >
                Private funding by VC firms is down 50%
                <span className="block">
                  YDY. We take a look at what that means
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <aside className=" px-52 mt-28 pb-24 " id="mainContentbottom">
        <div className=" flex justify-between mainContent3">
          <div className=" flex gap-3 hover:shadow-lg hover:rounded-md transition duration-300 ease-out group">
            <img
              src={retro}
              alt="Retro pc"
              className=" h-36 w-36 group-hover:rounded-l-md group-hover:shadow-lg"
            />
            <div className=" leading-[3rem]" id="lineHeight">
              <h1
                className=" text-slate-400 font-bold text-[2.4rem] "
                id="upperHtag"
              >
                01
              </h1>
              <h1 className="h1Grids" id="upperH2tag">
                Reviving Retro PC's
              </h1>
              <p className="pGrid" id="bottomPtag">
                What happen when old PC's{" "}
                <span className=" block">are given modern upgrades?</span>
              </p>
            </div>
          </div>
          <div className=" flex gap-3  hover:shadow-lg hover:rounded-md transition duration-300 ease-out group">
            <img
              src={topLaptops}
              alt="Retro pc"
              className=" h-36 w-36 group-hover:rounded-l-md group-hover:shadow-lg "
            />
            <div className=" leading-[3rem]" id="lineHeight">
              <h1
                className=" text-slate-400 font-bold text-[2.4rem] "
                id="upperHtag"
              >
                02
              </h1>
              <h1 className="h1Grids" id="upperH2tag">
                Top 10 Laptops of 2022
              </h1>
              <p className="pGrid" id="bottomPtag">
                Our best picks for various{" "}
                <span className=" block">needs and budgets</span>
              </p>
            </div>
          </div>
          <div className=" flex gap-3  hover:shadow-lg hover:rounded-md transition duration-300 ease-out group">
            <img
              src={gaming}
              alt="Retro pc"
              className=" h-36 w-36 group-hover:rounded-l-md group-hover:shadow-lg"
              id="bottomImg"
            />
            <div className=" leading-[3rem]" id="lineHeight">
              <h1
                className=" text-slate-400 font-bold text-[2.4rem] "
                id="upperHtag"
              >
                03
              </h1>
              <h1 className="h1Grids" id="upperH2tag">
                Growth of Gaming
              </h1>
              <p className="pGrid" id="bottomPtag">
                How the pandemic has sparked{" "}
                <span className=" block">fresh opportunities</span>
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
