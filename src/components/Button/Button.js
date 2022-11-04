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
				...state,
				count: state.count + 1,
			};
		});
	}

	minusCount() {
		this.setState((state) => {
			return {
				...state,
				count: state.count - 1,
			};
		});
	}

	registerEvents() {
		this.addEventListener('click', (e) => {
			this.setState((state) => {
				if (e.target.closest('.plus')) {
					this.addCount();
				} else if (e.target.closest('.minus')) {
					this.minusCount();
				}
			});
		});
	}

	render() {
		return `
			<button data-action="plus">+</button>
			<span>${this.state.count}</span>
			<button data-action="minus">-</button>
		`;
	}
}

customElements.define('my-button', Button);
