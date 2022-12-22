import { useEffect, useState } from "react";
import Spinner from "../components/layout/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch http request as soon as the component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    setUsers(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  if (!loading) {
    return (
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <h1>
            <UserItem key={user.id} user={user} />
          </h1>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
