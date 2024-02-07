import { useEffect, useRef } from 'react'
import styles from './modal.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const scaleAnimation = {
  initial: {scale: 0, x:"-50%", y:"-50%"},
  open: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
  closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}
export default function Modal({modal,projects}) {

  const container=useRef(null)
  const cursor=useRef(null)
  const cursorLabel=useRef(null)
  const {active,index} = modal;
  useEffect(()=>{
    const moveContainerX=gsap.quickTo(container.current,"left",{duration:0.8,ease:"power3"})
    const moveContainerY=gsap.quickTo(container.current,"top",{duration:0.8,ease:"power3"})
    const cursorX=gsap.quickTo(cursor.current,"left",{duration:0.5,ease:"power3"})
    const cursorY=gsap.quickTo(cursor.current,"top",{duration:0.5,ease:"power3"})
    const cursorLabelX=gsap.quickTo(cursorLabel.current,"left",{duration:0.425,ease:"power3"})
    const cursorLabelY=gsap.quickTo(cursorLabel.current,"top",{duration:0.425,ease:"power3"})
    window.addEventListener('mousemove',(e) => {
      moveContainerX(e.pageX)
      moveContainerY(e.pageY)
      cursorX(e.pageX)
      cursorY(e.pageY)
      cursorLabelX(e.pageX)
      cursorLabelY(e.pageY)
    })
  },[])

  return (
    <>
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial={"initial"}
      animate={active?"open":"closed"} 
      className={styles.modalContainer}
    >
    <div style={{top:index*-100+"%"}} className={styles.modalSlider}>
      {
        projects.map((project,index)=>{
          const {src,color}=project
          return(
            <div key={`modal_${index}`} className={styles.modal} style={{backgroundColor:color}}>
              <Image
                src={`/static/images/${src}`}
                width={300}
                height={0}
                alt='Project Images'
              />
            </div>
          )
        })
      }
    </div>
    </motion.div>
    <motion.div
      ref={cursor}
      variants={scaleAnimation}
      initial={"initial"}
      animate={active?"open":"closed"}
      className={styles.cursor} 
    ></motion.div>
    <motion.div
      ref={cursorLabel}
      variants={scaleAnimation}
      initial={"initial"}
      animate={active?"open":"closed"} 
      className={styles.cursorLabel} 
    >
      View
    </motion.div>
    </>
  )
}
