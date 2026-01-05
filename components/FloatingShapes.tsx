import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Main Large Geometric Shape (Right side) - The "Cube/Polygon" lookalike */}
      <motion.div
        animate={{
          rotateX: [0, 15, 0],
          rotateY: [0, 25, 0],
          rotateZ: [0, 5, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-[5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-80"
      >
         {/* Using a CSS shape to mimic the neon polygon */}
         <div className="w-full h-full relative" style={{ perspective: '1000px' }}>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#00ff84] to-[#caff00] blur-3xl opacity-20 rounded-full"
            />
            {/* The crisp shape */}
            <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#00ff84] to-transparent opacity-80"
                style={{
                    clipPath: "polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)",
                    boxShadow: "0 0 50px rgba(0, 255, 132, 0.5)"
                }}
            ></div>
             {/* A second overlapping shape for depth */}
             <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/3 w-60 h-60 md:w-80 md:h-80 border-2 border-[#00ff84]/30"
                style={{
                    clipPath: "polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)",
                }}
            ></div>
         </div>
      </motion.div>

      {/* Floating Orb 1 (Left Center) */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 left-[45%] w-32 h-32 rounded-full bg-gradient-to-r from-[#00ff84] to-[#ffdd00] blur-[60px] opacity-40"
      />

       {/* Floating Orb 2 (Bottom Right) */}
       <motion.div
        animate={{
            y: [0, -40, 0],
            x: [0, 20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[#caff00] blur-md opacity-80 shadow-[0_0_30px_#caff00]"
      />

      {/* Floating Orb 3 (Top Left - Small) */}
      <motion.div
        animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-20 w-4 h-4 rounded-full bg-[#00ff84] blur-[1px]"
      />

      {/* Background Particles/Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;