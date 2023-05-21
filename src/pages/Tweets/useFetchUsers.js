import { useEffect, useRef, useState } from "react";
import { getUsers } from "../../services/users.service";
import { STATUS } from "../../constants/status.constants";
import { autoScrollBottom } from "../../utils/autoScrollBottom";

export const useFetchUsers = () => {
  const LIMIT_PER_PAGE = 3;
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [isMoreUsers, setIsMoreUsers] = useState(true);
  const [status, setStatus] = useState(STATUS.idle);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      try {
        const usersInLS = JSON.parse(localStorage.getItem("users"));

        if (usersInLS && usersInLS.length) {
          console.log("usersInLS.length ", usersInLS.length);
          const pageInLs =
            usersInLS.length % LIMIT_PER_PAGE
              ? 1
              : usersInLS.length / LIMIT_PER_PAGE;
          setUsers(usersInLS);
          setPage(pageInLs);
          return;
        }
      } catch (error) {
        console.log("error ", error);
      }
    }

    fetchData(page);
  }, [page, firstRun]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const fetchData = async (page = 1) => {
    console.log("page ", page);
    console.log("fetchData ");
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

      // localStorage.setItem("users", JSON.stringify([...users, ...data]));

      setUsers((prev) => [...prev, ...data]);

      setStatus(STATUS.success);

      autoScrollBottom();
    } catch (error) {
      console.log("error ", error);
      setStatus(STATUS.error);
    }
  };

  return { users, setUsers, isMoreUsers, status, page, setPage };
};
