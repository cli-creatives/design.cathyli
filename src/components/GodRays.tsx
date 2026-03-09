"use client";

export default function GodRays() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <style>{`
        /* ── Keyframes ─────────────────────────────────── */
        @keyframes gr-drift-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(-5deg); }
          33%       { transform: translate(30px, -20px) scale(1.06) rotate(-3deg); }
          66%       { transform: translate(-15px, 15px) scale(0.96) rotate(-7deg); }
        }
        @keyframes gr-drift-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(8deg); }
          40%       { transform: translate(-35px, 25px) scale(1.08) rotate(6deg); }
          70%       { transform: translate(20px, -15px) scale(0.94) rotate(10deg); }
        }
        @keyframes gr-drift-3 {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(15deg); }
          30%       { transform: translate(20px, 30px) scale(1.04) rotate(13deg); }
          60%       { transform: translate(-30px, -10px) scale(1.1) rotate(17deg); }
        }
        @keyframes gr-drift-4 {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(-12deg); }
          50%       { transform: translate(25px, 20px) scale(1.05) rotate(-10deg); }
        }
        @keyframes gr-blob-a {
          0%, 100% { transform: scale(1);    opacity: 1; }
          50%       { transform: scale(1.12); opacity: 0.85; }
        }
        @keyframes gr-blob-b {
          0%, 100% { transform: scale(1);   opacity: 0.9; }
          50%       { transform: scale(0.9); opacity: 1; }
        }

        /* ── Blob elements ─────────────────────────────── */
        .gr-blob-yellow {
          position: absolute;
          width: 580px; height: 480px;
          top: -15%; right: -8%;
          border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
          background: radial-gradient(ellipse, rgba(255, 248, 170, 0.60) 0%, transparent 65%);
          filter: blur(60px);
          animation: gr-blob-a 20s ease-in-out infinite;
        }
        .gr-blob-green {
          position: absolute;
          width: 520px; height: 540px;
          bottom: -18%; left: -10%;
          border-radius: 45% 55% 40% 60% / 55% 45% 60% 40%;
          background: radial-gradient(ellipse, rgba(170, 225, 120, 0.55) 0%, transparent 65%);
          filter: blur(65px);
          animation: gr-blob-b 26s ease-in-out -10s infinite;
        }
        .gr-blob-center {
          position: absolute;
          width: 440px; height: 420px;
          top: 15%; left: 28%;
          border-radius: 50% 50% 45% 55% / 40% 60% 40% 60%;
          background: radial-gradient(ellipse, rgba(215, 248, 140, 0.38) 0%, transparent 60%);
          filter: blur(55px);
          animation: gr-blob-a 22s ease-in-out -6s infinite;
        }

        /* ── Ray elements ──────────────────────────────── */
        .gr-ray-1 {
          position: absolute;
          width: 90px; height: 700px;
          top: -25%; left: 42%;
          border-radius: 50%;
          background: linear-gradient(to bottom, rgba(252, 255, 180, 0.50) 0%, rgba(252, 255, 180, 0.15) 40%, transparent 70%);
          filter: blur(28px);
          animation: gr-drift-1 20s ease-in-out -3s infinite;
        }
        .gr-ray-2 {
          position: absolute;
          width: 75px; height: 650px;
          top: -20%; right: 24%;
          border-radius: 50%;
          background: linear-gradient(to bottom, rgba(210, 250, 160, 0.44) 0%, rgba(210, 250, 160, 0.12) 45%, transparent 65%);
          filter: blur(24px);
          animation: gr-drift-2 24s ease-in-out -12s infinite;
        }
        .gr-ray-3 {
          position: absolute;
          width: 60px; height: 600px;
          top: -15%; right: 8%;
          border-radius: 50%;
          background: linear-gradient(to bottom, rgba(255, 255, 200, 0.38) 0%, rgba(255, 255, 200, 0.10) 40%, transparent 60%);
          filter: blur(20px);
          animation: gr-drift-3 28s ease-in-out -7s infinite;
        }
        .gr-ray-4 {
          position: absolute;
          width: 130px; height: 550px;
          top: -18%; left: 18%;
          border-radius: 50%;
          background: linear-gradient(to bottom, rgba(200, 240, 140, 0.34) 0%, rgba(200, 240, 140, 0.08) 50%, transparent 70%);
          filter: blur(36px);
          animation: gr-drift-4 32s ease-in-out -18s infinite;
        }
        .gr-ray-5 {
          position: absolute;
          width: 50px; height: 500px;
          top: -12%; left: 58%;
          border-radius: 50%;
          background: linear-gradient(to bottom, rgba(255, 255, 210, 0.55) 0%, rgba(255, 255, 210, 0.15) 35%, transparent 60%);
          filter: blur(16px);
          animation: gr-drift-1 16s ease-in-out -8s infinite;
        }
      `}</style>

      {/* Blobs */}
      <div className="gr-blob-yellow" />
      <div className="gr-blob-green" />
      <div className="gr-blob-center" />

      {/* Rays */}
      <div className="gr-ray-1" />
      <div className="gr-ray-2" />
      <div className="gr-ray-3" />
      <div className="gr-ray-4" />
      <div className="gr-ray-5" />
    </div>
  );
}
