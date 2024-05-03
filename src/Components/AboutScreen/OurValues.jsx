const OurValues = () => {
  return (
    <div className="py-20">
      <section  className=" max-w-4xl mx-auto px-3">
        <div>
          <h1 className='text-4xl mb-14 leading-snug font-semibold text-transparent bg-gradient-to-r from-green-500 to-black bg-clip-text text-center'>Our Values</h1>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 md:flex-row md:justify-center">
              <h3 className="md:w-1/2 text-xl font-semibold mb-2">Inclusivity</h3>
              <p className="md:w-1/2 text-sm">
                At Talent Hub, we embrace diversity in all its forms. We believe in creating 
                an inclusive environment where every individual feels valued,
                respected, and empowered to bring their authentic selves to work. 
              </p>
            </div>

            <hr className=" border-green-800"/>

            <div className="flex flex-col gap-4 md:flex-row md:justify-center">
              <h3 className="md:w-1/2 text-xl font-semibold mb-2">Transparency</h3>
              <p className="md:w-1/2 text-sm">
                Transparency is at the core of everything we do. We believe in open communication, honesty, 
                and integrity in all our interactions. Whether it's with our users, partners, or team members, we strive to build trust through transparent processes and clear communication, 
                ensuring that everyone feels informed and empowered to make the best decisions.
              </p>
            </div>

            <hr className=" border-green-800" />

            <div className="flex flex-col gap-4 md:flex-row md:justify-center">
              <h3 className="md:w-1/2 text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="md:w-1/2 text-sm">
                At Talent Hub, we're committed to fostering a culture of continuous learning and 
                growth. We believe that learning is a lifelong journey, and we encourage our team members and 
                users alike to embrace new challenges, explore new ideas, and expand their horizons. 
              </p>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default OurValues