class MyCustomElement extends HTMLElement {

  constructor() {
    super();
    this.state = {
      background: "#9ec5fe"
    }
  }

  style() {
    const style = document.createElement("style");
    style.textContent = `
      .button {
        font-size: 0.8rem;
        background: ${this.state.background};
        color: #fff;
        border: 1px solid #9ec5fe;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 1px 1px 2px #999;
      }

      .container {
        border: 1px dotted #999;
        padding: 10px 0px;
        margin: 10px 0px;
      }

      .row {
        display: flex;
        flex-direction: row;
      }
    `;
    return style
  }

  render(props, element) {
    const values = {
      props: props.props || props,
      type: props.type
    }
    
    const el = document.createElement(values.type)

    if(typeof(values.props) === "string") {
      element.innerText = values.props
    } else {
      Object.keys(values.props).forEach(key => {
        if (key !== "children") el.setAttribute(key, values.props[key])
      })

      if (values.props.children) {
        this.render(values.props.children, el)
      }
      
      if (element) {
        element.appendChild(el)
      } else {
        this.appendChild(el)
        this.appendChild(this.style());
      }
    }
    
  }

  connectedCallback() {
    
    const component = (
      <div class="container" data-set="22" key="1">
        <div class="row">
          <button type="button" class="button">
            HTML Button
          </button>
        </div>
      </div>
    )

    this.addEventListener('click', e => {
      this.removeChild(this.childNodes[0])
      this.removeChild(this.childNodes[0])
      this.state.background = "red"
      this.render(component)
      this.props.changeOption("HTML")
    });

    this.render(component)
  }
}

export default MyCustomElement