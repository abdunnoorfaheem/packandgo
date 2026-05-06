import React from "react";
import Container from "../Container";
import Image from "../Image";
import Location from "/src/assets/location.png"
import Date from "/src/assets/Date.png"
import People from "/src/assets/People.png"
import Arrow from "/src/assets/arrow.png"
import Search from "/src/assets/Search.png"

const Banner = () => {
  return (
    <>
      <section>
        <div className="bg-[url('/src/assets/banner.png')] h-[866px] bg-no-repeat bg-center bg-cover">
          <Container>
            <h1 className="text-[65px] font-semibold font-poppins max-w-[573px] leading-[80px] pt-34">Start Exploring to Find Inner Peace by Traveling</h1>
            <p className="text-[#616161] font-poppins leading-[30px] max-w-[597px] pt-9  pb-10">Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.</p>
            <div className="">
                <button className="bg-[#007F5F] text-white px-[35px] py-4 rounded-[17px] mb-15">Discover Now</button>
            </div>
            <div className="max-w-[855px] h-[130px] bg-white rounded-[10px] py-8 px-7">
                <div className="flex items-center justify-between">
                    <div className="">
                    <div className="flex items-center gap-x-4">
                        <div className="">
                            <Image imgSrc={Location}/>
                        </div>
                        <div className="">
                            <h4 className="text-[#292929] text-[20px] font-bold">Location</h4>
                        </div>
                        <div className="">
                            <Image imgSrc={Arrow}/>
                        </div>
                    </div>
                    <div className="ml-8">
                        <h5 className="text-[#616161] ">Enter your location</h5>
                    </div>
                </div>
                    <div className="">
                    <div className="flex items-center gap-x-4">
                        <div className="">
                            <Image imgSrc={Date}/>
                        </div>
                        <div className="">
                            <h4 className="text-[#292929] text-[20px] font-bold">Date</h4>
                        </div>
                        <div className="">
                            <Image imgSrc={Arrow}/>
                        </div>
                    </div>
                    <div className="ml-9">
                        <h5 className="text-[#616161] ">Enter your location</h5>
                    </div>
                </div>
                    <div className="">
                    <div className="flex items-center gap-x-4">
                        <div className="">
                            <Image imgSrc={People}/>
                        </div>
                        <div className="">
                            <h4 className="text-[#292929] text-[20px] font-bold">People</h4>
                        </div>
                        <div className="">
                            <Image imgSrc={Arrow}/>
                        </div>
                    </div>
                    <div className="ml-8">
                        <h5 className="text-[#616161] ">Enter your location</h5>
                    </div>
                </div>
                <div className="">
                    <Image imgSrc={Search}/>
                </div>
                </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
