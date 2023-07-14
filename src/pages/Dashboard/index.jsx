import React from "react";

import { Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";

const filtersOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex h-[145px] justify-end md:px-5 relative w-full">
            <Img
              className="h-[33px] mb-[50px] ml-auto mr-[136px] mt-auto"
              src="images/img_notification.svg"
              alt="notification"
            />
            <div className="absolute bg-white-A700 flex flex-row h-full inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 shadow-bs w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[5px] mt-[9px] w-[52%]">
                <Img
                  className="h-[81px]"
                  src="images/img_logo.svg"
                  alt="logo"
                />
                <SelectBox
                  className="font-semibold leading-[normal] md:ml-[0] ml-[70px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-left w-[17%] md:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-2.5 mr-[0] w-5"
                      src="images/img_vector_black_900.svg"
                      alt="Vector"
                    />
                  }
                  isMulti={false}
                  name="group121"
                  options={filtersOptionsList}
                  isSearchable={false}
                  placeholder="Filters"
                />
                <Text
                  className="md:ml-[0] ml-[81px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtInterSemiBold30"
                >
                  About Us
                </Text>
                <Text
                  className="md:ml-[0] ml-[93px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtInterSemiBold30"
                >
                  Blog
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[58px] items-start justify-between mt-[5px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[22%] md:w-full">
              <div className="flex flex-row items-start justify-evenly w-full">
                <div className="flex flex-1 flex-col items-start justify-start mt-[13px] w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start md:ml-[0] ml-[25px] w-[76%] md:w-full">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse7.png"
                      alt="ellipseSeven"
                    />
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtInterSemiBold25Black900"
                    >
                      Neha Bhat
                    </Text>
                  </div>
                  <div className="bg-teal-200 flex flex-row gap-5 items-center justify-center mt-[37px] p-[11px] w-full">
                    <Img
                      className="h-[19px] ml-[41px]"
                      src="images/img_home.svg"
                      alt="home"
                    />
                    <Text
                      className="mb-0.5 mr-[153px] text-black-900 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Home
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[55px] mt-[30px] w-[42%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_call.svg"
                      alt="call"
                    />
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Bookings
                    </Text>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[0] ml-[21px] mt-10 w-[86%] md:w-full">
                    <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-full">
                      <div className="flex flex-col gap-[21px] justify-start w-full">
                        <div className="flex flex-row gap-5 items-start justify-start ml-8 md:ml-[0] w-[43%] md:w-full">
                          <Img
                            className="h-[22px] mt-0.5"
                            src="images/img_save.svg"
                            alt="save"
                          />
                          <Text
                            className="text-black-900 text-xl"
                            size="txtInterSemiBold20"
                          >
                            Queries
                          </Text>
                        </div>
                        <Line className="bg-black-900 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[21px] items-start justify-start md:ml-[0] ml-[34px] mt-[19px] w-[53%] md:w-full">
                      <Img
                        className="h-[22px] mt-1"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Schedules
                      </Text>
                    </div>
                    <Input
                      name="group120"
                      placeholder="Services"
                      className="font-semibold leading-[normal] p-0 placeholder:text-black-900 sm:px-5 text-black-900 text-left text-xl w-full"
                      wrapClassName="border-b border-black-900 flex mr-0.5 mt-[39px] pb-[27px] px-[34px] w-full"
                      prefix={
                        <div className="mt-0.5 mr-[15px] sm:w-full sm:mx-0 w-[10%] bg-black-900">
                          <Img
                            className="my-auto"
                            src="images/img_user.svg"
                            alt="user"
                          />
                        </div>
                      }
                    ></Input>
                    <div className="flex flex-row gap-[21px] items-end justify-start md:ml-[0] ml-[35px] mt-[13px] w-[38%] md:w-full">
                      <Img
                        className="h-[18px] mt-[7px] w-[18px]"
                        src="images/img_user_black_900.svg"
                        alt="user_One"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Profile
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-end justify-start md:ml-[0] ml-[34px] mt-[41px] w-3/5 md:w-full">
                      <Img
                        className="h-[19px] mt-[5px] w-5"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Invite & Earn
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[19px] items-start justify-start md:ml-[0] ml-[33px] mt-[42px] w-[46%] md:w-full">
                      <Img
                        className="h-5 mt-1"
                        src="images/img_vector.svg"
                        alt="vector_One"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Rewards
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[22px] items-center justify-start md:ml-[0] ml-[35px] mt-11 w-2/5 md:w-full">
                      <Img
                        className="h-[19px]"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                      <a href="javascript:" className="text-black-900 text-xl">
                        <Text size="txtInterSemiBold20">Logout</Text>
                      </a>
                    </div>
                  </div>
                </div>
                <Line className="bg-black-900 h-[817px] w-px" />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[43px] justify-start md:mt-0 mt-[52px] md:px-5 w-[76%] md:w-full">
              <Text
                className="md:ml-[0] ml-[59px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterSemiBold40"
              >
                Hi Neha!
              </Text>
              <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between w-full">
                <div className="md:h-[451px] sm:h-[526px] h-[527px] relative w-[61%] md:w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[37px] sm:px-5 rounded-[22px] shadow-bs2 w-full">
                    <div className="flex flex-col gap-[58px] justify-start mb-[5px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[11px]">
                        <Text
                          className="sm:text-[25px] md:text-[27px] text-[29px] text-black-900"
                          size="txtInterSemiBold29"
                        >
                          Welcome to Mentor Bridge
                        </Text>
                        <Text
                          className="text-black-900 text-xl"
                          size="txtInterRegular20"
                        >
                          Your Journey as a mentor begins here
                        </Text>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtInterSemiBold25Black900"
                          >
                            Add availability
                          </Text>
                          <Img
                            className="h-[11px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtInterSemiBold25Black900"
                          >
                            Complete your profile
                          </Text>
                          <Img
                            className="h-[11px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown_One"
                          />
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtInterSemiBold25Black900"
                          >
                            Share a post
                          </Text>
                          <Img
                            className="h-[11px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown_Two"
                          />
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtInterSemiBold25Black900"
                          >
                            Connect payout
                          </Text>
                          <Img
                            className="h-[11px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown_Three"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[19%] flex flex-col md:gap-10 gap-[97px] inset-x-[0] items-center justify-start mx-auto w-full">
                    <Line className="bg-blue_gray-100 h-px w-full" />
                    <Line className="bg-blue_gray-100 h-px w-full" />
                    <Line className="bg-blue_gray-100 h-px w-full" />
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[146px] w-[36%] md:w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-between w-full">
                      <Img
                        className="h-[39px] sm:mt-0 mt-[62px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                      <div className="flex relative w-[82%] sm:w-full">
                        <div className="flex my-auto w-[70%]">
                          <Img
                            className="h-[145px] my-auto rounded-[50%] w-[145px]"
                            src="images/img_ellipse10.png"
                            alt="ellipseTen"
                          />
                          <Img
                            className="h-[145px] ml-[-57px] my-auto rounded-[50%] w-[145px] z-[1]"
                            src="images/img_ellipse8.png"
                            alt="ellipseEight"
                          />
                        </div>
                        <Img
                          className="h-[145px] ml-[-45px] my-auto rounded-[50%] w-[145px] z-[1]"
                          src="images/img_ellipse9.png"
                          alt="ellipseNine"
                        />
                      </div>
                      <Img
                        className="h-[39px] sm:mt-0 mt-[62px]"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterSemiBold30"
                    >
                      Meet similar mentors
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-blue_gray-600_01 flex items-center justify-center mt-[94px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
