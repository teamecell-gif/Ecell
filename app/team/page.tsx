"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

import bhatt_sir from "../../public/assets/team/bhatt_sir.png";
import karthik_sir from "../../public/assets/team/karthik_sir.png";

import agasti_sir from "../../public/assets/team/agasti_sir.jpeg";
import bhosale_sir from "../../public/assets/team/bhosale_sir.jpg";

import anush1 from "../../public/assets/team/Anushka25.jpg";

import prashant from "../../public/assets/team/Prashant.jpg";

import tanvi from "../../public/assets/team/tanvi1.jpeg";
import sram from "../../public/assets/team/Sram.jpeg";
import raksh from "../../public/assets/team/Rkashit.jpg";
import princ from "../../public/assets/team/princ.jpg";
import chavan from "../../public/assets/team/chavan.jpeg";
import sahil from "../../public/assets/team/Sahils.jpeg";
import arja from "../../public/assets/team/arja.jpeg";
import Aryan from "../../public/assets/team/AryanSingh.jpg";
import arpit from "../../public/assets/team/Arpi.png";
import prgya from "../../public/assets/team/Pragya.jpeg";
import mohit from "../../public/assets/team/mohit.jpg";
import dhruv from "../../public/assets/team/Dhrooooov.jpg";
import tanisha from "../../public/assets/team/Tanisha.jpg";
import chayan from "../../public/assets/team/chayan.jpg";
import khatri from "../../public/assets/team/khatri.jpg";
import abhijeet from "../../public/assets/team/abhijeet1.jpg";
import Link from "next/link";
const Team = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#0C0C0C] pt-10 pb-36">
        <div className="w-full h-full flex justify-center overflow-hidden">
          <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
            <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
              <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                Our Team
              </span>
              <svg
                className="px-5"
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
            <div className="grid grid-cols-1 md:grid-cols-3 justify-evenly items-center pt-20 gap-10">
              {/* Faculty Title */}
              <div className="md:col-span-3 lg:col-span-3 justify-center items-center flex flex-col gap-10">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xl:text-5xl font-semibold">
                  <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Faculty
                  </span>
                  <svg
                    width="350"
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
              </div>

              {/* Professor 1 */}
              <div>
                <div className="border-2 border-gradient-t-secondary scale-90">
                  <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)]">
                    <div className="relative w-full h-[320px]">
                      <Image
                        src={agasti_sir}
                        alt="agasti"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 mt-4">
                  <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Dr. Amrut Agasti
                  </span>
                  <span className="font-medium text-lg text-center text-white">
                    Professor Incharge
                  </span>
                </div>
              </div>

              {/* Professor 2 */}
              <div>
                <div className="border-2 border-gradient-t-secondary scale-90">
                  <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)]">
                    <div className="relative w-full h-[320px]">
                      <Image
                        src={chayan}
                        alt="chayanDas_sir"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 mt-4">
                  <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Dr. Chayan Das
                  </span>
                  <span className="font-medium text-lg text-center text-white">
                    Professor Incharge
                  </span>
                </div>
              </div>

              {/* Professor 3 */}
              <div>
                <div className="border-2 border-gradient-t-secondary scale-90">
                  <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)]">
                    <div className="relative w-full h-[320px]">
                      <Image
                        src={khatri}
                        alt="khatri_sir"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 mt-4">
                  <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Dr. Ashish P. Khatri
                  </span>
                  <span className="font-medium text-lg text-center text-white">
                    Professor Incharge
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pt-36 gap-10 px-2">
              <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-10">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xl:text-5xl font-semibold">
                  <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Core Committee
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
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 max-w-xs md:max-w-5xl">
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={abhijeet}
                            alt="Pres@abhijeet"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Abhijeet Singh
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        President
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="http://www.linkedin.com/in/abhijeet-singh-as1510"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:abhijeettsingh2715@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:8504827156 ">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={tanvi}
                            alt="vpres@tanvi"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Tanvi Malode
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Vice President
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/tanvi-malode-5744a4258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:malodetanvi01@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9096779472">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={prashant}
                            alt="PTLABDE"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Prashant T Labde
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Treasurer
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/prashanttlabde"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:Prashantlabade108@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:7499995479">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={sram}
                            alt="KD@ops"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        K D Sriram
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Corporate Communications
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="www.linkedin.com/in/dhana-sriram-katta-961b6a335"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:⁠kdsriram.11@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9130692448">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={anush1}
                            alt="Anushka@cops"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Anushka Kumari 
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Corporate Communications
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/anushkak0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:anushkak0954@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:8779165100">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={raksh}
                            alt="Anushka@cops"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Rakshit Singhvi 
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Corporate Communications
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/rakshit-singhvi-75252a239/"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:rakshitsinghvi2005@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9702696983">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={princ}
                            alt="princy@cops"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Prince kumar 
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Brand Marketing
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/prince-nirala-201546284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:princet905624@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9878259975">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={chavan}
                            alt="chavan@cops"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Saurabh Chavan
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Brand Marketing
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        
                        <Link href="mailto:chavansaurabh782@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:7841953918">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={Aryan}
                            alt="Aryan@tech"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Aryan Singh
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Technical Affairs
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="www.linkedin.com/in/aryan-singh0811"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:aryansingh81104@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:7985447278">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={arja}
                            alt="arja@planning"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Aarja Kaur Wadhwa 
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head Of Public Relations
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/aarja-kaur-wadhwa-773679365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:aarjakaurw@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:8767042611">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={sahil}
                            alt="sahil@pr"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Sahil Shetty
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head Of Public Relations
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="www.linkedin.com/in/sahillshetty"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:shetty.sahil2006@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9137702898">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={prgya}
                            alt="pragya@planning"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Pragya Chakravarty
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Operations and Planning
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="www.linkedin.com/in/pragya-chakravarty-a82209327"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:pragyac09@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9769091274">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={arpit}
                            alt="arpit@planning"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Arpit Sahu
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Operations and Planning
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/arpit-sahu-894058288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:arpit.shahu827@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:7897416094">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={mohit}
                            alt="mohit@planning"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Mohit Chavan 
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Operations and Planning
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link href="https://www.linkedin.com/in/mohit-chavan-5188761b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:mohitchavan917@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9322010629">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={dhruv}
                            alt="dhruv@growth"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Dhroov Jindal
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Growth & Partnerships
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link href="linkedin.com/in/dhroov-jindal">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:dhroovjindal@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:8950674313">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={tanisha}
                            alt="tanisha@growth"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Tanisha Kanchan 
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Growth & Partnerships
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link href="https://www.linkedin.com/in/tanisha-kanchan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:tanishakanchan20@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9695449226">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 bg-black">
          <Footer /></div>
        </div>
      
    </div>
  );
};
export default Team;
