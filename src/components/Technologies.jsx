import { DiGit, DiGithub } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiNestjs, SiDocker, SiKubernetes, SiAwslambda, SiApachekafka, SiNodedotjs } from "react-icons/si";
import { motion } from "framer-motion";
const iconVariants=(duration)=>({
initial:{
    y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }

})
const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl font-bold tracking-tight">Technologies
      </motion.h2>
      <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
        className="p-4 hover:scale-110 transition-transform duration-300">
          <SiTypescript className="text-7xl text-blue-600 hover:text-blue-700 drop-shadow-lg" />
        </motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)} className="p-4 hover:scale-110 transition-transform duration-300">
          <SiJavascript className="text-7xl text-yellow-400 hover:text-yellow-600 drop-shadow-lg" />
        </motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)} className="p-4 hover:scale-110 transition-transform duration-300">
          <SiNodedotjs className="text-7xl text-green-600 hover:text-green-700 drop-shadow-lg" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         className="p-4 hover:scale-110 transition-transform duration-300">
          <SiNestjs className="text-7xl text-red-600 hover:text-red-700 drop-shadow-lg" />
        </motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)} className="p-4 hover:scale-110 transition-transform duration-300">
          <RiReactjsLine className="text-7xl text-cyan-400 hover:text-cyan-500 drop-shadow-lg" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         className="p-4 hover:scale-110 transition-transform duration-300">
          <SiAwslambda className="text-7xl text-yellow-500 hover:text-yellow-600 drop-shadow-lg" />
        </motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)} className="p-4 hover:scale-110 transition-transform duration-300">
          <SiDocker className="text-7xl text-blue-500 hover:text-blue-600 drop-shadow-lg" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)} className="p-4 hover:scale-110 transition-transform duration-300">
          <SiKubernetes className="text-7xl text-blue-600 hover:text-blue-700 drop-shadow-lg" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         className="p-4 hover:scale-110 transition-transform duration-300">
          <SiApachekafka className="text-7xl text-red-500 hover:text-red-600 drop-shadow-lg" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         className="p-4 hover:scale-110 transition-transform duration-300">
          <SiPostgresql className="text-7xl text-blue-400 hover:text-blue-500 drop-shadow-lg" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         className="p-4 hover:scale-110 transition-transform duration-300">
          <DiGit className="text-7xl text-red-700 hover:text-red-900 drop-shadow-lg" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         className="p-4 hover:scale-110 transition-transform duration-300">
          <DiGithub className="text-7xl text-white-700 hover:text-green-900 drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;