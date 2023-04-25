import { useTrail, a } from "@react-spring/web";
import { Children } from "react";

export const Trail3 = ({ open, children, delay }) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { duration: 100 },
    opacity: open ? 1 : 0.5,
    display: "block",
    x: open ? 0 : -15,
    delay: delay,
    from: { opacity: 0, x: -15, display: "none" },
  });
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <a.div
          key={index}
          className="overflow-hidden w-full will-change-transform"
          style={style}
        >
          {items[index]}
        </a.div>
      ))}
    </>
  );
};
