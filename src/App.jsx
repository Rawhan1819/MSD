import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(135deg, #7c3aed, #4338ca)",
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            padding: "45px 35px",
            width: "100%",
            maxWidth: "420px",
            textAlign: "center",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.3)";
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#4f46e5",
              letterSpacing: "1px",
            }}
          >
            ⚡ SkillForge
          </h1>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "25px",
              color: "#444",
            }}
          >
            {isLogin ? "Login to Your Account" : "Create an Account"}
          </h2>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  outline: "none",
                  fontSize: "15px",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 8px rgba(79,70,229,0.5)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "15px",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 8px rgba(79,70,229,0.5)")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "15px",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 8px rgba(79,70,229,0.5)")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  outline: "none",
                  fontSize: "15px",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 8px rgba(79,70,229,0.5)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            )}
            <button
              type="submit"
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(90deg, #4f46e5, #6366f1)",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 5px 15px rgba(79,70,229,0.6)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p
            style={{
              fontSize: "14px",
              marginTop: "20px",
              color: "#555",
            }}
          >
            {isLogin ? "Don’t have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              style={{
                marginLeft: "6px",
                background: "none",
                border: "none",
                color: "#4f46e5",
                cursor: "pointer",
                fontWeight: "600",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#3730a3")}
              onMouseOut={(e) => (e.target.style.color = "#4f46e5")}
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
