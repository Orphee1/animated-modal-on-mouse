'use client'
import { useState } from 'react'
import Project from '@/components/Project'
import Modal from '@/components/Modal'
import { ProjectType } from '@/utils/types'

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const projects: ProjectType[] = [
    {
      title: 'C2 Montreal',
      src: 'c2montreal.png',
      color: '#000000',
    },
    {
      title: 'Office Studio',
      src: 'officestudio.png',
      color: '#8C8C8C',
    },
    {
      title: 'Locomotive',
      src: 'locomotive.png',
      color: '#EFE8D3',
    },
    {
      title: 'Silencio',
      src: 'silencio.png',
      color: '#706D63',
    },
  ]

  return (
    <main className='flex h-[100vh] items-center justify-center'>
      <div className='w-[1000px]  flex flex-col items-center justify-center '>
        {projects.map((project, i) => (
          <Project
            key={project.title}
            index={i}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  )
}
