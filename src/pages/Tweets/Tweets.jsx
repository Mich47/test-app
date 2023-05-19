import { Card } from "../../components/Card";
import { useFetchUsers } from "./useFetchUsers";
import { STATUS } from "../../constants/status.constants";
import { ButtonLoadMore } from "./ButtonLoadMore";
import { Loader } from "../../components/Loader";

export default function Tweets() {
  const { users, status, isMoreUsers, page, setPage } = useFetchUsers();
  const isLoading = status === STATUS.loading;

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
  );
}
