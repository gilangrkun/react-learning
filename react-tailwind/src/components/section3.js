import React, { Component } from "react";
import Lottie from "react-lottie";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Java,
  HTML,
  CSS,
  JavaScript,
  ReactJS,
  Bootstrap4,
  TailwindCSS,
  SpringBoot,
  MongoDB,
  PostgreSQL,
  Firebase,
  GitHub,
  GitLab,
  Linux,
  ArchLinux,
  GIT,
} from "./languages";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import animation from "../assets/lottie/33502-programmer-man.json";

class Section3 extends Component {
  render() {
    // aos section
    AOS.init();

    // lottie section
    const lottie1 = {
      loop: true,
      autoplay: true,
      animationData: animation,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="w-full bg-gray-300 relative">
        <div className="container mx-auto hidden md:block px-32 py-24">
          <div className="grid grid-cols-3 grid-rows-4 gap-4 font-cormorant text-lg">
            <div
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="col-span-1 row-span-4"
            >
              <Lottie options={lottie1} />
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="col-span-1 flex items-center"
            >
              <p className="font-bold text-4xl">
                <i>What can I do: </i>
              </p>
            </div>
            <div className="col-span-1"></div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="col-span-2 row-span-3"
            >
              <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                  <Tab>
                    <small className="font-semibold">Front-End</small>
                  </Tab>
                  <Tab>
                    <small className="font-semibold">Back-End</small>
                  </Tab>
                  <Tab>
                    <small className="font-semibold">Other Tools</small>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Tabs forceRenderTabPanel>
                    <TabList>
                      <Tab>
                        <small className="font-semibold">HTML</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">CSS</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">JavaScript</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">React.js</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">Bootstrap</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">Tailwind.css</small>
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            Of course, I do using <i>HTML</i> to create a web
                            page.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <HTML />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            I'm able to use <i>CSS</i> for styling the web page.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <CSS />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            I use <i>JS</i> to make some function of the web
                            page.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <JavaScript />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            I loved to use <i>React.js</i> to develop a complex
                            projects.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <ReactJS />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            I loved to use <i>Bootstrap</i> which was easy and
                            best for styling.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <Bootstrap4 />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            <i>TailwindCSS</i> is best for customizing a web
                            designs.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <TailwindCSS />
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </TabPanel>
                <TabPanel>
                  <Tabs forceRenderTabPanel>
                    <TabList>
                      <Tab>
                        <small className="font-semibold">Java</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">Spring-Boot</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">MongoDB</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">PostgreSQL</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">Firebase</small>
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div
                          data-aos="zoom-out-up"
                          data-aos-duration="1000"
                          data-aos-delay="200"
                          className="col-span-1"
                        >
                          <p className="text-center">
                            I choose <i>Java</i> because it can use for
                            general-purpose and have large of community.
                          </p>
                        </div>
                        <div
                          data-aos="zoom-out-up"
                          data-aos-duration="1000"
                          data-aos-delay="250"
                          className="col-span-1 row-span-4 flex justify-center items-start"
                        >
                          <Java />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            As a java programmer, to create a big project or
                            develop a micro-services, I use <i>Spring Boot</i>.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <SpringBoot />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            I'm able to use <i>MongoDB</i> for storing document
                            like JSON data.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <MongoDB />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            To store relational data, I'm able to use{" "}
                            <i>PostgreSQL</i>.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <PostgreSQL />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            Sometimes, I loved to learn <i>Firebase</i> for
                            storing real-time data.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <Firebase />
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </TabPanel>
                <TabPanel>
                  <Tabs forceRenderTabPanel>
                    <TabList>
                      <Tab>
                        <small className="font-semibold">Git</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">GitHub</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">GitLab</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">Linux</small>
                      </Tab>
                      <Tab>
                        <small className="font-semibold">Arch</small>
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            I always managed all of my code using <i>Git</i>.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <GIT />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            For sharing and learning, I use <i>GitHub</i>.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <GitHub />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            <i>GitLab</i> is perfect for storing, also deploying
                            a project.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <GitLab />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            <i>Linux</i> for development.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <Linux />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 pl-20 pr-20 pt-2 pb-2">
                        <div className="col-span-1">
                          <p className="text-center">
                            I'm a fan of Arch. My favorite distribution of all
                            TIME!!!
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <ArchLinux />
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="bg-purple-200 mx-auto md:hidden p-1">
          <div className="bg-purple-200 rounded-lg shadow-inner grid grid-cols-4 gap-4 font-cormorant text-base p-5">
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              className="col-span-2 flex items-center"
            >
              <p className="font-semibold text-2xl">
                <i>What can I do: </i>
              </p>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="col-span-2"
            >
              <Lottie options={lottie1} />
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="col-span-4"
            >
              <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                  <Tab className="text-sm">Front-End</Tab>
                  <Tab className="text-sm">Back-End</Tab>
                  <Tab className="text-sm">Other Tools</Tab>
                </TabList>
                <TabPanel>
                  <Tabs forceRenderTabPanel>
                    <TabList>
                      <Tab className="text-sm">HTML</Tab>
                      <Tab className="text-sm">CSS</Tab>
                      <Tab className="text-sm">JavaScript</Tab>
                      <Tab className="text-sm">React.js</Tab>
                      <Tab className="text-sm">Bootstrap</Tab>
                      <Tab className="text-sm">Tailwind.css</Tab>
                    </TabList>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            Of course, I do using <i>HTML</i> to create a web
                            page.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <HTML />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            I'm able to use <i>CSS</i> for styling the web page.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <CSS />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            I use <i>JS</i> to make some function of the web
                            page.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <JavaScript />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            I loved to use <i>React.js</i> to develop a complex
                            projects.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <ReactJS />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            I loved to use <i>Bootstrap</i> which was easy and
                            best for styling.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <Bootstrap4 />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            <i>TailwindCSS</i> is best for customizing a web
                            designs.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <TailwindCSS />
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </TabPanel>
                <TabPanel>
                  <Tabs forceRenderTabPanel>
                    <TabList>
                      <Tab className="text-sm">Java</Tab>
                      <Tab className="text-sm">Spring-Boot</Tab>
                      <Tab className="text-sm">MongoDB</Tab>
                      <Tab className="text-sm">PostgreSQL</Tab>
                      <Tab className="text-sm">Firebase</Tab>
                    </TabList>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div
                          data-aos="fade-in"
                          data-aos-duration="1000"
                          data-aos-delay="500"
                          className="col-span-1"
                        >
                          <p className="text-center text-sm">
                            I choose <i>Java</i> because it can use for
                            general-purpose and have large of community.
                          </p>
                        </div>
                        <div
                          data-aos="fade-in"
                          data-aos-duration="1000"
                          data-aos-delay="500"
                          className="col-span-1 row-span-4 flex justify-center items-start"
                        >
                          <Java />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            As a java programmer, to create a big project or
                            develop a micro-services, I use <i>Spring Boot</i>.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <SpringBoot />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            I'm able to use <i>MongoDB</i> for storing document
                            like JSON data.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <MongoDB />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            To store relational data, I'm able to use{" "}
                            <i>PostgreSQL</i>.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <PostgreSQL />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            Sometimes, I loved to learn <i>Firebase</i> for
                            storing real-time data.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <Firebase />
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </TabPanel>
                <TabPanel>
                  <Tabs forceRenderTabPanel>
                    <TabList>
                      <Tab className="text-sm">Git</Tab>
                      <Tab className="text-sm">GitHub</Tab>
                      <Tab className="text-sm">GitLab</Tab>
                      <Tab className="text-sm">Linux</Tab>
                      <Tab className="text-sm">Arch</Tab>
                    </TabList>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            I always managed all of my code using <i>Git</i>.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <GIT />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            For sharing and learning, I use <i>GitHub</i>.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <GitHub />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            <i>GitLab</i> is perfect for storing, also deploying
                            a project.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <GitLab />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            <i>Linux</i> for development.
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <Linux />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-1 grid-rows-5 gap-4 px-8 py-2">
                        <div className="col-span-1">
                          <p className="text-center text-sm">
                            I'm a fan of Arch. My favorite distribution of all
                            TIME!!!
                          </p>
                        </div>
                        <div className="col-span-1 row-span-4 flex justify-center items-start">
                          <ArchLinux />
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section3;
