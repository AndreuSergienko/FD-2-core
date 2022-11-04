import { Component } from '../../core';

export class Button extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false,
		};
	}

	render() {
		return `<button>Click</button>`;
	}
}

customElements.define('my-button', Button);
