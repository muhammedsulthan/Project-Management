import React from 'react'
import noProjectImage from '../assets/no-projects.png'
import Button from './button'
export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="An Empty task list" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
      <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New project</Button> 
      </p>
    </div>
  )
}
