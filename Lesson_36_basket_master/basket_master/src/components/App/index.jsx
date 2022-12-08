import AddProductForm from "../AddProductForm";
import Basket from "../Basket";
import ProductsContainer from "../ProductsContainer";

function App() {
  return (
    <div>
      <AddProductForm />
      <ProductsContainer />
      <p>Basket:</p>
      <Basket />
    </div>
  );
}

export default App;
