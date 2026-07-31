import React from 'react';
import { motion } from 'framer-motion';

// simplified ASCII hand pattern
const handAscii = `
       _..._
     .'     '.      _
    /    .-""-\\   _/ \\
  .-|   /:.   |  |   |
  |  \\  |:.   /.-'-./
  | .-'-;:__.'    =/
  .'=  *=|     _.='
 /   _.  |    ;
;-.-'|    \\   |
/   | \\    _\\  _\\
\\__/'._;.  ==' ==\\
         \\    \\   |
         /    /   /
         \\-..-\\  /
          \\____\\/
`;

const AsciiHands = () => {
  return (
    <div className="ascii-hands">
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <pre className="ascii-hand">{handAscii}</pre>
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ transform: 'scaleX(-1)' }}
      >
        <pre className="ascii-hand">{handAscii}</pre>
      </motion.div>
    </div>
  );
};

export default AsciiHands;
