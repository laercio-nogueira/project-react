import ReactDOM from "react-dom";
import MyCustomElement from "./html";
import App from "./react";
import Observer from "./Observe";

const props = {
  language: "",
  changeOption(val) {
    props.language = val
  }
}

MyCustomElement.prototype.props = props

const observer = new Observer(props, "language")
observer.Observe(e => document.querySelector("p").innerHTML = e)

customElements.define("root-html", MyCustomElement);
ReactDOM.render(<App {...props} />, document.getElementById("root-react"));