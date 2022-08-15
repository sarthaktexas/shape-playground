import shuffle from "../lib/shuffle"
import { motion } from "framer-motion"
import { useRef } from "react";
import random from "../lib/random"

export default function Home() {
  let shapes = [...Array(29)];
  shapes = shapes.map((item, i) => item = {
    src: `shape-${i + 1}.svg`,
    rotate: random(0, 180),
    scale: random(0.3, 2),
    x: `${random(0, 100)}%`,
    y: `${random(0, 100)}%`
  })
  let shapes_plural = shapes.concat([...shapes], [...shapes], [...shapes], [...shapes], [...shapes], [...shapes]);
  shuffle(shapes_plural);
  const containerRef = useRef(null)
  return (
    <>
      <motion.div className="absolute z-0 top-0 left-0 h-screen w-screen flex flex-wrap gap-x-5" ref={containerRef}>
      <h1 className="w-fitcontent text-7xl p-5 pr-10 pb-0">Sarthak Mohanty</h1>
          {shapes_plural.map((shape, index) => (
            <motion.div drag dragConstraints={containerRef} key={index}>
              <img className="pointer-events-none"
              style={{
                transform: `rotate("${shape.rotate}deg")`,
                margin: "0 0 -10em 0"
              }}
              src={`/shapes/${shape.src}`} />
            </motion.div>
          ))}
      </motion.div>
    </>
  )
}
