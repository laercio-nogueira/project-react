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
        margin-top: 10px;
      }
    `;
    return style
  }

  render() {
    this.innerHTML = `
      <button type="button" class="button">
        HTML Button
      </button>
    `

    this.appendChild(this.style());
  }
  connectedCallback() {
    this.addEventListener('click', e => {
      this.state.background = "red"
      this.render()
      this.props.changeOption("HTML")
    });

    this.render()
  }
}

export default MyCustomElement