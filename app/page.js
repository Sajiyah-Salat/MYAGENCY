"use client"

import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Briefcase, Settings, Cloud, Server } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpwork, faFiverr, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaFiverr } from "react-icons/fa6"; // Fiverr icon from React Icons
import Head from "next/head";


export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message
      });
    } finally {
      setSubmitting(false);
    }
  };




  const swiperRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const icons = ["/images/devops.png", "/images/cloud.png", "/images/setting.png"];


  const [activeTab, setActiveTab] = useState("Home");
  const [step, setStep] = useState(0);

  const [swiper, setSwiper] = useState(null);
  const textRef = useRef(null);
  const testimonials = [
    {
      name: "Tobias Jany",
      position: "Senior Designer at Design Studio",
      image: "/tobias.jpeg",
      text: "I had the pleasure of working with Sajiya Das on several complex projects, and she consistently demonstrated a deep expertise in DevOps, particularly with Kubernetes (K8s) and Docker. Her ability to design and manage scalable, containerized applications using Kubernetes is truly impressive, ensuring smooth deployment pipelines and seamless orchestration. ",
    },
    {
      name: "jayshan_88e",
      position: "Project Manager at Design Studio",
      image: "jason.jpeg",
      text: "Sajiya was again super helpful in supporting our team. She worked outside of her skillset with this requirement and was able to meet our expectations. She communicated well her plans and thought process and kept us updated frequently on her progress. We would definitely recommend Sajiya to anyone.",
    },
    {
      name: "Anisha singh",
      position: "Senior Designer at Design Studio",
      image: "/aneesa.jpeg",
      text: "The best part is that she is incredibly down-to-earth, polite, calm, and knowledgeable. The session went amazing and very Insightful. She has exceptional expertise in DevOps, and I recommend her without hesitation.",
    },
    {
      name: "Haneef Haroon",
      position: "Project Manager at Design Studio",
      image: "/haneef.jpeg",
      text: "I have been working been with Sajiya for a little over five months. I am really impressed by her ability to learn things fast, handle pressure, put in new ideas, multitask. Something I observed is she never sees a problem as a problem , she has looked at every hurdle or obstacle as an opportunity to learn, enhance her skills . Also she is an excellent team player , I highly recommend her as I believe she would be an asset to any team .",
    },
  ];
  const projects = [
    {
      title: 'CI/CD Pipeline',
      description: 'Comprehensive DevOps Solutions for a German Construction Company',
      image: '/pr1.jpg',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Automated and Secured Backend for Jira Plugins',
      image: '/pr2.jpg',
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive DevOps Course for US-Based Startup',
      image: '/pr3.jpg',
    },
    {
      title: 'Containerization',
      description: 'Dockerizing applications and orchestrating with Kubernetes.',
      image: '/pr4.jpg',
    },
  ];
  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { x: "80%" }, // Start position (off-screen left)
      {
        x: -10, // End position (centered)
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 40%",

        },
      }
    );
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = ["Home", "About", "How It Works", "Testimonial", "Contact"];
  return (
    <>
          <Head>
        <title>RKWEB - DevOps & Cloud Solutions</title>
        <meta name="description" content="RKWEB is a DevOps-focused agency specializing in building scalable, efficient solutions for businesses." />
        <meta name="keywords" content="DevOps, Cloud Solutions, CI/CD, Scalability, Automation" />
        <meta name="author" content="RKWEB Team" />
        
        {/* Open Graph for social media */}
        <meta property="og:title" content="RKWEB - DevOps & Cloud Solutions" />
        <meta property="og:description" content="Delivering high-quality digital solutions with seamless integration and rapid deployment." />
        <meta property="og:image" content="/agency.png" />
        <meta property="og:url" content="https://rkweb.dev" />
      </Head>

      <div className="bg-white text-black min-h-screen font-[Inter] relative">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 md:ml-12 md:mr-12 mr-0 ml-0">
          <h1 className="text-lg font-bold">RKWEB</h1>
          <div className="space-x-4">
            <button onClick={() => window.open("https://calendly.com/salatsajiya7-8-6/30min", "_blank")} className="cursor-pointer text-sm">Book a call</button>
            <button onClick={() => window.open("https://www.linkedin.com/in/sajiya-salat-0a2a78245/", "_blank")} className=" cursor-pointer bg-black text-white px-4 py-2 rounded-lg">Let's connect</button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="md:flex-row flex-col flex justify-between text-center py-20 max-w-6xl mx-auto">
  <h2 className="text-6xl font-bold tracking-tight leading-tight text-start">
    Empowering DevOps <br /> 
    <span className="text-gray-800"> Solutions</span>
    <span className="text-gray-600"> for Scalability</span>
  </h2>
          <div>

            <p className="text-gray-500 mt-4 text-2xl max-w-lg mx-auto">
              RKWEB is a DevOps-focused agency specializing in building scalable,
              efficient . We are team of talented Devops Engineer . Our focus is on delivering efficient, scalable, and high-quality digital solutions, ensuring seamless integration and rapid deployment.
            </p>
            <button onClick={() => document.getElementById('explore-work')?.scrollIntoView({ behavior: 'smooth' })} className="mt-6 underline cursor-pointer">Explore works →</button>
          </div>
        </section>

        {/* Marquee Section */}
        <div className=" bg-white overflow-hidden w-full">
          <div className="flex space-x-10 animate-marquee max-w-full">
            <span className="text-gray-700 font-medium">DevOps & Infrastructure</span>
            <span className="text-gray-700 font-medium">Cloud Solutions</span>
            <span className="text-gray-700 font-medium">Scalability & Security</span>
            <span className="text-gray-700 font-medium">Automation & CI/CD</span>
            <span className="text-gray-700 font-medium">Serverless Architecture</span>
            <span className="text-gray-700 font-medium">DevOps & Infrastructure</span>
            <span className="text-gray-700 font-medium">Cloud Solutions</span>
            <span className="text-gray-700 font-medium">Scalability & Security</span>
            <span className="text-gray-700 font-medium">Automation & CI/CD</span>
            <span className="text-gray-700 font-medium">Serverless Architecture</span>

          </div>
        </div>
        {/* Illustration */}
        <div className="flex justify-center items-center py-10">

          {/* Placeholder for Image/Illustration */}
          <Image src='/agency.png' height={200} width={1400} alt="agency Image object-cover" />

        </div>


      </div>

      <div className="m-20 bg-white max-w-6xl mx-auto flex flex-col items-center p-6 font-sans gap-5">
  <div className="w-full max-w-9xl flex flex-col lg:flex-row items-start gap-10">
    {/* Left Section: Main Heading and Description */}
    <div className="md:flex-row flex-col">
      <h1 className="text-4xl ml-5 font-serif font-bold leading-tight mb-4 text-center">
        Powering Digital Transformation with <span className="text-black">RKWEB</span>
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        RKWEB specializes in seamless DevOps solutions: Automate, Scale, Secure. From CI/CD pipelines to cloud-native architecture, we optimize and streamline development workflows for efficiency and innovation.
      </p>
    </div>
  </div>
</div>

{/* Right Section: DevOps Services */}
<div className="flex bg-white max-w-6xl mx-auto m-20 flex-col lg:flex-row gap-6 w-full">
  {/* Left Column: DevOps Solutions Info */}
  <div className="lg:w-1/2">
    <h2 className="text-3xl font-serif italic mb-4">Optimize Your DevOps Workflow</h2>
    <div className="p-6 rounded-lg shadow-md">
      <p className="text-gray-700 mb-4">
        We build scalable and automated DevOps environments tailored to your business needs, ensuring seamless development, deployment, and security.
      </p>
      <ul className="text-gray-600 space-y-2">
        <li>• Implement CI/CD pipelines for rapid deployment</li>
        <li>• Automate infrastructure with IaC (Terraform, Ansible, etc.)</li>
        <li>• Secure and optimize cloud architecture</li>
        <li>• Monitor and enhance system performance</li>
        <li>• Drive operational excellence with DevOps best practices</li>
      </ul>
          </div>
        </div>

        {/* Right Column: Progress Tracker */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg ">
            {/* Progress Header */}
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="tracking-wider">STEP /0{step + 1}/</span>

            </div>

            {/* Progress Bar */}
            <div className="relative w-[80%] bg-gray-300 h-2 rounded-full overflow-hidden">
              <div
                className="bg-black h-2 rounded-full transition-all duration-1000 flex items-center"
                style={{ width: `${Math.min((step + 1) * 33, 100)}%` }}
              >
                <span className="absolute right-0 top-[-8px] text-xs bg-black text-white px-2 py-0.5 rounded-full">★</span>
              </div>
            </div>


            {/* Icon Display */}
            <div className="mt-6 flex justify-center">
              <img src={icons[step]} alt="Step Icon" className="w-24 h-24" />
            </div>
          </div>
        </div>
      </div>

      <div className="whitespace-nowrap relative flex flex-col items-center justify-center text-black bg-white p-10">
        <h1
          ref={textRef}
          className="text-xl md:text-8xl font-serif italic text-center"
        >
          * We Are The Best * In DevOps Field
        </h1>
      </div>

      <div id="explore-work" className="relative w-full rounded-4xl text-white bg-black mt-20 py-10 p-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-sans italic text-start">Our DevOps Projects</h2>
          <p className="text-end text-gray-500 mb-5">
            Showcasing automation, cloud, and monitoring solutions.
          </p>

          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
              onClick={() => swiper && swiper.slidePrev()} // Use swiper instance
            >

            </button>

            <Swiper
              modules={[Navigation]}
              slidesPerView={1.2}
              spaceBetween={15}
              navigation
              onSwiper={setSwiper} // Store Swiper instance
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="px-10"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-2xl overflow-hidden bg-gray-900 text-white relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
              onClick={() => swiper && swiper.slideNext()} // Use swiper instance
            >

            </button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <div className="flex items-center justify-center gap-2">

            <h2 className="text-3xl font-serif font-semibold mb-10 text-gray-900">
              *   What Our Customers Are Saying
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-left flex flex-col justify-between"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    className="w-14 h-14 rounded-full border-2 border-green-500"
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-10 pb-10 bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-5xl w-full">
          <div className="flex justify-between items-center mb-10">
            <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">RKweb Agency</div>
            <div className="flex space-x-4">
              <button  onClick={() => window.location.href = ("https://calendly.com/salatsajiya7-8-6/30min" , "_blank")} className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold cursor-pointer">Book a Call</button>
              <button onClick={() => window.open("https://www.linkedin.com/in/sajiya-salat-0a2a78245/", "_blank")} className="text-white text-sm font-semibold cursor-pointer">→ Let's Connect</button>
            </div>
          </div>

          <h1 className="text-5xl font-serif  leading-tight">Let's Optimize Your Infrastructure</h1>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl">
            Get expert DevOps consultation for free. We provide advice on CI/CD pipelines, cloud deployments, Kubernetes orchestration, and automation strategies.
          </p>

          <div className="mt-10 flex space-x-4 items-center">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">★</div>
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">✦</div>
          </div>

          <div className="mt-12 w-full max-w-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First & Last Name"
                className="w-full bg-black border-b border-gray-600 py-2 outline-none focus:border-white"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-black border-b border-gray-600 py-2 outline-none focus:border-white"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="About Your Project"
                className="w-full bg-black border-b border-gray-600 py-2 outline-none focus:border-white"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-3 rounded-full mt-4 hover:bg-gray-600 disabled:opacity-50"
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus.message && (
                <div className={`mt-4 p-2 rounded ${submitStatus.success ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          <div className="mt-10 text-gray-400 text-sm">
            <p>Contact us at:</p>
            <p>salatsajiya7.8.6@gmail.com</p>
         
          </div>
          <div className="mt-4 flex space-x-4">
    <a href="https://www.upwork.com/fl/~01b55674f113e18603?mp_source=share" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faUpwork} className="text-white text-2xl hover:opacity-80" />
    </a>
    <a href="https://www.fiverr.com/sajiyah_salat?source=gig_page" target="_blank" rel="noopener noreferrer">
      <img src="/Fiverr.png" alt="fiverr account" width={30} height={30}/>
    </a> 
    <a href="https://www.linkedin.com/in/sajiya-salat-0a2a78245/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:opacity-80" />
    </a>
  </div>
        </div>
      </div>
    </>
  );
}
