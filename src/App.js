import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./Components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./Components/atoms/button/SecondaryButton";
import { SearchInput } from "./Components/molecules/SearchInput";
import { UserCard } from "./Components/organism/user/UserCard";
import { DefaultLayout } from "./Components/templates/DefaultLayout";
import { HeaderOnly } from "./Components/templates/HeaderOnly";
import "./styles.css";
const user = {
  name: "KMT",
  image: "https://source.unsplash.com/Uh5GWNUGgGY",
  email: "123456@gmail.com",
  phone: "0120-444-444",
  company: {
    name: "海山商事"
  },
  website: "https://www.google.co.jp/"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
