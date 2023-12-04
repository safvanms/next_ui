import Image from 'next/image'

export default function Features() {
  return (
    <div className="bg-slate-300 w-full h-44 mt-3">
      <p className='text-center font-bold pt-7'>Featured on</p>
      <div className='pr-5 pl-5 pt-3 flex justify-center items-center gap-16 '>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <Image src="/image1.png" alt="featured" width="100" height="50"></Image>
        <Image src="/image2.png" alt="featured" width="100" height="50"></Image>
        <Image src="/image3.png" alt="featured" width="100" height="50"></Image>
        <Image src="/image4.png" alt="featured" width="100" height="50"></Image>
        <Image src="/image5.png" alt="featured" width="100" height="50"></Image>
        <Image src="/image6.png" alt="featured" width="100" height="50"></Image>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  )
}
