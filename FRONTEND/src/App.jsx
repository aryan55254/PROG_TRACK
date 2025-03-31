import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    month: "January",
    projects: [
      {
        name: "Job Listing App",
        details: "Built with React and Tailwind CSS.",
        repo: "https://github.com/aryan55254/JOB-LISTING-APP",
        live: "https://job-listing-app-pied.vercel.app/",
      },
      {
        name: "Project 2",
        details: "Was only able to build one project this month.",
      },
      {
        name: "Project 3",
        details: "Was only able to build one project this month.",
      },
    ],
  },
  {
    month: "February",
    projects: [
      {
        name: "Tech Team Landing Page",
        details: "A modern web experience.",
        live: "https://tarang-nu.vercel.app/",
      },
      {
        name: "Tech Team Landing Page",
        details: "Innovative tech platform.",
        live: "https://tech-titans-teal.vercel.app/",
      },
      {
        name: "Link Trim Backend",
        details:
          "URL shortener backend built with Node.js, Express, and MongoDB.",
        repo: "https://github.com/aryan55254/LINK_TRIM/tree/main/BACKEND",
      },
    ],
  },
  {
    month: "March",
    projects: [
      {
        name: "ScrapeSift",
        details: "A web scraper built with MERN stack.",
        live: "https://scrapesift.aryanmishra.site/",
      },
      {
        name: "Py Paint",
        details: "A Python-based paint application.",
        repo: "https://github.com/aryan55254/PY_PAINT",
      },
      {
        name: "Project 3",
        details: "Wasn't able to build this project this month.",
      },
    ],
  },
  {
    month: "April",
    projects: [{ name: "Coming Soon", details: "New projects will be added soon." }],
  },
  {
    month: "May",
    projects: [{ name: "Coming Soon", details: "New projects will be added soon." }],
  },
  {
    month: "June",
    projects: [{ name: "Coming Soon", details: "New projects will be added soon." }],
  },
  {
    month: "July",
    projects: [{ name: "Coming Soon", details: "New projects will be added soon." }],
  },
  {
    month: "August",
    projects: [{ name: "Coming Soon", details: "New projects will be added soon." }],
  },
  {
    month: "September",
    projects: [{ name: "Coming Soon", details: "New projects will be added soon." }],
  },
  {
    month: "October",
    projects: [{ name: "Coming Soon", details: "New projects will be added soon." }],
  },
  {
    month: "November",
    projects: [{ name: "Coming Soon", details: "New projects will be added soon." }],
  },
  {
    month: "December",
    projects: [{ name: "Coming Soon", details: "New projects will be added soon." }],
  },
];

export default function ProgressTracker() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [progressValue, setProgressValue] = useState(0);
  const currentMonth = new Date().getMonth();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const progress = ((currentMonth + 1) / 12) * 100;

  // Animate the progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValue(progress);
    }, 500);
    return () => clearTimeout(timer);
  }, [progress]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && selectedMonth) {
        setSelectedMonth(null);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [selectedMonth]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="progress-tracker"
      style={{
        padding: "clamp(20px, 5vw, 40px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        Aryan's 2025 Progress
      </motion.h1>

      {/* Progress Bar Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "0 20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>January</span>
          <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>
            {progressValue.toFixed(1)}%
          </span>
          <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>December</span>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "10px",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressValue}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              height: "100%",
              background: "linear-gradient(to right, #ffffff, #f0f0f0)",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>

        {/* Current Month Indicator */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              display: "inline-block",
              padding: "5px 15px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            Current: {monthNames[currentMonth]}
          </motion.div>
        </div>
      </div>

      {/* Month Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 140px), 1fr))",
          gap: "clamp(10px, 2vw, 20px)",
          width: "100%",
          maxWidth: "900px",
          padding: "0 clamp(10px, 3vw, 20px)",
        }}
      >
        {projectsData.map((data, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedMonth(data)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              rotate: [0, 1, -1, 1, 0],
              transition: { 
                duration: 0.3,
                rotate: { duration: 0.3, ease: "easeInOut" },
              }
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: `rgba(255, 255, 255, ${index <= currentMonth ? 0.15 : 0.05})`,
              border: `1px solid rgba(255, 255, 255, ${index <= currentMonth ? 0.3 : 0.1})`,
              borderRadius: "12px",
              padding: "clamp(15px, 3vw, 20px)",
              textAlign: "center",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            {index <= currentMonth && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 10px rgba(74, 222, 128, 0.7)",
                }}
              />
            )}
            <h2
              style={{
                fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
                fontWeight: "bold",
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {data.month}
            </h2>
            {index <= currentMonth && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                style={{
                  fontSize: "0.7rem",
                  marginTop: "5px",
                  padding: "2px 8px",
                  background: "rgba(255, 255, 255, 0.2)",
                  display: "inline-block",
                  borderRadius: "10px",
                }}
              >
                {data.projects.filter(p => p.name !== "Coming Soon").length} Projects
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Modal */}
      <AnimatePresence>
        {selectedMonth && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(8px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
              padding: "20px",
            }}
            onClick={() => setSelectedMonth(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
              style={{
                position: "relative",
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                padding: "clamp(20px, 5vw, 40px)",
                borderRadius: "20px",
                width: "95%",
                maxWidth: "600px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                overflowY: "auto",
                maxHeight: "85vh",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedMonth(null)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                ✕
              </motion.button>
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 1.8rem)",
                  fontWeight: "bold",
                  marginBottom: "30px",
                  textAlign: "center",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
                  paddingBottom: "15px",
                }}
              >
                {selectedMonth.month} Projects
              </motion.h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {selectedMonth.projects.map((project, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                      background: "rgba(255, 255, 255, 0.15)"
                    }}
                    style={{
                      padding: "clamp(15px, 4vw, 20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      background: "rgba(255, 255, 255, 0.08)",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <strong style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)", color: "#fff", display: "block" }}>
                      {project.name}
                    </strong>
                    <p style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)", color: "#ccc", marginTop: "8px" }}>
                      {project.details}
                    </p>
                    <div style={{ marginTop: "15px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      {project.repo && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            padding: "6px 12px",
                            background: "rgba(0, 123, 255, 0.2)",
                            color: "#60a5fa",
                            fontWeight: "500",
                            textDecoration: "none",
                            borderRadius: "5px",
                            fontSize: "0.85rem",
                          }}
                        >
                          <FaGithub /> GitHub
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            padding: "6px 12px",
                            background: "rgba(40, 167, 69, 0.2)",
                            color: "#4ade80",
                            fontWeight: "500",
                            textDecoration: "none",
                            borderRadius: "5px",
                            fontSize: "0.85rem",
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16l4-4-4-4M8 12h8" />
                          </svg>
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          marginTop: "clamp(30px, 6vw, 40px)",
          display: "flex",
          gap: "clamp(15px, 3vw, 25px)",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <motion.a
          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 10, 0] }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/aryan55254"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            background: "rgba(255, 255, 255, 0.1)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 10, 0] }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/aryan-mishra-404987314/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            background: "rgba(255, 255, 255, 0.1)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 10, 0] }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com/Slackzilla_"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            background: "rgba(255, 255, 255, 0.1)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <FaTwitter />
        </motion.a>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          marginTop: "30px",
          fontSize: "0.8rem",
          opacity: 0.7,
          textAlign: "center",
        }}
      >
        © 2025 Aryan Mishra | All Rights Reserved
      </motion.p>
    </motion.div>
  );
}