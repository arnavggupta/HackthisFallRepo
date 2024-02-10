import image1 from "../assets/images/image-1.jpg";
import Footer from "../components/Footer";
import bodyImg from '../assets/images/feature-section-2BG.svg'
import Crousels from "../components/Crousels";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
     <Navbar />

      <div className="bg-blue-700 min-h-screen">
        <div className="relative bg-blue-700">
          <div className=" bg-blue-700 h-screen w-screen relative flex flex-col justify-center">
            <img src={bodyImg} alt="" className="w-full h-auto absolute left-0 top-0 object-cover" />
            <div className="flex absolute justify-between">
              <div className=" h-[50%] w-[50%] m-3 rounded-lg">
                {/* <img src={image1} alt="" className="h-[100%] w-[100%] rounded-lg"/> */}
                <Crousels/>
              </div>
              <div className="w-[40%] p-5 flex-col flex justify-center">
                <div className=" text-slate-200 tracking-wide text-4xl font-bold my-2">Learn.  Ask.. Solve...</div>
                <div className=" text-slate-400 text-lg leading-8 tracking-normal p-2">
                  A platform to ask your doubts , connect with like-minded people and learn together
                </div>
                <div>
                  <button className=" bg-sky-500 p-3 rounded-lg m-3 tracking-wide font-semibold text-slate-800 font-sans text-lg">SignUp now </button>
                </div>
              </div>
            </div>  
          </div>
        </div>
        <div className="bg-blue-700 flex justify-end">
              <div className="text-white font-semibold py-6 px-12 text-5xl tracking-wide">About Us</div>
        </div>
        <div className="  bg-blue-700 flex justify-end">
          <div className="text-slate-300 text-lg leading-8 tracking-normal p-2 w-[40%] my-3">
            We are a community of developers, designers, artists, writers and thinkers who share their knowledge and skills through discussions, projects and showcases. Our aim is to create an environment where learners can help each other and learn together.
          </div>          
        </div>
      </div>
    </>
  );
}

export default Home;
