import ReactDOM from "react-dom";
import Product from "./product";

window.addEventListener("load", function() {
  ReactDOM.render(
      <Product name="New Balance 420" price="49" />,
    document.getElementById("app")
  );
});
