// Import any dependencies needed for the functions


export function likePost(blogID) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    let likes = JSON.parse(localStorage.getItem('likes')) || [];
    const blogIndex = likes.findIndex(like => like.blogID === blogID);

    if (blogIndex !== -1) {
        const userIndex = likes[blogIndex].likedUsers.indexOf(loggedInUser);
        if (userIndex !== -1) {
            likes[blogIndex].likes--;
            likes[blogIndex].likedUsers.splice(userIndex, 1);
            if (likes[blogIndex].likes === 0) {
                likes.splice(blogIndex, 1);
            }
        } else {
            likes[blogIndex].likes++;
            likes[blogIndex].likedUsers.push(loggedInUser);
        }
    } else {
        likes.push({ blogID, likes: 1, likedUsers: [loggedInUser] });
    }

    localStorage.setItem('likes', JSON.stringify(likes));

    const updatedBlog = likes.find(like => like.blogID === blogID);
    return updatedBlog ? updatedBlog.likes : 0;
}

  
export function addComment(blogId, commentText) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    console.log(commentText + " " + blogId + " " + loggedInUser);
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const existingBlogCommentsIndex = comments.findIndex(comment => comment.blogId === blogId);
    if (existingBlogCommentsIndex !== -1) {
        comments[existingBlogCommentsIndex].comments.push({
            userId: loggedInUser,
            text: commentText,
            timestamp: new Date().toISOString()
        });
    }else {
        comments.push({
            blogId,
            comments: [{
                userId: loggedInUser,
                text: commentText,
                timestamp: new Date().toISOString()
            }]
        });
    }
    localStorage.setItem('comments', JSON.stringify(comments));
    
}





export function getCommentByBlogId(blogId) {
    try {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        const blogComments = comments.find(comment => comment.blogId === blogId);
        return blogComments ? blogComments.comments : [];
    } catch (error) {
        console.error('Error parsing JSON data from localStorage:', error);
        return [];
    }
}

export function getBlogById(blogId) {
    console.log(blogId);
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = storedBlogs.find(blog => blog.id === blogId);
    console.log(blog);
    if (!blog) {
        console.log(`Blog with id ${blogId} not found.`);
    }

    return blog;
}

export function getBlogsByUsername() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    return storedBlogs.filter(blog => blog.author === loggedInUser);
}
  

// Function to retrieve all blogs
export function getAllBlogs() {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    return storedBlogs;
}



function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to add a new blog
export function addBlog(blogData, username) {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const id = generateUniqueId();
    const blogWithIdAndTime = { ...blogData, id, submissionTime: new Date().toLocaleString(), author: username };
    existingBlogs.push(blogWithIdAndTime);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
}


// Function to update an existing blog
export function updateBlog(blogId, updatedBlogData) {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const index = existingBlogs.findIndex(blog => blog.id === blogId);
    if (index !== -1) {
        existingBlogs[index] = { ...existingBlogs[index], ...updatedBlogData };
        localStorage.setItem('blogs', JSON.stringify(existingBlogs));
        return true; 
    }
    
    return false; 
}
// Function to delete a blog
export function deleteBlog(blogId) {
    let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs = existingBlogs.filter(blog => blog.id !== blogId);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
}


export function getNumberOfBlogsPosted() {
    try {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        const userBlogs = blogs.filter(blog => blog.author === loggedInUser);
        return userBlogs.length;
    } catch (error) {
        console.error('Error parsing JSON data from localStorage:', error);
        return 0;
    }
}


export function getNumberOfBlogsLiked() {
    try {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const likes = JSON.parse(localStorage.getItem('likes')) || [];
        const numberOfBlogsLiked = likes.reduce((count, like) => {
            if (like.likedUsers.includes(loggedInUser)) {
                return count + 1;
            }
            return count;
        }, 0);
        
        return numberOfBlogsLiked;
    } catch (error) {
        console.error('Error parsing JSON data from localStorage:', error);
        return 0;
    }
}

export function getNumberOfCommentsPosted() {
    try {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        let count = 0;
        comments.forEach(blog => {
            blog.comments.forEach(comment => {
                if (comment.userId === loggedInUser) {
                    count++;
                }
            });
        });

        return count;
    } catch (error) {
        console.error('Error parsing JSON data from localStorage:', error);
        return 0;
    }
}
