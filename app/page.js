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

  return (
    <div className="min-h-screen flex flex-col max-w-full font-montserrat">
      <header className="w-full pt-5 md:py-8 md:px-6 flex justify-center items-center bg-cBeige">
        <div className="flex items-center">
          <Image
            src="/frankie-name.png"
            alt="Logo"
            width={120}
            height={40}
            className="mr-4 md:w-[160px]"
          />
        </div>
      </header>
      <section className="px-6 pt-6 md:pt-10 bg-cBeige">
        <div className="max-w-[1440px] m-auto flex-1 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8">
            <h1 className="text-4xl md:text-8xl md:leading-[1.2] font-bold mb-3">
              Help us name our brownie & win...
            </h1>
            <div className="relative flex items-center">
              {/* Spiky Circle SVG to the right of the text */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={220}
                height={220}
                viewBox="0 0 278 278"
                className="absolute right-36 top-1/2 transform -translate-y-1/2 z-0 md:w-[220px]"
              >
                <path
                  d="M139 0.765279L167.042 33.2584L167.264 33.5157L167.585 33.4039L208.117 19.2852L216.156 61.4463L216.22 61.7801L216.554 61.8438L258.715 69.8826L244.596 110.415L244.484 110.736L244.742 110.958L277.235 139L244.742 167.042L244.484 167.264L244.596 167.585L258.715 208.117L216.554 216.156L216.22 216.22L216.156 216.554L208.117 258.715L167.585 244.596L167.264 244.484L167.042 244.742L139 277.235L110.958 244.742L110.736 244.484L110.415 244.596L69.8826 258.715L61.8438 216.554L61.7801 216.22L61.4463 216.156L19.2852 208.117L33.4039 167.585L33.5157 167.264L33.2584 167.042L0.765279 139L33.2584 110.958L33.5157 110.736L33.4039 110.415L19.2852 69.8826L61.4463 61.8438L61.7801 61.7801L61.8438 61.4463L69.8826 19.2852L110.415 33.4039L110.736 33.5157L110.958 33.2584L139 0.765279Z"
                  fill="#EE6826"
                />
              </svg>

              {/* Main text */}
              <span className="text-5xl md:text-9xl font-extrabold text-white relative z-10 text-stroke">
                $10,000!!!
              </span>

              {/* Orange text shadow */}
              <span className="text-5xl md:text-9xl text-stroke-orange font-extrabold absolute left-2 top-2 z-0">
                $10,000!!!
              </span>
            </div>
            <button className="bg-[#3D36EE] mt-12 mb-6 text-2xl text-white font-semibold py-4 px-9 rounded-full shadow-lg hover:bg-[#3530d1] focus:outline-none transition duration-300">
              Suggest a Name!
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/frankie-hero.png"
              alt="Person"
              width={500}
              height={400}
              className=""
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-cViolet">
        {/* Container with max-width */}
        <div className="max-w-[1200px] mx-auto relative">
          {/* Heart SVG (positioned top-right inside the container) */}
          <svg
            width="167"
            height="154"
            viewBox="0 0 167 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-14 w-40"
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
            className="absolute top-[280px] right-0 w-100"
          />

          {/* Content Section */}
          <div className="lg:flex lg:items-center lg:justify-between text-center">
            {/* Video/Image Section */}
            <div className="lg:w-4/6 mb-8 lg:mb-0">
              <div className="aspect-video w-full bg-gray-200 rounded-lg flex items-center justify-center">
                <Image
                  src="/video-placeholder.png"
                  alt="video placeholder"
                  width={600}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative">
                <h2 className="text-2xl mt-3 text-white text-left mb-4">
                  It will be the healthiest snack on the market. Best macros.
                  And something about the rules
                </h2>

                {/* Club SVG (Positioned Below the Heading) */}
                <svg
                  width="166"
                  height="150"
                  viewBox="0 0 166 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[25px] right-48 w-28 z-0 mt-4"
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
              Submit your name idea for our new protein bar and get a chance to
              win $10,000!
            </p>
            <p className="marquee-text text-primary-foreground text-2xl font-semibold whitespace-nowrap">
              Submit your name idea for our new protein bar and get a chance to
              win $10,000!
            </p>
            <p className="marquee-text text-primary-foreground text-2xl font-semibold whitespace-nowrap">
              Submit your name idea for our new protein bar and get a chance to
              win $10,000!
            </p>
            <p className="marquee-text text-primary-foreground text-2xl font-semibold whitespace-nowrap">
              Submit your name idea for our new protein bar and get a chance to
              win $10,000!
            </p>
          </div>
        </div>
      </div>
      <section className="w-full bg-cBeige ">
        {/* Header above the form */}
        <div className=" max-w-3xl text-center mt-8 relative z-10  mx-auto">
          <h2 className="text-4xl font-bold">
            Your idea could win you $10,000!
          </h2>
        </div>
      </section>
      <section className="pt-6 pb-12 px-6 bg-background flex flex-col items-center justify-center z-10 bg-cBeige relative overflow-hidden">
        {/* Horizontal Marquee Background */}
        <div className="absolute inset-0 flex flex-col items-center overflow-hidden">
          <div className="marquee">
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

        <div className="z-20 w-full max-w-3xl">
          <iframe
            id="JotFormIFrame-250546017685056"
            title="Form"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/250546017685056"
            style={{
              width: "100%",
              height: "100vh",
            }}
            scrollable="no"
          />
        </div>

        {/*  
        <Card className="w-full max-w-2xl border-2 border-black px-1 relative z-10">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="flex gap-x-4">
                <div className="flex-1">
                  <Label htmlFor="first-name">First Name*</Label>
                  <Input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="border-2 border-[#CAC0CD] rounded-lg bg-[#FAEDFD] h-10 mt-2"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-2 border-[#CAC0CD] rounded-lg bg-[#FAEDFD] h-10 mt-2"
                  />
                </div>
              </div>


              <div>
                <Label htmlFor="name-suggestion-1">Name Suggestion 1*</Label>
                <Input
                  id="name-suggestion-1"
                  type="text"
                  value={nameSuggestion}
                  onChange={(e) => setNameSuggestion(e.target.value)}
                  required
                  className="border-2 border-[#CAC0CD] rounded-lg bg-[#FAEDFD] h-10 mb-4 mt-2"
                />

                <Label htmlFor="name-suggestion-2">Name Suggestion 2*</Label>
                <Input
                  id="name-suggestion-2"
                  type="text"
                  value={nameSuggestion}
                  onChange={(e) => setNameSuggestion(e.target.value)}
                  required
                  className="border-2 border-[#CAC0CD] rounded-lg bg-[#FAEDFD] h-10 mb-4 mt-2"
                />

                <Label htmlFor="name-suggestion-3">Name Suggestion 3*</Label>
                <Input
                  id="name-suggestion-3"
                  type="text"
                  value={nameSuggestion}
                  onChange={(e) => setNameSuggestion(e.target.value)}
                  required
                  className="border-2 border-[#CAC0CD] rounded-lg bg-[#FAEDFD] h-10 mb-4 mt-2"
                />
              </div>

              <div className="w-full flex justify-center">
                <Button
                  type="submit"
                  className="bg-[#3D36EE] text-2xl text-white font-semibold py-7 px-8 rounded-full shadow-lg hover:bg-[#3530d1] focus:outline-none transition duration-300 mx-auto"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        */}
      </section>
      <footer className="bg-cBeige pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Youtube size={32} />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={32} />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram size={32} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
