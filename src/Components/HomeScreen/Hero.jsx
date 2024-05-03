import talentHub from '../../assets/talentHubHero.png'

const Hero = () => {
  return (
    <div>
      <section className=" max-w-6xl mx-auto px-3">
        <div className='flex flex-col gap-12 md:flex-row items-center my-14'>
          <div className='w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <h2 className='text-transparent bg-gradient-to-r from-black to-green-500 bg-clip-text text-4xl lg:text-5xl leading-snug lg:leading-snug font-semibold'>Welcome where Careers Flourish and Opportunities Abound!</h2>
            <p className="text-sm lg:text-base">
              Talent Hub: Your Gateway to Career Success. Connect with Top Recruiters, 
              Find Your Dream Job, and Unleash Your Potential. Join Today!
            </p>
          </div>
          <div className='w-full md:w-1/2 flex justify-center' data-aos='zoom-up' data-aos-duration='1500'>
            <img src={talentHub} alt="talent hub" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero