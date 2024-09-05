import React from "react";
import { useRef } from "react";
import {
  motion,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const AppIcon = ({ icon, mouseX, mouseHover, mouseUnhover, text }) => {
  const iconRef = useRef();
  const iconDistance = useTransform(mouseX, (value) => {
    const iconBounds = iconRef.current?.getBoundingClientRect() ?? {
      width: 0,
      left: 0,
    }; // else useSpring returns NaN
    return value - iconBounds?.left - iconBounds?.width / 2;
  });

  const width = useTransform(iconDistance, [-200, 0, 200], [48, 80, 48]);
  const springWidth = useSpring(width, { stiffness: 720, damping: 35 });

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <AnimatePresence>
        {icon.text === text && (
          <motion.div
            className="text-tropical-indigo-700 bg-tropical-indigo-200 rounded-md px-2 py-1 font-semibold"
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{ opacity: 1, y: -5 }}
            transition={{ duration: 0.16 }}
            exit={{
              opacity: 0,
              y: 0,
              transition: {
                duration: 0.07,
              },
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        onMouseEnter={mouseHover}
        className="bg-tropical-indigo-200 flex aspect-square w-12 items-center justify-center rounded-full"
        ref={iconRef}
        style={{ width: springWidth }}
        onMouseLeave={mouseUnhover}
      >
        {icon.icon}
      </motion.div>
    </div>
  );
};

export default AppIcon;
