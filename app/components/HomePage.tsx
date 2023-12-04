import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <Image
        className="w-full h-auto"
        src="/outerBanner.png"
        alt="main_bg"
        width="1400"
        height="0"
      ></Image>
      <Image
        className="absolute top-60 left-0 w-full h-auto"
        src="/innerBanner.png"
        alt="main_bg"
        width="1400"
        height="0"
      ></Image>
      <div
        className="absolute top-60 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center gap-3 mt-6"
        style={{ width: '400px' }}
      >
        <h2 className='text-2xl font-semibold'>Thinking of selling your home?</h2>
        <p className="text-center text-sm">
          Get an instant estimate of your home’s value. You can quickly
          determine the estimated value of your home by answering a few quick
          questions.
        </p>
        <input
          type="text"
          placeholder="enter your address"
          className=" border border-blue-500 text-xs px-4 py-1 rounded-lg h-7"
          style={{ width: '350px' }}
        />
        <button className=' bg-blue-700 px-4 py-2 text-white rounded-3xl text-sm'>Get Free Estimate</button>
      </div>
    </div>
  )
}
