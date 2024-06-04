import React from 'react'
import Button from './button'

export default function ProjectSidebar({onStartAddProject,projects,onSelectProject,selectedProjetId}) {
  return (
 <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
    <h2>Your Projects</h2>
    <div>
      <Button onClick={onStartAddProject}>
        + Add Project
      </Button>
    </div>
    <ul className="mt-8">
      {projects.map((project) =>{

        let cssClasess="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
         if(project.id === selectedProjetId){
          cssClasess +=' text-stone-200 bg-stone-800'
         }
         else{
          cssClasess +=' text-stone-400'
         }

        return (
        <li key={project.id}>  
        <button className={cssClasess} onClick={ () =>onSelectProject (project.id)} >
        {project.title}</button>
       </li>
        )

      })}
    </ul>
 </aside>
  )
}
 