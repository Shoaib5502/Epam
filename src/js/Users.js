/*---------------------------------------------------------------*/
export function registerUser(email, username, password1, password2) {
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  if (existingUsers.some(user => user.email === email || user.username === username)) {
    throw new Error('Email or username already exists');
  }

  if (password1 !== password2) {
    throw new Error('Passwords do not match');
  }

  const newUser = { email, username, password: password1 };
  existingUsers.push(newUser);
  
  localStorage.setItem('users', JSON.stringify(existingUsers));

  return newUser;
}


/*---------------------------------------------------------------*/

// Function to login a user
export function loginUser(username, password) {
  
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
  const user = existingUsers.find(user => user.username === username && user.password === password);

  if (!user) {
    throw new Error('Invalid username or password');
  }

  return user;
}


/*---------------------------------------------------------------*/

// Function to set the currently logged-in user
export function setCurrentUser(username) {
  localStorage.setItem('loggedInUser', username);
}

// Function to clear the currently logged-in user
export function clearCurrentUser() {
  localStorage.removeItem('loggedInUser');
}

// Function to get the username of the currently logged-in user
export function getCurrentUser() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  return loggedInUser ? loggedInUser : null;
}



/* ------------------------------------------------ */


export function getUserEmail(username) {
  const userData = localStorage.getItem('users');
  if (userData) {
    const users = JSON.parse(userData);
    const user = users.find(user => user.username === username);
    if (user) {
      return user.email;
    }
  }
  return null;
}


// Function to get the User of the currently logged-in user
export function getLoggedInUserDetail() {
  const currentUser = getCurrentUser();
  const username = currentUser;
  if (currentUser) {
    const email = getUserEmail(username);

    return {
      email,
      username,
    };
  } else {
    return null; 
  }
}



