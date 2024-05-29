import ReactDOM from 'react-dom/client'
import Article from "./components/Article/Article.jsx"
import UsersList from "./components/UserInfo/UsersList/UsersList.jsx"
import UserInfo from "./components/UserInfo/UserInfo.jsx"
import './components/UserInfo/styles.css'
const App = () => {
  return (
    <>
      <Article />
      <div className="information-content">
            <UsersList />
            <UserInfo />
      </div>
    </>
  )
}
export default App
ReactDOM.createRoot(document.getElementById("root")).render(<App />);