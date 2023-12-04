import Image from 'next/image'

const comments = [
  {
    item: '1',
    name: 'John Brown',
    comment:
      'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
  },
  {
    item: '2',
    name: 'John Brown',
    comment:
      'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
  },
  {
    item: '3',
    name: 'John Brown',
    comment:
      'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
  },
  {
     item: '4',
     name: 'John Brown',
     comment:
       'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
   },
   
]

export default function Comments() {
  return (
    <div className="bg-slate-300 py-14">
      <div className="flex justify-center items-center gap-1 flex-col font-bold">
        <h1 className="text-lg">The Canadian Home</h1>
        <p className="text-xs">
          What customers say about the The Canadian Home experience
        </p>
      </div>

      <div className=" w-full py-12 px-6 flex justify-start items-center gap-14 overflow-x-scroll ">
        {comments.map(({ item, name, comment }) => (
          <div
            className="relative flex flex-col justify-center items-center gap-2 h-48 p-4 bg-white rounded-3xl border border-blue-300"
            style={{ minWidth: '420px'}}
            key={item}
          >
            <div
              className="absolute flex "
              style={{ top: '-12px', left: '10px' }}
            >
              <Image src="/path.png" alt="" width="13" height="10"></Image>
              <Image src="/path.png" alt="" width="13" height="10"></Image>
            </div>
            <p className="text-sm text-center">
              {comment}{' '}
            </p>
            <h1 className="text-base font-bold">{name}{item}</h1>
            <div
              className="absolute flex "
              style={{ bottom: '-12px', right: '11px' }}
            >
              <Image
                className="transform rotate-180"
                src="/path.png"
                alt=""
                width="13"
                height="10"
              ></Image>
              <Image
                className="transform rotate-180"
                src="/path.png"
                alt=""
                width="13"
                height="10"
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
