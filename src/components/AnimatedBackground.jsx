function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] to-[#1A2942]"></div>

      {/* Large shapes - slow movement */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] bg-[#2B3F5C]"
        style={{
          top: '10%',
          left: '5%',
          animation: 'float 80s ease-in-out infinite',
          willChange: 'transform'
        }}
      ></div>

      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.03] bg-[#3D5470]"
        style={{
          top: '40%',
          right: '0%',
          animation: 'drift 90s linear infinite',
          animationDelay: '10s',
          willChange: 'transform'
        }}
      ></div>

      <div
        className="absolute w-[500px] h-[500px] opacity-[0.05] bg-[#2B3F5C]"
        style={{
          bottom: '10%',
          left: '20%',
          borderRadius: '30%',
          animation: 'driftAlt 70s linear infinite',
          animationDelay: '20s',
          willChange: 'transform'
        }}
      ></div>

      {/* Medium shapes - moderate movement */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-[0.05] bg-[#2B3F5C]"
        style={{
          top: '20%',
          right: '15%',
          animation: 'float 50s ease-in-out infinite',
          animationDelay: '5s',
          willChange: 'transform'
        }}
      ></div>

      <div
        className="absolute w-[400px] h-[400px] opacity-[0.06] bg-[#3D5470]"
        style={{
          bottom: '30%',
          left: '10%',
          borderRadius: '40%',
          animation: 'drift 55s linear infinite',
          animationDelay: '15s',
          willChange: 'transform'
        }}
      ></div>

      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.07] bg-[#D4A574]"
        style={{
          top: '60%',
          right: '25%',
          animation: 'float 45s ease-in-out infinite',
          animationDelay: '25s',
          willChange: 'transform'
        }}
      ></div>

      {/* Small accent dots - faster movement with opacity pulse */}
      <div
        className="absolute w-[80px] h-[80px] rounded-full bg-[#D4A574]"
        style={{
          top: '15%',
          left: '30%',
          animation: 'pulseGold 30s ease-in-out infinite, drift 40s linear infinite',
          willChange: 'transform, opacity'
        }}
      ></div>

      <div
        className="absolute w-[60px] h-[60px] rounded-full bg-[#5B8FB9]"
        style={{
          top: '70%',
          left: '60%',
          animation: 'pulse 25s ease-in-out infinite, float 35s ease-in-out infinite',
          animationDelay: '8s',
          willChange: 'transform, opacity'
        }}
      ></div>

      <div
        className="absolute w-[50px] h-[50px] rounded-full bg-[#D4A574]"
        style={{
          bottom: '20%',
          right: '10%',
          animation: 'pulseGold 28s ease-in-out infinite, driftAlt 38s linear infinite',
          animationDelay: '12s',
          willChange: 'transform, opacity'
        }}
      ></div>

      <div
        className="absolute w-[70px] h-[70px] rounded-full bg-[#5B8FB9]"
        style={{
          top: '40%',
          left: '15%',
          animation: 'pulse 22s ease-in-out infinite, float 32s ease-in-out infinite',
          animationDelay: '18s',
          willChange: 'transform, opacity'
        }}
      ></div>

      <div
        className="absolute w-[40px] h-[40px] rounded-full bg-[#E8B87E]"
        style={{
          top: '85%',
          right: '40%',
          animation: 'pulseGold 20s ease-in-out infinite, drift 30s linear infinite',
          animationDelay: '5s',
          willChange: 'transform, opacity'
        }}
      ></div>

      {/* Additional decorative shapes for richness */}
      <div
        className="absolute w-[200px] h-[200px] opacity-[0.04] bg-[#2B3F5C]"
        style={{
          top: '50%',
          left: '40%',
          borderRadius: '35%',
          animation: 'float 65s ease-in-out infinite',
          animationDelay: '30s',
          willChange: 'transform'
        }}
      ></div>

      <div
        className="absolute w-[100px] h-[100px] rounded-full bg-[#6BA3C4]"
        style={{
          bottom: '15%',
          left: '70%',
          animation: 'pulse 26s ease-in-out infinite, driftAlt 36s linear infinite',
          animationDelay: '22s',
          willChange: 'transform, opacity'
        }}
      ></div>
    </div>
  )
}

export default AnimatedBackground
