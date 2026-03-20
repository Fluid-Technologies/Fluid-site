import React from 'react';
import { motion } from 'motion/react';
import { Zap, X, CheckCircle2 } from 'lucide-react';

const CentralizedSystemAnimation = () => {
  const problems = [
    { id: 1, label: 'WhatsApp hiring', x: -120, y: -80 },
    { id: 2, label: 'Excel payroll', x: 120, y: -80 },
    { id: 3, label: 'Delayed salaries', x: -120, y: 80 },
    { id: 4, label: 'Loan shark risks', x: 120, y: 80 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
      {/* Central Hub */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="relative z-20 w-24 h-24 bg-brand-navy rounded-full flex items-center justify-center shadow-2xl border-4 border-brand-cyan"
      >
        <Zap className="w-10 h-10 text-brand-cyan" />
        
        {/* Pulsing rings */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-brand-cyan rounded-full -z-10"
        />
        <motion.div
          animate={{ scale: [1, 2], opacity: [0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 bg-brand-cyan rounded-full -z-10"
        />
      </motion.div>

      {/* Connection Lines and Problem Nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4EF2D8" stopOpacity="0" />
            <stop offset="50%" stopColor="#4EF2D8" stopOpacity="1" />
            <stop offset="100%" stopColor="#4EF2D8" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {problems.map((p) => {
          const targetX = 200 + p.x;
          const targetY = 200 + p.y;
          
          return (
            <React.Fragment key={p.id}>
              {/* Static Line */}
              <line
                x1="200"
                y1="200"
                x2={targetX}
                y2={targetY}
                stroke="#1E234D"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.2"
              />
              
              {/* Electric Pulse */}
              <motion.circle
                r="3"
                fill="#4EF2D8"
                initial={{ offsetDistance: "0%" }}
                animate={{ 
                  cx: [200, targetX],
                  cy: [200, targetY],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: p.id * 0.5,
                  ease: "easeInOut"
                }}
              />

              {/* Shockwave effect at nodes */}
              <motion.circle
                cx={targetX}
                cy={targetY}
                r="15"
                fill="none"
                stroke="#4EF2D8"
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: p.id * 0.5 + 1.5 
                }}
              />
            </React.Fragment>
          );
        })}
      </svg>

      {/* Problem Labels */}
      {problems.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + p.id * 0.1 }}
          style={{ 
            position: 'absolute',
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            transform: 'translate(-50%, -50%)'
          }}
          className="bg-white p-3 rounded-xl shadow-lg border border-brand-navy/5 flex items-center space-x-2 whitespace-nowrap z-30"
        >
          <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
            <X className="w-3 h-3 text-red-500" />
          </div>
          <span className="text-xs font-bold text-brand-navy">{p.label}</span>
          
          {/* Success indicator that appears after "pulse" */}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: p.id * 0.5 + 1.8 }}
            className="absolute -right-2 -top-2 bg-emerald-500 rounded-full p-1 shadow-lg"
          >
            <CheckCircle2 className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default CentralizedSystemAnimation;
