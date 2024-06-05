// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
  };

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// become a host
export const becomeHost = async (email) => {
  const currentUser = {
    role: "host",
  };

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      }
    );

    if (!response.ok) {
      throw new Error(`Error becoming host: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to become host:", error);
    throw error; // Rethrow error to let the caller handle it
  }
};

//   return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(currentUser),
//   }).then((res) => res.json());
// };

// Get role
export const getRole = async (email) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${email}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching role: ${response.statusText}`);
    }

    const user = await response.json();
    return user?.role;
  } catch (error) {
    console.error("Failed to fetch role:", error);
    throw error; // Rethrow error to let the caller handle it
  }
};
