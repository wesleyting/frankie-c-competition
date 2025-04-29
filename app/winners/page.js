"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function WinnersPage() {
  return (
    <div className="bg-black min-h-screen font-montserrat relative overflow-hidden">
      <img
        src="/brown-circle.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[800px] lg:w-[1200px] z-0 pointer-events-none "
      />

      <header className="w-full pt-3 sm:py-6 flex justify-center items-center bg-black z-10">
        <div className="flex items-center">
          <Link href="/" passHref aria-label="Go to homepage">
            <svg
              width="120"
              height="40"
              viewBox="0 0 506 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 sm:w-[160px] invert"
            >
              <path
                d="M0.25 2.8125H44.8125V23.0625H26.5625V42.25H42.8125V61.5H26.5625V104H0.25V2.8125ZM49.25 2.8125H67.875C80.2917 2.8125 88.6875 3.29167 93.0625 4.25C97.4792 5.20833 101.062 7.66667 103.812 11.625C106.604 15.5417 108 21.8125 108 30.4375C108 38.3125 107.021 43.6042 105.062 46.3125C103.104 49.0208 99.25 50.6458 93.5 51.1875C98.7083 52.4792 102.208 54.2083 104 56.375C105.792 58.5417 106.896 60.5417 107.312 62.375C107.771 64.1667 108 69.1458 108 77.3125V104H83.5625V70.375C83.5625 64.9583 83.125 61.6042 82.25 60.3125C81.4167 59.0208 79.1875 58.375 75.5625 58.375V104H49.25V2.8125ZM75.5625 20.125V42.625C78.5208 42.625 80.5833 42.2292 81.75 41.4375C82.9583 40.6042 83.5625 37.9583 83.5625 33.5V27.9375C83.5625 24.7292 82.9792 22.625 81.8125 21.625C80.6875 20.625 78.6042 20.125 75.5625 20.125ZM161.688 2.8125L176.75 104H149.812L148.5 85.8125H139.062L137.5 104H110.25L123.625 2.8125H161.688ZM147.75 67.875C146.417 56.4167 145.083 42.2708 143.75 25.4375C141.083 44.7708 139.417 58.9167 138.75 67.875H147.75ZM238 2.8125V104H214.938L201.25 58V104H179.25V2.8125H201.25L216 48.375V2.8125H238ZM309.312 2.8125L294.25 48.5L310.75 104H283.562L272.938 60.625V104H246.625V2.8125H272.938V42.125L284.625 2.8125H309.312ZM339.688 2.8125V104H313.375V2.8125H339.688ZM348.25 2.8125H392.125V23.0625H374.562V42.25H391V61.5H374.562V83.75H393.875V104H348.25V2.8125ZM481.562 46.9375H455.25V29.3125C455.25 24.1875 454.958 21 454.375 19.75C453.833 18.4583 452.604 17.8125 450.688 17.8125C448.521 17.8125 447.146 18.5833 446.562 20.125C445.979 21.6667 445.688 25 445.688 30.125V77.125C445.688 82.0417 445.979 85.25 446.562 86.75C447.146 88.25 448.458 89 450.5 89C452.458 89 453.729 88.25 454.312 86.75C454.938 85.25 455.25 81.7292 455.25 76.1875V63.5H481.562V67.4375C481.562 77.8958 480.812 85.3125 479.312 89.6875C477.854 94.0625 474.583 97.8958 469.5 101.188C464.458 104.479 458.229 106.125 450.812 106.125C443.104 106.125 436.75 104.729 431.75 101.938C426.75 99.1458 423.438 95.2917 421.812 90.375C420.188 85.4167 419.375 77.9792 419.375 68.0625V38.5C419.375 31.2083 419.625 25.75 420.125 22.125C420.625 18.4583 422.104 14.9375 424.562 11.5625C427.062 8.1875 430.5 5.54167 434.875 3.625C439.292 1.66667 444.354 0.6875 450.062 0.6875C457.812 0.6875 464.208 2.1875 469.25 5.1875C474.292 8.1875 477.604 11.9375 479.188 16.4375C480.771 20.8958 481.562 27.8542 481.562 37.3125V46.9375ZM505.062 83.375V104H486V83.375H505.062Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center px-4 py-16 z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 text-white font-bold text-center mb-6 z-10">
          Official Winners of Frankie C’s Naming Contest
        </h1>

        <p className="text-lg text-white z-10 mb-12 max-w-2xl px-3">
          Congratulations to all winners! Each winner listed below will receive
          a digital gift card via email. Prize fulfillment is expected to begin
          soon, and winners can expect to receive their prize email within
          approximately 4–6 weeks. The claim link will remain valid for 3
          months, and once activated, the digital gift card will remain valid
          for 6 months.
        </p>

        <div className="bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-xl p-8 max-w-3xl w-full text-center border border-white border-opacity-30">
          <h2 className="text-2xl font-bold mb-3">Contest Winners</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-white">
            <p>Jason N. — $192.30</p>
            <p>Ryan-Jay T. — $192.30</p>
            <p>Khalid E. — $192.30</p>
            <p>Casey M. — $192.30</p>
            <p>Quan L. — $192.30</p>
            <p>Ofir N. — $192.30</p>
            <p>Brandon M. — $192.30</p>
            <p>Chase F. — $192.30</p>
            <p>Thomas M. — $192.30</p>
            <p>Orie Z. — $192.30</p>
            <p>Catherine G. — $192.30</p>
            <p>Nell H. — $192.30</p>
            <p>Terron W. — $192.30</p>
            <p>Paul B. — $192.30</p>
            <p>Luis C. — $192.30</p>
            <p>Gary B. — $192.30</p>
            <p>Murad A. — $192.30</p>
            <p>Dylan K. — $192.30</p>
            <p>Benjamin S. — $192.30</p>
            <p>Benjamin G. — $192.30</p>
            <p>Michelle W. — $192.30</p>
            <p>Justin J. — $192.30</p>
            <p>Zachary G. — $192.30</p>
            <p>Stevan H. — $192.30</p>
            <p>Jack L. — $192.30</p>
            <p>Trevor T. — $192.30</p>
            <p>Wrene R. — $192.30</p>
            <p>Victor B. — $192.30</p>
            <p>Yheison G. — $192.30</p>
            <p>Chiyu R. — $192.30</p>
            <p>Laurie C. — $192.30</p>
            <p>Gail S. — $192.30</p>
            <p>Stetson P. — $192.30</p>
            <p>John M. — $192.30</p>
            <p>Austin L. — $192.30</p>
            <p>Dianna O. — $192.30</p>
            <p>Turlough B. — $192.30</p>
            <p>Jacob N. — $192.30</p>
            <p>Paul C. — $192.30</p>
            <p>Kaeokoa K. — $192.30</p>
            <p>Clay P. — $192.30</p>
            <p>Joey M. — $192.30</p>
            <p>Quinton S. — $192.30</p>
            <p>Cristian U. — $192.30</p>
            <p>Caleb G. — $192.30</p>
            <p>Ian K. — $192.30</p>
            <p>Alexis S. — $192.30</p>
            <p>David F. — $192.30</p>
            <p>Raymond B. — $192.30</p>
            <p>Isaac B. — $192.30</p>
            <p>Erick C. — $192.30</p>
            <p>Reta W. — $192.30</p>
          </div>
        </div>

        {/* Winner list component goes here, once available */}
      </main>

      <footer className="bg-black text-white px-12 py-16">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start max-w-lg">
            <div className="flex justify-center md:justify-start space-x-6 mb-3">
              <Link
                href="https://www.youtube.com/@FrankieCPoker"
                className="text-white hover:text-gray-300 transition"
              >
                <Youtube size={32} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://x.com/FrankieCucc"
                className="text-white hover:text-gray-300 transition"
              >
                <Twitter size={32} />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link
                href="https://www.instagram.com/frankie_cucc/?hl=en"
                className="text-white hover:text-gray-300 transition"
              >
                <Instagram size={32} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <div className="text-white text-lg font-semibold mt-3">
              <Link href="/official-rules" className="hover:underline">
                Official Rules
              </Link>
              <span className="mx-2">|</span>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
            <p className="mt-3 text-sm">
              If you need assistance or have questions about the contest,
              contact us at{" "}
              <a
                href="mailto:frankieccontest@gmail.com"
                className="text-white font-semibold underline"
              >
                frankieccontest@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="text-md max-w-lg lg:self-end">
            <div className="text-sm text-white font-semibold">
              Contest sponsored and run by <strong>ABC Media</strong> and{" "}
              <strong>Real Time Media</strong>.
            </div>
            <p className="text-xs text-gray-400 mt-6 max-w-xl mx-auto">
              Open only to legal residents of the 50 US/DC (excl. FL), 18+. Void
              in FL & where prohibited. Entry Period: 3/14/25 – 3/20/25. Voting:
              4/4/25 – 4/8/25. Subject to{" "}
              <Link href="/official-rules" className="underline">
                Official Rules
              </Link>
              . Sponsor: ABC Media LLC, c/o Silverberg, 2455 E Sunrise Blvd, St
              1204, Ft. Lauderdale, FL 33304.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
