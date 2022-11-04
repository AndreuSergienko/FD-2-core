import { Component } from '../../core';
import './Button.scss';

export class Button extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	addCount() {
		this.setState((state) => {
			return {
				count: state.count < 10 ? state.count + 1 : 10,
			};
		});
	}

	minusCount() {
		this.setState((state) => {
			return {
				count: state.count > 1 ? state.count - 1 : 0,
			};
		});
	}

	registerEvents() {
		this.addEventListener('click', (e) => {
			if (e.target.closest('.plus')) {
				this.addCount();
			} else if (e.target.closest('.minus')) {
				this.minusCount();
			}
		});
	}

	render() {
		return `
			<button class="plus">+</button>
			<span>${this.state.count}</span>
			<button class="minus">-</button>
		`;
	}
}

customElements.define('my-button', Button);
