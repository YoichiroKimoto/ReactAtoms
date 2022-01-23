import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `KMT${val}`,
    image: "https://source.unsplash.com/Uh5GWNUGgGY",
    email: "123456@gmail.com",
    phone: "0120-444-444",
    company: {
      name: "海山商事"
    },
    website: "https://www.google.co.jp/"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard keys={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
