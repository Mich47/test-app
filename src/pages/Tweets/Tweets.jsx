import { Card } from "../../components/Card";
import { useFetchUsers } from "./useFetchUsers";
import { STATUS } from "../../constants/status.constants";
import { ButtonLoadMore } from "./ButtonLoadMore";

export default function Tweets() {
  const { users, status, isMoreUsers, page, setPage } = useFetchUsers();

  return (
    <div className="py-5">
      <ul className="flex flex-wrap gap-6">
        {users.map((user) => {
          const isLoading = status === STATUS.loading;
          return (
            <li key={user.id}>
              <Card user={user} isLoading={isLoading} />
            </li>
          );
        })}
      </ul>
      <div className="py-4 text-center">
        {isMoreUsers && (
          <ButtonLoadMore
            status={status}
            onClickFn={() => {
              setPage(page + 1);
            }}
          />
        )}
      </div>

      {/* <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-indigo-300 h-10 w-10"></div>
      </div> */}
    </div>
  );
}
