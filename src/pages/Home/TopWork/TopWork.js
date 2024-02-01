import React from 'react';
import "./TopWork.css"

const TopWork = () => {
    return (
        <div>
            <section className="create">
            <div className="container-lg">
                <div className="row">
                    <div className="section_text section_text_black">
                        <div className="section_text-box">
                            <h2 className="heading white">Dreamy Textures for Visual Tales.</h2>
                            <p className="opaque-grey">Wadding photography encapsulates fleeting moments, preserving emotions and stories in vivid imagery, each frame a timeless narrative frozen in time.</p>
                            <a href="index.html" className="invite-link invite-link-white">Get an invite</a>
                        </div>
                    </div>
                    <div className="section_image section-create-img"></div>
                </div>
            </div>
        </section>
        <section className="stories">
            <div className="container-lg">
                <div className="row">
                    <div className="section_image section-stories-img"></div>
                    <div className="section_text section_text_white">
                        <div className="section_text-box">
                            <h2 className="heading black">Glimpses of Unforgettable Events.</h2>
                            <p className="opaque-black">Event photography thrives on capturing candid moments, celebrating milestones, and preserving memories. Each frame tells a story, immortalizing emotions and connections shared during special occasions.</p>
                            <a href="index.html" className="invite-link invite-link-black">View the Events</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="everyone">
            <div className="container-lg">
                <div className="row">
                    <div className="section_text section_text_white">
                        <div className="section_text-box">
                            <h2 className="heading black">Earth's Beauty: Photo Exploration.</h2>
                            <p className="opaque-black">Natural photography reveals the earth's breathtaking landscapes, from majestic mountains to serene forests. It captures the essence of wildlife, showcasing the delicate balance and raw beauty of the natural world.</p>
                            <a href="index.html" className="invite-link invite-link-black">View img</a>
                        </div>
                    </div>
                    <div className="section_image section-everyone-img"></div>
                </div>
            </div>
        </section> */}
        </div>
    );
};

export default TopWork;