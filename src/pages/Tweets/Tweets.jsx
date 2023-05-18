import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { getUsers } from "../../services/users.service";
import { Button } from "../../components/Button";

export default function Tweets() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [isMoreUsers, setIsMoreUsers] = useState(true);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    const params = {
      page,
      limit: 3,
    };

    try {
      const data = await getUsers(params);

      if (data.length === 0) {
        setIsMoreUsers(false);
        return;
      }

      if (data.length < params.limit) {
        setIsMoreUsers(false);
      }

      setUsers((prev) => [...prev, ...data]);
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <div className="py-5">
      <ul className="flex flex-wrap gap-6">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Card user={user} />
            </li>
          );
        })}
      </ul>
      <div className="py-4 text-center">
        {isMoreUsers && (
          <Button
            text="Load more..."
            handleClick={() => {
              setPage(page + 1);
            }}
          />
        )}
      </div>
    </div>
  );
}
