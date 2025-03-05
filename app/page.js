"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Set the end date to March 14, 2025, at 12:00 AM Pacific Time
    const endDate = new Date("2025-03-14T00:00:00-07:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-cBeige min-h-screen font-montserrat relative overflow-hidden">
      <header className="w-full pt-3 sm:py-6 flex justify-center items-center bg-cBeige z-10">
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

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-250px)] z-10">
        <div className="w-full max-w-4xl p-8 relative">
          <div className="absolute inset-0  pointer-events-none max-w-4xl">
            {/* Clubs (♣️) */}
            <img
              src="/clubs.png"
              alt="Clubs"
              className="floating-suit-2 top-[24%] right-[-4%] sm:block"
            />
            {/* Hearts (♥️) */}
            <img
              src="/hearts.png"
              alt="Hearts"
              className="floating-suit-4 bottom-[-18%] right-[0%] sm:block"
            />
            {/* Spades (♠️) */}
            <img
              src="/spades.png"
              alt="Spades"
              className="floating-suit-3 bottom-[-20%] left-[-6%] sm:block"
            />
            {/* Diamonds (♦️) */}
            <img
              src="/diamonds.png"
              alt="Diamonds"
              className="floating-suit-1 top-[40%] left-[0%] sm:block"
            />
          </div>

          <h1 className="mb-6 xl:mb-8 text-center text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            Start Drafting Your $10,000 Idea!
          </h1>

          <div className="space-y-6">
            <p className="text-center text-2xl font-medium text-black mb-16 lg:mb-[150px]">
              🚨 Finalizing Contest Details. Goes Live In:
            </p>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 max-w-4xl m-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-lg bg-white py-8 md:py-12 text-center border-2 border-black z-10"
                >
                  <span className="text-5xl font-bold text-black md:text-6xl mb-4">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="mt-2 text-lg font-medium text-black md:text-2xl">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
