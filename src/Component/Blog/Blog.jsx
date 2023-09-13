import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { cover, author_img, title, author, posted_date, reading_time, id, hashtags } = blog


    return (
        <div>
            <img className='w-full' src={cover} alt="" />

            <div className='my-4 space-y-4'>
                <div className='flex justify-between my-4'>
                    <div className='flex'>
                        <span><img className='w-14' src={author_img} alt="" /></span>
                        <div className='ml-4'>
                            <h4>{author}</h4>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span >{reading_time} min read</span>

                        <button onClick={() => handleAddToBookmark(blog)}> <FaRegBookmark></FaRegBookmark></button>

                    </div>

                </div>

                <h1 className='font-bold text-4xl my-4'>{title}</h1>
                {
                    hashtags.map((hashtag, idx) => <span className='mr-4 ' key={idx}><a href="">#{hashtag}</a></span>)
                }

                <button
                    onClick={() => handleMarkAsRead(reading_time, id)}
                    className='text-blue-500 font-semibold underline'>Mark as read</button>
            </div>


        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}

export default Blog;