import "./banner.css";
import { useTypewriter } from "react-simple-typewriter";
import {
  FaArrowDown,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// import  ShootingStarsAndStarsBackgroundDemo  from '../../Component/ui/ShootingStarsAndStarsBackgroundDemo';

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "React.js Developer",
      "Frontend Developer",
      "MERN Stack Developer",
      "Web Developer",
    ],
    loop: 0,
  });

  return (
    <div className="bg-[#000000cf]">
      {/* <ShootingStarsAndStarsBackgroundDemo> */}
      <section className="w-[90%] mx-auto banner pb-10 md:pb-20">
        {/* <div className='py-20'>
                    <Watermark></Watermark>
                </div> */}
        <section className="pt-28 md:pt-40">
          <div className=" px-8 lg:flex items-center lg:justify-between">
            <div
              className="text-center lg:text-left lg:w-1/2"
              data-aos-delay="500"
              data-aos="fade-right"
            >
              {/* /* From Uiverse.io by akshat-patel28 */}

              <svg width="0" height="0">
                <filter
                  id="f"
                  x="-50%"
                  y="-200%"
                  width="200%"
                  height="500%"
                  primitiveUnits="objectBoundingBox"
                >
                  <feGaussianBlur stdDeviation=".025 .2"></feGaussianBlur>
                  <feColorMatrix type="saturate" values="1.3"></feColorMatrix>
                  <feBlend in="SourceGraphic"></feBlend>
                </filter>
              </svg>
              <h1 className="">Hi I,am Sujon Mia</h1>
              <div className="text-[#01ECFF] text-2xl font-semibold pt-2">
                I ,am
                <span className="ml-2" style={{ color: "white", ml: "10px" }}>
                  {text}
                </span>
              </div>
              {/* <div class="loader">
                                <span class="loader-text">Hi I,am Sujon Mia</span>
                            </div> */}
              <p className="text-[16px]  text-white mt-6 font-light">
                I am a highly skilled frontend web developer specializing in
                designing, developing, and maintaining the front end of web
                applications. With a strong focus on creating dynamic, complex,
                and interactive user experiences, I have achieved measurable
                success in delivering projects that meet both user needs and
                business goals. My expertise in React.js allows me to build
                efficient and responsive applications, ensuring optimal
                performance and usability. I am passionate about leveraging the
                latest technologies and best practices to create innovative
                solutions that enhance user engagement and satisfaction.
              </p>

              <div className="flex gap-2 justify-center lg:justify-start pt-10">
                <a
                  href="https://www.facebook.com/profile.php?id=100088142062918"
                  title="Facebook"
                  className="transition-transform transform hover:scale-105"
                >
                  <FaFacebookF className="text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2 hover:bg-[#01ECFF] hover:text-white"></FaFacebookF>
                </a>
                <a
                  href="https://github.com/sujon-258549"
                  title="GitHub"
                  className="transition-transform transform hover:scale-105"
                >
                  <FaGithub className="text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2 hover:bg-[#01ECFF] hover:text-white"></FaGithub>
                </a>
                <a
                  href="https://www.linkedin.com/in/sujon25"
                  title="LinkedIn"
                  className="transition-transform transform hover:scale-105"
                >
                  <FaLinkedinIn className="text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2 hover:bg-[#01ECFF] hover:text-white"></FaLinkedinIn>
                </a>
                {/* <a href="" title="Discord" className='transition-transform transform hover:scale-105'>
        <FaDiscord className='text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2 hover:bg-[#01ECFF] hover:text-white'></FaDiscord>
    </a> */}
                <a
                  href="mailto:sujon258549@gmail.com"
                  title="Email"
                  className="transition-transform transform hover:scale-105"
                >
                  <MdEmail className="text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2 hover:bg-[#01ECFF] hover:text-white"></MdEmail>
                </a>
                <a
                  href="tel:01790876529"
                  title="Phone"
                  className="transition-transform transform hover:scale-105"
                >
                  <FaPhoneSquare className="text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2 hover:bg-[#01ECFF] hover:text-white"></FaPhoneSquare>
                </a>
              </div>

              <p className="mt-5 mx-auto  flex justify-center pb-10 lg:pb-0 lg:justify-start">
                <a href="https://drive.google.com/file/d/127Wkem3CgpQG2eb7PhJqMrSSF7lryNbG/view?usp=sharing">
                  <>
                    <>
                      <button className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                        {/* <svg
                                className="w-6 h-6 fill-neutral-50"
                                height={100}
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 100 100"
                                width={100}
                                x={0}
                                xmlns="http://www.w3.org/2000/svg"
                                y={0}
                            >
                                <path
                                    className="svg-fill-primary"
                                    d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                                />
                            </svg> */}
                        Download CV <FaArrowDown />
                      </button>
                    </>
                  </>
                </a>
              </p>
            </div>

            {/* image  */}
            <div>
              <div id="Container">
                <div className="form">
                  <img
                    className="h-[250px] w-full"
                    src="https://i.ibb.co.com/ZKvK5Sk/sujon-removebg-preview-1.png"
                    alt=""
                  />
                </div>

                <div id="rays">
                  <svg
                    fill="none"
                    viewBox="0 0 299 152"
                    height="9em"
                    width="18em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#paint0_linear_8_3)"
                      d="M149.5 152H133.42L9.53674e-07 4.70132e-06H149.5L299 4.70132e-06L165.58 152H149.5Z"
                    ></path>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="12.1981"
                        x2="150.12"
                        y1="152"
                        x1="149.5"
                        id="paint0_linear_8_3"
                      >
                        <stop stop-color="#00E0FF"></stop>
                        <stop
                          stop-opacity="0"
                          stop-color="#65EDFF"
                          offset="1"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div id="emiter">
                  <svg
                    fill="none"
                    viewBox="0 0 160 61"
                    height="61"
                    width="160"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_1_38)">
                      <path
                        fill="#2B2B2B"
                        d="M80 27.9997C121.974 27.9997 156 22.4032 156 15.4996L156 40.4998C156 47.4034 121.974 52.9998 80 52.9998C38.0265 52.9998 4.00028 47.4034 4 40.4998V40.4998V15.51C4.0342 22.4089 38.0474 27.9997 80 27.9997Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                    <ellipse
                      fill="url(#paint0_radial_1_38)"
                      ry="4.80773"
                      rx="28.3956"
                      cy="17.4236"
                      cx="80"
                    ></ellipse>
                    <g filter="url(#filter1_i_1_38)">
                      <path
                        fill="#323232"
                        d="M80 28.0002C121.974 28.0002 156 22.4037 156 15.5001C156 8.59648 121.974 3 80 3C38.0264 3 4 8.59648 4 15.5001C4 22.4037 38.0264 28.0002 80 28.0002ZM80.0001 20.308C96.1438 20.308 109.231 18.1555 109.231 15.5002C109.231 12.845 96.1438 10.6925 80.0001 10.6925C63.8564 10.6925 50.7693 12.845 50.7693 15.5002C50.7693 18.1555 63.8564 20.308 80.0001 20.308Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                    <g filter="url(#filter2_di_1_38)">
                      <path
                        fill="#378BA6"
                        d="M106.725 17.4505C108.336 16.8543 109.231 16.1943 109.231 15.4999C109.231 12.8446 96.1438 10.6921 80.0001 10.6921C63.8564 10.6921 50.7693 12.8446 50.7693 15.4999C50.7693 16.1943 51.6645 16.8543 53.2752 17.4504C53.275 17.4414 53.2748 17.4323 53.2748 17.4232C53.2748 14.768 65.2401 12.6155 80.0001 12.6155C94.7601 12.6155 106.725 14.768 106.725 17.4232C106.725 17.4323 106.725 17.4414 106.725 17.4505Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="45.5002"
                        width="160"
                        y="15.4996"
                        x="0"
                        id="filter0_di_1_38"
                      >
                        <feFlood
                          result="BackgroundImageFix"
                          flood-opacity="0"
                        ></feFlood>
                        <feColorMatrix
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          type="matrix"
                          in="SourceAlpha"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite
                          operator="out"
                          in2="hardAlpha"
                        ></feComposite>
                        <feColorMatrix
                          values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0.25 0"
                          type="matrix"
                        ></feColorMatrix>
                        <feBlend
                          result="effect1_dropShadow_1_38"
                          in2="BackgroundImageFix"
                          mode="normal"
                        ></feBlend>
                        <feBlend
                          result="shape"
                          in2="effect1_dropShadow_1_38"
                          in="SourceGraphic"
                          mode="normal"
                        ></feBlend>
                        <feColorMatrix
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          type="matrix"
                          in="SourceAlpha"
                        ></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                        <feComposite
                          k3="1"
                          k2="-1"
                          operator="arithmetic"
                          in2="hardAlpha"
                        ></feComposite>
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                          type="matrix"
                        ></feColorMatrix>
                        <feBlend
                          result="effect2_innerShadow_1_38"
                          in2="shape"
                          mode="normal"
                        ></feBlend>
                      </filter>
                      <filter
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="25.0002"
                        width="152"
                        y="3"
                        x="4"
                        id="filter1_i_1_38"
                      >
                        <feFlood
                          result="BackgroundImageFix"
                          flood-opacity="0"
                        ></feFlood>
                        <feBlend
                          result="shape"
                          in2="BackgroundImageFix"
                          in="SourceGraphic"
                          mode="normal"
                        ></feBlend>
                        <feColorMatrix
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          type="matrix"
                          in="SourceAlpha"
                        ></feColorMatrix>
                        <feMorphology
                          result="effect1_innerShadow_1_38"
                          in="SourceAlpha"
                          operator="erode"
                          radius="3"
                        ></feMorphology>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="6.5"></feGaussianBlur>
                        <feComposite
                          k3="1"
                          k2="-1"
                          operator="arithmetic"
                          in2="hardAlpha"
                        ></feComposite>
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                          type="matrix"
                        ></feColorMatrix>
                        <feBlend
                          result="effect1_innerShadow_1_38"
                          in2="shape"
                          mode="normal"
                        ></feBlend>
                      </filter>
                      <filter
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="26.7583"
                        width="78.4615"
                        y="0.692139"
                        x="40.7693"
                        id="filter2_di_1_38"
                      >
                        <feFlood
                          result="BackgroundImageFix"
                          flood-opacity="0"
                        ></feFlood>
                        <feColorMatrix
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          type="matrix"
                          in="SourceAlpha"
                        ></feColorMatrix>
                        <feMorphology
                          result="effect1_dropShadow_1_38"
                          in="SourceAlpha"
                          operator="dilate"
                          radius="2"
                        ></feMorphology>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                        <feComposite
                          operator="out"
                          in2="hardAlpha"
                        ></feComposite>
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0.941176 0 0 0 0 1 0 0 0 1 0"
                          type="matrix"
                        ></feColorMatrix>
                        <feBlend
                          result="effect1_dropShadow_1_38"
                          in2="BackgroundImageFix"
                          mode="color-dodge"
                        ></feBlend>
                        <feBlend
                          result="shape"
                          in2="effect1_dropShadow_1_38"
                          in="SourceGraphic"
                          mode="normal"
                        ></feBlend>
                        <feColorMatrix
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          type="matrix"
                          in="SourceAlpha"
                        ></feColorMatrix>
                        <feMorphology
                          result="effect2_innerShadow_1_38"
                          in="SourceAlpha"
                          operator="erode"
                          radius="1"
                        ></feMorphology>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite
                          k3="1"
                          k2="-1"
                          operator="arithmetic"
                          in2="hardAlpha"
                        ></feComposite>
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.52 0"
                          type="matrix"
                        ></feColorMatrix>
                        <feBlend
                          result="effect2_innerShadow_1_38"
                          in2="shape"
                          mode="normal"
                        ></feBlend>
                      </filter>
                      <radialGradient
                        gradientTransform="translate(80 17.4236) rotate(90) scale(6.25004 36.9143)"
                        gradientUnits="userSpaceOnUse"
                        r="1"
                        cy="0"
                        cx="0"
                        id="paint0_radial_1_38"
                      >
                        <stop stop-color="#00FFF0"></stop>
                        <stop stop-color="#001AFF" offset="0.901042"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            {/* <img src="https://i.ibb.co/wNty5Dd/sujon-removebg-preview.png" alt="" /> */}
          </div>
        </section>
      </section>
      {/* </ShootingStarsAndStarsBackgroundDemo> */}
    </div>
  );
};

export default Banner;
