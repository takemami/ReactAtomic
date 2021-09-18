import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "ジャケ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "mibyf@aaa.com",
  phone: "000-1234-5678",
  company: { name: "テスト会社", website: "http://google.com" }
};

export default function App() {
  return <Router />;
}
