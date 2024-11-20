import "./App.css";
import Container from "./components.jsx/Container";
import Flex from "./components.jsx/Flex";
import Image from "./components.jsx/Image";
import logo from "./assets/logo.png";
import Menu from "./components.jsx/Menu";
import Button from "./components.jsx/Button";
import Heading from "./components.jsx/Heading";
import banner from "./assets/banner.png";
import icon from "./assets/icon 1.png";
import iconA from "./assets/icon 2.png";
import iconB from "./assets/icon 3.png";
import iconC from "./assets/icon 4 .png";
import about from "./assets/about1.png";
import aboutA from "./assets/about2.png";
import course from "./assets/Course.png";
import comment from "./assets/Coment1.png";
import commentA from "./assets/coment2.png";
import commentB from "./assets/Coment3.png";
import fotrlogo from "./assets/Footerlogo.png";

function App() {
  return (
    <>
      {/* Nev Bar Start */}
      <div id="navs">
        <Container className={" max-w-[1320px]"}>
          <Flex className={"justify-between items-center py-5 pb-[86px]"}>
            <div className="">
              <Image src={logo} alt={logo} />
            </div>
            <div className="">
              <Flex className={"gap-[50px] text-mclr font-pop text-[22px]"}>
                <Menu
                  mText={"Home"}
                  className={"hover:text-hovcor hover:text-[22px]"}
                />
                <Menu
                  mText={"Course"}
                  className={"hover:text-hovcor hover:text-[22px]"}
                />
                <Menu
                  mText={"Monitors"}
                  className={"hover:text-hovcor hover:text-[22px]"}
                />
                <Menu
                  mText={"About"}
                  className={"hover:text-hovcor hover:text-[22px]"}
                />
              </Flex>
            </div>
            <div className="">
              <Button
                btnText={"Get Started"}
                className={
                  "h-[62px] w-[174px] rounded-lg font-semibold font-pop bg-btnbg text-btnclr"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Nev Bar End */}
      {/* Banner Section Start */}
      <div id="ban">
        <Container className={"max-w-[1320px]"}>
          <Flex className={"gap-[122px] justify-between pb-[110px]"}>
            <div className="w-1/2">
              <Heading
                text={"Getting Quality Education is now more Easy"}
                as={"h1"}
                className={"text-firstH font-pop text-[60px] pt-[90px]"}
              />
              <Heading
                text={
                  "t is a long established fact that a reader will be distracted by the readable content of a page when looking  "
                }
                as={"p"}
                className={
                  "text-firstp font-pop text-[17px] pt-[14px] pb-[34px]"
                }
              />
              <Flex className={"gap-[30px]"}>
                <Button
                  btnText={"Join Us Free"}
                  className={
                    "h-[62px] w-[200px] rounded-lg font-semibold font-pop bg-transparent border hover:bg-btnbg hover:text-btnclr  text-mclr border-btnbdr"
                  }
                />
                <Button
                  btnText={"Join Us Free"}
                  className={
                    "h-[62px] w-[200px] rounded-lg font-semibold font-pop bg-transparent border hover:bg-btnbg hover:text-btnclr  text-mclr border-btnbdr"
                  }
                />
              </Flex>
            </div>
            <div className="">
              <Image src={banner} alt={banner} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Banner Section End */}
      {/* Counter Part Start */}
      <div id="cntr">
        <div className="bg-cntrBg">
          <Container className={"max-w-[1320px]"}>
            <Flex className={"py-[30px] justify-between"}>
              <div className="flex gap-[127px]">
                <div className="">
                  <Heading
                    text={"8200"}
                    as={"h5"}
                    className={"pb-3 font-pop font-bold text-[36px] text-white"}
                  />
                  <Heading
                    text={"Success Stories"}
                    as={"p"}
                    className={"font-pop text-[16px] text-white"}
                  />
                </div>
                <div className="border-r h[75px]"></div>
              </div>
              <div className="flex">
                <div className="">
                  <Heading
                    text={"12200"}
                    as={"h5"}
                    className={"pb-3 font-pop font-bold text-[36px] text-white"}
                  />
                  <Heading
                    text={"Expert Mentors"}
                    as={"p"}
                    className={"font-pop text-[16px] text-white"}
                  />
                </div>
                <div className="border-r h[75px] pr-[127px]"></div>
              </div>
              <div className="flex">
                <div className="">
                  <Heading
                    text={"50000"}
                    as={"h5"}
                    className={"pb-3 font-pop font-bold text-[36px] text-white"}
                  />
                  <Heading
                    text={"Hours  Course"}
                    as={"p"}
                    className={"font-pop text-[16px] text-white"}
                  />
                </div>
                <div className="border-r h[75px] px-[64px]"></div>
              </div>
              <div className="flex">
                <div className="">
                  <Heading
                    text={"70000"}
                    as={"h5"}
                    className={"pb-3 font-pop font-bold text-[36px] text-white"}
                  />
                  <Heading
                    text={"Active Student"}
                    as={"p"}
                    className={"font-pop text-[16px] text-white"}
                  />
                </div>
              </div>
            </Flex>
          </Container>
        </div>
      </div>
      {/* Counter Part End */}
      {/* Online Education Part End */}
      <div id="online">
        <Container className={"max-w-[1320px]"}>
          <div className="pb-5">
            <div className="">
              <Heading
                text={"Benefits of online Education  "}
                as={"h2"}
                className={
                  "pt-[40px] pb-2 font-bold text-[30px] font-pop text-center"
                }
              />
              <Heading
                text={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking"
                }
                as={"p"}
                className={
                  " font-medium text-4 text-firstp px-[400px] mb-[70px] font-pop text-center"
                }
              />
              <Flex className={"gap-4"}>
                <div className="shadow-md rounded-xl">
                  <Image src={icon} alt={icon} />
                  <div className=" px-[26px] pb-[35px]">
                    <Heading
                      text={"One on One Monitor"}
                      as={"h6"}
                      className={"font-bold font-pop text-[16px] text-firstH "}
                    />
                    <Heading
                      text={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting"
                      }
                      as={"p"}
                      className={
                        "text-firstp text-10px font-regular pr-[80px] "
                      }
                    />
                  </div>
                </div>
                <div className="shadow-md rounded-xl">
                  <Image src={iconA} alt={iconA} />
                  <div className=" px-[26px] pb-[35px]">
                    <Heading
                      text={"One on One Monitor"}
                      as={"h6"}
                      className={"font-bold font-pop text-[16px] text-firstH "}
                    />
                    <Heading
                      text={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting"
                      }
                      as={"p"}
                      className={
                        "text-firstp text-10px font-regular pr-[80px] "
                      }
                    />
                  </div>
                </div>
                <div className="shadow-md rounded-xl">
                  <Image src={iconB} alt={iconB} />
                  <div className=" px-[26px] pb-[35px]">
                    <Heading
                      text={"One on One Monitor"}
                      as={"h6"}
                      className={"font-bold font-pop text-[16px] text-firstH "}
                    />
                    <Heading
                      text={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting"
                      }
                      as={"p"}
                      className={
                        "text-firstp text-10px font-regular pr-[80px] "
                      }
                    />
                  </div>
                </div>
                <div className="shadow-md rounded-xl">
                  <Image src={iconC} alt={iconC} />
                  <div className=" px-[26px] pb-[35px]">
                    <Heading
                      text={"One on One Monitor"}
                      as={"h6"}
                      className={"font-bold font-pop text-[16px] text-firstH "}
                    />
                    <Heading
                      text={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting"
                      }
                      as={"p"}
                      className={
                        "text-firstp text-10px font-regular pr-[80px] "
                      }
                    />
                  </div>
                </div>
              </Flex>
            </div>
          </div>
        </Container>
      </div>
      {/* Online Education Part End */}
      {/* About Part Start */}
      <div id="">
        <Container className={"max-w-[1320px]"}>
          <Flex className={"pt-[60px] gap-[530px]"}>
            <div className="relative w-1/2 ">
              <Flex>
                <Image src={about} alt={about} />
                <Image
                  src={aboutA}
                  alt={aboutA}
                  className={"absolute left-[270px] pt-[136px]"}
                />
              </Flex>
            </div>
            <div className="">
              <Heading
                text={"We are Always Ensure Best Course for your learning"}
                as={"h3"}
                className={"text-[36px] font-bold text-txclr pt-[84px] "}
              />
              <Heading
                text={
                  "Lorem Ipsum is simply dummy text of the printing and It typesetting industry. Lorem Ipsum has been the"
                }
                as={"p"}
                className={"text-[16px] text-firstp pt-[14px] pb-[30px]"}
              />
              <Button
                btnText={"Join Us Free"}
                className={
                  "h-[62px] w-[200px] rounded-[25px] font-semibold font-pop  border bg-btnbg hover:text-btnclr  text-mclr border-btnbdr mb-[200px]"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* About Part End */}
      {/* Course Part Start */}
      <div id="">
        <Container className={"max-w-[1320px]"}>
          <div className="pb-[50px]">
            <div className="">
              <Heading
                text={"Our Popular Course"}
                as={"h2"}
                className={
                  "pt-[40px] pb-2 font-bold text-[30px] font-pop text-center"
                }
              />
              <Heading
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th "
                }
                as={"p"}
                className={
                  " font-medium text-4 text-firstp px-[410px] mb-[70px] font-pop text-center"
                }
              />
            </div>
            <Flex className={"flex-wrap justify-between pb-5"}>
              <div className="shadow-md rounded-xl ">
                <Image src={course} alt={course} />
                <div className=" px-[26px] pb-[35px] ">
                  <Heading
                    text={"Web Design  Basic to advance"}
                    as={"h6"}
                    className={
                      "font-bold font-pop text-[16px] pt-5 text-firstH "
                    }
                  />
                  <Flex className={"gap-5 pt-[15px] "}>
                    <svg
                      width="120"
                      height="24"
                      viewBox="0 0 120 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                        fill="#F1C40F"
                      />
                    </svg>
                    <Heading text={"5.0 (2 rating)"} as={"p"} />
                  </Flex>
                  <Button
                    btnText={"Add to Cart"}
                    className={
                      "h-[56px] w-[347px] mt-5 rounded-lg font-semibold font-pop bg-transparent border   text-mclr border-btnbdr"
                    }
                  />
                </div>
              </div>
              <div className="shadow-md rounded-xl ">
                <Image src={course} alt={course} />
                <div className=" px-[26px] pb-[35px] ">
                  <Heading
                    text={"Web Design  Basic to advance"}
                    as={"h6"}
                    className={
                      "font-bold font-pop text-[16px] pt-5 text-firstH "
                    }
                  />
                  <Flex className={"gap-5 pt-[15px] "}>
                    <svg
                      width="120"
                      height="24"
                      viewBox="0 0 120 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                        fill="#F1C40F"
                      />
                    </svg>
                    <Heading text={"5.0 (2 rating)"} as={"p"} />
                  </Flex>
                  <Button
                    btnText={"Add to Cart"}
                    className={
                      "h-[56px] w-[347px] mt-5 rounded-lg font-semibold font-pop bg-transparent border   text-mclr border-btnbdr"
                    }
                  />
                </div>
              </div>
              <div className="shadow-md rounded-xl ">
                <Image src={course} alt={course} />
                <div className=" px-[26px] pb-[35px] ">
                  <Heading
                    text={"Web Design  Basic to advance"}
                    as={"h6"}
                    className={
                      "font-bold font-pop text-[16px] pt-5 text-firstH "
                    }
                  />
                  <Flex className={"gap-5 pt-[15px] "}>
                    <svg
                      width="120"
                      height="24"
                      viewBox="0 0 120 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                        fill="#F1C40F"
                      />
                    </svg>
                    <Heading text={"5.0 (2 rating)"} as={"p"} />
                  </Flex>
                  <Button
                    btnText={"Add to Cart"}
                    className={
                      "h-[56px] w-[347px] mt-5 rounded-lg font-semibold font-pop bg-transparent border   text-mclr border-btnbdr"
                    }
                  />
                </div>
              </div>
            </Flex>
            <Flex className={"flex-wrap justify-between pb-5"}>
              <div className="shadow-md rounded-xl ">
                <Image src={course} alt={course} />
                <div className=" px-[26px] pb-[35px] ">
                  <Heading
                    text={"Web Design  Basic to advance"}
                    as={"h6"}
                    className={
                      "font-bold font-pop text-[16px] pt-5 text-firstH "
                    }
                  />
                  <Flex className={"gap-5 pt-[15px] "}>
                    <svg
                      width="120"
                      height="24"
                      viewBox="0 0 120 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                        fill="#F1C40F"
                      />
                    </svg>
                    <Heading text={"5.0 (2 rating)"} as={"p"} />
                  </Flex>
                  <Button
                    btnText={"Add to Cart"}
                    className={
                      "h-[56px] w-[347px] mt-5 rounded-lg font-semibold font-pop bg-transparent border   text-mclr border-btnbdr"
                    }
                  />
                </div>
              </div>
              <div className="shadow-md rounded-xl ">
                <Image src={course} alt={course} />
                <div className=" px-[26px] pb-[35px] ">
                  <Heading
                    text={"Web Design  Basic to advance"}
                    as={"h6"}
                    className={
                      "font-bold font-pop text-[16px] pt-5 text-firstH "
                    }
                  />
                  <Flex className={"gap-5 pt-[15px] "}>
                    <svg
                      width="120"
                      height="24"
                      viewBox="0 0 120 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                        fill="#F1C40F"
                      />
                    </svg>
                    <Heading text={"5.0 (2 rating)"} as={"p"} />
                  </Flex>
                  <Button
                    btnText={"Add to Cart"}
                    className={
                      "h-[56px] w-[347px] mt-5 rounded-lg font-semibold font-pop bg-transparent border   text-mclr border-btnbdr"
                    }
                  />
                </div>
              </div>
              <div className="shadow-md rounded-xl ">
                <Image src={course} alt={course} />
                <div className=" px-[26px] pb-[35px] ">
                  <Heading
                    text={"Web Design  Basic to advance"}
                    as={"h6"}
                    className={
                      "font-bold font-pop text-[16px] pt-5 text-firstH "
                    }
                  />
                  <Flex className={"gap-5 pt-[15px] "}>
                    <svg
                      width="120"
                      height="24"
                      viewBox="0 0 120 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                        fill="#F1C40F"
                      />
                      <path
                        d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                        fill="#F1C40F"
                      />
                    </svg>
                    <Heading text={"5.0 (2 rating)"} as={"p"} />
                  </Flex>
                  <Button
                    btnText={"Add to Cart"}
                    className={
                      "h-[56px] w-[347px] mt-5 rounded-lg font-semibold font-pop bg-transparent border   text-mclr border-btnbdr"
                    }
                  />
                </div>
              </div>
            </Flex>
            <div className="text-center mt-10 mb-10">
              <Button
                btnText={"Join Us Free"}
                className={
                  "h-[62px] w-[183px] rounded-[25px] font-semibold font-pop  bg-btnbg text-btnclr"
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/* Course Part End */}
      {/* Review Part Start */}
      <div id="rev">
        <Container className={"max-w-[1320px]"}>
          <div className="pb-[120px]">
            <div>
              <Heading
                text={"What our Students say"}
                as={"h2"}
                className={" pb-2 font-bold text-[30px] font-pop text-center"}
              />
              <Heading
                text={
                  "There are many variations of passages of Lorem Ipsum available,"
                }
                as={"p"}
                className={
                  " font-medium text-4 text-firstp mb-[70px] font-pop text-center"
                }
              />
            </div>
            <Flex className={"gap-5"}>
              <div className="shadow-md rounded-xl ">
                <div className=" px-[26px] pb-[35px] ">
                  <Heading
                    text={"Great Platform"}
                    as={"h6"}
                    className={
                      "font-bold font-pop text-[16px] pt-5 pb-2 text-firstH "
                    }
                  />
                  {/* First Icon */}
                  <svg
                    width="19"
                    height="32"
                    viewBox="0 0 19 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.23404 15.2601C6.60142 14.3583 8.23942 13.8334 9.99984 13.8334C14.7863 13.8334 18.6665 17.7136 18.6665 22.5C18.6665 27.2865 14.7863 31.1667 9.99984 31.1667C5.60367 31.1667 1.97212 27.8935 1.409 23.6513C0.61882 19.7676 0.31007 15.0987 1.85815 10.8726C3.51652 6.34492 7.19639 2.62866 13.7844 0.90399C14.942 0.600874 16.1262 1.29377 16.4292 2.45121C16.7323 3.60886 16.0395 4.79294 14.8819 5.09605C9.55329 6.49117 7.05815 9.2749 5.92694 12.3631C5.5898 13.2839 5.36512 14.2565 5.23404 15.2601Z"
                      fill="#190D30"
                    />
                  </svg>
                  {/* First Icon End*/}
                  <Heading
                    text={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
                    }
                    as={"p"}
                  />
                  <hr className="mt-6 pb-1" />
                  <Flex className={"gap-5 pt-[15px] "}>
                    <div className="">
                      <Image src={comment} alt={comment} />
                    </div>
                    <div className="">
                      <Heading text={"Beth Luna"} as={"p"} />
                      <svg
                        width="120"
                        height="24"
                        viewBox="0 0 120 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                          fill="#F1C40F"
                        />
                      </svg>
                    </div>
                  </Flex>
                </div>
              </div>
              <div className="shadow-md rounded-xl ">
                <div className=" px-[26px] pb-[35px]">
                  <Heading
                    text={"Great Platform"}
                    as={"h6"}
                    className={
                      "font-bold font-pop text-[16px] pb-2 pt-5 text-firstH "
                    }
                  />
                  {/* First Icon */}
                  <svg
                    width="19"
                    height="32"
                    viewBox="0 0 19 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.23404 15.2601C6.60142 14.3583 8.23942 13.8334 9.99984 13.8334C14.7863 13.8334 18.6665 17.7136 18.6665 22.5C18.6665 27.2865 14.7863 31.1667 9.99984 31.1667C5.60367 31.1667 1.97212 27.8935 1.409 23.6513C0.61882 19.7676 0.31007 15.0987 1.85815 10.8726C3.51652 6.34492 7.19639 2.62866 13.7844 0.90399C14.942 0.600874 16.1262 1.29377 16.4292 2.45121C16.7323 3.60886 16.0395 4.79294 14.8819 5.09605C9.55329 6.49117 7.05815 9.2749 5.92694 12.3631C5.5898 13.2839 5.36512 14.2565 5.23404 15.2601Z"
                      fill="#190D30"
                    />
                  </svg>
                  {/* First Icon End*/}
                  <Heading
                    text={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
                    }
                    as={"p"}
                  />
                  <hr className="mt-6 pb-1" />
                  <Flex className={"gap-5 pt-[15px] "}>
                    <div className="">
                      <Image src={commentA} alt={commentA} />
                    </div>
                    <div className="">
                      <Heading text={"Beth Luna"} as={"p"} />
                      <svg
                        width="120"
                        height="24"
                        viewBox="0 0 120 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                          fill="#F1C40F"
                        />
                      </svg>
                    </div>
                  </Flex>
                </div>
              </div>
              <div className="shadow-md rounded-xl ">
                <div className=" px-[26px] pb-[35px] ">
                  <Heading
                    text={"Great Platform"}
                    as={"h6"}
                    className={
                      "font-bold font-pop text-[16px] pt-5 pb-3 text-firstH "
                    }
                  />
                  {/* First Icon */}
                  <svg
                    width="19"
                    height="32"
                    viewBox="0 0 19 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.23404 15.2601C6.60142 14.3583 8.23942 13.8334 9.99984 13.8334C14.7863 13.8334 18.6665 17.7136 18.6665 22.5C18.6665 27.2865 14.7863 31.1667 9.99984 31.1667C5.60367 31.1667 1.97212 27.8935 1.409 23.6513C0.61882 19.7676 0.31007 15.0987 1.85815 10.8726C3.51652 6.34492 7.19639 2.62866 13.7844 0.90399C14.942 0.600874 16.1262 1.29377 16.4292 2.45121C16.7323 3.60886 16.0395 4.79294 14.8819 5.09605C9.55329 6.49117 7.05815 9.2749 5.92694 12.3631C5.5898 13.2839 5.36512 14.2565 5.23404 15.2601Z"
                      fill="#190D30"
                    />
                  </svg>
                  {/* First Icon End*/}

                  <Heading
                    text={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
                    }
                    as={"p"}
                    className={"text-[#534D5E] "}
                  />
                  <hr className="mt-6 pb-1" />
                  <Flex className={"gap-5 pt-[15px] "}>
                    <div className="">
                      <Image src={commentB} alt={commentB} />
                    </div>
                    <div className="">
                      <Heading text={"Beth Luna"} as={"p"} />
                      <svg
                        width="120"
                        height="24"
                        viewBox="0 0 120 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z"
                          fill="#F1C40F"
                        />
                        <path
                          d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z"
                          fill="#F1C40F"
                        />
                      </svg>
                    </div>
                  </Flex>
                </div>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
      {/* Review Part End */}
      {/* Footer Part Start*/}
      <div className="bg-cntrBg">
        <Container className={"max-w-[1320px]"}>
          <div className="pt-[100px] ">
            <Flex className={"justify-between pb-[100px]"}>
              <div className="w-[20%]">
                <Image src={fotrlogo} alt={fotrlogo} />
                <Heading
                  text={"Follow on social service"}
                  as={"p"}
                  className={"text-white pt-5"}
                />
              </div>
              <div className=" text-white">
                <Menu mText={"Links"} className={'pb-[13px] text-[20px]'}/>
                <Menu mText={"Home"}className={'pb-[37px]'} />
                <Menu mText={"Help center"}className={'pb-[37px]'} />
                <Menu mText={"Service"} className={'pb-[37px]'}/>
              </div>
              <div className=" text-white">
                <Menu mText={"About Us"} className={'pb-[13px] text-[20px]'}/>
                <Menu mText={"Carrier"} className={'pb-[37px]'}/>
                <Menu mText={"Help center"} className={'pb-[37px]'}/>
                <Menu mText={"Legal Notice"}className={'pb-[37px]'} />
              </div>
              <div className=" text-white">
                <Menu mText={"Contacts"} className={'pb-[13px] text-[20px]'}/>
                <Menu mText={"192. New york"} className={'pb-[37px]'}/>
                <Menu mText={"Support"} className={'pb-[37px]'}/>
                <Menu mText={"+1125156363"} className={'pb-[37px]'}/>
              </div>
            </Flex>
          </div>
           <div className="">
           <div className="border-b w-[950px] m-auto"></div>
          <Heading text={'Copyright 2020@ all right'} as={'p'} className={'text-center text-white pb-[50px] pt-[30px]'}/>
          </div>
        </Container>
      </div>
      {/* Footer Part End */}
    </>
  );
}

export default App;
