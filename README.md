# Mutating State 
- when changing the state in your app, you should not directly mutate the original array. State must be treated as immutable. 

## Edit 
```javascript 
  saveTodo = (newInput, oldItem) => {
    const todos = this.state.todos.map(item => {
      return (item === oldItem) ? newInput : item
    })
    this.setState({todos});
  }
```
- `map` returns a new array, therefore the original array is not mutated.  It takes the original item, and if the original item is equal to the old value we are editing, it changes the original item to the user's input.  Otherwise it returns the original item.

## Delete
```javascript
deleteTodo = (todo) => {
  const todos = this.state.todos.filter(item => todo !== item);
  this.setState({todos});
```
- `filter` also returns a new array.  It iterates through each item in the state. If the item in state is equal to the item we are trying to delete it gets filtered out of the new array.

## Create 
```javascript
createTodo = (val) => {
  if (val) {
    this.setState({ todos: [...this.state.todos, val]})
  }
}
```
- Uses `destructuring`.  Makes a copy of the original array and adds the new value to the aray. 