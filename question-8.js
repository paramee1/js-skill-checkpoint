// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

const getUser = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`);
};

const getNewUser = async () => {
  let newUsersAll;
  const response = await getUser();
  newUsersAll = await response.json();
  let newUsers = [];
  for (let x of newUsersAll) {
    newUsers.push(x.name);
  }
  return newUsers;
};

getNewUser().then((x) => console.log(x));
