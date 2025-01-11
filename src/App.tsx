import { Daniel, Jeanette, Jonathan, Kira, Patrick } from "./assets/images";

function App() {
  return (
    <>
      <main className="bg-[#ECF2F8] min-h-screen w-full xl:p-[165px] md:p-[100px] max-sm:px-[24px] max-sm:py-[71px]">
        <div className="grid lg:grid-cols-12 lg:grid-rows-2 gap-6 md:grid-cols-1 max-sm:grid-cols-1  mx-auto">
          {/*Daniel Clifford*/}
          <section className="p-8 bg-[#733FC8] rounded-lg relative w-full h-auto text-white lg:col-start-1 lg:col-span-6 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 row-start-1 row-end-1 max-sm:col-start-1  max-sm:col-span-1 max-sm:row-start-1 max-sm:row-span-1">
            <svg
              className="absolute top-0 right-[20%] w-[104px] h-[102px] z-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
                fill="#A775F1"
                fill-rule="nonzero"
              />
            </svg>
            <div className="relative z-10">
              <div className="flex flex-row items-center mb-[18px]">
                <img
                  src={Daniel}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border-[#A775F1] border-solid border-2 mr-[17px]"
                />
                <div>
                  <h2 className="text-[13px] font-medium">Daniel Clifford </h2>
                  <h3 className="text-[11px] opacity-50">Verified Graduate</h3>
                </div>
              </div>
              <h1 className="text-[20px] font-semibold mb-4">
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny’s worth.
              </h1>
              <p className="text-[13px] opacity-70 font-medium text-[#CFCFCF]">
                “ I was an EMT for many years before I joined the bootcamp. I’ve
                been looking to make a transition and have heard some people who
                had an amazing experience here. I signed up for the free intro
                course and found it incredibly fun! I enrolled shortly
                thereafter. The next 12 weeks was the best - and most grueling -
                time of my life. Since completing the course, I’ve successfully
                switched careers, working as a Software Engineer at a VR
                startup. ”
              </p>
            </div>
          </section>

          {/* Jonathan Walters */}
          <section className="p-8 bg-[#48556A] rounded-lg w-full h-auto text-white lg:col-start-7 lg:col-span-3 lg:row-start-1  md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 max-sm:col-start-1 max-sm:col-span-1 max-sm:row-start-2 max-sm:row-span-1">
            <div>
              <div className="flex flex-row items-center mb-[18px]">
                <img
                  src={Jonathan}
                  alt="avatar"
                  className="w-8 h-8 rounded-full mr-[17px]"
                />
                <div>
                  <h2 className="text-[13px] font-medium">Jonathan Walters</h2>
                  <h3 className="text-[11px] opacity-50">Verified Graduate</h3>
                </div>
              </div>
              <h1 className="text-[20px] font-semibold mb-4">
                The team was very supportive and kept me motivated
              </h1>
              <p className="text-[13px] opacity-70 font-medium text-[#CFCFCF]">
                “ I started as a total newbie with virtually no coding skills. I
                now work as a mobile engineer for a big company. This was one of
                the best investments I’ve made in myself. ”
              </p>
            </div>
          </section>

          {/*Jeanette Harmon*/}
          <section className="p-8 bg-[#fff] rounded-lg w-full h-auto text-[#48556A] lg:col-start-1 lg:col-span-3 lg:row-start-2 md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1max-sm:col-start-1 max-sm:col-span-1 max-sm:row-start-3 max-sm:row-span-1">
            <div>
              <div className="flex flex-row items-center mb-[18px]">
                <img
                  src={Jeanette}
                  alt="avatar"
                  className="w-8 h-8 rounded-full mr-[17px]"
                />
                <div>
                  <h2 className="text-[13px] font-medium">Jeanette Harmon</h2>
                  <h3 className="text-[11px] opacity-50">Verified Graduate</h3>
                </div>
              </div>
              <h1 className="text-[20px] font-semibold mb-4">
                An overall wonderful and rewarding experience
              </h1>
              <p className="text-[13px] opacity-70 font-medium">
                “ Thank you for the wonderful experience! I now have a job I
                really enjoy, and make a good living while doing something I
                love. ”
              </p>
            </div>
          </section>

          {/*Patrick Abrams*/}
          <section className="p-8 bg-[#19202D] rounded-lg static w-full h-auto text-white  lg:col-span-6 lg:row-start-2 md:col-start-1 md:col-span-1 md:row-start-4 md:row-span-1max-sm:col-start-1 max-sm:col-span-1 max-sm:row-start-4 max-sm:row-span-1">
            <div>
              <div className="flex flex-row items-center mb-[18px]">
                <img
                  src={Patrick}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border-[#733FC8] border-solid border-2 mr-[17px]"
                />
                <div>
                  <h2 className="text-[13px] font-medium">Patrick Abrams</h2>
                  <h3 className="text-[11px] opacity-50">Verified Graduate</h3>
                </div>
              </div>
              <h1 className="text-[20px] font-semibold mb-4">
                Awesome teaching support from TAs who did the bootcamp
                themselves. Getting guidance from them and learning from their
                experiences was easy.
              </h1>
              <p className="text-[13px] opacity-70 font-medium text-[#CFCFCF]">
                “ The staff seem genuinely concerned about my progress which I
                find really refreshing. The program gave me the confidence
                necessary to be able to go out in the world and present myself
                as a capable junior developer. The standard is above the rest.
                You will get the personal attention you need from an incredible
                community of smart and amazing people. ”
              </p>
            </div>
          </section>

          {/*Kira Whittle*/}
          <section className="p-8 bg-[#fff] rounded-lg w-full h-auto text-[#48556A] lg:col-start-19 lg:col-span-3 lg:row-start-1  lg:row-span-2 md:col-start-1 md:col-span-1 md:row-start-5 md:row-span-1 max-sm:col-start-1 max-sm:col-span-1 max-sm:row-start-5 max-sm:row-span-1">
            <div>
              <div className="flex flex-row items-center mb-[18px]">
                <img
                  src={Kira}
                  alt="avatar"
                  className="w-8 h-8 rounded-full mr-[17px]"
                />
                <div>
                  <h2 className="text-[13px] font-medium">Kira Whittle</h2>
                  <h3 className="text-[11px] opacity-50">Verified Graduate</h3>
                </div>
              </div>
              <h1 className="text-[20px] font-semibold mb-4">
                Such a life-changing experience. Highly recommended!
              </h1>
              <p className="text-[13px] opacity-70 font-medium">
                “ Before joining the bootcamp, I’ve never written a line of
                code. I needed some structure from professionals who can help me
                learn programming step by step. I was encouraged to enroll by a
                former student of theirs who can only say wonderful things about
                the program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. It took my learning to the next level in a way that
                no tutorial could ever have. In fact, I’ve often referred to it
                during interviews as an example of my developent experience. It
                certainly helped me land a job as a full-stack developer after
                receiving multiple offers. 100% recommend! ”
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Kurt Badillo</a>.
      </footer>
    </>
  );
}

export default App;
