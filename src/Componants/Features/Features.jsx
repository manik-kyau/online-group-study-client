import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";

const Features = () => {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('https://online-group-study-server-lilac.vercel.app/features')
            .then(res => res.json())
            .then(data => {
                setFeatures(data)
            })
    }, []);

    return (
        <div className="mt-12 md:mt-16 lg:mt-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold sm:text-5xl">Our Features</h2>
                <p className="mt-4 mb-8 dark:text-gray-600 md:w-2/3 mx-auto">Being part of a group engages you with the course material in a deeper way and allows you to set up mini deadlines and build accountability into your week. Study groups are a place where you can ask questions, practice participation, and get to know your classmates in a smaller setting.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    features.map((feature,idx)=><FeatureCard 
                    key={idx}
                    feature={feature}
                    ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Features;