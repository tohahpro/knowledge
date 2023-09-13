import PropTypes from 'prop-types';


const Bookmark = ({ bookmark }) => {

    const { title } = bookmark
    return (
        <div className='bg-white m-4 p-6 rounded-lg '>
            <h3 className='text-xl font-semibold'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;