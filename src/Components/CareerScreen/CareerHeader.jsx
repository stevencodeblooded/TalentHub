import { Link } from "react-router-dom"

const CareerHeader = () => {
  return (
    <div className="my-14 px-3 ">
      <section className=" max-w-5xl mx-auto rounded-full">
        <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto text-center">
          <h2 data-aos="zoom-in" data-aos-duration="1500"  className='text-4xl leading-snug font-semibold text-transparent bg-gradient-to-r from-black to-green-500 bg-clip-text mb-6'>Play a Role in Our Vision</h2>
          <p className="text-sm lg:text-base">
            Explore exciting opportunities to contribute your unique talents and skills to our vision of transforming the way careers
            are shaped and opportunities are discovered.
          </p>
          <a href='#openings' className="mt-9 bg-green-500 hover:bg-green-600 transition-all py-3 px-9 rounded-3xl text-sm font-semibold text-white">View openings</a>
        </div>
      </section>
    </div>
  )
}

export default CareerHeader