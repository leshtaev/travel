import './Blog.scss';


function Blog() {
    return (
        <section className="blog">
            <div className="container flex-container">
                <div className="heading flex-container">
                    <h1 className="title">
                        <span>Blog</span>
                    </h1>
                    <div className='block'></div> 
                </div>
                <div className="blog-container flex-container">
                    <div className="blog-post flex-container">
                        <a href="http://google.com" target="_blank">
                            <img src="../../images/blog_spb.jpg" alt=""/>
                            <div className="title">Beautiful winter Saint-Petersburg, cheap hotels</div>
                            <div className='block_line'></div> 
                            <div className='text'>This trip was just an amazing expirience. I want to share it with all world</div>
                        </a>
                    </div>
                    <div className="blog-post flex-container">
                        <a href="http://google.com" target="_blank">
                            <img src="../../images/blog_paris.jpg" alt=""/>
                            <div className="title">Beautiful winter Saint-Petersburg, cheap hotels</div>
                            <div className='block_line'></div> 
                            <div className='text'>This trip was just an amazing expirience. I want to share it with all world</div>
                        </a>
                    </div>
                    <div className="blog-post flex-container">
                        <a href="http://google.com" target="_blank">
                            <img src="../../images/blog_london.jpg" alt=""/>
                            <div className="title">Beautiful winter Saint-Petersburg, cheap hotels</div>
                            <div className='block_line'></div> 
                            <div className='text'>This trip was just an amazing expirience. I want to share it with all world</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog