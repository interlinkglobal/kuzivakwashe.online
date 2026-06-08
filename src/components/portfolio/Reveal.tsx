import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Variant = "fade" | "up" | "down" | "left" | "right" | "zoom" | "blur" | "rotate";

const initialStyle: Record<Variant, CSSProperties> = {
  fade:   { opacity: 0 },
  up:     { opacity: 0, transform: "translateY(40px)" },
  down:   { opacity: 0, transform: "translateY(-40px)" },
  left:   { opacity: 0, transform: "translateX(-60px)" },
  right:  { opacity: 0, transform: "translateX(60px)" },
  zoom:   { opacity: 0, transform: "scale(0.92)" },
  blur:   { opacity: 0, filter: "blur(14px)" },
  rotate: { opacity: 0, transform: "rotate(-4deg) translateY(30px)" },
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 800,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: CSSProperties = visible
    ? {
        opacity: 1,
        transform: "none",
        filter: "none",
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter ${duration}ms ease ${delay}ms`,
      }
    : {
        ...initialStyle[variant],
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter ${duration}ms ease ${delay}ms`,
      };

  const Component = Tag as any;
  return (
    <Component ref={ref as any} style={style} className={className}>
      {children}
    </Component>
  );
}