import AddRemove from "./Component/Header/AddRemove";
import { Header } from "./Component/Header/Header";
import MainCart from "./Component/Main/maincart";
import Form from "./Component/Header/form";
import Success from "./Component/Header/Success";
import Orders from "./Component/Header/Orders";
import About from "./Component/Header/About";
import Search from "./Component/Header/search";

function App() {
  // const dispatch=useDispatch()
  //   const {data,error,isLoading:wait}=usehttp("http://localhost:3000/meals")
  //   useEffect(()=>{
  //     dispatch(CartAction.AllData(data))
  //   }, [data])
  return (
    <>
      <Header></Header>
      <MainCart />
      <AddRemove />
      <Form />
      <Orders />
      <About />
      <Success />
      <Search />
      {/* <Game/> */}
    </>
  );
}

export default App;
