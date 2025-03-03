"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Instagram, Twitter, Youtube } from "lucide-react";

function LandingPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nameSuggestion, setNameSuggestion] = useState("");

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col max-w-full font-montserrat">
      <header className="w-full pt-3 sm:py-6 flex justify-center items-center bg-cBeige lg:pt-10">
        <div className="flex items-center">
          <Link href="/" passHref>
            <svg
              width="120"
              height="40"
              viewBox="0 0 506 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 sm:w-[160px]"
            >
              <path
                d="M0.25 2.8125H44.8125V23.0625H26.5625V42.25H42.8125V61.5H26.5625V104H0.25V2.8125ZM49.25 2.8125H67.875C80.2917 2.8125 88.6875 3.29167 93.0625 4.25C97.4792 5.20833 101.062 7.66667 103.812 11.625C106.604 15.5417 108 21.8125 108 30.4375C108 38.3125 107.021 43.6042 105.062 46.3125C103.104 49.0208 99.25 50.6458 93.5 51.1875C98.7083 52.4792 102.208 54.2083 104 56.375C105.792 58.5417 106.896 60.5417 107.312 62.375C107.771 64.1667 108 69.1458 108 77.3125V104H83.5625V70.375C83.5625 64.9583 83.125 61.6042 82.25 60.3125C81.4167 59.0208 79.1875 58.375 75.5625 58.375V104H49.25V2.8125ZM75.5625 20.125V42.625C78.5208 42.625 80.5833 42.2292 81.75 41.4375C82.9583 40.6042 83.5625 37.9583 83.5625 33.5V27.9375C83.5625 24.7292 82.9792 22.625 81.8125 21.625C80.6875 20.625 78.6042 20.125 75.5625 20.125ZM161.688 2.8125L176.75 104H149.812L148.5 85.8125H139.062L137.5 104H110.25L123.625 2.8125H161.688ZM147.75 67.875C146.417 56.4167 145.083 42.2708 143.75 25.4375C141.083 44.7708 139.417 58.9167 138.75 67.875H147.75ZM238 2.8125V104H214.938L201.25 58V104H179.25V2.8125H201.25L216 48.375V2.8125H238ZM309.312 2.8125L294.25 48.5L310.75 104H283.562L272.938 60.625V104H246.625V2.8125H272.938V42.125L284.625 2.8125H309.312ZM339.688 2.8125V104H313.375V2.8125H339.688ZM348.25 2.8125H392.125V23.0625H374.562V42.25H391V61.5H374.562V83.75H393.875V104H348.25V2.8125ZM481.562 46.9375H455.25V29.3125C455.25 24.1875 454.958 21 454.375 19.75C453.833 18.4583 452.604 17.8125 450.688 17.8125C448.521 17.8125 447.146 18.5833 446.562 20.125C445.979 21.6667 445.688 25 445.688 30.125V77.125C445.688 82.0417 445.979 85.25 446.562 86.75C447.146 88.25 448.458 89 450.5 89C452.458 89 453.729 88.25 454.312 86.75C454.938 85.25 455.25 81.7292 455.25 76.1875V63.5H481.562V67.4375C481.562 77.8958 480.812 85.3125 479.312 89.6875C477.854 94.0625 474.583 97.8958 469.5 101.188C464.458 104.479 458.229 106.125 450.812 106.125C443.104 106.125 436.75 104.729 431.75 101.938C426.75 99.1458 423.438 95.2917 421.812 90.375C420.188 85.4167 419.375 77.9792 419.375 68.0625V38.5C419.375 31.2083 419.625 25.75 420.125 22.125C420.625 18.4583 422.104 14.9375 424.562 11.5625C427.062 8.1875 430.5 5.54167 434.875 3.625C439.292 1.66667 444.354 0.6875 450.062 0.6875C457.812 0.6875 464.208 2.1875 469.25 5.1875C474.292 8.1875 477.604 11.9375 479.188 16.4375C480.771 20.8958 481.562 27.8542 481.562 37.3125V46.9375ZM505.062 83.375V104H486V83.375H505.062Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </header>

      <section className="px-6 pt-3  bg-cBeige 2xl:pt-6">
        <div className=" lg:max-w-[1200px] 2xl:max-w-[1420px] m-auto flex-1 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-2 max-w-[600px] md:max-w-[800px]">
            <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] lg:text-6xl lg:leading-[1.2] lg:mb-0 2xl:text-7xl 2xl:leading-[1.2] leading-[1.4] font-bold mb-3 sm:mb-6 md:mb-16 capitalize text-center lg:text-left">
              Help us
              <span className="relative inline-block px-2">
                {/* Squiggle Image Behind */}
                <img
                  src="/squiggle.png" // Replace with actual image path
                  alt="Squiggle"
                  className="absolute w-[100px] sm:w-[135px] md:w-[150px] lg:w-[230px] translate-y-[8px] md:translate-y-0"
                />
                {/* The word "name" */}
                <span className="relative z-10 md:pl-3">name</span>
              </span>
              Our brownie & get a chance to win...
            </h1>
            <div className="relative md:justify-start text-center lg:text-left lg:mt-5 2xl:mt-16">
              {/* Main Prize Text */}
              <span className="text-6xl sm:text-8xl md:text-9xl lg:text-8xl 2xl:text-9xl font-extrabold text-white relative text-stroke z-10">
                $10,
                <span className="relative inline-block">
                  {/* Spiky Circle PNG Behind */}
                  <img
                    src="/star.png" // Replace with actual image path
                    alt="Star"
                    className="absolute w-[220px] -translate-y-[48px] translate-x-[72px] hidden md:block lg:hidden 2xl:block"
                  />
                  <span className="relative">000!!!</span>{" "}
                  {/* The Second "0" */}
                </span>
                {/* Second $10,000!!! (Behind & Slightly Lower/Right) */}
                <span
                  className="absolute text-6xl sm:text-8xl md:text-9xl lg:text-8xl left-0 text-stroke-orange font-extrabold z-[-1] 
                     translate-x-[5px] translate-y-[6px] md:translate-x-[10px] md:translate-y-[12px] 2xl:text-9xl"
                >
                  $10,000!!!
                </span>
              </span>
            </div>

            <div className="flex justify-center lg:justify-start md:mt-6 2xl:pb-10">
              <button
                onClick={scrollToForm}
                className="bg-[#3D36EE] mt-10 sm:mt-12 mb-3 text-2xl text-white font-semibold py-4 px-9 rounded-full shadow-lg hover:bg-[#3530d1] focus:outline-none transition duration-300"
              >
                Suggest a Name!
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/frankie-hero.png"
              alt="Person"
              width={400}
              height={400}
              className="md:w-[450px] 2xl:w-[550px]"
            />
          </div>
        </div>
      </section>
      <section className="py-10 px-6 bg-cViolet lg:pb-16 z-[-2] overflow-hidden">
        {/* Container with max-width */}
        <div className="max-w-[1200px] mx-auto relative">
          {/* Heart SVG (positioned top-right inside the container) */}
          <svg
            width="167"
            height="154"
            viewBox="0 0 167 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[200px] left-[-50] w-40 hidden xl:block z[-1]"
          >
            <path
              d="M165.409 34.5977C160.274 10.758 137.387 -3.94083 114.163 1.06121C95.4101 5.1003 82.321 21.3995 80.636 39.9763C71.4489 23.7435 52.9066 14.7239 34.1535 18.763C10.9249 23.766 -3.97845 46.0447 1.15816 69.8934C3.74999 81.927 10.3898 89.3931 20.0884 96.8243L105.103 153.384L159.215 66.8587C165.002 56.0924 167.998 46.6222 165.409 34.5977Z"
              fill="#C94BF0"
            />
          </svg>

          {/* Image Below the Heart */}
          <Image
            src="/healthy-tag.png" // Replace with your actual image path
            alt="Decorative Element"
            width={350}
            height={350}
            className="absolute top-[50px] right-[-200px] w-100 hidden xl:inline-block xl:z-[-1]"
          />

          {/* Content Section */}
          <div className="lg:items-center xl:justify-between text-center max-w-[600px] lg:max-w-[800px] m-auto mt-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-8 lg:mb-12">
              The Perfect Brownie—Now It Needs a Name!
            </h2>
            {/* Video/Image Section */}
            <div className=" mb-8 lg:mb-0">
              {/* YouTube Embed */}
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/EvznWmLGWC8?rel=0"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative">
                <p className="text-lg lg:text-2xl text-white text-left max-w-3xl mx-auto mt-3 z-10 lg:mt-6">
                  Watch the video to see how it all came together, then submit
                  your <span className="font-bold">best name idea!</span>
                </p>

                {/* Club SVG (Positioned Below the Heading) */}
                <svg
                  width="166"
                  height="150"
                  viewBox="0 0 166 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[60px] right-40 w-28 z-0 opacity-60 z-[1] lg:top-[30px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M107.838 140.09C99.2897 135.544 93.1006 128.299 89.7626 119.963C89.0024 122.801 87.9109 125.598 86.4724 128.303C76.2518 147.521 52.3867 154.815 33.1683 144.595C13.95 134.374 6.65592 110.509 16.8766 91.2907C21.6196 82.3721 29.3011 76.0216 38.093 72.7976L0.191165 68.7045L25.8341 20.4871L50.4166 49.624C48.1747 40.5321 49.1459 30.6131 53.8888 21.6947C64.1095 2.47632 87.9746 -4.81775 107.193 5.40293C126.411 15.6236 133.705 39.4886 123.485 58.707C121.887 61.7116 119.955 64.4247 117.76 66.825C126.621 64.8436 136.206 65.8972 144.85 70.4946C164.069 80.7153 171.363 104.58 161.142 123.799C150.921 143.017 127.056 150.311 107.838 140.09Z"
                    fill="#EE6826"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-primary py-2 overflow-hidden z-10">
        <div className="relative">
          <div className="marquee-container flex gap-x-0 animate-marquee">
            {/* Duplicate the text for seamless looping */}
            <p className="marquee-text text-primary-foreground text-2xl font-semibold whitespace-nowrap">
              Submit your name idea for our new brownie for a chance to win
              $10,000!
            </p>
            <p className="marquee-text text-primary-foreground text-2xl font-semibold whitespace-nowrap">
              Submit your name idea for our new brownie for a chance to win
              $10,000!
            </p>
            <p className="marquee-text text-primary-foreground text-2xl font-semibold whitespace-nowrap">
              Submit your name idea for our new brownie for a chance to win
              $10,000!
            </p>
            <p className="marquee-text text-primary-foreground text-2xl font-semibold whitespace-nowrap">
              Submit your name idea for our new brownie for a chance to win
              $10,000!
            </p>
          </div>
        </div>
      </div>
      <section className="w-full bg-cBeige z-10">
        {/* Header above the form */}
        <div
          className=" max-w-3xl lg:max-w-4xl text-center mt-8 relative z-10  mx-auto md:mt-12 lg:mb-3 lg:mt-14"
          ref={formRef}
        >
          <h2 className="text-3xl font-bold lg:text-5xl">
            Your idea could win you $10,000!
          </h2>
        </div>
      </section>
      <section className="pt-6 pb-100 px-6 bg-background flex flex-col items-center justify-center z-10 bg-cBeige relative h-full">
        {/* Horizontal Marquee Background */}
        <div className="absolute inset-0 flex flex-col items-center overflow-hidden hidden lg:block">
          <div className="marquee mt-12">
            <div className="marquee__track to-right">
              <div className="marquee__text">
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
              </div>
            </div>

            <div className="marquee__track to-left">
              <div className="marquee__text">
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
              </div>
            </div>
            <div className="marquee__track to-right">
              <div className="marquee__text">
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
              </div>
            </div>

            <div className="marquee__track to-left">
              <div className="marquee__text">
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
                <span className="frankie brownie text-stroke">FRANKIE C</span>
              </div>
            </div>

            <div className="marquee__track to-right">
              <div className="marquee__text">
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
                <span className="frankie">FRANKIE C</span>
              </div>
            </div>
          </div>
        </div>

        <div className="z-20 w-full h-full max-w-3xl">
          <iframe
            id="JotFormIFrame-250546017685056"
            title="Form"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/250546017685056"
            style={{
              width: "100%",
              height: "1000px",
            }}
            className="md:h-[2000px]"
            scrollable="no"
          />
        </div>
      </section>
      <footer className="bg-black text-white px-6">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0 px-12 py-16">
          {/* Left Section: Social Media & Links */}
          <div className="flex flex-col items-center md:items-start">
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-6 mb-3">
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition"
              >
                <Youtube size={32} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition"
              >
                <Twitter size={32} />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition"
              >
                <Instagram size={32} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>

            {/* Links Section */}
            <div className="text-white text-lg font-semibold mt-5">
              <Link href="#" className="hover:underline">
                Official Rules
              </Link>
              <span className="mx-2">|</span>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Right Section: Accessibility Notice */}
          <div className="text-md max-w-lg lg:self-end">
            <p>
              We are committed to ensuring accessibility. If you need assistance
              entering this contest, please contact
              <a
                href="mailto:support@frankieccontest.com"
                className="text-white font-semibold underline ml-1"
              >
                support@frankieccontest.com
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
