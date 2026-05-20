import flagship from "../public/assets/flagship.png";
import suc from "../public/assets/suc.png";
import jugaad from "../public/assets/jugaad.png";
import adventure from "../public/assets/adventure.png";
import wallstreet from "../public/assets/wallstreet.png";
import ceo from "../public/assets/ceo.png";
import render from "../public/assets/render.png";
import ipl from "../public/assets/ipl.png";
import swades from "../public/assets/swades.png";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  return (
    <div
      id="events"
      className="min-h-screen mt-20 bg-black"
    >
      <div className="bg-gradient-to-b from-[rgba(0,0,0,0.14)] to-[rgba(0,0,0.4,1)]">
        <div className="flex flex-col gap-3 items-center justify-center text-5xl lg:text-7xl xl:text-[80px] font-bold">
          <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
            Events
          </span>
          <svg
            width="450"
            height="1"
            viewBox="0 0 580 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="0.5"
              x2="580"
              y2="0.5"
              stroke="url(#paint0_linear_11_3)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_3"
                x1="622.006"
                y1="1"
                x2="-40.7939"
                y2="0.999999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.501042" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="w-full h-full flex overflow-auto justify-center">
          <div className="w-full max-w-4xl 2xl:max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pt-20 gap-10">
            <div className="flex flex-col md:mt-20 lg:mt-0 justify-center h-full gap-6">
              <Image
                src={flagship}
                width={200}
                height={100}
                alt="Flagship"
                className="self-center lg:scale-75"
              />
              <div className="flex flex-col justify-center gap-8">
                <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">
                  Flagship
                </span>
                <Link
                  href="https://flagship.ecellvnit.org/"
                  target="_blank"
                  className="text-center bg-transparent border-2 border-[#0298F9] text-[#0298F9] hover:bg-[#0298F9] hover:text-white transition-colors duration-300 uppercase w-1/2 self-center py-3 text-sm font-bold tracking-widest"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full gap-6 md:mt-10 lg:mt-8 xl:mt-0">
              <Image
                src={suc}
                width={330}
                height={100}
                alt="Startup Conclave"
                className="self-center scale-[0.7]"
              />
              <div className="flex flex-col justify-center gap-8 md:mt-8 lg:mt-2 xl:mt-0">
                <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">
                  Startup Conclave
                </span>
                <Link
                  href="https://startupconclave.ecellvnit.org/"
                  target="_blank"
                  className="bg-transparent border-2 border-[#0298F9] text-[#0298F9] hover:bg-[#0298F9] hover:text-white transition-colors duration-300 uppercase text-center w-1/2 self-center py-3 text-sm font-bold tracking-widest"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center max-h-fit gap-6 md:mt-20 lg:mt-0">
              <Image
                src={jugaad}
                width={200}
                height={100}
                alt="Jugaad"
                className="self-center md:scale-[1.4] lg:scale-90"
              />
              <div className="flex flex-col justify-center gap-8 md:mt-16 lg:mt-0">
                <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">
                  Jugaad
                </span>
                <Link
                  href="https://jugaad.ecellvnit.org/"
                  target="_blank"
                  className="bg-transparent border-2 border-[#0298F9] text-[#0298F9] hover:bg-[#0298F9] hover:text-white transition-colors duration-300 uppercase text-center w-1/2 self-center py-3 text-sm font-bold tracking-widest"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-start h-full gap-6">
              <Image
                src={adventure}
                width={340}
                height={100}
                alt="Adventure"
                className="self-center scale-90 lg:scale-[0.6] mt-10"
              />
              <div className="flex flex-col justify-start gap-8 -mt-10">
                <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">
                  Adventure
                </span>
                <Link
                  href="https://adventure.ecellvnit.org"
                  target="_blank"
                  className="bg-transparent border-2 border-[#0298F9] text-[#0298F9] hover:bg-[#0298F9] hover:text-white transition-colors duration-300 uppercase text-center w-1/2 self-center py-3 text-sm font-bold tracking-widest"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full gap-6">
              <Image
                src={wallstreet}
                width={340}
                height={100}
                alt="Wallstreet"
                className="self-center scale-90 lg:scale-75"
              />
              <div className="flex flex-col justify-center gap-8">
                <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">
                  Wallstreet
                </span>
                <Link
                  href="https://wallstreet.ecellvnit.org"
                  target="_blank"
                  className="bg-transparent border-2 border-[#0298F9] text-[#0298F9] hover:bg-[#0298F9] hover:text-white transition-colors duration-300 uppercase text-center w-1/2 self-center py-3 text-sm font-bold tracking-widest"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full gap-6">
              <Image
                src={ceo}
                width={340}
                height={100}
                alt="CEO"
                className="self-center scale-[0.6] lg:scale-50"
              />
              <div className="flex flex-col justify-center gap-8">
                <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">
                  CEO
                </span>
                <Link
                  href="https://ceo.ecellvnit.org"
                  target="_blank"
                  className="bg-transparent border-2 border-[#0298F9] text-[#0298F9] hover:bg-[#0298F9] hover:text-white transition-colors duration-300 uppercase text-center w-1/2 self-center py-3 text-sm font-bold tracking-widest"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full gap-6">
              <Image
                src={render}
                width={320}
                height={100}
                alt="Render.ico"
                className="self-center lg:scale-90"
              />
              <div className="flex flex-col justify-center gap-8 lg:mt-9 xl:mt-0">
                <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">
                  Render.ico
                </span>
                <Link
                  href="/render"
                  target="_blank"
                  className="bg-transparent border-2 border-[#0298F9] text-[#0298F9] hover:bg-[#0298F9] hover:text-white transition-colors duration-300 uppercase text-center w-1/2 self-center py-3 text-sm font-bold tracking-widest"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full gap-6">
              <Image
                src={ipl}
                width={230}
                alt="IPL Auction"
                className="self-center md:scale-[0.85] lg:scale-[0.7]"
              />
              <div className="flex flex-col justify-center gap-8">
                <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">
                  IPL Auction
                </span>
                <Link
                  href="https://ipl.ecellvnit.org"
                  target="_blank"
                  className="bg-transparent border-2 border-[#0298F9] text-[#0298F9] hover:bg-[#0298F9] hover:text-white transition-colors duration-300 uppercase text-center w-1/2 self-center py-3 text-sm font-bold tracking-widest"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full gap-6">
              <Image
                src={swades}
                width={230}
                height={100}
                alt="Swades"
                className="self-center lg:scale-90"
              />
              <div className="flex flex-col justify-center gap-8">
                <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">
                  Swades
                </span>
                <Link
                  href="https://swades.ecellvnit.org/"
                  target="_blank"
                  className="bg-transparent border-2 border-[#0298F9] text-[#0298F9] hover:bg-[#0298F9] hover:text-white transition-colors duration-300 uppercase text-center w-1/2 self-center py-3 text-sm font-bold tracking-widest"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
