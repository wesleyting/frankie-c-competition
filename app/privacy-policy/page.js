import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Frankie C Contest",
  description:
    "Read our Privacy Policy to understand how we handle your data and keep your information secure.",
};

export default function PrivacyPolicy() {
  return (
    <div className="text-black font-montserrat bg-cBeige min-h-screen flex flex-col bg-cBeige">
      <header className="w-full pt-3 sm:py-6 flex justify-center items-center bg-cBeige z-10">
        <div className="flex items-center">
          <Link href="/" passHref aria-label="Go to homepage">
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

      {/* Privacy Policy Content */}
      <main className="max-w-4xl mx-auto p-6 lg:p-10 flex-1">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>

        <div className="text-lg text-gray-800 space-y-6 leading-relaxed">
          <p>
            ABC Media, LLC (“ABC”, “We” or “Our”) wants to make your online and
            mobile experiences satisfying and safe. Our aim is to safeguard the
            privacy and security of your personal information. At all times we
            comply with applicable laws and regulations governing the
            confidentiality and security of information we receive and maintain.
          </p>

          <p>
            We receive and process personal information pursuant to rules and
            regulations found on this website and to keep you informed of
            product launches or other matters as a marketing purpose for our
            business and companies we currently or in the future may work with
            or agree on sharing marketing information, including the information
            we collect from you. The personal information that you or our
            clients provide to us is used to perform the various services that
            are described in the rules and regulations found on this website and
            for product launches and marketing efforts.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            What information do we obtain about you, how do we obtain it and
            what do we use it for?
          </h2>
          <p>
            We collect your personal information when you register with us,
            express an interest in obtaining information about us or our
            products and services, participate in activities on our website or
            otherwise contact us.
          </p>
          <p>
            We use your personal information to provide you with notices about
            our contest, products, or marketing, and your submission, including
            but not limited to winning or interest in the product, to carry out
            our performance of the rules, laws and marketing efforts. Further,
            per our rules, we may publish and display and may have others
            publish and display (on websites and social media) the name of
            winners, their submission, and the amount of prize money (and any
            other information required by the rules or law).
          </p>

          <p>
            We also use your personal information when replying to you via the
            support email, and in any other way we may describe when you provide
            the information.{" "}
          </p>

          <p>
            We also use your personal information to market products or services
            related to your submission based on your submission.{" "}
          </p>

          <p>
            Generally, you control the amount and type of information you
            provide to us when using our websites, but we require certain
            information for you to properly enter your submission or vote. The
            personal information that we collect depends on the context of your
            interaction with our websites, the choices you make, your level of
            participation and the products and features you use.{" "}
          </p>

          <p>
            We collect personal information through our websites or (text or
            email) message service or receive personal information about you to
            enable us to provide our online, email and text message services.
            When we say personal information, we mean information that is about
            you or that can help identify you. You may be asked to provide
            personal information such as your name, address, phone number,
            Social Security number, date of birth, e-mail address, bank account
            details, credit card and/or debit card information. We may also
            collect your IP address.
          </p>

          <p>
            We use Social Security numbers for many purposes, including to file
            tax forms related to any value paid to you, including but not
            limited to a W-9 and/or 1099, and to comply with federal and state
            laws such as tax laws and anti-money-laundering laws. We may also
            receive personal information about you from third parties in
            connection with verification of your identity and services.{" "}
          </p>

          <p>
            We may share your information with companies whose products and
            services we promote, sponsor or identify on our website and with
            other service providers or state/governmental agencies as necessary
            to process a transaction or service your account or provide services
            to our clients or that you otherwise consent to. All such parties
            will be obligated to maintain the confidentiality and security of
            your personal information and, except as may be required by law or
            governmental regulation or as consented by you, will be prohibited
            from further disclosing the information except in furtherance of the
            purposes for which it was disclosed, in which case such further
            disclosure will be subject to the same confidentiality and security
            obligations. We will not disclose your personal information to
            anyone outside these parties or sell to any parties for unsolicited
            marketing purposes. At your direction, we may share your information
            with third parties on a referral basis in connection with products
            and/or services listed on our website but not directly offered by
            us.{" "}
          </p>

          <p>
            Your personal information is processed and stored in the United
            States and may be transferred to, processed and stored in countries
            outside the United States by our service providers, all in
            accordance with this statement. We may also disclose your personal
            information to other overseas affiliates and service providers who
            assist us in supplying our services or who perform functions on our
            behalf, all in accordance with this Statement.{" "}
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Data Collection Technologies
          </h2>
          <p>
            In order to improve the quality of our website and services, we may
            from time to time send you what is known as a "cookie" as permitted
            by applicable laws and regulations. A cookie is a piece of text that
            a website transfers to your computer's hard drive. This cookie does
            not allow us access to your hard drive, but it assists in
            identifying, for example, whether you have visited our website on a
            previous occasion. Only the site that posted the cookie can read it.
          </p>

          <p>
            You may refuse to accept browser cookies by activating the
            appropriate setting on your browser. However, if you select this
            setting you may be unable to access certain parts of our website or
            participate in submissions or voting. Unless you have adjusted your
            browser setting so that it will refuse cookies, our system will
            issue cookies when you direct your browser to our website.{" "}
          </p>

          <p>
            Please note that the websites to which this site may be linked may
            also make use of their own cookies to collect information from you.
            Most browsers will automatically accept a cookie, but it may be
            possible to set your browser to notify you prior to a cookie being
            sent at which point you can accept or reject it.{" "}
          </p>

          <p>
            Additionally, we may collect information through the use of pixels,
            device IDs, cookies tracking, IP tracking, and similar technologies.
            A pixel is a line of code that is used by a website or third party
            to assign online activities to a computer or browser. The use of a
            pixel allows websites and us to record, for example, that a user has
            visited a particular website. Additional information from an earlier
            period or interaction may be included in the pixel. Currently, we do
            not respond to "Do Not Track" signals from browsers. The use of
            cookie tracking and IP tracking is for contest security and fraud
            prevention, including to prevent duplicate votes.{" "}
          </p>

          <p>
            If you access an online service maintained by us, we may use a tool
            called "Google Analytics" which transmits website traffic data to
            Google servers in the United States. Google Analytics does not
            identify individual users or associate your IP address with any
            other data held by Google. We use the information we get from Google
            Analytics to help us understand website traffic and webpage usage.
            We do not combine the information collected through the use of
            Google Analytics with personally identifiable information. Google's
            ability to use and share information collected by Google Analytics
            is restricted by the Google Analytics Terms of Use and the Google
            Privacy Policy. You can opt out of Google Analytics if you disable
            or refuse the cookie, disable JavaScript, or use the opt-out service
            provided by Google.{" "}
          </p>

          <p>
            We may share the information we collect via cookies and Google
            Analytics with our related entities, customers or those companies
            that have product or services listed or identified on our website
            including entities located outside of the United States who assist
            us in supplying our services including through data storage
            solutions, back-up services and IT support. These entities are
            generally located in the United States and Canada. We may also
            disclose it to others if required to do so by law.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Third Party Collection of Personal Information
          </h2>
          <p>
            Links to third-party websites may be provided on this site for
            informational or other purposes. We are not responsible for any
            personal information you may choose to submit to a third-party
            website accessed from this site.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Security Precautions to Protect Personal Information
          </h2>
          <p>
            We employ appropriate administrative, technical and physical
            safeguards designed to protect your personal information and to
            ensure that it is not accessed by unauthorized persons. Information
            may be encrypted for transfer wherever this is possible. Our
            security procedures may require you to provide proof of
            identification before we will release personal information to you.
            This proof may be in addition to any password required to gain
            access to our online service. Multiple incorrect attempts or
            invalidation will result in a lockout from the information. We
            undergo periodic reviews of our security policies and procedures to
            help ensure that our systems are secure and protected.
          </p>

          <p>
            You should never divulge your identification numbers, username, or
            password to anyone else. You should also never write your password
            down or store it on your computer and you should make sure you
            change it regularly. If you have further questions about Identity
            Theft, you may find the US Federal Trade Commission website helpful.{" "}
          </p>

          <p>
            Users will only receive text messages if they have provided a mobile
            phone number and have consented to such service. Text messages will
            be sent in accordance with the terms of consent and any applicable
            terms and conditions.{" "}
          </p>
          <h2 className="text-2xl font-semibold mt-6">
            Accessing and Updating Your Information
          </h2>
          <p>
            You may request a copy of the information that we hold about you by
            contacting us at the address below. There may be a small charge for
            this service unless prohibited by law. We also try to ensure that
            all information we hold about you is accurate. If you find any
            inaccuracies we will delete these or correct them promptly, subject
            to our policies and procedures. You should immediately report any
            updates in contact information. Not having your current contact
            information may result in legal or government notices forwarded from
            our office to you being missed or not timely received. Communication
            with you may be impeded if the information we hold is inadequate or
            inaccurate.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Additional Information for California Consumers
          </h2>

          <p>
            In addition to the information provided above, if you are a current
            resident of California, you may have certain rights regarding your
            personal information. For those that meet the definition of a
            business under the California Consumer Privacy Act (CCPA), we will
            assist those clients, to the extent possible, with the fulfillment
            of their obligations to respond to your requests. These may include,
            depending on the circumstance, the right to access the personal
            information that has been collected about you in the past twelve
            months; delete your personal information; restrict our use of your
            personal information; and opt-out from the sale of your personal
            information (if applicable). We will not discriminate against
            consumers for exercising their rights under the CCPA. If you would
            like to discuss or exercise the rights you may have, feel free to
            contact us via email or mail as described in the section "How to
            Contact Us".
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Additional Information for EU/EEA Residents
          </h2>
          <p>
            In addition to the information provided above, if you are a current
            resident of an EU/EEA country, you may have certain rights regarding
            your personal information. We will assist our data controller
            clients, to the extent possible, with the fulfillment of their
            obligations to respond to your requests. These may include,
            depending on the circumstance, the right to access your personal
            information; rectify the personal information we hold about you;
            erase your personal information; restrict our use of your personal
            information; object to our use of your personal information; receive
            your personal information in a usable electronic format and transmit
            it to a third party (also known as the right of data portability);
            lodge a complaint with your local data protection authority; and
            withdraw any consent you have given to the uses of your personal
            information. If you would like to discuss or exercise the rights you
            may have, feel free to contact us.
          </p>

          <p>
            This Privacy Statement only applies to our websites and does not
            apply to any websites from which you may have linked to this website
            or to any website to which you may link from this website.{" "}
          </p>

          <h2 className="text-2xl font-semibold mt-6">How to Contact Us</h2>
          <p>
            If you have any questions about this statement, you may contact our
            US Privacy Office by mail to:{" "}
          </p>
          <p className="text-lg font-semibold">
            ABC Media, LLC <br />
            2455 E Sunrise Blvd #1204 <br />
            Ft Lauderdale, FL 33304 <br />
            Attention: Silverberg & Weiss
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Changes to Privacy Statement
          </h2>
          <p>
            We may change this Privacy Statement from time to time. Each time
            you visit the website, please see the "Effective Date" to determine
            if it has been revised since the last time you entered the site...
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Effective Date: <strong>March 1, 2022</strong> <br />
            Last Revised: <strong>February 26, 2025</strong>
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 font-semibold hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full pb-6 pt-3 sm:pt-8 flex justify-center items-center bg-cBeige">
        <div className="flex space-x-6">
          <Link
            href="https://www.youtube.com/@FrankieCPoker"
            className="text-black hover:text-gray-600 transition"
          >
            <Youtube size={32} />
            <span className="sr-only">YouTube</span>
          </Link>

          <Link
            href="https://x.com/FrankieCucc"
            className="text-black hover:text-gray-600 transition"
          >
            <Twitter size={32} />
            <span className="sr-only">Twitter (X)</span>
          </Link>

          <Link
            href="https://www.instagram.com/frankie_cucc/?hl=en"
            className="text-black hover:text-gray-600 transition"
          >
            <Instagram size={32} />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
