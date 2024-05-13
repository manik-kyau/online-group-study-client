import faq from '../../assets/images/faq.jpg';
const Faq = () => {
    return (
        <div className='md:mt-20'>
            <div className='text-center'>
                <h2 className="text-3xl font-semibold sm:text-5xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-600 md:w-2/3 mx-auto">Frequently Asked Questions, are documents designed to provide answers to common inquiries about a specific topic, product, service, or organization. They serve to address recurring concerns, saving users time from having to reach out to support channels or search for answers elsewhere.</p>
            </div>
            <div className="bg-base-100 my-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <div>
                        <img className='h-full md:min-w-[390px] lg:min-w-[470px] rounded-lg' src={faq} />
                    </div>
                    <div>
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    Why are group studies important?
                                </div>
                                <div className="collapse-content">
                                    <p className='font-medium'>Being part of a study group learning team helps to avoid procrastination. Study groups can help you develop as a student, person, and professional. Study groups encourage members to think creatively and build strong communication skills which also help in refining understanding of the material.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Why group learning is better?
                                </div>
                                <div className="collapse-content">
                                    <p className='font-medium'>Group work gives students the opportunity to engage in process skills critical for processing information, and evaluating and solving problems, as well as management skills through the use of roles within groups, and assessment skills involved in assessing options to make decisions about their group's final answer.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    What are the objectives of study group?
                                </div>
                                <div className="collapse-content">
                                    <p className='font-medium'>Study groups can: • Expose you to different ways of thinking and learning. Allow for reinforcement of information—teaching others helps to develop and strengthen your own understanding. Provide a safe place to develop and discuss your ideas. Provide support and motivation for learning.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Why is self study better than group study?
                                </div>
                                <div className="collapse-content">
                                    <p className='font-medium'>Students can study in their preferred time. The sessions are not dependent on the timings of the group. They will also have the independence to follow their own plan. In a group, the subject to study will be dependent on the majority's decision.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    What is the effect of study group?
                                </div>
                                <div className="collapse-content">
                                    <p className='font-medium'>In fact, study groups can be a great way to supplement the material you're learning in your classes. Taking part in a study group can help you if you struggle with homework. They can help you connect with your classmates. Additionally, they're a source of motivation to create new study habits</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    How many people should be in a study group?
                                </div>
                                <div className="collapse-content">
                                    <p className='font-medium'>An effective study group ideally has 3-4 members (no more than 5 max). Your group should meet at least once a week and you should decide how long you want your sessions to be. All members should make a serious commitment to show up and to do the required preparation prior to any group meeting.</p>
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