export class Component extends HTMLElement {
	constructor() {
		super();
		this.state = {};
		this.props = {};
	}

	setState(callback) {
		this.state = callback(this.state);
		this.innerHTML = this.render()
	}

	connectedCallback() {
		this.innerHTML = this.render()
		this.componentDidMount()
	}

	disconnectedCallback() {
		this.componentWillUnmount();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.componentWillUpdate(name, oldValue, newValue);
		this.props[name] = this.getAttribute(name);
	}

	dispatch(type, props) {
		this.dispatchEvent(
			new CustomEvent(type, { detail: props, bubbles: true })
		);
	}

	componentWillUpdate() { }

	render() { }

	componentWillUnmount() { }

	componentDidMount() { }
}
