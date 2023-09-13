import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-4/12 md:ml-10">


            {/* Book reading time  */}
            <div className='bg-slate-300 p-4 rounded-xl my-8'>
                <h1 className='font-bold text-xl text-violet-700'>Reading Time : {readingTime}</h1>
            </div>


            {/* Book mark  */}
            <div className="bg-slate-300 mt-8 pb-8 rounded-xl">
                <h1 className="text-2xl font-bold text-center pt-4">Book marks :{bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;