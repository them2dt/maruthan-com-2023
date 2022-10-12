import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import "./skills.css";
import "./skills-mobile.css";

export default function Skills({ dragEnabled }) {
  const dragRef = useRef(null);

  return (
    <div className="skillset-content-carousel-wrapper">
      <div className="skillset-content-carousel" ref={dragRef}>
        <motion.button drag={dragEnabled} className="skill">
          JavaScript
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          TypeScript
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          Dart
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          HTML5
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          CSS3
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          PHP
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          React.js
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          Flutter
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          Firebase
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          MySQL
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          SQLite
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Python
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          TKinter
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          PyGame
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Github
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Heroku
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Vercel
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          openweathermap
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Material UI
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Font Awesome
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Framer Motion
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Bootstrap
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          ScrollMagic
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Swiper.js
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Node.js
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          Adobe Illustrator
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Adobe Fresco
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          Adobe XD
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Adobe Express
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          Figma
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Microsoft Word
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Microsoft Excel
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Microsoft PowerPoint
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          Anchor
        </motion.button>
        <motion.button drag={dragEnabled} className="skill">
          Solana CLI
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Solidity
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Wordpress
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Shopify
        </motion.button>
        <motion.button drag={dragEnabled} className="skill secondary">
          Java
        </motion.button>
      </div>
    </div>
  );
}
