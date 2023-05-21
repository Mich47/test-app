import { Card } from "../../components/Card";
import { useFetchUsers } from "./useFetchUsers";
import { STATUS } from "../../constants/status.constants";
import { Button } from "./Button";
import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";
import { FilterByFollow } from "./FilterByFollow";
import { FILTER } from "../../constants/filter.constants";
import { ButtonBack } from "./ButtonBack";

export default function Tweets() {
  const { users, setUsers, status, isMoreUsers, page, setPage } =
    useFetchUsers();
  const isLoading = status === STATUS.loading;
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedSortOption, setSelectedSortOption] = useState(FILTER.all);

  useEffect(() => {
    if (selectedSortOption === FILTER.follow) {
      setFilteredUsers(users.filter(({ isFollowing }) => !isFollowing));
      return;
    }

    if (selectedSortOption === FILTER.following) {
      setFilteredUsers(users.filter(({ isFollowing }) => isFollowing === true));
      return;
    }

    setFilteredUsers(users);
  }, [users, selectedSortOption]);

  const toggleUserIsFollowing = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, isFollowing: !user.isFollowing };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <ButtonBack />
        <FilterByFollow setSelectedSortOption={setSelectedSortOption} />
      </div>

      <div className="py-5">
        <ul className="flex flex-wrap gap-6">
          {filteredUsers.length === 0 ? (
            <div className="w-full py-8">
              <p className="text-center text-4xl">No cards</p>
            </div>
          ) : (
            filteredUsers.map((user) => {
              return (
                <li key={user.id}>
                  <Card
                    user={user}
                    toggleUserIsFollowing={toggleUserIsFollowing}
                  />
                </li>
              );
            })
          )}
        </ul>
        <div className="py-8 text-center">
          {isLoading ? (
            <Loader />
          ) : isMoreUsers ? (
            <Button
              status={status}
              text={"Load more..."}
              onClickFn={() => {
                setPage(page + 1);
              }}
            />
          ) : (
            <Button text={"No more cards to load"} />
          )}
        </div>
      </div>
    </>
  );
}
