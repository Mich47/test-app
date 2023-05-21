export const readUsersFromLS = () => {
  try {
    const usersInLS = JSON.parse(localStorage.getItem("users")) ?? [];

    if (usersInLS.length === 0) {
      return [];
    }

    return usersInLS;
  } catch (error) {
    console.log("error ", error);
    return [];
  }
};
