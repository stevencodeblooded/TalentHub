import { faDice, faGift, faUnlock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WhoWeAre = () => {
  return (
    <div className="bg-gray-100 py-28">
        <section className=" max-w-6xl mx-auto px-6">
            <div className="bg-white p-7 md:p-14 rounded-3xl">
                <h2 className='text-4xl mb-12 leading-snug font-semibold text-transparent bg-gradient-to-r from-green-500 to-black bg-clip-text'>Who We Are</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                    <div>
                      <FontAwesomeIcon icon={faUnlock} className="text-2xl mb-4 border p-3 rounded-full bg-green-500 text-white" />
                      <h2 className="text-xl font-semibold mb-2">Unlock Your Potential</h2>
                      <p className="text-sm">
                        At Talent Hub, we believe in empowering individuals to reach their full potential. 
                        Whether you're a seasoned professional or just starting your career journey, our platform 
                        provides the tools, resources, and opportunities you need to thrive. 
                        Discover new paths, develop your skills, and unlock endless possibilities with Talent Hub.
                      </p>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faDice} className="text-2xl mb-4 border p-3 rounded-full bg-green-500 text-white" />
                      <h2 className="text-xl font-semibold mb-2">Bridging Talent and Opportunity</h2>
                      <p className="text-sm">
                        Talent Hub serves as the ultimate bridge between talented individuals and exciting 
                        career opportunities. Our platform connects top-tier talent with leading companies and 
                        recruiters, facilitating meaningful connections that drive success for both parties. 
                      </p>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faGift} className="text-2xl mb-4 border p-3 rounded-full bg-green-500 text-white" />
                      <h2 className="text-xl font-semibold mb-2">Revolutionizing Talent Acquisition</h2>
                      <p className="text-sm">
                        At Talent Hub, we're revolutionizing the way talent is discovered, recruited, 
                        and cultivated. Through the power of cutting-edge AI technology and innovative 
                        features, we're streamlining the recruitment process, eliminating biases, and creating 
                        a more efficient and inclusive hiring ecosystem.
                      </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default WhoWeAre