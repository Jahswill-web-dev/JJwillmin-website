import Header from '../components/Header';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Projects from '../components/Projects';
import myImage from "/public/images/image-2.png"


export default function Home({ images }) {
  return (
    <>
      <Header
        title="J.J.WILLMIN | Construction Company"
        description="J.J.willmin is a Construction Company in Nigeria with years of experience in the construction Industry 
        and has Done several projects with NDDC, Lekki Gardens and many more"
      />


      {/* Hero Section */}
      <header className="flex flex-col justify-center items-center  bg-cover bg-center bg-fixed bg-hero h-screen">
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-primary/50 z-[2]" />
        <div className="text-white text-center z-[3]">
          <h1 className="text-6xl  sm:text-7xl top-[10rem]">J. J. WILLMIN</h1>
          <p className="text-2xl  sm:text-4xl">Civil Engineering works and procurement Services</p>
         
          
        </div>
      </header>


      {/* About Section */}
      {/* about background image */}
      <div className="flex justify-center items-center bg-about h-screen bg-cover bg-center bg-fixed" id="about">

        {/* about text */}
        <div className="text-white rounded w-[98%] mx-auto  bg-primary/60 h-[78%] sm:h-[80%] flex justify-center items-center">
          {/* text wrapper */}
          <div className="w-[95%] mx-auto">
            <h2 className="font-semibold text-2xl">About</h2>
            <h2 className="font-bold text-4xl pb-4">J. J. WILLMIN</h2>
            <p className="text-2xl sm:text-3xl font-semibold">
              J.J.WILLMIN Nigeria limited is a service provider with proficient touch in the following areas of specialties: </p>
            <ul className="sm:text-4xl text-2xl font-bold flex flex-col">
              <li className="font-bold bg-primary inline-block border-solid border-white border-2 rounded p-[3px] m-[4px]">Civil Engineering Design and Construction,</li>
              <li className="font-bold bg-primary inline-block border-solid border-white border-2 rounded p-[3px] m-[4px]">Road Design and Construction</li>
              <li className="font-bold bg-primary inline-block border-solid border-white border-2 rounded p-[3px] m-[4px]">Residential and Real Estate Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="project"className="m-3.5 text-primary lg:px-[2rem]">
        <h3 className="text-2xl text-center">our works</h3>
        <h2 className="text-4xl text-center mb-5 font-bold">Featured Projects</h2>
        <Projects />
      </div>

      {/* Values Section */}
      <div>
        {/* background image */}
        <div className="flex justify-center items-center bg-mission h-screen bg-cover bg-center bg-fixed" id="about">
          {/* background wrapper */}
          <div className="text-white rounded w-[98%] mx-auto  bg-primary/60 h-[78%] sm:h-[80%] flex justify-center items-center">
            {/* text wrapper */}
            <div className="w-[95%] mx-auto text-center">
              <h1 className="uppercase text-5xl">our mission</h1>
              <p className="text-3xl">It is our mission to develop simple and modern technology in applying to achieving qualitative
                and
                satisfactory job deliverables in with due cognize of all Health Safety and Environmental issues
                in
                our business stream
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center bg-quality h-screen bg-cover bg-center bg-fixed" id="about">
            {/* background wrapper */}
            <div className="text-white rounded w-[98%] mx-auto  bg-primary/60 h-[78%] sm:h-[80%] flex justify-center items-center">
              {/* text wrapper */}
              <div className="w-[95%] mx-auto text-center">
                <h2 className="uppercase text-5xl">We are obsessed with quality—</h2>
                <p className="text-3xl">
                  To us, nothing is more satisfying than a job well done and a happy customer. We want to know
                  straight from our customers if we truly met and exceeded their expectations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center bg-values h-screen bg-cover bg-center bg-fixed" id="about">
            {/* background wrapper */}
            <div className="text-white rounded w-[98%] mx-auto  bg-primary/60 h-[85%] sm:h-[80%] flex justify-center items-center">
              {/* text wrapper */}
              <div className="w-[95%] mx-auto text-center">
                <h2 className="text-4xl">OUR CORE VALUES</h2>
                <p className="text-2xl">J. J. WILLMIN  operates on the following Core Firm Values. </p>

                <ul className="text-xl flex flex-col sm:gap-[1rem]">
                  <li>
                    <h4 className="text-3xl">
                      Integrity–
                    </h4>
                    <p className="italic"> Unquestionable honesty and commitment.</p>
                  </li>
                  <li>
                    <h4 className="text-3xl">
                      Initiative–
                    </h4>
                    <p className="italic"> Taking hold of situations and finding imaginative solutions.</p>
                  </li>
                  <li>
                    <h4 className="text-3xl">
                      Teamwork–
                    </h4>
                    <p className="italic"> Synergistic, non-hierarchical collaboration with colleagues, clients, and associates.
                    </p>
                  </li>
                  <li>
                    <h4 className="text-3xl">
                      Excellence–
                    </h4>
                    <p className="italic"> Superior service delivery and dedication, setting industry standards, unrelenting quest
                      to
                      be the best.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  className="flex justify-center items-center bg-contact h-screen bg-cover bg-center bg-fixed" id="contact">
        {/* background wrapper */}
        <div className="text-white rounded w-[98%] mx-auto  bg-primary/60 h-[78%] sm:h-[80%] flex justify-center items-center">
          {/* text wrapper */}
          <div className="w-[95%] mx-auto text-center">
            <div className="contact">
              <ul className="contact-text text-center">
                <li>
                  <p className="text-3xl">Give us a call or send a message if you have a project</p>
                </li>
                <li>
                  <div className="details text-2xl">

                    <i className="fa-solid fa-envelope"></i>
                    <div className=""> jjwillmin@gmail.com</div>

                  </div>
                </li>

                <li>
                  <div className="details text-2xl">

                    <i className="fa-sharp fa-solid fa-phone"></i>
                    <div>+234 813 488 0597 </div>
                  </div>

                </li>

                <li>
                  <div className="details text-2xl">
                    <i className="fa-solid fa-location-dot"></i>
                    <div> Nigeria, Rivers state, 12, Port Harcourt Ebony/Orazi Road</div>
                  </div>

                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>






    </>
  )
}


// export async function getStacticProps() {
//   const folderName = 'J. J. WILLMIN Images'; // replace with the name of your folder
//   const response = await cloudinary.v2.api.resources({
//     type: 'upload',
//     prefix: `folder/${folderName.replace(/ /g, '%20')}`,
//     max_results: 31, // replace with the number of images you want to fetch
//     context: true
//   });
//   const images = response.resources.map((image) => ({
//     id: image.public_id,
//     url: image.secure_url,
//   }));
//   return {
//     props: {
//       images
//     }
//   }
// }