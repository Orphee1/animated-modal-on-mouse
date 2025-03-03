'use client'

function Project({
  index,
  title,
  setModal,
}: {
  index: number
  title: string
  setModal: ({ active, index }: { active: boolean; index: number }) => void
}) {
  return (
    <div
      className='flex w-full justify-between items-center pt-[50px] pl-[100px] pr-[100px] pb-[50px]  border-t-[1px] border-t-[rgb(201, 201, 201)] cursor-pointer transition-[transform,opacity] duration-200  last-of-type:border-b-[1px] last-of-type:border-b-[rgb(201, 201, 201)] hover:opacity-50 hover:[&_h2]:translate-x-[-10px] hover:[&_p]:translate-x-[10px]'
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
    >
      <h2 className='text-6xl m-0 font-normal transition-all duration-400 ease-out '>
        {title}
      </h2>
      <p className='font-light transition-all duration-400 ease-out '>
        Design & Development
      </p>
    </div>
  )
}

export default Project
