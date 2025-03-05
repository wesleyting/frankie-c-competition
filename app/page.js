"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Set the end date to 6 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 6);

    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-3xl rounded-xl bg-gray-900 p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
          The Contest Will Open Soon
        </h1>

        {isExpired ? (
          <div className="text-center text-2xl font-semibold text-green-400">
            The contest is now open!
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-center text-xl font-medium text-white">
              Get ready! The contest goes live in:
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-lg bg-gray-800 p-4 text-center"
                >
                  <span className="text-3xl font-bold text-white md:text-4xl">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="mt-2 text-sm font-medium text-gray-300 md:text-base">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
