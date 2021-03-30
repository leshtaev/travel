import './Blog.scss';
import imgBlogSPb from '../../images/blog_spb.jpg';
import imgBlogParis from '../../images/blog_paris.jpg';
import imgBlogLondon from '../../images/blog_london.jpg';

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
                            <img src={imgBlogSPb} alt=""/>
                            <div className="title">Beautiful winter Saint-Petersburg, cheap hotels</div>
                            <div className='block_line'></div> 
                            <div className='text'>This trip was just an amazing expirience. I want to share it with all world</div>
                        </a>
                    </div>
                    <div className="blog-post flex-container">
                        <a href="http://google.com" target="_blank">
                            <img src={imgBlogParis} alt=""/>
                            <div className="title">Beautiful winter Saint-Petersburg, cheap hotels</div>
                            <div className='block_line'></div> 
                            <div className='text'>This trip was just an amazing expirience. I want to share it with all world</div>
                        </a>
                    </div>
                    <div className="blog-post flex-container">
                        <a href="http://google.com" target="_blank">
                            <img src={imgBlogLondon} alt=""/>
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