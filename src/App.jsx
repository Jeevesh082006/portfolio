// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Hi, I'm Jeevesh R </h1>
      <h2>Welcome to My Portfolio</h2>
      <p>I'm a passionate Web Developer.</p>
      <button onClick={() => navigate("/about")}>About Me</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>About Me</h1>
      <p>
        I am Jeevesh R, a Computer Science Engineering student.
        I enjoy creating websites using HTML, CSS, JavaScript
        and React.
      </p>
      <button onClick={() => navigate("/education")}>Education</button>
    </div>
  );
}

function Education() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>My Education</h1>
      <p> S.A. Engineering College</p>
      <p> Vaariar Matriculation Higher School</p>
      <button onClick={() => navigate("/skills")}>Skills</button>
    </div>
  );
}

function Skills() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>My Skills</h1>
      <p>HTML | CSS | JavaScript | React</p>
      <p>Java | C++ | MySQL</p>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
}

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <p>📞 +91 6369217557</p>
      <p>✉️ jeevajeevesh49@gmail.com</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="navbar">
        <h2>My Portfolio</h2>
        <button onClick={toggleTheme}>
          {darkMode ? " Light" : " Dark"}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;