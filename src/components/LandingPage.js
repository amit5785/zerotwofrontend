import React  from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

const LandingPage = ({ user }) => {
  var text = ["Design", " ", "Create", " ", "Render", " ", "Showcase"]
  return (
    <div className="text-black bg-white font-roboto">
      <div className="w-full h-screen mx-auto p-2 text-center flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <div className="lg:text-7xl font-bold py-4 md:text-5xl sm:text-4xl">
            <div className="box-content overflow-hidden h-20">
                    {
                        text.map((item,ind) => {
                            return <span className="text-19xl font-bold text-sky-500 block h-full pr-3 animate-wave text-center" key={ind}>{item}</span>
                        })
                    }  
                </div>
          </div>
        </div>
        <div className="justify-center items-center lg:text-7xl md:6xl sm:3xl flex flex-col gap-12">
          <h1 className="">
            Your imagination to this world
          </h1>
          <p className="lg:text-2xl md:2xl py-10 w-3/6 ">
            ZeroTwo connects everyone in the production process of animation so
            the team can deliver better results, faster.
          </p>
        </div>

        <Link
          className="bg-sky-500 block rounded-md font-medium text-4xl my-6 mx-auto px-4 py-3 text-white"
          to="/login"
        >
          Get Started
        </Link>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[450px] mx-auto my-5"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzlkaNlHtk0K-HxQy2rxLHwOsvTJvu0aQ-g&usqp=CAU"
          }
          alt="no internet"
        />
        <div className="flex flex-col justify-center">
          <p className="text-sky-500 font-bold ">VIDEO ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-2xl text-2xl font-bold py-2">
            Manage Your Video Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex font-serif font-medium underline text-sky-400 hover:text-sky-500 cursor-pointer text-xl my-2 mx-auto md:mx-0 py-3"
          >
            Know More <BsArrowRightCircleFill className="m-1" />
          </a>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto my-10 grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-sky-500 font-bold ">VIDEO ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Your Video Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex font-serif font-medium underline text-sky-400 hover:text-sky-500 cursor-pointer text-xl my-2 mx-auto md:mx-0 py-3"
          >
            Know More <BsArrowRightCircleFill className="m-1" />
          </a>
        </div>
        <img
          className="w-[450px] mx-auto my-5"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzlkaNlHtk0K-HxQy2rxLHwOsvTJvu0aQ-g&usqp=CAU"
          }
          alt="no internet"
        />
      </div>
    </div>
  );
};

export default LandingPage;
