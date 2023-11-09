import { useEffect, useRef } from "react";

const Cursor = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const maxPoints = 20;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const drawLine = (points) => {
      if (points.length < 2) return;

      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(238, 130, 238, 1)';

      ctx.strokeStyle = "pink";
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }

      ctx.stroke();
    };

    const handleMouseMove = (e) => {
      pointsRef.current.push({ x: e.clientX, y: e.clientY });

      while (pointsRef.current.length > maxPoints) {
        pointsRef.current.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawLine(pointsRef.current);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default Cursor;
