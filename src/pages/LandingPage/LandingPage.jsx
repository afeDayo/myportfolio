import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Lottie from "react-lottie";
import animationData from "../../assets/Assets/Logos/Animation - 1706860637472 (1).json";
import toast, { Toaster } from "react-hot-toast";
import illus1 from "../../assets/Assets/Logos/Picture6.png";
import mecoding from "../../assets/allme.png";
import circle3d from "../../assets/Assets/Logos/ball.png";
import illu2 from "../../assets/Assets/Logos/Picture14.png";
import illu3 from "../../assets/Assets/Logos/Picture9.png";
import dot3 from "../../assets/Assets/Logos/dot3.png";
import dot4 from "../../assets/Assets/Logos/dot4.png";
import meone from "../../assets/me1.png";
import mebkone from "../../assets/mebk1.png";
import dot2 from "../../assets/Assets/Logos/dot2.png";
import ex4 from "../../assets/Assets/Logos/ex4.png";
import arrowleft from "../../assets/Assets/Logos/arrow2.png";
import html from "../../assets/Assets/Logos/html.png";
import css from "../../assets/Assets/Logos/css.png";
import java from "../../assets/Assets/Logos/javascript.png";
import react from "../../assets/Assets/Logos/react.png";
import python from "../../assets/Assets/Logos/python.png";
import node from "../../assets/Assets/Logos/node.png";
import vue from "../../assets/Assets/Logos/vue.png";
import sass from "../../assets/Assets/Logos/sass.png";
import web7 from "../../assets/Assets/Logos/web7.png";
import web2 from "../../assets/Assets/Logos/web2.png";
import web5 from "../../assets/Assets/Logos/web5.png";
import web3 from "../../assets/Assets/Logos/web3.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import arrowddown from "../../assets/Assets/Logos/arrow1.png";
import cross1 from "../../assets/Assets/Logos/cross1.png";
import fillback1 from "../../assets/Assets/Logos/ccccccccccc.png";
import fillback2 from "../../assets/Assets/Logos/bbbbbbbbbbbbbb.png";
import resume from "../../assets/Assets/Logos/resume.png";
import mail from "../../assets/Assets/Logos/mail.png";
import linkedin from "../../assets/Assets/Logos/linkedin.png";
import github from "../../assets/Assets/Logos/github.png";
import { BsFillSendFill } from "react-icons/bs";
// =====================Modal import==================
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";
import phoneget from "../../assets/Assets/Logos/CALLME.png";
import phonecall from "../../assets/Assets/Logos/phonecall.png";
import whatsapp from "../../assets/Assets/Logos/whatsappoo.png";
import cv from "../../assets/Assets/Logos/resume.png";
import mailer from "../../assets/Assets/Logos/mail.png";
import linkindon from "../../assets/Assets/Logos/linkedin.png";
import gitty from "../../assets/Assets/Logos/github.png";
import scorem from "../../assets/Assets/Logos/checkmark.png";
import { Link } from "react-scroll";
import ScrollReveal from "scrollreveal";

// =================================================

const LandingPage = () => {
  useEffect(() => {
    Modal.setAppElement("#root"); // Set the root element of your app
  }, []);

  // ======================getintouch modal================

  const [isNavModalOpen, setNavModalOpen] = useState(false);

  const openNavModal = () => {
    setNavModalOpen(true);
  };

  const closeNavModal = () => {
    setNavModalOpen(false);
  };

  // =============================Form Logic======================

  const [formDataTwo, setFormDataTwo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChangeTwo = (event) => {
    const { name, value } = event.target;

    setFormDataTwo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formDataTwo.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formDataTwo.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDataTwo.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (formDataTwo.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) {
      if (newErrors.name) {
        toast.error(newErrors.name, { id: "yiy" });
      }

      if (newErrors.email) {
        toast.error(newErrors.email, { id: "fdxf" });
      }

      if (newErrors.message) {
        toast.error(newErrors.message, { id: "xcd" });
      }
    }

    return isValid;
  };

  // ======================MESSAGE SENT MODAL=====================
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSendClick = () => {
    if (validateForm()) {
      setIsMessageSent(true);
    } else {
      console.log("Form validation failed");
    }
  };

  const closeMessageSent = () => {
    setIsMessageSent(false);
  };

  const handleSubmitTwo = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formDataTwo);
      setIsMessageSent(true);
    } else {
      console.log("Form validation failed");
    }
  };

  // =============================NAVIGATE==============================

  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate("/portfolio");
  };

  // ======================LOTTIE============================

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
      distance: "50px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-from-right", {
      duration: 1500,
      origin: "right",
      distance: "50px",
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

  // =================DOWNLOAD RESUME==============================

  const downloadResume = () => {
    const resumeLink =
      "https://drive.google.com/file/d/14lfweQ-gp-2x-KHVvlBLGTM2cXyavdpn/view?usp=sharing";

    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "afeTemidayoResume";
    link.click();
    document.body.removeChild(link);
  };

  // ==================EMAIL LINK=====================

  const emailAddress = "https://www.afedayo@gmail.com";

  // ===================LINKEDIN LINK======================

  const linkedinProfileUrl = "https://www.linkedin.com/in/afe123";

  // =======================GITHUB LINK============================

  const githubProfileUrl = "https://github.com/afeDayo";

  // ======================WHATSAPP LINK=========================

  const whatsap = "https://wa.me/+2348124374721";

  return (
    <div className="landsec container">
      <div className="hero-section">
        <div
          className="landing-content text-start reveal-from-top"
          data-sr="enter top 100px over 1s"
        >
          <h3>FULL-STACK WEB DEVELOPER</h3>
          <div className="loothi">
            <Lottie options={defaultOptions} height={70} width={200} />
          </div>
          <p className="name-big">I'm Afe, Temidayo</p>
          <p className="based">
            A voracious learner, an optimist, open-minded, solution-oriented,
            and design-minded individual, I advocate applying what works to
            ensure result is gotten.
          </p>
        </div>
        <div className="illustration ">
          <img className="mebkone" src={mebkone} alt="" />
        </div>

        <div
          className="reveal-from-bottom mediv"
          data-sr="enter bottom 30px over 1s"
        >
          <img className="rotating-img" src={illus1} alt="" />
          <img className="meone" src={meone} alt="" />
        </div>

        <div
          className="social-links reveal-from-bottom"
          data-sr="enter bottom 30px over 1s"
        >
          <img
            className="cv-icon"
            src={resume}
            alt="cv"
            onClick={downloadResume}
          />

          <a href={`${emailAddress}`} target="_blank" rel="noopener noref">
            <img src={mail} alt="mail" />
          </a>

          <a
            href={linkedinProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href={githubProfileUrl} target="_blank" rel="thcgv tdhgcvn">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>

      {/* ============================================================================ */}

      <section className="asec" id="section2">
        <p className="abme reveal-from-top" data-sr="enter top 100px over 1s">
          About me
        </p>
        <div
          className="aboutme reveal-from-bottom"
          data-sr="enter bottom 100px over 1s"
        >
          <img
            src={mecoding}
            alt=""
            className="reveal-from-top"
            data-sr="enter top 100px over 1s"
          />
          <div className="parab">
            <p className="highly">
              Highly motivated and recently graduated Full Stack Web Developer,
              offering a dynamic skill set honed through experience as a Digital
              Strategist. I have spent time converting designs into{" "}
              <span>
                pixel-perfect, performant, accessible and responsive
                applications/websites
              </span>
              . You can simply describe me as a front end developer addict.
            </p>

            <div
              className="aboutnum reveal-from-bottom"
              data-sr="enter bottom 100px over 1s"
            >
              <div className="abnum1">
                <p className="plusnum">1+</p>
                <p className="texnum">Years of Experience</p>
              </div>
              <div className="abnum2">
                <p className="plusnum">7+</p>
                <p className="texnum">Successfully Completed Projects</p>
              </div>
              <div className="abnum3">
                <p className="plusnum">2</p>
                <p className="texnum">Global Customers</p>
              </div>
            </div>
            <button className="bout border-0" onClick={openNavModal}>
              Get in touch
            </button>
          </div>
          <Modal
            isOpen={isNavModalOpen}
            onRequestClose={closeNavModal}
            contentLabel="GetInTouch"
            className="navmomo"
          >
            <div className="getmodal">
              <div className="navmodcan">
                <MdCancel onClick={closeNavModal} />
              </div>
              <div className="phoneall">
                <div className="phonenum">
                  <img src={phoneget} alt="phone" />
                </div>
                <div className="contacticco">
                  <div className="conttite">
                    <p>Get in touch</p>
                  </div>
                  <div className="firstpicons">
                    <img src={phonecall} alt="phonecall" />

                    <a href={whatsap} target="_blank" rel="noopr noref">
                      <img src={whatsapp} alt="whatsapp" />
                    </a>

                    <img
                      className="yodcv"
                      src={cv}
                      alt="resume"
                      onClick={downloadResume}
                    />
                  </div>
                  <div className="secpicons">
                    <a
                      href={`${emailAddress}`}
                      target="_blank"
                      rel="noopener noref"
                    >
                      <img src={mailer} alt="email" />
                    </a>

                    <a
                      href={linkedinProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkindon} alt="linkedin" />
                    </a>

                    <a
                      href={githubProfileUrl}
                      target="_blank"
                      rel="thcgv tdhgcvn"
                    >
                      <img src={gitty} alt="github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>

        <img className="ball " src={circle3d} alt="" />
        <img className="illu2" src={illu2} alt="" />
        <img
          className="dot3 reveal-from-bottom"
          data-sr="enter bottom 30px over 1s"
          src={dot3}
          alt=""
        />
        <img className="ex4" src={ex4} alt="" />
      </section>

      {/* ======================================================================= */}

      <section className="m-skills" id="section3">
        <div className="skillarr">
          <p
            className="slillsbig reveal-from-top"
            data-sr="enter top 30px over 1s"
          >
            My Skills
          </p>
          <img
            src={arrowleft}
            className="reveal-from-bottom"
            data-sr="enter bottom 30px over 1s"
            alt="arrow"
          />
        </div>
        <div className="pro-skills">
          <div
            className="prim-s reveal-from-top"
            data-sr="enter top 100px over 1s"
          >
            <div className="html">
              <img src={html} alt="html" />
              <div>
                <h5>HTML</h5>
                <p>1 Year Experience</p>
              </div>
            </div>
            <div className="css">
              <img src={css} alt="css" />
              <div>
                <h5>CSS</h5>
                <p>1 Year Experience</p>
              </div>
            </div>
            <div className="java">
              <img src={java} alt="javascript" />
              <div>
                <h5>JAVASCRIPT</h5>
                <p>1 Year Experience</p>
              </div>
            </div>
            <div className="react">
              <img src={react} alt="react" />
              <div>
                <h5>REACT.JS</h5>
                <p>6 Months Experience</p>
              </div>
            </div>
          </div>

          <div
            className="seco-s reveal-from-bottom"
            data-sr="enter bottom 100px over 1s"
          >
            <div className="python">
              <img src={python} alt="python" />
              <div>
                <h5>PYTHON</h5>
                <p>6 Months Experience</p>
              </div>
            </div>
            <div className="node">
              <img src={node} alt="node" />
              <div>
                <h5>NODE.JS</h5>
                <p>6 Months Experience</p>
              </div>
            </div>
            <div className="vue">
              <img src={vue} alt="vue" />
              <div>
                <h5>VUE.JS</h5>
                <p>6 Months Experience</p>
              </div>
            </div>
            <div className="sass">
              <img src={sass} alt="sass" />
              <div>
                <h5>SASS</h5>
                <p>3 Months Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================== */}

      <section className="projectsec" id="section4">
        <p className="bigpro reveal-from-top" data-sr="enter top 30px over 1s">
          My Projects
        </p>
        <div className="proo">
          <div
            className="web1 reveal-from-right"
            data-sr="enter right 50px over 1s"
          >
            <img src={web7} alt="web7" />
            <div className="prodep1 mt-4">
              <p>Project Name</p>
              <h5>Date</h5>
            </div>
          </div>
          <div
            className="web2 reveal-from-left"
            data-sr="enter left 50px over 1s"
          >
            <div className="prodep2 mb-4">
              <p>Project Name</p>
              <h5>Date</h5>
            </div>
            <img src={web2} alt="web2" />
          </div>
          <div
            className="web3 reveal-from-right"
            data-sr="enter right 50px over 1s"
          >
            <img src={web3} alt="web3" />
            <div className="prodep3 mt-4">
              <p>Project Name</p>
              <h5>Date</h5>
            </div>
          </div>
          <div
            className="web4 reveal-from-left"
            data-sr="enter left 50px over 1s"
          >
            <div className="prodep4 mb-4">
              <p>Project Name</p>
              <h5>Date</h5>
            </div>
            <img src={web5} alt="web5" />
          </div>
        </div>
        <Link to="top" smooth={true} duration={500}>
          <button className="morepro border-0" onClick={handleProjectsClick}>
            View more Projects{" "}
            <span>
              <FaAngleDoubleRight />
            </span>
          </button>
        </Link>
        <img
          className="arrowdd reveal-from-top"
          data-sr="enter top 100px over 1s"
          src={arrowddown}
          alt=""
        />
        <img className="dotgrey" src={dot4} alt="dot4" />
        <img className="dotver" src={dot2} alt="dot2" />
        <img className="illu3" src={illu3} alt="" />
        <img className="cross1" src={cross1} alt="cross1" />
      </section>

      {/* =========================================================================== */}

      <section className="contactme" id="section5">
        <p className="conbig reveal-from-top" data-sr="enter top 100px over 1s">
          Contact me
        </p>
        <form
          action=""
          className="formfill reveal-from-bottom"
          data-sr="enter top 100px over 1s"
          onSubmit={handleSubmitTwo}
        >
          <div className="fname">
            <p>Full name *</p>
            <input
              type="text"
              placeholder="Enter your full name ..."
              name="name"
              value={formDataTwo.name}
              onChange={handleChangeTwo}
            />
          </div>
          <div className="femail">
            <p>Email *</p>
            <input
              type="email"
              placeholder="Enter your email ..."
              name="email"
              value={formDataTwo.email}
              onChange={handleChangeTwo}
            />
          </div>
          <div className="fmessage">
            <p>Message *</p>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message ..."
              value={formDataTwo.message}
              onChange={handleChangeTwo}
            ></textarea>
          </div>
          <button className="sendfill border-0" onClick={handleSendClick}>
            Submit{"   "}
            <span>
              <BsFillSendFill />
            </span>
            <Toaster position="bottom-right" reverseOrder={false} />
          </button>
        </form>
        <Modal
          isOpen={isMessageSent}
          onRequestClose={closeMessageSent}
          contentLabel="From Data Modal"
          className="modal4"
        >
          <div className="messcar">
            <div className="scor">
              <img className="checkm" src={scorem} alt="" />
            </div>
            <div className="ymh">
              <p className="bigms">Message Sent</p>
              <p className="succc">Your message has been successfully sent.</p>
              <button onClick={closeMessageSent} className="border-0">
                Close
              </button>
            </div>
          </div>
        </Modal>
        <img className="leftfill" src={fillback1} alt="leftfill" />
        <img className="rightfill" src={fillback2} alt="rightfill" />
      </section>
    </div>
  );
};

export default LandingPage;
