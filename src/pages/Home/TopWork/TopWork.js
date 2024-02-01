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
                            <h2 className="heading white">Create and share your photo stories.</h2>
                            <p className="opaque-grey">Photosnap is a platform for photographers and visual storytellers. We
                                make it
                                easy to share
                                photos, tell stories and connect with others.</p>
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
                            <h2 className="heading black">Beautiful stories everytime</h2>
                            <p className="opaque-black">We provide design templates to ensure your stories look terrific.
                                Easily
                                add
                                photos, text, embed
                                maps and media from other networks. Then share your story with everyone.</p>
                            <a href="index.html" className="invite-link invite-link-black">View the stories</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default TopWork;