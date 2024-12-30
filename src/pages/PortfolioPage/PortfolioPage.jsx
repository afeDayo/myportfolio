import React, { useEffect } from "react";
import "./PortfolioPage.css";
import { IoLogoGithub } from "react-icons/io";
import project1 from "../../assets/Assets/Logos/des2.jpg";
import project2 from "../../assets/Assets/Logos/web7.png";
import project3 from "../../assets/Assets/Logos/des6.png";
import project4 from "../../assets/Assets/Logos/mpay.png";
import project5 from "../../assets/Assets/Logos/des5.jpg";
// import project6 from "../../assets/Assets/Logos/web5.png";
// import project7 from "../../assets/Assets/Logos/des3.jpg";
// import project8 from "../../assets/Assets/Logos/web3.png";
// import project9 from "../../assets/Assets/Logos/des4.jpg";
// import project10 from "../../assets/Assets/Logos/web6.png";
// import project11 from "../../assets/Assets/Logos/web8.png";
// import project12 from "../../assets/Assets/Logos/web9.png";
// import project13 from "../../assets/Assets/Logos/desktop-preview.jpg";
import illupro1 from "../../assets/Assets/Logos/Picture10.png";
import illupro2 from "../../assets/Assets/Logos/alldots1.png";
import illupro3 from "../../assets/Assets/Logos/arrow5.png";
import illupro4 from "../../assets/Assets/Logos/ex4.png";
import illupro5 from "../../assets/Assets/Logos/ball.png";
// import illupro6 from "../../assets/Assets/Logos/alldots2.png";
// import illupro7 from "../../assets/Assets/Logos/iluuu2.png";
// import illupro8 from "../../assets/Assets/Logos/cross1.png";
// import illupro9 from "../../assets/Assets/Logos/iluuu1.png";
// import illupro10 from "../../assets/Assets/Logos/iluuu3.png";
// import illupro11 from "../../assets/Assets/Logos/Picture5.png";
import ScrollReveal from "scrollreveal";
import animationData from "../../assets/Assets/Logos/Animation - 1706860637472 (1).json";

const PortfolioPage = () => {
  // ========================SCROLL REVEAL===============

  useEffect(() => {
    ScrollReveal().reveal(".reveal-from-top", {
      duration: 1500,
      origin: "top",
      distance: "100px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-from-bottom", {
      duration: 1500,
      origin: "bottom",
      distance: "100px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-from-left", {
      duration: 1500,
      origin: "left",
      distance: "100px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-from-right", {
      duration: 1500,
      origin: "right",
      distance: "100px",
      delay: 500,
      easing: "ease-in-out",
    });
  }, []);

  const defaultScroll = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // =========================WEBLINKS==========================

  const sunnySideCode = "https://github.com/afeDayo/Sunnyside";
  const sunnySideSite = "https://sonnie-sidee.netlify.app/";

  const entertainmentWebappCode =
    "https://github.com/afeDayo/Entertainment-App-client";
  const entertainmentWebappSite = "https://showtimesnack.netlify.app/";

  const spaceWebCode = "https://github.com/afeDayo/Spaceweb.git";
  const spaceWebSite = "https://outterspace.netlify.app/";

  const mpayFinCode = "https://github.com/afeDayo/Tech_Assessment.git";
  const mpayFinSite = "https://techstudioassessment.netlify.app/";

  return (
    <div className="portfolioPage container">
      <p className="proBigTi reveal-from-top" data-sr="enter top 100px over 1s">
        My Projects{" "}
      </p>

      {/* =========================PROJECT 1============================= */}

      <section className="project1">
        <div
          className="portfolio1 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project1} alt="project1" />
          </div>
          <div className="sideright">
            <h3 className="text-start">SUNNYSIDE AGENCY "Landing Page"</h3>
            <p className="prodes">
              Explore my innovative single-page creative agency site,
              meticulously crafted using React.js. This responsive website
              adapts seamlessly for mobile (375px) and desktop (1440px),
              showcasing my commitment to optimal user experiences. Highlighting
              a sleek and modern design, the site features a mobile-friendly
              dropdown menu for intuitive navigation.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              {/* <p className="appp">API</p> */}
            </div>
            <div className="butview">
              <a href={sunnySideSite} target="_blank" rel="thdhgcvn">
                <button className="livep">Live Preview</button>
              </a>

              <a href={sunnySideCode} target="_blank" rel="ytdczxhrh">
                <button className="vcode">
                  View Code{" "}
                  <span>
                    <IoLogoGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <img className="illupro1" src={illupro1} alt="" />
      </section>

      {/* =========================PROJECT 2=========================== */}

      <section className="project2">
        <div
          className="portfolio2 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3>MOVIE WEB-APP</h3>
            <p className="prodes">
              I developed a full-stack movie web application developed with
              React.js and Node.js. This immersive platform replicates the user
              experience of popular streaming services, allowing seamless
              sign-up, login, and exploration of an extensive library of movies
              and TV series. Users can effortlessly navigate between Home,
              Movies, TV Series, and Bookmarked Shows pages, bookmarking their
              favorites for a personalized experience.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <a href={entertainmentWebappSite} target="_blank" rel="cccngx">
                <button className="livep">Live Preview</button>
              </a>
              <a href={entertainmentWebappCode} target="_blank" rel="nnnyys">
                <button className="vcode">
                  View Code{" "}
                  <span>
                    <IoLogoGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="sider2">
            <img src={project2} alt="project1" />
          </div>
        </div>
        <img className="illupro2" src={illupro2} alt="" />
      </section>

      {/* =========================PROJECT 3=========================== */}

      <section className="project3">
        <div
          className="portfolio3 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project3} alt="project1" />
          </div>
          <div className="sideright">
            <h3>SPACE TRAVEL WEB</h3>
            <p className="prodes">
              Embark on an interstellar journey with our immersive website
              dedicated to exploring outer space and uncovering the mysteries of
              distant planets. Our platform offers users a captivating
              experience, providing in-depth information about each celestial
              body in our solar system and beyond. From stunning visuals to
              intriguing facts, users can delve into the vastness of space from
              the comfort of their screens.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <a href={spaceWebSite} target="_blank" rel="cccngx">
                <button className="livep">Live Preview</button>
              </a>
              <a href={spaceWebCode} target="_blank" rel="nnnyys">
                <button className="vcode">
                  View Code{" "}
                  <span>
                    <IoLogoGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <img className="illupro3" src={illupro3} alt="" />
      </section>

      {/* =========================PROJECT 4=========================== */}

      <section className="project4">
        <div
          className="portfolio4 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3 className="text-end">MPAY FINTECH WEB-APP</h3>
            <p className="prodes">
              Welcome to our cutting-edge fintech web app, where seamless
              financial management meets user-friendly accessibility. With
              secure sign-in and sign-out features, users can confidently
              navigate our platform to take control of their finances. Our
              internal page offers a wealth of resources, empowering users to
              dive deeper into the features and benefits our fintech solution
              offers
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <a href={mpayFinSite} target="_blank" rel="cccngx">
                <button className="livep">Live Preview</button>
              </a>
              <a href={mpayFinCode} target="_blank" rel="nnnyys">
                <button className="vcode">
                  View Code{" "}
                  <span>
                    <IoLogoGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="sider2">
            <img src={project4} alt="project1" />
          </div>
        </div>
        <img className="illupro4" src={illupro4} alt="" />
      </section>

      {/* =========================PROJECT 5============================= */}

      <section className="project5">
        <div
          className="portfolio5 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project5} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img className="illupro5" src={illupro5} alt="" />
      </section>

      {/* =========================PROJECT 6=========================== */}

      {/* <section className="project6">
        <div
          className="portfolio6 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
          <div className="sider2">
            <img src={project6} alt="project1" />
          </div>
        </div>
        <img className="illupro6" src={illupro6} alt="" />
      </section> */}

      {/* =========================PROJECT 7============================= */}

      {/* <section className="project7">
        <div
          className="portfolio7 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project7} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img className="illupro7" src={illupro7} alt="" />
      </section> */}

      {/* =========================PROJECT 8=========================== */}

      {/* <section className="project8">
        <div
          className="portfolio8 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
          <div className="sider2">
            <img src={project8} alt="project1" />
          </div>
        </div>
        <img className="illupro8" src={illupro8} alt="" />
      </section> */}

      {/* =========================PROJECT 9============================= */}

      {/* <section className="project9">
        <div
          className="portfolio9 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project9} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img className="illupro9" src={illupro9} alt="" />
      </section> */}

      {/* =========================PROJECT 10=========================== */}

      {/* <section className="project10">
        <div
          className="portfolio10 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
          <div className="sider2">
            <img src={project10} alt="project1" />
          </div>
        </div>
        <img className="illupro10" src={illupro10} alt="" />
      </section> */}

      {/* =========================PROJECT 11============================= */}
      {/* 
      <section className="project11">
        <div
          className="portfolio11 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project11} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          className="illupro11 reveal-from-bottom"
          data-sr="enter bottom 100px over 2s"
          src={illupro11}
          alt=""
        />
      </section> */}

      {/* =========================PROJECT 12=========================== */}

      {/* <section className="project12">
        <div
          className="portfolio12 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
          <div className="sider2">
            <img src={project12} alt="project1" />
          </div>
        </div>
      </section> */}

      {/* =========================PROJECT 13============================= */}

      {/* <section className="project13">
        <div
          className="portfolio13 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project13} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          className="illupro11 reveal-from-bottom"
          data-sr="enter bottom 100px over 2s"
          src={illupro11}
          alt=""
        />
      </section> */}
    </div>
  );
};

export default PortfolioPage;
