#Next.js
**Next.js** is a popular and lightweight framework for **static and server‑rendered applications** built with React. It includes **styling and routing** solutions out of the box, and assumes that you’re using Node.js as the server environment

##Gatsby
Gatsby is the best way to create **static websites** with React. It lets you use **React components**, but outputs pre-rendered HTML and CSS to guarantee the fastest load time.

##Important To Know
###React Only Updates What’s Necessary
React DOM compares the element and its children to the previous one, and **only applies the DOM updates necessary** to bring the DOM to the desired state.

###Life Cycle
####ComponentDidMount:
hook runs after the component output has been rendered to the DOM

####ComponentWillUnmount:
when component will remove

####Using State Correctly
There are three things you should know about setState().
**Do Not Modify State Directly**
For example, this will not re-render a component:
// Wrong
`this.state.comment = 'Hello';`
**Instead, use setState():**
// Correct
`this.setState({comment: 'Hello'});`
The only place where you can assign this.state is the constructor.

####State Updates May Be Asynchronous
React may batch multiple setState() calls into a single update for performance.
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
For example, this code may fail to update the counter:
// Wrong
``this.setState({
  counter: this.state.counter + this.props.increment,
});``
To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:
// Correct
``this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));``
We used an arrow function above, but it also works with regular functions:
// Correct
``this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});``