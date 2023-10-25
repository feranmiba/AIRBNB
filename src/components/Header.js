import React from 'react'
import Menu from './Menu'
import { Box } from '@mui/material'
import Lists from './List'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function Header() {
  return (
    <Box>
    <motion.div  className="container"
    variants={container}
    initial="hidden"
    animate="visible">
    <motion.div  className="item" variants={item}  style={{ display: 'flex', gap: '56px', padding: '12px 20px', backgroundColor: 'white', borderRadius: '3mm'}}>
      <Menu />
      <Lists />
      </motion.div>
      </motion.div>
    </Box>
  )
}

export default Header;