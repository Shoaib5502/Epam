import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { getCommentByBlogId, addComment, getBlogById } from "../js/Blogs";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Card from '../components/card';
import { useParams } from 'react-router-dom';
import { faUserCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentUser } from '../js/Users';



const navigation = [
    { name: 'Comments', href: '', current: true },
    { name: 'Home', href: '/home', current: false },
    // { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '/calender', current: false },
    // { name: 'Reports', href: '#', current: false },
  ]

  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


export default function CommentPage() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const loggedInUser = getCurrentUser();

  useEffect(() => {
    const fetchBlogAndComments = async () => {
      try {
        const blogDetails = await getBlogById(blogId);
        setBlog(blogDetails);
        const commentsForBlog = getCommentByBlogId(blogId);
        setComments(commentsForBlog);
      } catch (error) {
        console.error('Error fetching blog and comments:', error);
      }
    };

    fetchBlogAndComments();
  }, [blogId]);

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      addComment(blogId, newComment);
      const updatedComments = getCommentByBlogId(blogId);
      setComments(updatedComments);
      setNewComment('');
    }
  };

  return (
    <div>
      <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      onClick={item.onClick}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>


        

      </div>

    </>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {/* Your navigation component */}
        </Disclosure>
      </div>

      <main className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {blog && <Card key={blog.id} blog={blog} />}
        </div>
      </main>

      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
            {comments.map((comment, index) => (
            <div
                key={index}
                className={`bg-gray-100 p-3 mb-9 rounded ${
                comment.userId === loggedInUser ? 'self-end' : 'self-start'
                }`}
                style={{
                maxWidth: '70%',
                marginLeft: comment.userId === loggedInUser ? '0' : 'auto',
                }}
            >
                <p className="text-gray-700 text-sm">{comment.text}</p>
                <div className="flex justify-between mt-1">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faUserCircle} className="text-gray-500 text-xs mr-1" />
                    <p className="text-gray-500 text-xs">{comment.userId}</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faClock} className="text-gray-500 text-xs mr-1" />
                    <p className="text-gray-500 text-xs">{comment.timestamp}</p>
                </div>
                </div>
            </div>
            ))}
        </div>

        {/* Input field for new comment */}
        <div className="mb-4">
            <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Add a new comment..."
            ></textarea>
        </div>
        <div>
            <button
            onClick={handleCommentSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
            Add Comment
            </button>
        </div>
        </div>

    </div>
  );
}
