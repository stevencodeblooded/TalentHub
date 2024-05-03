import notFoundImage from '../assets/notFound.png' 

const NotFoundPage = () => {
  return (
    <div className='py-20'> 
      <section className=" max-w-6xl mx-auto px-3">
        <div className='flex flex-col gap-5 md:flex-row items-center'>
          <div className='text-center lg:text-start md:w-1/2'>
            <h2 className='text-4xl mb-10 leading-snug font-semibold text-transparent bg-gradient-to-r from-black to-green-500 bg-clip-text'>Oops! Something went wrong.</h2>
            <p>We apologize for the inconvenience. Our team has been notified of the issue and is working diligently to resolve it. In the meantime, please try again later or contact support for assistance.</p>
          </div>
          <div className='md:w-1/2'>
            <img src={notFoundImage} alt="not found" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage