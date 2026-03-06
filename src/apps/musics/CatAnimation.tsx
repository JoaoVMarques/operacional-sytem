import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Frames by: gemini
const frame1 = `
.* * .  . *.* * .  . *
-=--=--=--= ,-------,    
=--=--=--=-~|    /\\_/\\  
--=--=--=--~|___( ^ .^)
-=--=--=--=  ""  ""    
. * . *.   *. * . *.   *`;

const frame2 = `
  * .  . *.* * .  . *.*
=--=--=--=- ,-------,    
--=--=--=--~|    /\\_/\\  
-=--=--=--=~|___( ^ .^)
=--=--=--=-   ""  ""  
 * . *.   *. * . *.   *.`;

const frame3 = `
* .  . *.* * .  . *.* 
--=--=--=-- ,-------,    
-=--=--=--=~|    /\\_/\\  
=--=--=--=-~|___( ^ .^)
--=--=--=--  ""  ""  
. *.   *. * . *.   *. * `;

const frame4 = `
 .  . *.* * .  . *.* *
-=--=--=--= ,-------,    
=--=--=--=-~|    /\\_/\\  
--=--=--=--~|___( ^ .^)
-=--=--=--=   ""  ""    
*.   *. * . *.   *. * . `;

const frame5 = `
  . *.* * .  . *.* * .
=--=--=--=- ,-------,    
--=--=--=--~|    /\\_/\\  
-=--=--=--=~|___( ^ .^)
=--=--=--=-  ""  ""    
   *. * . *.   *. * . *.`;

const frame6 = `
. *.* * .  . *.* * .  
--=--=--=-- ,-------,    
-=--=--=--=~|    /\\_/\\  
=--=--=--=-~|___( ^ .^)
--=--=--=--   ""  ""    
 *. * . *.   *. * . *.  `;

function CatAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const nyanCatFrames = [frame1, frame2, frame3, frame4, frame5, frame6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev === 5 ? 0 : prev + 1));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={ { opacity: 0 } }
      animate={ { opacity: [0, 0, 1] } }
      transition={ { duration: 4 } }
    >
      <pre className="text-xs font-bold leading-tight text-white select-none font-mono">
        { nyanCatFrames[currentFrame] }
      </pre>
    </motion.div>
  );
}

export default CatAnimation;