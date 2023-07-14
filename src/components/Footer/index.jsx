import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-8 ml-[102px] mr-[157px] mt-[74px] w-[83%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[118px] justify-start md:mt-0 mt-[7px] w-[36%] md:w-full">
              <div className="flex flex-row gap-8 items-center justify-start md:ml-[0] ml-[29px] w-[62%] md:w-full">
                <Img
                  className="h-11 w-11"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
                <Img
                  className="h-11 w-11"
                  src="images/img_camera.svg"
                  alt="camera"
                />
                <Img
                  className="h-11 w-11"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
                <Img
                  className="h-11 w-11"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                <Img
                  className="h-[19px] w-5"
                  src="images/img_location.svg"
                  alt="location"
                />
                <Text
                  className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-100"
                  size="txtInterLight21"
                >
                  <span className="text-gray-100 font-inter text-left font-medium">
                    2023 M
                  </span>
                  <a
                    href="javascript:"
                    className="text-gray-100 font-inter text-left font-medium underline"
                  >
                    entorbridge.{" "}
                  </a>
                  <span className="text-gray-100 font-inter text-left font-medium">
                    All Rights Reserved.
                  </span>
                </Text>
              </div>
            </div>
            <ul className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[35%] md:w-full common-column-list">
              <li>
                <div className="flex flex-row items-start justify-between">
                  <Text
                    className="mb-[9px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-100 underline"
                    size="txtInterMedium21"
                  >
                    Contact us
                  </Text>
                  <Text
                    className="mt-[9px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-100"
                    size="txtInterMedium21"
                  >
                    Help center
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-start justify-between">
                  <Text
                    className="mb-[7px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-100 underline"
                    size="txtInterMedium21"
                  >
                    Privacy policy
                  </Text>
                  <Text
                    className="mt-[7px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-100"
                    size="txtInterMedium21"
                  >
                    About us
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-start justify-between">
                  <Text
                    className="mb-[11px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-100 underline"
                    size="txtInterMedium21"
                  >
                    Terms of use
                  </Text>
                  <Text
                    className="mt-[11px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-100"
                    size="txtInterMedium21"
                  >
                    FAQs
                  </Text>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
