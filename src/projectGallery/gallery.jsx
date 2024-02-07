"use client"
import styles from './gallery.module.css'
import Project from './project/project'
import Modal from './modal/modal'
import { projects } from './projects'
import { useState } from 'react'
export default function Gallery() {
  const [modal,setModal]=useState({active:false,index:0});
  return (
    <div className={styles.projectGallery}>
      <div className={styles.projectBody}>
        {
          projects.map((project,index)=>{
            return(
              <Project 
                key={index}
                project={project}
                index={index}
                setModal={setModal}
              />
            )
          })
        }
      </div>
      <Modal modal={modal} projects={projects}/>
    </div>
  )
}
