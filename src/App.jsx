import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          width: "100%",
          fontFamily: "'Orbitron', sans-serif",
        }}
      >
        {/* Hero Image */}
        <img
          src="https://timelinecovers.pro/facebook-cover/download/anime-one-piece-zoro-roronoa-facebook-cover.jpg"
          alt="Zoro Cover"
          style={{
            width: "100vw",
            height: "40vh", // ✅ kept same as your code
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Fixed Navbar */}
<nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "15px 40px",
    zIndex: 1000,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      fontWeight: "bold",
      fontSize: "20px",
      letterSpacing: "2px",
      color: "#00ff88",
    }}
  >
    ZORO
  </div>

  <ul
    style={{
      display: "flex",
      gap: "30px",
      listStyle: "none",
      margin: 0,
      padding: 0,
      marginLeft: "auto",    // <<< pushes the whole menu to the right
      fontSize: "15px",
    }}
  >
    <li>
      <a href="#home" style={{ color: "white", textDecoration: "none" }}>
        Home
      </a>
    </li>
    <li>
      <a href="#about" style={{ color: "white", textDecoration: "none" }}>
        About
      </a>
    </li>
    <li>
      <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </a>
    </li>
  </ul>
</nav>

      </div>

      {/* About Section */}
      <div
        id="about"
        style={{
          background: "radial-gradient(circle at top, #0d0d0d, #111, #000)",
          padding: "120px 20px 80px", // ✅ extra top padding so nav doesn’t overlap
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            marginBottom: "40px",
            color: "#00ff88",
            textShadow: "0 0 15px rgba(0,255,136,0.6)",
          }}
        >
          Welcome to ZORO's World
        </h1>

        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            textAlign: "left",
            background: "rgba(255,255,255,0.05)",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0,255,136,0.2)",
          }}
        >
          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              ⚔️ Origins and Ambition
            </span>
            <br />
            Born in Shimotsuki Village, Zoro's passion for swordsmanship began
            in his childhood. He made a promise to his deceased friend Kuina to
            become the strongest in the world by her memory.
          </p>

          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              🏴‍☠️ Role in the Straw Hat Pirates
            </span>
            <br />
            Zoro was the first member to join Monkey D. Luffy's crew, becoming a
            vital and powerful combatant. While sometimes distant, he is fiercely
            protective of his nakama (comrades).
          </p>

          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              💪 Powers and Abilities
            </span>
            <br />
            <u>Santoryu:</u> Three-sword fighting style. <br />
            <u>Physical Prowess:</u> Immense strength & agility. <br />
            <u>Haki:</u> Armament and Conqueror's Haki.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        style={{
          background: "linear-gradient(135deg, #001a1a, #003333, #000)",
          padding: "120px 20px 80px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "40px",
            color: "#00ffcc",
            textShadow: "0 0 12px rgba(0,255,204,0.5)",
          }}
        >
          Contact Zoro
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {[
            { label: "📍 Location", value: "Shimotsuki Village" },
            { label: "📧 Email", value: "strongestSwordsman@gmail.com" },
            {
              label: "📞 Number",
              value: "M1781278172 - Straw Hat Pirates",
            },
            { label: "⚔️ Style", value: "Santoryu (Three-Sword Style)" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,255,136,0.2)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h3 style={{ color: "#00ff88", marginBottom: "10px" }}>
                {item.label}
              </h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Smooth Scroll + Futuristic Font */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');
      `}</style>
    </>
  )
}

export default App
