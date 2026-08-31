import { useEffect } from "react";
import "./App.css";

function App() {

  // ================= AI VOICE INTRO =================

  const speakIntro = () => {
    if (!("speechSynthesis" in window)) {
      alert("Your browser does not support voice narration.");
      return;
    }

    window.speechSynthesis.cancel();

    const text =
      "Hello! I'm Babitha's AI assistant. Welcome to her portfolio. " +
      "Babitha Vishwakarma is a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. " +
      "She is passionate about Python, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision and Generative AI. " +
      "She enjoys building real world projects and continuously developing her software engineering skills. " +
      "Please explore her projects, skills, experience, education and certificates. Thank you for visiting!";

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1.15;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
  };


  // ================= AUTO INTRO =================

  useEffect(() => {
    const timer = setTimeout(() => {
      speakIntro();
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, []);


  // ================= PROJECTS =================

  const projects = [

    {
      title: "Hand Tracking System",
      icon: "🖐️",
      description:
        "A real-time computer vision system that detects and tracks hand landmarks using Python, OpenCV and MediaPipe.",
      technologies: [
        "Python",
        "OpenCV",
        "MediaPipe"
      ],
    },

    {
      title: "Finance Buddy – Expense Tracker",
      icon: "💰",
      description:
        "A personal finance application designed to track expenses and help users understand their spending habits.",
      technologies: [
        "Python",
        "Data Handling",
        "UI"
      ],
    },

    {
      title: "Sleep Alarm Detection",
      icon: "😴",
      description:
        "A computer vision based project designed to detect signs of drowsiness and provide an alert.",
      technologies: [
        "Python",
        "OpenCV",
        "MediaPipe",
        "Machine Learning"
      ],
    },

    {
      title: "Sign Language Translator",
      icon: "🤟",
      description:
        "A currently developing AI project that recognizes hand signs and translates them into letters and speech.",
      technologies: [
        "Python",
        "TensorFlow",
        "MediaPipe",
        "OpenCV",
        "NumPy"
      ],
    },

    {
      title: "RP Function Hall & Gardens",
      icon: "🏛️",
      description:
        "A complete function hall website with responsive frontend, booking features and full backend support.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Backend",
        "Database"
      ],
    },

  ];


  // ================= SKILLS =================

  const skills = [

    "Python",
    "Data Structures & Algorithms",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Artificial Intelligence",
    "Computer Vision",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "MediaPipe",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Python Libraries",
    "Web Development",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Git & GitHub",

  ];


  // ================= CERTIFICATES =================

  const certificates = [

    {
      title: "30 Days Power BI Micro Course",
      organization: "Power BI",
      icon: "📊",
      link:
        "https://www.linkedin.com/posts/babitha-vishwakarma-0083a8335_just-completed-the-30-days-power-bi-micro-activity-7476326690466668544-0pzR",
    },

    {
      title: "GUVI × HCL Webinar",
      organization: "GUVI",
      icon: "🎓",
      link:
        "https://www.linkedin.com/posts/babitha-vishwakarma-0083a8335_i-just-attended-guvi-x-hcls-webinar-and-activity-7393705069919006720-FdJP",
    },

    {
      title: "ICAT Aptitude Test",
      organization: "Learning Experience",
      icon: "📝",
      link:
        "https://www.linkedin.com/posts/babitha-vishwakarma-0083a8335_icat-aptitudetest-learningexperience-activity-7378710817956895344-CNfT",
    },

    {
      title: "GeeksforGurukul Volunteer",
      organization: "Volunteer Experience",
      icon: "🤝",
      link:
        "https://www.linkedin.com/posts/babitha-vishwakarma-0083a8335_blockchain-geeksofgurukul-volunteerexperience-activity-7373633708970549248-p02n",
    },

    {
      title: "AI/ML Engineering Internship",
      organization: "ArithMatrix Tech",
      icon: "💼",
      link:
        "https://lnkd.in/p/dECszcEw",
    },

  ];


  return (

    <div className="portfolio">


      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          Babitha<span>.</span>
        </div>

        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#certificates">Certificates</a>

          <a href="#education">Education</a>

          <a href="#contact">Contact</a>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">


        <div className="ai-avatar">

          <div className="avatar-glow">

            <div className="avatar-girl">
              👩🏻‍💻
            </div>

          </div>

          <div className="online-dot"></div>

        </div>


        <p className="ai-label">
          ✨ AI POWERED PORTFOLIO
        </p>


        <h1>

          Hi, I'm

          <span>
            Babitha Vishwakarma
          </span>

        </h1>


        <h2>
          AI & Machine Learning Enthusiast
        </h2>


        <p className="hero-text">

          I build intelligent solutions, computer vision
          applications and real-world projects using
          AI, Machine Learning and Python.

        </p>


        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={speakIntro}
          >

            🤖 Meet My AI Assistant

          </button>


          <a
            href="#projects"
            className="secondary-btn"
          >

            🚀 Explore My Projects

          </a>

        </div>


        <div className="scroll-text">
          ↓ Explore my journey
        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section"
      >

        <p className="section-label">
          ABOUT ME
        </p>


        <h2 className="section-title">

          Turning Ideas Into

          <span>
            Intelligent Solutions
          </span>

        </h2>


        <div className="about-card">


          <div className="about-icon">
            🤖
          </div>


          <div>

            <h3>
              Hello! I'm Babitha 👋
            </h3>


            <p>

              I'm a Computer Science Engineering student
              specializing in Artificial Intelligence and
              Machine Learning.

            </p>


            <p>

              I enjoy learning new technologies and building
              practical projects using Python, Machine Learning,
              Deep Learning, Computer Vision and Web Development.

            </p>


            <p>

              I'm passionate about creating technology that
              solves real-world problems and continuously
              improving my software engineering skills.

            </p>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section"
      >

        <p className="section-label">
          TECHNICAL SKILLS
        </p>


        <h2 className="section-title">

          My <span>Skills</span>

        </h2>


        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <span>
                ✦
              </span>

              {skill}

            </div>

          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section"
      >

        <p className="section-label">
          MY WORK
        </p>


        <h2 className="section-title">

          Featured <span>Projects</span>

        </h2>


        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >


              <div className="project-icon">
                {project.icon}
              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="tech-list">

                {project.technologies.map(
                  (technology, technologyIndex) => (

                    <span key={technologyIndex}>
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section"
      >

        <p className="section-label">
          EXPERIENCE
        </p>


        <h2 className="section-title">

          My <span>Experience</span>

        </h2>


        <div className="experience-grid">


          {/* INTERNSHIP */}

          <div className="experience-card">

            <div className="experience-icon">
              💻
            </div>


            <div>

              <h3>
                AI/ML Engineering Intern
              </h3>


              <h4>
                ArithMatrix Tech
              </h4>


              <span className="current-badge">
                Currently Working
              </span>


              <p>

                Currently working as an AI/ML Engineering
                Intern, gaining practical experience in
                Artificial Intelligence, Machine Learning
                and software development.

              </p>

            </div>

          </div>


          {/* IEEE */}

          <div className="experience-card">

            <div className="experience-icon">
              🛡️
            </div>


            <div>

              <h3>
                IEEE Security Position
              </h3>


              <h4>
                Oriental University
              </h4>


              <span className="current-badge">
                Current Position
              </span>


              <p>

                Currently contributing to IEEE activities
                and supporting technical and organizational
                initiatives at Oriental University.

              </p>

            </div>

          </div>


          {/* VOLUNTEER */}

          <div className="experience-card">

            <div className="experience-icon">
              🤝
            </div>


            <div>

              <h3>
                Volunteer
              </h3>


              <h4>
                GeeksforGurukul
              </h4>


              <p>

                Participated as a volunteer and contributed
                to workshop and community activities.

              </p>


              <a
                href={certificates[3].link}
                target="_blank"
                rel="noreferrer"
                className="view-btn"
              >

                🔗 View on LinkedIn ↗

              </a>

            </div>

          </div>


        </div>

      </section>


      {/* ================= CERTIFICATES ================= */}

      <section
        id="certificates"
        className="section"
      >

        <p className="section-label">
          ACHIEVEMENTS
        </p>


        <h2 className="section-title">

          My <span>Certificates</span>

        </h2>


        <div className="certificate-grid">


          {certificates.map(
            (certificate, index) => (

              <div
                className="certificate-card"
                key={index}
              >


                <div className="certificate-icon">
                  {certificate.icon}
                </div>


                <h3>
                  {certificate.title}
                </h3>


                <p>
                  {certificate.organization}
                </p>


                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="view-btn"
                >

                  🔗 View on LinkedIn ↗

                </a>


              </div>

            )
          )}

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="section"
      >

        <p className="section-label">
          MY JOURNEY
        </p>


        <h2 className="section-title">

          <span>
            Education
          </span>

        </h2>


        <div className="timeline">


          {/* BTECH */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>


            <div className="timeline-content">

              <span>
                Currently Pursuing
              </span>


              <h3>

                B.Tech – CSE
                (Artificial Intelligence & Machine Learning)

              </h3>


              <h4>

                Oriental University,
                Indore, Madhya Pradesh

              </h4>


              <p>

                Currently pursuing Bachelor of Technology
                in Computer Science Engineering with
                specialization in Artificial Intelligence
                and Machine Learning.

              </p>

            </div>

          </div>


          {/* INTERMEDIATE 2 */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>


            <div className="timeline-content">

              <span>
                Intermediate – 2nd Year
              </span>


              <h3>
                Intermediate
              </h3>


              <h4>

                Sri Chaitanya,
                Attapur, Hyderabad, Telangana

              </h4>

            </div>

          </div>


          {/* INTERMEDIATE 1 */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>


            <div className="timeline-content">

              <span>
                Intermediate – 1st Year
              </span>


              <h3>
                Intermediate
              </h3>


              <h4>

                Sri Gayatri College,
                Mallampet, Hyderabad, Telangana

              </h4>

            </div>

          </div>


          {/* SCHOOL */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>


            <div className="timeline-content">

              <span>
                School
              </span>


              <h3>
                Secondary School
              </h3>


              <h4>

                SSV High School,
                Bandlaguda Jagir, Hyderabad, Telangana

              </h4>

            </div>

          </div>


        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <p className="section-label">
          LET'S CONNECT
        </p>


        <h2 className="section-title">

          Get In <span>Touch</span>

        </h2>


        <p className="contact-intro">

          Interested in working together, discussing AI/ML,
          or simply connecting? Feel free to reach out!

        </p>


        <div className="contact-grid">


          {/* EMAIL */}

          <a
            href="mailto:vishwakarmababitha61@gamil.com"
            className="contact-card"
          >

            <div>
              📧
            </div>


            <h3>
              Email
            </h3>


            <p>
              vishwakarmababitha61@gamil.com
            </p>

          </a>


          {/* PHONE */}

          <a
            href="tel:+919949750510"
            className="contact-card"
          >

            <div>
              📱
            </div>


            <h3>
              Phone
            </h3>


            <p>
              +91 9949750510
            </p>

          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/babitha-vishwakarma-0083a8335/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <div>
              💼
            </div>


            <h3>
              LinkedIn
            </h3>


            <p>
              Babitha Vishwakarma
            </p>

          </a>


          {/* GITHUB */}

          <a
            href="https://github.com/vishwakarmababitha61-boop"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <div>
              🐙
            </div>


            <h3>
              GitHub
            </h3>


            <p>
              vishwakarmababitha61-boop
            </p>

          </a>


        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">

          Babitha<span>.</span>

        </div>


        <p>
          Building the future with AI & Machine Learning 🤖
        </p>


        <p className="copyright">

          © 2026 Babitha Vishwakarma.
          All Rights Reserved.

        </p>

      </footer>

    </div>

  );
}

export default App;
