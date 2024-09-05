import React from "react";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { icons } from "./IconData";
import AppIcon from "./AppIcon";

const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  const [text, setText] = useState(null);
  console.log(text);

  const handleHover = (id) => {
    const icon = icons.find((icon) => icon.id === id);

    if (icon) {
      setText(icon.text);
      console.log(icon.text);
    }
  };

  return (
    <motion.div
      className="bg-tropical-indigo-500 flex h-16 items-end gap-3 rounded-full px-3 pb-2"
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
      }}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {icons.map((icon) => (
        <>
          <AppIcon
            icon={icon}
            mouseX={mouseX}
            key={icon.id}
            text={text}
            mouseHover={() => handleHover(icon.id)}
            mouseUnhover={() => setText(null)}
          />
        </>
      ))}
    </motion.div>
  );
};

export default Dock;
