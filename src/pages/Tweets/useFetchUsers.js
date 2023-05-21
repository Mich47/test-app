import { useEffect, useRef, useState } from "react";
import { getUsers } from "../../services/users.service";
import { STATUS } from "../../constants/status.constants";
import { autoScrollBottom } from "../../utils/autoScrollBottom";
import { readUsersFromLS } from "../../utils/readUsersFromLS";
import { writeUsersToLS } from "../../utils/writeUsersToLS";

export const useFetchUsers = () => {
  const LIMIT_PER_PAGE = 3;
  const [isMoreUsers, setIsMoreUsers] = useState(true);
  const [status, setStatus] = useState(STATUS.idle);
  const firstRun = useRef(true);

  const usersInLS = readUsersFromLS();
  if (usersInLS.length === 0) {
    firstRun.current = false;
  }

  const pageInLs =
    usersInLS.length < LIMIT_PER_PAGE
      ? 1
      : Math.ceil(usersInLS.length / LIMIT_PER_PAGE);

  const [page, setPage] = useState(pageInLs);
  const [users, setUsers] = useState(usersInLS);

  useEffect(() => {
    const fetchData = async (page = 1) => {
      const params = {
        page,
        limit: LIMIT_PER_PAGE,
      };

      try {
        setStatus(STATUS.loading);
        const data = await getUsers(params);

        if (data.length === 0) {
          setIsMoreUsers(false);
          setStatus(STATUS.success);
          return;
        }

        if (data.length < params.limit) {
          setIsMoreUsers(false);
        }

        setUsers((prev) => [...prev, ...data]);

        setStatus(STATUS.success);

        autoScrollBottom();
      } catch (error) {
        console.log("error ", error);
        setStatus(STATUS.error);
      }
    };

    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    fetchData(page);
  }, [page]);

  writeUsersToLS(users);

  return { users, setUsers, isMoreUsers, status, page, setPage };
};
