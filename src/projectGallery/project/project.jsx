import styles from './project.module.css'
export default function Project({project,index,setModal}) {
  return (
    <a 
      href={`${project.link}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.project} 
      onMouseEnter={()=>{setModal({active:true,index:index})}}
      onMouseLeave={()=>{setModal({active:false,index:index})}}
    >
      <h2>{project.name}</h2>
      <div className={styles.projectDescription}>
        <p>{project.type}</p>
        <p>{project.tech}</p>
      </div>
    </a>
  )
}
