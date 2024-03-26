import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { likePost } from '../js/Blogs';

export default function Card({ blog }) {
  const [likes, setLikes] = useState(() => {
    const likesData = localStorage.getItem(`likes_${blog.id}`);
    return likesData ? JSON.parse(likesData).likes : 0;
  });

  useEffect(() => {
    const likesData = localStorage.getItem(`likes_${blog.id}`);
    if (likesData) {
      const parsedLikes = JSON.parse(likesData);
      setLikes(parsedLikes.likes);
    }
  }, [blog.id]); 

  const handleLikeClick = () => {
    const updatedLikes = likePost(blog.id);
    setLikes(updatedLikes); 
    localStorage.setItem(`likes_${blog.id}`, JSON.stringify({ likes: updatedLikes }));
  };

  const handleClick = () => {
    window.location.href = `/comment/${blog.id}`;
  };
  

  return (
    <div className="rounded overflow-hidden shadow-lg w-full mb-8">
      <div className="px-8 py-6">
        <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
        <p className="text-gray-700 text-lg">{blog.message}</p>
      </div>
      <div className="px-8 py-4 bg-gray-100 flex justify-between items-center">
        <div>
          <p className="text-gray-700 text-lg">Author: {blog.author}</p>
          <p className="text-gray-700 text-lg">Published on: {blog.submissionTime}</p>
        </div>
        <div className="flex space-x-4 items-center">
          <button
            type="button"
            className={`text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg p-3 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500`}
            onClick={handleLikeClick}
          >
            <svg
              className="w-6 h-6 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
            </svg>
            <span className="sr-only">Like</span>
            Likes: {likes}
          </button>
          <button
            type="button"
            className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-lg p-3 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500"
            onClick={handleClick} 
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 0 0 5.657-2.343l4.686 4.686-1.414 1.414-4.686-4.686A7.96 7.96 0 0 0 10 18zm1.293-6.707A7.955 7.955 0 0 0 14 10a8 8 0 1 0-8 8c1.61 0 3.08-.593 4.207-1.582l.379-.331.477-.47.264-.26A2 2 0 0 1 14 14h2a4 4 0 1 1-4.27-3.973l.26-.264.47-.477.33-.378zM7 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              />
            </svg>
            <span className="sr-only">Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    submissionTime: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
