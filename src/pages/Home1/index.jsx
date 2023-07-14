import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1065px] md:px-5 relative w-full">
            <Img
              className="h-[628px] mb-[undefinedpx] ml-auto mt-[170px] object-cover w-[38%] z-[1]"
              src="images/img_girlonpsychologist.png"
              alt="girlonpsycholog"
            />
            <header className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-center mb-[-17px] mx-auto shadow-bs w-full z-[1]">
              <Img
                className="h-20 mb-[30px] sm:ml-[0] ml-[25px] sm:mt-0 mt-[34px]"
                src="images/img_logo.svg"
                alt="logo"
              />
              <Text
                className="mb-[49px] sm:ml-[0] ml-[70px] sm:mt-0 mt-[57px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterSemiBold30"
              >
                Filters
              </Text>
              <Img
                className="h-2.5 mb-[57px] ml-3.5 sm:ml-[0] sm:mt-0 mt-[76px]"
                src="images/img_vector_black_900.svg"
                alt="vector"
              />
              <Text
                className="mb-12 sm:ml-[0] ml-[74px] sm:mt-0 mt-[58px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterSemiBold30"
              >
                About Us
              </Text>
              <Text
                className="mb-[45px] sm:ml-[0] ml-[86px] sm:mt-0 mt-[61px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterSemiBold30"
              >
                Blog
              </Text>
              <Button className="border-2 border-solid border-teal-700 cursor-pointer font-semibold leading-[normal] mb-[41px] min-w-[280px] sm:ml-[0] ml-[39px] sm:mt-0 mt-[51px] py-2.5 rounded-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center">
                Earning calculator
              </Button>
              <Button className="border-2 border-black-900 border-solid cursor-pointer font-semibold leading-[normal] mb-[49px] min-w-[144px] sm:ml-[0] ml-[83px] sm:mt-0 mt-[45px] py-[9px] rounded-[23px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center">
                Login
              </Button>
              <Button className="bg-teal-700 cursor-pointer font-semibold leading-[normal] mb-[49px] min-w-[144px] ml-4 sm:ml-[0] mr-[47px] sm:mt-0 mt-[45px] py-[9px] rounded-[23px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700">
                Signup
              </Button>
            </header>
            <div className="sm:h-[1073px] md:h-[937px] h-[938px] mt-auto mx-auto w-full">
              <div className="bg-gradient  flex flex-col h-full items-start justify-end m-auto p-[143px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col justify-start ml-1 md:ml-[0] mt-[9px] w-[73%] md:w-full">
                  <Img
                    className="h-[182px] md:h-auto md:ml-[0] ml-[356px] object-cover w-[13%] sm:w-full"
                    src="images/img_bluerocket.png"
                    alt="bluerocket"
                  />
                  <Text
                    className="md:ml-[0] ml-[30px] mt-[17px] md:text-5xl text-[70px] text-black-900"
                    size="txtInterSemiBold70"
                  >
                    Grow Faster Together
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[260px] w-full">
                    <Button className="bg-blue_gray-600 cursor-pointer font-semibold leading-[normal] min-w-[380px] sm:min-w-full py-[30px] rounded-[34px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700">
                      Find a Mentor
                    </Button>
                    <Button className="bg-blue_gray-600 cursor-pointer font-semibold leading-[normal] min-w-[380px] sm:min-w-full py-[30px] rounded-[34px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700">
                      Become a Mentor
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="absolute bottom-[39%] left-[0] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                size="txtInterSemiBold45"
              >
                <>
                  Find a mentor or Lead the path for someone
                  <br />
                  It’s a win win!
                </>
              </Text>
            </div>
          </div>
          <div className="bg-blue-100 flex flex-col md:gap-10 gap-[76px] items-center justify-start p-[35px] sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtInterSemiBold40"
            >
              Find the expertises from{" "}
            </Text>
            <div className="flex flex-col items-center justify-start max-w-[1398px] mb-[95px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start pb-4 w-full">
                <div className="overflow-x-auto w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end overflow-auto w-full">
                    <Img
                      className="sm:flex-1 h-[97px] md:h-auto object-cover rounded-[10px] w-1/4 sm:w-full"
                      src="images/img_image2.png"
                      alt="imageTwo"
                    />
                    <Img
                      className="sm:flex-1 h-[97px] md:h-auto sm:ml-[0] ml-[118px] object-cover rounded-[10px] w-[29%] sm:w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="sm:flex-1 h-[97px] md:h-auto sm:ml-[0] ml-[67px] object-cover rounded-[10px] w-[29%] sm:w-full"
                      src="images/img_rectangle11.png"
                      alt="rectangleEleven"
                    />
                    <Img
                      className="sm:flex-1 h-[97px] md:h-auto sm:ml-[0] ml-[67px] object-cover rounded-[10px] w-[29%] sm:w-full"
                      src="images/img_rectangle12.png"
                      alt="rectangleTwelve"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="mt-[43px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterSemiBold40"
              >
                Make your career growth in
              </Text>
              <div className="flex flex-col items-center justify-start mt-[86px] w-full">
                <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between overflow-auto w-full">
                  <div className="h-[145px] md:mt-0 mt-[3px] relative w-[19%] md:w-full">
                    <Img
                      className="h-[145px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle15.png"
                      alt="rectangleFifteen"
                    />
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                      size="txtInterSemiBold25"
                    >
                      UX/UI Design
                    </Text>
                  </div>
                  <div className="h-[145px] md:mt-0 mt-[3px] relative w-[19%] md:w-full">
                    <Img
                      className="h-[145px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle16.png"
                      alt="rectangleSixteen"
                    />
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
                      size="txtInterSemiBold25"
                    >
                      <>
                        Product <br />
                        Management
                      </>
                    </Text>
                  </div>
                  <div className="h-[145px] md:mt-0 mt-[3px] relative w-[19%] md:w-full">
                    <Img
                      className="h-[145px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle15_145x260.png"
                      alt="rectangleFifteen_One"
                    />
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                      size="txtInterSemiBold25"
                    >
                      Marketing
                    </Text>
                  </div>
                  <div className="h-[145px] md:mt-0 mt-[3px] relative w-[19%] md:w-full">
                    <Img
                      className="h-[145px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle15_1.png"
                      alt="rectangleFifteen_Two"
                    />
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                      size="txtInterSemiBold25"
                    >
                      Data Science
                    </Text>
                  </div>
                  <div className="mb-[3px] overflow-x-auto w-[19%]">
                    <div className="h-[145px] relative w-full">
                      <Img
                        className="h-[145px] m-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle15_2.png"
                        alt="rectangleFifteen_Three"
                      />
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 top-[37%] w-max"
                        size="txtInterSemiBold25"
                      >
                        Teaching
                      </Text>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[41px] grid sm:grid-cols-1 grid-cols-2 mb-[3px] w-[41%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="h-[145px] relative w-full">
                      <Img
                        className="h-[145px] m-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle15_3.png"
                        alt="rectangleFifteen"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                        size="txtInterSemiBold25"
                      >
                        Content writing
                      </Text>
                    </div>
                    <div className="h-[145px] relative w-full">
                      <Img
                        className="h-[145px] m-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle15_4.png"
                        alt="rectangleFifteen"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                        size="txtInterSemiBold25"
                      >
                        Front end
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[30px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
            size="txtInterSemiBold40"
          >
            What our Clients says about us
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1469px] mt-[92px] mx-auto md:px-5 w-full">
            <Img
              className="h-[39px] md:mt-0 mt-[126px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <div className="md:h-[300px] h-[342px] md:ml-[0] ml-[23px] relative w-[27%] md:w-full">
              <div className="md:h-[300px] h-[342px] m-auto w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[300px] inset-x-[0] items-end justify-end mx-auto p-2 top-[0] w-full"
                  style={{ backgroundImage: "url('images/img_group111.svg')" }}
                >
                  <Text
                    className="capitalize mr-[131px] mt-[257px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterSemiBold22"
                  >
                    Alisa
                  </Text>
                </div>
                <Img
                  className="absolute bottom-[0] h-[109px] object-cover right-[4%] rounded-[54px] w-[108px]"
                  src="images/img_ellipse3.png"
                  alt="ellipseThree"
                />
              </div>
              <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-[70px] justify-start right-[8%]">
                <Text
                  className="capitalize text-[15px] text-white-A700 w-full"
                  size="txtInterMedium15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatu
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[31px] text-[22px] text-blue_gray-600_01 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22Bluegray60001"
                >
                  Founder,XOXO
                </Text>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[109px] grid md:grid-cols-1 grid-cols-2 md:ml-[0] ml-[105px] w-3/5 md:w-full"
              orientation="horizontal"
            >
              <div className="md:h-[300px] h-[342px] relative w-full">
                <div className="absolute md:h-[300px] h-[339px] inset-[0] justify-center m-auto w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[300px] inset-x-[0] items-end justify-end mx-auto p-2 top-[0] w-full"
                    style={{
                      backgroundImage: "url('images/img_group111.svg')",
                    }}
                  >
                    <Text
                      className="capitalize mr-[121px] mt-[257px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      Michel
                    </Text>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[108px] right-[4%] rounded-[50%] w-[108px]"
                    src="images/img_ellipse3_108x108.png"
                    alt="ellipseThree"
                  />
                </div>
                <Text
                  className="absolute capitalize right-[7%] text-[15px] text-white-A700 top-[18%] w-[77%] sm:w-full"
                  size="txtInterMedium15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatu
                </Text>
                <Text
                  className="absolute bottom-[0] capitalize left-[17%] text-[22px] text-blue_gray-600_01 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22Bluegray60001"
                >
                  Manager,QWERTY
                </Text>
              </div>
              <div className="md:h-[298px] h-[342px] relative w-full">
                <div className="absolute md:h-[298px] h-[339px] inset-[0] justify-center m-auto w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[300px] inset-x-[0] items-center justify-end mx-auto p-1.5 top-[0] w-full"
                    style={{
                      backgroundImage: "url('images/img_group111.svg')",
                    }}
                  >
                    <Text
                      className="capitalize mt-[259px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      Lee cooper
                    </Text>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[108px] right-[4%] rounded-[50%] w-[108px]"
                    src="images/img_ellipse3_1.png"
                    alt="ellipseThree"
                  />
                </div>
                <Text
                  className="absolute capitalize right-[6%] text-[15px] text-white-A700 top-[19%] w-[77%] sm:w-full"
                  size="txtInterMedium15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatu
                </Text>
                <Text
                  className="absolute bottom-[0] capitalize left-[18%] text-[22px] text-blue_gray-600_01 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22Bluegray60001"
                >
                  HR Director, Meta
                </Text>
              </div>
            </List>
            <Img
              className="h-[39px] md:ml-[0] ml-[25px] md:mt-0 mt-[129px]"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
          <div className="flex flex-col mt-[77px] md:px-5 relative w-full">
            <div className="bg-gradient1  flex flex-col md:gap-10 gap-[103px] items-center justify-start mx-auto p-[51px] md:px-10 sm:px-5 w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterSemiBold40"
              >
                Let’s Clear your Doubts!
              </Text>
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[35px] w-[68%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[11px] shadow-bs1 w-full">
                  <Text
                    className="mt-[17px] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                    size="txtInterSemiBold34"
                  >
                    What is the approval criteria to be a Mentor? +
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[19px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                    size="txtInterSemiBold34"
                  >
                    How does Mentor Bridge work for Mentors? +
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[18px] shadow-bs1 w-full">
                  <Text
                    className="mt-[3px] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                    size="txtInterSemiBold34"
                  >
                    Can I charge fees of my choice? +
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[19px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                    size="txtInterSemiBold34"
                  >
                    Can I get guidance on how to be a mentor ? +
                  </Text>
                </div>
              </div>
            </div>
            <Footer className="bg-blue_gray-600_01 flex items-center justify-center mt-[-9px] mx-auto w-full z-[1]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
