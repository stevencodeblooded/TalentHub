import { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

const AnimatedNumber = ({ start, end }) => {
    const countRef = useRef(null);

    useEffect(() => {
        const options = {
            start: start,
            end: end,
            duration: 5, // Animation duration in seconds
        };

        const countUp = new CountUp(countRef.current, end, options);
        if (!countUp.error) {
            countUp.start();
        } else {
            console.error(countUp.error);
        }

        return () => {
            countUp.reset(); // Reset countUp instance when component unmounts
        };
    }, [start, end]);

    return <span ref={countRef}></span>;
};

const Rates = () => {
    return (
        <div className="pt-24 pb-32 ">
            <section className=" max-w-6xl mx-auto px-3">
                <div className="flex flex-col gap-10 md:flex-row justify-between ">
                    <div>
                        <h1 className="text-4xl text-green-800 lg:text-6xl font-bold text-center mb-2">
                            <AnimatedNumber start={0} end={2024} />
                        </h1>
                        <p className="text-center">Company founded</p>
                    </div>

                    <div className="border border-green-400 mx-6"></div>

                    <div>
                        <h1 className="text-4xl text-green-800 lg:text-6xl  font-bold text-center mb-2">
                            <AnimatedNumber start={0} end={20} />
                        </h1>
                        <p className="text-center">Passionate people</p>
                    </div>

                    <div className="border border-green-400 mx-6"></div>

                    <div>
                        <h1 className="text-4xl text-green-800 lg:text-6xl  font-bold text-center mb-2">
                            <AnimatedNumber start={0} end={5000000} />
                        </h1>
                        <p className="text-center">Monthly active users</p>
                    </div>

                    <div className="border border-green-400 mx-6"></div>

                    <div>
                        <h1 className="text-4xl text-green-800 lg:text-6xl  font-bold text-center mb-2">
                            <AnimatedNumber start={0} end={15} />
                        </h1>
                        <p className="text-center">Created projects</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rates;
