import faq from '../../assets/images/faq.jpg';
const Faq = () => {
    return (
        <div>
            <div className="bg-base-100 border-2 md:p-8 mt-[900px] my-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div>
                        <img className='h-full lg:w-[400px] rounded-lg' src={faq} />
                    </div>
                    <div>
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    Click to open this one and close others fdyhgf dfghf adfygfh dtth
                                </div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Click to open this one and close others
                                </div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Click to open this one and close others
                                </div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Click to open this one and close others
                                </div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Click to open this one and close others
                                </div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Click to open this one and close others
                                </div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;