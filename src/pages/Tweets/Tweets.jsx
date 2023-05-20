import { Card } from "../../components/Card";
import { useFetchUsers } from "./useFetchUsers";
import { STATUS } from "../../constants/status.constants";
import { ButtonLoadMore } from "./ButtonLoadMore";
import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";
import { FilterByFollow } from "./FilterByFollow";
import { FILTER } from "../../constants/filter.constants";

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
      <FilterByFollow setSelectedSortOption={setSelectedSortOption} />

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
        <div className="py-4 text-center">
          {isLoading ? (
            <Loader />
          ) : (
            isMoreUsers && (
              <ButtonLoadMore
                status={status}
                onClickFn={() => {
                  setPage(page + 1);
                }}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
