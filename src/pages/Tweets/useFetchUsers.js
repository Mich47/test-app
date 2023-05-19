import { useEffect, useState } from "react";
import { getUsers } from "../../services/users.service";
import { STATUS } from "../../constants/status.constants";
import { autoScrollBottom } from "../../utils/autoScrollBottom";

export const useFetchUsers = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [isMoreUsers, setIsMoreUsers] = useState(true);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    const params = {
      page,
      limit: 3,
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

  return { users, isMoreUsers, status, page, setPage };
};
