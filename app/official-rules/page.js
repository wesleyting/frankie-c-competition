import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export const metadata = {
  title: "Official Rules | Frankie C Contest",
  description:
    "Read the official rules for the Frankie C Contest. Learn how to enter, eligibility requirements, judging criteria, prize details, and more.",
};

export default function OfficialRules() {
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
        <h1 className="text-4xl font-bold text-center mb-6">Official Rules</h1>

        <ul className="list-disc list-inside m-auto text-md mb-6">
          <li className="font-semibold mt-6">
            VOID IN FLORIDA AND WHERE PROHIBITED BY LAW.
          </li>
          <li className=" font-semibold">
            ALL DISPUTES WILL BE RESOLVED SOLELY BY BINDING ARBITRATION,
            ENTRANTS WAIVE THE TRIAL BY A JURY AND ENTRANTS WAIVE THE ABILITY TO
            BRING CLAIMS IN A CLASS ACTION FORMAT.
          </li>
        </ul>

        <div className="text-lg text-gray-800 space-y-6 leading-relaxed">
          <p>
            BY ENTERING (OR OTHERWISE PARTICIPATING IN) THE CONTEST, YOU AGREE
            TO THESE OFFICIAL RULES, WHICH ARE A BINDING CONTRACT, SO READ THEM
            CAREFULLY BEFORE ENTERING. WITHOUT LIMITATION, THIS CONTRACT
            INCLUDES INDEMNITIES TO THE CONTEST PARTIES FROM YOU AND A
            LIMITATION OF YOUR RIGHTS AND REMEDIES.
          </p>

          <ol className="list-decimal space-y-8">
            <li>
              <p>
                <strong>ELIGIBILITY:</strong> Frankie's Naming Contest
                (“Contest”) is open only to legal residents of the fifty (50)
                United States (excluding Florida) and the District of Columbia,
                who are eighteen (18) years of age or older as of the date of
                entry. Employees, officers and directors of ABC Media LLC
                (“Sponsor”), Realtime Media LLC (“Administrator”) and their
                respective parent companies, affiliates, subsidiaries,
                advertising, contest, fulfillment and marketing agencies
                (collectively, the “Contest Parties”), their immediate family
                members and those living in the same household as such
                individuals (whether legally related or not), are not eligible
                to participate in the Contest or win a prize. For purposes of
                this Contest, immediate family members are defined as spouse,
                partner, parents, legal guardians, in-laws, grandparents,
                siblings, children and grandchildren and their respective
                spouses, and those living in the same household shall mean
                people who share the same residence at least three (3) months a
                year, whether legally related or not. In the event that a
                household, based on address, enters the Contest using more than
                five (5) unique email addresses, all of the Contest entries
                associated with that household (determined by Sponsor or
                Administrator at their sole discretion) will be disqualified.
                Void in Florida and where prohibited by law. All federal, state
                and local laws and regulations apply. By participating in the
                Contest, you unconditionally accept and agree to comply with and
                abide by these “Official Rules” and the decisions of Sponsor,
                including the interpretation of these Official Rules,
                administration of the Contest, selection of the winning Entries,
                and Sponsor's exercise of discretion, which will be final,
                non-appealable, and binding in all respects.
              </p>
            </li>

            <li>
              <p>
                <strong>TIMING:</strong> The Contest entry period begins at or
                about 12:01 a.m. Pacific Time (“PT”) on March 14, 2025 and ends
                at 11:59:59 p.m. PT on March 20, 2025 (the “Entry Period”). The
                Entry Period is followed by a “Judging Period” which begins
                March 21, 2025 and ends April 3, 2025. The top three (3) entries
                will then be posted online for public voting, which begins at
                9:00 a.m. PT on April 4, 2025 and ends at 11:59:59 p.m. PT on
                April 8, 2025 (“Voting Period”). Winners will be announced on or
                around April 17, 2025. The Entry Period, Judging Period, and
                Voting Period are collectively referred to as the “Contest
                Period”. The designated computer clock of the Sponsor is the
                official time-keeping device in the Contest. The winning name
                (i.e., the Finalist Entry receiving the most votes) may be
                publicly revealed as early as April 9, 2025, including on social
                media or through other promotional content, even if individual
                winners have not yet been verified or announced.
              </p>
            </li>

            <li>
              <p>
                <strong>HOW TO PARTICIPATE:</strong> During the Entry Period,
                visit FrankieCContest.com (“Website”) and complete and submit an
                official entry form, including your full name, email address and
                your suggested name for Frankie C's new protein brownie product.
                You will receive one (1) “Entry” into the Contest, subject to
                the limit and Entry Requirements noted below. By entering the
                Contest you agree to receive marketing communications via email
                from the Sponsor, its affiliates or transferees. You may opt-out
                of such messages at any time by clicking the “unsubscribe” link
                in any such message. The Contest Parties are not responsible for
                technical difficulties of any kind, or for false, incorrect,
                changed, incomplete or illegible contact information.
              </p>
              <p>
                <strong>LIMIT:</strong> Up to three (3) Entries per person.
                Attempts made by the same individual to earn more than the
                stated number of entries by using multiple or false contact
                information, accounts or otherwise may result in
                disqualification. Entries generated by a script, computer
                programs, macro, programmed, robotic or other automated means
                are void and may be disqualified. Entries that are in excess of
                the stated limit(s), incomplete, illegible, corrupted, damaged,
                destroyed, forged, false, lost, late or misdirected, deceptive
                or otherwise not in compliance with the Official Rules may be
                disqualified from the Contest at Sponsor's sole and absolute
                discretion. Those who do not follow all instructions, provide
                the required information in their entry form, or abide by these
                Official Rules or other instructions of Sponsor may be
                disqualified. Entries submitted by those who do not meet the
                eligibility requirements (including all requirements with
                respect to age and residence) are void. All materials submitted
                become the property of Sponsor and will not be returned. In the
                event of a dispute over the identity of an entrant, entry will
                be deemed submitted by the registered account holder of the
                email address associated with the entry for the domain
                associated with the submitted address, provided that person is
                eligible. Any potential winner may be required to show proof of
                being the registered account holder. Registered account holder
                is defined as the person assigned to an email address by an
                Internet access provider, online service provider or other
                organization responsible for assigning email addresses. In the
                event that a dispute regarding the identity of the individual
                who submitted an entry cannot be resolved to Sponsor's
                satisfaction, the affected entry will be deemed ineligible.
              </p>
            </li>
            <li>
              <p>
                <strong>ENTRY REQUIREMENTS:</strong> Entries must comply with
                the following:
              </p>
              <ul className="list-disc pl-6">
                <li>Must be in the English language.</li>
                <li>Must be three (3) words or less.</li>
                <li>
                  Must be free of any existing trademarks or copyrights
                  (registered or common law protection).
                </li>
                <li>
                  Must not contain material that violates or infringes another's
                  rights, including, but not limited to, privacy, publicity or
                  intellectual property rights, including copyright
                  infringement, or legal or moral rights of any third party,
                  living or deceased.
                </li>
                <li>
                  Must not disparage Sponsor, Administrator or any other person
                  or party affiliated with the promotion and administration of
                  this Contest.
                </li>
                <li>
                  Must not include any personally-identifiable information.
                </li>
                <li>
                  Must be the original work of the entrant and must not contain
                  quotes, parodies or other materials not created by entrant.
                </li>
                <li>
                  Must not have been submitted previously in a promotion or
                  contest of any kind and has not been exhibited or distributed
                  currently or previously in any media.
                </li>
                <li>
                  Must not contain, facilitate, reference, or use material that
                  is fraudulent, inappropriate, indecent, lewd, pornographic,
                  obscene, hateful, tortious, defamatory, slanderous or
                  libelous.
                </li>
                <li>
                  Cannot be sexually explicit or suggestive, unnecessarily
                  violent or derogatory of any ethnic, racial, gender,
                  religious, professional or age group, profane or pornographic,
                  or contain nudity or any materially dangerous activity.
                </li>
                <li>
                  Must not contain, facilitate, reference or use material that
                  contains prohibited content which shall include, but is not
                  limited to content that promotes, suggests, or encourages:
                  <ul className="list-[circle] pl-6">
                    <li>
                      gambling, including any content related to online casinos,
                      sports books, or bingo;
                    </li>
                    <li>
                      the use of firearms/weapons/ammunition, any illegal drugs,
                      prostitution, pornography, nudity, profanity or other
                      adult content, violence, or the use of alcohol or tobacco
                      products;
                    </li>
                    <li>
                      taking up of arms against any person, government or entity
                      or otherwise challenge or seek to overthrow any
                      government;
                    </li>
                  </ul>
                </li>
                <li>
                  Must not contain, facilitate, reference, or use material that
                  promotes bigotry, racism, hatred or harm against any group or
                  individual or promotes discrimination based on race, gender,
                  ethnicity, religion, nationality, disability, sexual
                  orientation, political orientation, citizenship, ancestry,
                  marital status, or age; and
                </li>
                <li>
                  Must not contain material that is unlawful, in violation of or
                  contrary to the laws or regulations in any jurisdiction where
                  the entry was created.
                </li>
              </ul>
              <p>
                By submitting an Entry, you represent and warrant that your
                Entry is original to you, that the Entry has not been previously
                published, has not won previous awards and that neither it nor
                its contents infringe upon or violate the rights of any third
                party, including any copyrights, trademarks, rights of privacy,
                publicity or other intellectual property. By submitting an
                Entry, you warrant and represent that you consent to the
                submission and use of the Entry in the Contest, to its
                publication for public voting if selected as a Finalist in this
                Contest, and to its use as otherwise set forth herein.
              </p>
              <p>
                By submitting an Entry, you acknowledge and agree that Sponsor
                may receive other Entries under this Contest that may be similar
                or identical to the Entry submitted by you, and you waive any
                and all claims you may have had, may have, and/or may have in
                the future, that any other Entry reviewed and/or used by Sponsor
                may be similar to your Entry and you understand that you will
                not be entitled to any compensation because of Sponsor's use of
                such other similar or identical material.
              </p>
            </li>

            <li>
              <p>
                <strong>
                  TRANSFER OF OWNERSHIP AND ALTERNATIVELY LICENSE TO ENTRIES:
                </strong>{" "}
                Entrant, upon submission of their Entry to the Contest,
                irrevocably transfers and otherwise assigns all rights,
                ownership, interest and benefits to Sponsor, and each of its
                licensees, successors and assigns, ownership and equitable
                rights, interest and benefits to the Entry with no right of
                redemption or consideration beyond that called for in this
                Contest. In the event that transfer or otherwise assignment is
                not available, Entrant grants to Sponsor, and each of its
                licensees, successors and assigns, the exclusive, perpetual,
                royalty-free, no-cost license, assignable, transferable and
                right to use and otherwise exploit the Entry, and all text and
                materials included or depicted therein, in whole or in part, in
                any manner or medium now or hereafter known or devised
                (including, without limitation, streaming media, film,
                television, print, interactive devices, mobile media, Internet
                and on-line systems), throughout the universe and in any and all
                languages, including, without limitation, the right to display,
                reproduce, recreate, record, perform, exhibit, distribute, copy,
                edit, change, modify, add to, subtract from, re-title and adapt
                the same, to combine it with other material and otherwise use
                and exploit it without having to give any compensation or
                attribution to entrants or any third party, except for the
                awarding of the prizes to the winners in this Contest. Entrant
                is not entitled to any recognition or other disclosure or
                reference, except as specifically stated in this Contest.
                Entrant and/or winners have no right to notice or requirement of
                consent to any sublicense, transfer or assignment of their Entry
                by Sponsor.
              </p>
              <p>
                As part of this Contest, Sponsor grants each entrant a limited,
                revocable, non-sublicensable license to use their name, product,
                trademarks, and logos (collectively, the “Sponsor's IP”) for the
                sole purpose of participating in this Contest. You are not
                permitted to make any further use of the Sponsor's IP for any
                purpose whatsoever. In addition, you recognize that all rights,
                title, and interest in the Sponsor's IP shall vest exclusively
                to the Sponsor, and you agree that you have not and will not
                take any action that might harm or adversely affect such rights.
                No right, title, or interest in and to the Sponsor's IP, except
                for the limited license granted to you in these Official Rules
                is transferred or created. You further acknowledge and agree
                that the Sponsor's IP rights are valid and enforceable, and that
                you shall do nothing to challenge the validity or enforceability
                of the Sponsor's IP in any forum. You agree that the use of the
                Sponsor's IP is permitted only for the purpose of creating an
                Entry in this Contest, and that any use of the Sponsor's IP
                (whether in the Entry or otherwise) beyond this scope infringes
                the rights of the Sponsor and will result in irreparable harm to
                the Sponsor.
              </p>
              <p>
                Entrants agree that during the Entry Period, they shall not
                make, and shall not permit, any other public use, display or
                distribution of the Entries, and they shall maintain all rights
                without encumbrances so that, if Sponsor desires, entrants can
                assign all rights in and to Entries. Entrants agree that the
                opportunity to be the winner is sufficient consideration for the
                transfer or all rights and the alternative license herein.
                Sponsor, and each of its successors, assigns and licensees, will
                have the right to make unlimited derivative works of Entries, to
                assign or transfer any or all of Sponsor's granted rights and to
                grant unlimited, multiple-level sublicenses. Without limiting
                the forgoing, Sponsor will have the right to use, modify, alter,
                or add to the Entries submitted as part of the Contest, and all
                text and materials included or depicted therein (if any), in any
                merchandising, advertising, marketing, promotion or for any
                other commercial or non-commercial purpose. Entrants hereby
                forever waive and relinquish all “moral rights (droit moral)”
                now or hereafter recognized in connection with Entries submitted
                as part of the Contest.
              </p>
              <p>
                Entrants acknowledge that as a condition of participating in the
                Contest and/or being selected as a winner, Sponsor may request
                that the entrant's Entry, and any rights therein, be assigned to
                Sponsor and entrants may be required to confirm such assignment
                by completing and submitting the Declaration (defined below)
                (and any other documents reasonably required by Sponsor) or such
                entrant will otherwise be disqualified from receiving their
                prize. Entrants must maintain the ability to assign all such
                rights to Sponsor free of any limitations, restrictions or
                third-party obligations. Entrants agree that Sponsor shall have
                the sole discretion in determining the extent and manner of use
                of Entries and are not obligated to use any Entry. Entrants
                agree that Sponsor, nor its agents, shall be responsible for
                return or preservation of the Entries submitted. All Entries
                that are posted on the Website or elsewhere are available to be
                viewed by anyone with access to the Internet.
              </p>
              <p>
                Each entrant acknowledges that Entries are not being submitted
                in confidence or in trust to Sponsor and that no confidential or
                fiduciary relationship is intended or created. Each entrant
                acknowledges that Sponsor and other entrants may have created
                ideas and concepts contained in their Entries that may have
                familiarities or similarities to his/her own Entry, and that
                he/she will not be entitled to any compensation or right to
                negotiate with the Contest Parties because of these
                familiarities or similarities. Notwithstanding any custom and
                practice in the industry to pay an individual for an idea (if
                any), nothing herein shall create an implied or express contract
                to compensate entrants for their Entries and there is no
                obligation for any Contest Party to pay or otherwise compensate
                entrants for any of their ideas or materials in any
                communications with Sponsor, whatsoever. Entries are not
                confidential and the Contest Parties' only obligations to
                entrants regarding Entries are as specifically set forth in
                these Official Rules. The decisions of the Sponsor are final and
                binding in all matters relating to this Contest, including
                interpretation and application of these Official Rules. Sponsor
                reserves the right to request from entrant at any time proof
                that entrant maintains all necessary rights in their Entry in
                order to grant Sponsor the rights required herein in a form
                acceptable to Sponsor. Failure to provide such proof may lead
                to, among other things, the entrant being disqualified from the
                Contest.
              </p>

              <p className="text-red-600 underline">
                TO BE ELIGIBLE AS A WINNER AND ANY PART OF THE PRIZE, YOU MUST
                EXECUTE AND RETURN WITHIN 3 DAYS OF SPONSOR (OR ITS AGENT)
                SENDING VIA EMAIL AN ASSIGNMENT TO YOU, THE ASSIGNMENT OF YOUR
                (WORD MARK) ENTRY IN A FORM ACCEPTABLE TO SPONSOR.{" "}
              </p>
            </li>

            <li>
              <p>
                <strong>REPRESENTATIONS AND WARRANTIES:</strong> By entering the
                Contest, entrant represents and warrants that he or she has
                read, understands, agrees to and will follow the Official Rules.
                Entrant further represents and warrants that his or her Entry
                and all materials and matter therein: (a) (except for elements
                that are within the public domain or are provided by Sponsor for
                inclusion in Entries) are wholly original with such entrant and
                are not a copy or imitation of any other material or entrant has
                all necessary rights to grant the Sponsor the rights granted
                hereunder and exercise such without obligation or liability to
                any third party; (b) will not infringe or violate any right
                whatsoever, including, without limitation, any personal rights
                (e.g., defamation, privacy, false light, moral right, etc.) or
                any property rights (e.g., copyright, trademark, right to ideas,
                etc.) of any person or entity and the use thereof will result in
                no third party liability or obligations; and (c) is not the
                subject of any threatened or pending litigation, claim or
                dispute that might give rise to litigation, which adversely
                affects or in any way prejudices, impairs or diminishes the
                rights granted hereunder or the value thereof. Entrant further
                represents and warrants that he or she has the right to agree to
                and fully perform consistent with these Official Rules and that
                he or she has complied and has obtained all permissions,
                licenses and consents that are necessary for the submission of
                the Entry and the use of the Entry and to verify compliance with
                the foregoing requirements. Entrant agrees to provide to Sponsor
                at Sponsor's request copies of all such permissions, licenses
                and consents. Sponsor reserves the right, in its sole
                discretion, to disqualify and/or not to post on Website any
                Entry that Sponsor determines does not comply with these
                Official Rules, to make such changes to any Entry as are
                necessary to make it compliant, or to require the entrant to do
                so. Entrant further acknowledges and agrees that he/she has not
                previously granted, assigned or otherwise encumbered his/her
                Entry, or any images, text and materials depicted therein, to
                any other third party. Further, entrant represents and warrants
                that Sponsor's use of any Entry, including any images, text and
                materials depicted therein, shall not violate an agreement to
                which such entrant has signed. Entrant agrees to indemnify and
                hold the Released Parties (defined below) harmless from and
                against any third-party claims, to the extent arising out of or
                relating to any breach of any representation, warranty or
                covenant made by entrant in connection with his or her
                acceptance of these Official Rules or Contest activities.
              </p>
            </li>

            <li>
              <p>
                <strong>JUDGING PERIOD:</strong> During the Judging Period,
                Frankie C, in his sole discretion, will score each eligible
                Entry to determine the three (3) top-scoring Entries. Judging
                will be based on the following criteria, in no particular
                measure and all need not be treated the same:
              </p>
              <ul className="list-disc pl-6">
                <li>Catchiness,</li>
                <li>Cleverness,</li>
                <li>Applicability to the product; and</li>
                <li>Originality.</li>
              </ul>
              <p>
                Further, any top-scoring Entry will be subject to a trademark
                search before being made available for public voting in the
                Voting Period. If an Entry cannot be cleared for trademark
                application, it will be disqualified, and the next-highest
                scored Entry will be considered. In the event of any ties,
                Frankie C will serve as the tie breaker. Up to three (3) Entries
                that receive the highest initial scores each AND have been
                cleared by a trademark search will be deemed a finalist (each, a
                'Finalist') and will move to the Voting Period. In the Judging
                Period, Entries will no longer be associated with any specific
                entrant who submitted such Entry. Sponsor is aware that several
                people may submit the same or very similar Entry. If any
                Finalist Entry, Sponsor's decisions shall be final and binding
                in all matters pertaining to the judging and selection of the
                Finalist Entries.
              </p>
            </li>

            <li>
              <p>
                <strong>VOTING PERIOD AND WINNER DETERMINATION:</strong> To
                participate in the public voting among the Finalist Entries, you
                must be eighteen (18) years of age or older and be a legal
                resident of the fifty (50) United States and the District of
                Columbia, at the time of voting. To place a vote for a Finalist,
                visit the Website during the Voting Period. You must follow the
                on-screen instructions to submit your name and valid email
                address to place one (1) vote for what you consider to be the
                best Finalist Entry, in your opinion and based on the Judging
                Criteria listed above. All participants in this Contest are
                prohibited from casting, soliciting, or obtaining votes by any
                fraudulent or inappropriate means, including, without
                limitation, offering prizes or other inducements to members of
                the public, as determined by Sponsor in its sole discretion.
                Votes generated by script, macro or other automated means or
                which subvert or impair the integrity of the voting process will
                be void. Sponsor will use IP tracking and cookie technology to
                help enforce the validity of the voting process. Any attempt to
                exceed the limited number of votes shall give the Sponsor the
                right to void the votes in question and potentially to
                disqualify the applicable Finalist Entry, at its sole
                discretion. Limit of one (1) vote per person during the Voting
                Period. There are no prizes for voting.
              </p>
              <p>
                The Entry with the highest number of votes, as determined by
                Sponsor in its sole discretion, will be the winner, and each of
                the individuals submitting such Entry will be deemed a potential
                winner of the Contest as determined by the Sponsor and outlined
                below. In the event there are any ties, Frankie C will serve as
                the tie breaker. If any entrant who submitted the winning Entry
                is found to be ineligible or does not comply with these Official
                Rules, such potential winner will be disqualified and will not
                be eligible to receive a prize. Sponsor's decisions shall be
                final and binding in all matters pertaining to the judging and
                winner selection.
              </p>
              <p>
                No more than one (1) winning Entry will be named. All eligible
                entrants associated with such winning Entry will split the prize
                pool, as further described below.
              </p>
            </li>

            <li>
              <p>
                <strong>WINNER NOTIFICATION/PRIZE CLAIMING:</strong> The
                potential winner(s) will be notified via email (or other contact
                information) using the information provided on the entry form in
                a commercially reasonable time after the determination of the
                winner(s). The Contest Parties are not responsible for and shall
                not be liable for incorrect, changed, or illegible contact
                information or for electronic communications that are
                undeliverable as a result of any form of active or passive
                filtering, or insufficient space in entrant's email or other
                account to receive messages. Contest Parties are not responsible
                for late, lost, intercepted, misdirected, or unsuccessful
                efforts to notify the potential winner. Sponsor has no
                obligation to contact potential winner(s) by any means other
                than e-mail. Notification is deemed to have occurred immediately
                upon sending of an email. If a potential winner cannot be
                contacted within a reasonable time period, if a potential winner
                is ineligible, if any notification is returned undeliverable, or
                if a potential winner otherwise fails to fully comply with these
                Official Rules, such potential winner will forfeit their share
                of the prize.
              </p>
              <p>
                As part of the winner notification process, in the event an
                individual winner's share of the prize is $600 or more, each
                potential winner will be required to complete and submit a
                declaration of eligibility/release of liability/prize acceptance
                agreement ('Declaration'), within five (5) calendar days of date
                of notification, as a condition of receiving a prize. If any
                potential winner fails or refuses to sign and return the
                Declaration or any other Sponsor provided paperwork within the
                required time period or if the Declaration is returned as
                rejected, faulty, unclaimed or returned as undeliverable to
                potential winner, and/or the potential winner is otherwise
                noncompliant, such potential winner will be disqualified and
                forfeit their portion of the prize. Any unclaimed portion of the
                prize will remain un-awarded. A potential winner becomes a
                'winner' only after verification of eligibility by Sponsor.
              </p>
            </li>

            <li>
              <p>
                <strong>PRIZE/PRIZE RESTRICTIONS:</strong> The prize to be
                awarded in this Contest is:
              </p>
              <p>
                ONE (1) PRIZE: The prize pool is $10,000, which will be equally
                distributed amongst all eligible entrants who submitted the
                winning Entry (each, a 'Prize'). Approximate retail value
                ('ARV') of the total prize pool is $10,000, however a winner's
                Prize will depend on the total number of eligible entrants who
                submitted the winning Entry. Prizes will be fulfilled via
                digital payment, wire or similar method, at Sponsor's election.
              </p>
              <p>
                Prizes are non-transferable. All prize details not specified in
                these Official Rules will be determined in Sponsor's sole and
                absolute discretion. Prize details and availability are subject
                to change and are subject applicable rules and restrictions.
                Prizes are awarded 'AS IS' and without warranty of any kind,
                express or implied (including, without limitation, any implied
                warranty of merchantability or fitness for a particular
                purpose). Winner(s) will be solely responsible for all federal,
                state and/or local taxes, and for any other fees or costs
                associated with their Prize.
              </p>
              <p>
                In the event each Prize is valued at $600 or more, the value of
                such Prize awarded to a winner will be reported for tax purposes
                as required by law, and the winner(s) will be required to
                provide Sponsor with a valid social security number or TIN
                before their Prize will be awarded for tax reporting purposes.
                An IRS Form 1099 will be issued in the name of winner(s) for the
                actual value of the Prize received. Any unclaimed Prize will be
                forfeited. Prize(s), if legitimately claimed, will be awarded.
                The Contest Parties are not responsible for and will not replace
                any lost, mutilated or stolen Prize or any Prize that is
                undeliverable or does not reach the winner because of an
                incorrect or changed address. Limit of one (1) Prize per person.
                Sponsor will attempt to fulfill all properly-claimed Prizes
                within approximately four (4) to six (6) weeks after winner
                verification.
              </p>
            </li>

            <li>
              <p>
                <strong>GENERAL:</strong> Subject to applicable law, each
                entrant hereby expressly grants to the Contest Parties and their
                respective successors, assigns, sublicensees and designees, the
                irrevocable right to use and publish his/her name, Entry,
                likeness (photographic or simulated), voice, biography and place
                of residence for all purposes, including, without limitation,
                advertising, marketing, promotional and publicity purposes in
                connection with this Contest ('Advertising'), in any and all
                media now or hereafter devised, worldwide, in perpetuity,
                without any form of notice, permission or any amount or kind of
                compensation, except for the awarding of the Prize(s). All
                copyright, trademark or other intellectual property rights in
                such Advertising shall be owned by Sponsor and/or its licensors,
                and each entrant hereby disclaims and waives any claim of right
                to such Advertising. Such Advertising shall be solely under the
                control of Sponsor and/or its licensors, and each entrant of a
                Finalist Entry hereby waives any claim of control over the
                Advertising content as well as any possible claims of misuse of
                entrant of a winner's name, likeness or voice under contract,
                tort or any other theory of law.
              </p>
              <p>
                The Contest Parties do not assume any responsibility for any
                disruption in the Contest, including, but not limited to, the
                failure or interruption of any social media platform or any
                internet service provider. In the event there is a discrepancy
                or inconsistency between disclosures and other statements
                contained in any Contest materials and the terms and conditions
                of these Official Rules, these Official Rules shall prevail,
                govern, and control.
              </p>
              <p>
                In the event Sponsor is prevented from continuing with the
                Contest by any event beyond its control, including, but not
                limited to, fire, flood, epidemic, earthquake, explosion, labor
                dispute or strike, act of God or public enemy, communications or
                equipment failure, utility or service interruptions, riot or
                civil disturbance, terrorist threat or activity, war (declared
                or undeclared), interference with the Contest by any party, or
                any federal, state, or local government law, order, or
                regulation, order of any court or jurisdiction, or other cause
                not reasonably within Sponsor's control (each, a 'Force Majeure'
                event or occurrence), Sponsor shall have the right to modify,
                suspend or terminate the Contest or prize. Sponsor additionally
                reserves the right, in its sole and absolute discretion to
                modify, suspend or terminate the Contest should causes beyond
                Sponsor's control corrupt or interfere with the administration,
                integrity, operation, security or proper play of the Contest.
              </p>
            </li>
            <li>
              <p>
                <strong>CONDUCT:</strong> The Contest Parties are not
                responsible for the actions of entrants or voters in connection
                with the Contest, including entrants' or voters' attempts to
                circumvent the Official Rules or otherwise interfere with the
                administration, security, fairness, integrity or proper conduct
                of the Contest. The Contest Parties reserve the right, at their
                sole discretion, to disqualify (or terminate the prize of) any
                individual if the individual is found to be, or suspected of,
                acting in any manner deemed by the Contest Parties to be in
                violation of the Official Rules, or to be unsportsmanlike or
                disruptive, or with intent to annoy, abuse, threaten or harass
                any other person, or to be tampering with the entry or voting
                process or the operation of the Contest, and void all associated
                Entries, votes, and/or registrations. CAUTION: ANY ATTEMPT BY A
                USER, YOU OR ANY OTHER INDIVIDUAL TO DAMAGE OR UNDERMINE THE
                LEGITIMATE OPERATION OF THE CONTEST IS A VIOLATION OF CRIMINAL
                AND CIVIL LAWS, AND SHOULD SUCH AN ATTEMPT BE MADE, THE CONTEST
                PARTIES RESERVE THE RIGHT TO SEEK DAMAGES AND OTHER REMEDIES
                (INCLUDING ATTORNEYS' FEES) FROM ANY SUCH PERSON TO THE FULLEST
                EXTENT PERMITTED BY LAW.
              </p>
            </li>

            <li>
              <p>
                <strong>WAIVERS AND DISCLAIMERS:</strong> The Contest Parties
                assume no responsibility or liability for: (a) lost, late,
                stolen, undelivered, inaccurate, incomplete, delayed,
                misdirected, damaged or garbled registrations, Entries, URLs,
                votes, spam filters or emails; (b) any incorrect or inaccurate
                entry information, or for any faulty or failed electronic data
                transmissions; (c) any unauthorized access to, or theft,
                destruction or alteration of Entries or registrations at any
                point in the operation of this Contest; (d) any technical
                malfunction, failure, error, omission, interruption, deletion,
                defect, delay in operation or communications line failure,
                regardless of cause, with regard to any equipment, systems,
                networks, lines, cable, satellites, servers, computers or
                providers utilized in any aspect of the operation of the
                Contest; (e) inaccessibility or unavailability of the Internet
                or the website or any combination thereof or for computer
                hardware or software malfunctions, failures or difficulties, or
                other errors or difficulties of any kind whether human,
                mechanical, electronic, computer, network, typographical,
                printing or otherwise relating to or in connection with the
                Contest, including, without limitation, errors or difficulties
                which may occur in connection with the administration of the
                Contest, the processing of Entries or votes, social networking
                posts, or registrations, the announcement of the prizes, or in
                any other Contest-related materials; or (f) any injury or damage
                to entrants or to any other person's computer which may be
                related to or resulting from any attempt to participate in the
                Contest. If, for any reason, the Contest (or any part thereof)
                is not capable of running as planned for reasons which may
                include, without limitation, infection by computer virus,
                tampering, unauthorized intervention, fraud, technical failures,
                or any other causes which may corrupt or affect the
                administration, security, fairness, integrity or proper conduct
                of this Contest, then the Contest Parties reserve the right at
                their sole discretion to cancel, terminate, modify or suspend
                the Contest in whole or in part. If terminated, the Contest
                Parties will award the prizes in a manner consistent with the
                judging process above from among all non-suspect, eligible
                Entries received for the Contest up to the time of such action.
              </p>
            </li>

            <li>
              <p>
                <strong>RELEASES:</strong> All entrants and voters, as a
                condition of participation in this Contest, release, discharge,
                indemnify and hold harmless the Contest Parties and each of
                their respective directors, owners, officers, employees, agents,
                successors and assigns, including but not limited to Franckie C,
                and the entities and their officers associated with production,
                sales and marketing of the protein brownie related to this
                Contest (collectively, 'Released Parties') from and against any
                and all liability, claims, costs (including attorneys' fees),
                losses, damages, fines, or actions of any kind whatsoever for
                injuries, death, damages, or losses to persons or property which
                may be sustained, in whole or in part, directly or indirectly,
                in connection with: (i) participation in any aspect of the
                Contest (including travel to/from any Contest activity), (ii)
                the receipt, ownership, use or misuse of any prize awarded,
                including any travel associated with any prize, (iii) the
                Released Parties' violation of rights of publicity or privacy,
                claims of defamation or portrayal in a false light or based on
                any claim of infringement of intellectual property; (iv)
                entrant's registration material on any related website, (iv) any
                typographical, human or other error in the printing, offering,
                selection, operation or announcement of any Contest activity
                and/or prize, (v) use of or similar name for the protein brownie
                related to this Contest or any subsequent product of Contest
                Parties and each of their respective directors, officers,
                employees, agents, successors and assigns, including but not
                limited to Franckie C, and the entities and their officers and
                owners associated with production, sales and marketing of the
                product(s) bearing the name of an Entry.
              </p>
            </li>

            <li>
              <p>
                <strong>GOVERNING LAW AND LIMITATION OF LIABILITY:</strong> All
                issues and questions concerning the construction, validity,
                interpretation and enforceability of these Official Rules or the
                rights and obligations of entrants, Sponsor or the Released
                Parties in connection with the Contest will be governed by and
                construed in accordance with the internal laws of the State of
                Florida, without giving effect to any choice of law or conflict
                of law rules or provisions that would cause the application of
                any other laws.
              </p>
              <p>
                BY ENTERING THE CONTEST, ENTRANT AGREES THAT TO THE EXTENT
                PERMITTED BY APPLICABLE LAW: (A) ANY AND ALL DISPUTES, CLAIMS
                AND CAUSES OF ACTION ARISING OUT OF OR CONNECTED WITH THE
                CONTEST, OR ANY PRIZE AWARDED, WILL BE RESOLVED INDIVIDUALLY,
                WITHOUT RESORT TO ANY FORM OF CLASS ACTION; (B) ANY AND ALL
                CLAIMS, JUDGMENTS AND AWARDS WILL BE LIMITED TO ACTUAL
                THIRD-PARTY, OUT-OF-POCKET COSTS INCURRED (IF ANY) NOT TO EXCEED
                TEN DOLLARS ($10.00), BUT IN NO EVENT WILL ATTORNEYS' FEES BE
                AWARDED OR RECOVERABLE; (C) UNDER NO CIRCUMSTANCES WILL ANY
                ENTRANT BE PERMITTED TO OBTAIN ANY AWARD FOR, AND ENTRANT HEREBY
                KNOWINGLY AND EXPRESSLY WAIVES ALL RIGHTS TO SEEK, PUNITIVE,
                INCIDENTAL, CONSEQUENTIAL OR SPECIAL DAMAGES, LOST PROFITS
                AND/OR ANY OTHER DAMAGES, OTHER THAN ACTUAL OUT OF POCKET
                EXPENSES NOT TO EXCEED TEN DOLLARS ($10.00), AND/OR ANY RIGHTS
                TO HAVE DAMAGES MULTIPLIED OR OTHERWISE INCREASED; (D) ENTRANTS'
                REMEDIES ARE LIMITED TO A CLAIM FOR MONEY DAMAGES (IF ANY) AND
                ENTRANT IRREVOCABLY WAIVES ANY RIGHT TO SEEK INJUNCTIVE OR
                EQUITABLE RELIEF; AND (E) ENTRANTS' WAIVER OF TRIAL BY JURY.
                SOME JURISDICTIONS DO NOT ALLOW THE LIMITATIONS OR EXCLUSION OF
                LIABILITY, SO THE ABOVE MAY (IN PART OR WHOLE) NOT APPLY TO YOU.
              </p>
            </li>

            <li>
              <p>
                <strong>DISPUTE RESOLUTION:</strong> The parties each agree to
                finally settle all disputes only through arbitration; provided,
                however, the Sponsor shall be entitled to seek injunctive or
                equitable relief in the state and federal courts in the State of
                Florida and any other court with jurisdiction over the parties.
                In arbitration, there is no judge or jury and review is limited.
                The arbitrator's decision and award is final and binding, with
                limited exceptions, and judgment on the award may be entered in
                any court with jurisdiction.
              </p>
              <p>
                The parties agree that, except as set forth above, any claim,
                suit, action or proceeding arising out of or relating to this
                Contest shall be resolved solely by binding arbitration before a
                sole arbitrator under the streamlined Arbitration Rules
                Procedures of JAMS Inc. ('JAMS') or any successor to JAMS in
                Miami, Florida. In the event JAMS is unwilling or unable to set
                a hearing date within fourteen (14) days of the filing of a
                'Demand for Arbitration', then either party can elect to have
                the arbitration administered by the American Arbitration
                Association ('AAA') or any other mutually agreeable arbitration
                administration service in Miami, Florida.
              </p>
              <p>
                If an in-person hearing is required, then it will take place in
                the State of Florida. The federal or state law that applies to
                these Official Rules will also apply during the arbitration.
                Disputes will be arbitrated only on an individual basis and will
                not be consolidated with any other proceedings that involve any
                claims or controversy of another party, including any class
                actions; provided, however, if for any reason any court or
                arbitrator holds that this restriction is unconscionable or
                unenforceable, then the agreement to arbitrate doesn't apply and
                the dispute must be brought in a court of competent jurisdiction
                in Miami-Dade County, State of Florida.
              </p>
              <p>
                Sponsor agrees to pay the administrative and arbitrator's fees
                in order to conduct the arbitration (but specifically excluding
                any travel or other costs of entrant to attend the arbitration
                hearing). Either party may, notwithstanding this provision,
                bring qualifying claims in small claims court.
              </p>
            </li>
            <li>
              <p>
                <strong>ENTRY INFORMATION AND CONTEST COMMUNICATIONS:</strong>{" "}
                As a condition of entering the Contest, each entrant gives
                consent for Sponsor to obtain and deliver his or her name,
                address, Entry, and other information to third parties for the
                purpose of administering this Contest and to comply with
                applicable laws, regulations and rules. Any information entrant
                provides to Sponsor may be used to communicate with entrant in
                relation to this Contest or on a Contest winner's list. By
                participating in the Contest, entrant agrees to all of the terms
                and conditions of the Sponsor's Privacy Policy, which is
                available at https://www.frankieccontest.com/privacy-policy. In
                the event of any discrepancy between the Sponsor's Privacy
                Policy and these Official Rules, these Official Rules shall
                control and govern.
              </p>
            </li>

            <li>
              <p>
                <strong>MISCELLANEOUS:</strong> The invalidity or
                unenforceability of any provision of these Official Rules or the
                Declaration (if applicable) will not affect the validity or
                enforceability of any other provision. In the event that any
                provision of the Official Rules or the Declaration (if
                applicable) is determined to be invalid or otherwise
                unenforceable or illegal, the other provisions will remain in
                effect and will be construed in accordance with their terms as
                if the invalid or illegal provision were not contained herein.
                Sponsor's failure to enforce any term of these Official Rules
                will not constitute a waiver of that provision. Entrants agree
                to waive any rights to claim ambiguity of these Official Rules.
                Headings are solely for convenience of reference and will not be
                deemed to affect in any manner the meaning or intent of the
                documents or any provision hereof. In the event there is a
                discrepancy or inconsistency between disclosures or other
                statements contained in any Contest-related materials, privacy
                policy or terms of use on any website, social media platform or
                application and/or the terms and conditions of the Official
                Rules, the Official Rules shall prevail, govern and control and
                the discrepancy will be resolved in Sponsor's sole and absolute
                discretion.
              </p>
            </li>

            <li>
              <p>
                <strong>WINNERS LIST:</strong> To receive a list of the
                winner(s), send a #10 self-addressed, stamped envelope for
                receipt by June 16, 2025 to: Frankie's Naming Contest - Winners
                List Request, c/o Realtime Media, 1001 Conshohocken State Road,
                Suite 2–100, West Conshohocken, PA 19428.
              </p>
            </li>

            <li>
              <p>
                <strong>SPONSOR:</strong> ABC Media LLC, C/O Silverberg, 2455 E
                Sunrise Blvd, St 1204, Ft. Lauderdale, FL 33304. Reference to
                third parties in connection with prizes and/or third-party
                websites or services are for reference and identification
                purposes only and not intended to suggest endorsement,
                sponsorship or affiliation with Sponsor or the Contest.
              </p>
            </li>

            <li>
              <p>
                <strong>ADMINISTRATOR:</strong> Realtime Media LLC, 1001
                Conshohocken State Road, Suite 2–100, West Conshohocken, PA
                19428.
              </p>
            </li>
          </ol>
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
