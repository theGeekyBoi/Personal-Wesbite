
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollVelocityRef = useRef(0);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    let animationId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      };
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      scrollVelocityRef.current = Math.abs(currentScroll - lastScrollRef.current) * 0.1;
      lastScrollRef.current = currentScroll;
      
      // Decay scroll velocity
      setTimeout(() => {
        scrollVelocityRef.current *= 0.95;
      }, 100);
    };

    const animate = () => {
      if (containerRef.current) {
        const blobs = containerRef.current.querySelectorAll('.blob');
        const time = Date.now() * 0.001;
        const scrollBoost = 1 + scrollVelocityRef.current;
        
        blobs.forEach((blob, index) => {
          const element = blob as HTMLElement;
          const baseSpeed = 0.3 + index * 0.1;
          const speed = baseSpeed * scrollBoost;
          
          // Base movement
          const x = Math.sin(time * speed + index) * 20;
          const y = Math.cos(time * speed * 0.8 + index) * 15;
          
          // Mouse influence (subtle)
          const mouseInfluence = 0.05;
          const mouseX = (mouseRef.current.x - 50) * mouseInfluence;
          const mouseY = (mouseRef.current.y - 50) * mouseInfluence;
          
          // Morphing effect
          const scale = 1 + Math.sin(time * speed * 2 + index) * 0.1;
          const skew = Math.sin(time * speed * 1.5 + index) * 5;
          
          element.style.transform = `
            translate(${x + mouseX}px, ${y + mouseY}px) 
            scale(${scale}) 
            skew(${skew}deg)
          `;
        });
      }
      
      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ willChange: 'transform' }}
    >
      {/* Primary gradient blob */}
      <div
        className="blob absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          filter: 'blur(40px)',
          top: '10%',
          left: '15%',
          willChange: 'transform'
        }}
      />
      
      {/* Secondary gradient blob */}
      <div
        className="blob absolute w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #bc04d0 0%, hsl(var(--primary)) 40%, transparent 70%)',
          filter: 'blur(50px)',
          top: '60%',
          right: '20%',
          willChange: 'transform'
        }}
      />
      
      {/* Accent blob */}
      <div
        className="blob absolute w-64 h-64 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, #bc04d0 50%, transparent 70%)',
          filter: 'blur(35px)',
          top: '30%',
          right: '10%',
          willChange: 'transform'
        }}
      />
      
      {/* Large ambient blob */}
      <div
        className="blob absolute w-[600px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--primary)) 0%, #bc04d0 30%, hsl(var(--secondary)) 70%, transparent 100%)',
          filter: 'blur(80px)',
          bottom: '10%',
          left: '30%',
          willChange: 'transform'
        }}
      />
      
      {/* Metallic accent blob */}
      <div
        className="blob absolute w-72 h-72 rounded-full opacity-12"
        style={{
          background: 'conic-gradient(from 0deg, #bc04d0, hsl(var(--primary)), #bc04d0, hsl(var(--muted)))',
          filter: 'blur(45px)',
          top: '80%',
          left: '10%',
          willChange: 'transform'
        }}
      />
      
      {/* Subtle overlay gradient for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 100%)'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
