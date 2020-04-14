import { Component, Prop, h } from '@stencil/core';
import state from '../../store/store';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;



  componentDidLoad() {
    state.first = this.first;
    state.last = this.last;
  }

  render() {
    return <div>Component: {this.first} {this.last} ||| store : {state.first} {state.last}</div>;
  }
}
