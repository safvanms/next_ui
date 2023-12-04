import Image from 'next/image'

const serviceItems = [
  {
    item: '1',
    src: '/ser_1.png',
    heading: 'Visibility',
    content:
      'Your house will appear as a ‘featured listing’ on the home page, ensuring your house gets the maximum visibility ',
  },
  {
    item: '2',
    src: '/ser_2.png',
    heading: 'Real Local Agents',
    content:
      'You are backed by a team of Real estate agents who know the market in and out. With their market insights, experience and sound data, your home will sell in no time.',
  },
  {
    item: '3',
    src: '/ser_3.png',
    heading: 'Email & Notification',
    content:
      'Users get instant notifications about new listings, price hikes, price drops, and neighborhood alerts. We get your property shown to people who are actively looking and eager to buy. ',
  },
  {
    item: '4',
    src: '/ser_4.png',
    heading: 'Professional photos',
    content:
      'With professional staging and photos, we make your house reach the best of its abilities and show it off because looks are what sell. ',
  },
]

export default function Services() {
  return (
    <div className="bg-white w-full py-11 flex justify-center items-center gap-2">
      {serviceItems.map(({ item, src, heading, content }) => (
        <div className="flex flex-col items-center gap-3 w-96 p-4" key={item}>
          <Image
            src={src}
            alt=""
            width="150"
            height="150"
            style={{ minHeight: '150px', minWidth: '150px' }}
          ></Image>
          <h1 className="text-base font-extrabold">{heading}</h1>
          <p className="text-sm text-center">{content}</p>
        </div>
      ))}
    </div>
  )
}
