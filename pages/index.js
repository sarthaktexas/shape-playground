import shuffle from "../lib/shuffle"
import { motion, transform } from "framer-motion"
import { useRef } from "react";
import random from "../lib/random"

export default function Home() {
  let shapes = [...Array(29)];
  shapes = shapes.map((item, i) => item = {
    src: `shape-${i + 1}.svg`,
  })
  shapes = shuffle(shapes.concat([...shapes], [...shapes], [...shapes], [...shapes], [...shapes], [...shapes])).splice(0, 50).map((item, i) => item = {...item,
    rotate: random(0, 180),
    scale: random(0.3, 2),
    x: random(-1000, 1000),
    y: random(-1000, 1000)
  })
  console.log(shapes)
  const containerRef = useRef(null)
  return (
    <>
      <motion.div className="absolute z-0 top-0 left-0 h-screen w-screen flex flex-wrap gap-x-5" ref={containerRef}>
      <h1 className="w-fitcontent text-7xl p-5 pr-10 pb-0">Sarthak Mohanty</h1>
          {shapes.map((shape, index) => (
            <motion.div drag dragConstraints={containerRef} key={index}>
              <img className="pointer-events-none"
              style={{
                transform: `
                rotate("${shape.rotate}deg")
                translate(${shape.x}, ${shape.y})`,
                margin: "0 0 -10em 0"
              }}
              src={`/shapes/${shape.src}`} />
            </motion.div>
          ))}
      </motion.div>
    </>
  )
}
