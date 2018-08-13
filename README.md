# Mutating State 
- when changing the state in your app, you should not directly mutate the original array (it should be *immutable*).  Instead you should create a copy and mutate the copy. 

## Examples:
[state as an array](https://codepen.io/mary-chap/pen/PBLmeL?editors=0011)

## Arrays
- example piece of state: 
  ```javascript
    this.state = {
      users: [ { name: 'jane',age: 22 }, { name: 'joe', age: 31 }, { name: 'tyler', age: 28 } ]
    }
  ```
### Adding an item
- you should never use mutable methods such as `push` when adding items.  
- **Method #1**: `concat`, this takes an array, makes a copy, and adds additional items to the array.
  ```javascript
  const newUser = { name: 'tyler', age: 28 }
  this.setState({ users: this.state.users.concat(newUser) })
  ```
- **Method #2**: the `spread operator`, this is similar to concat in that it creates a copy of the array
    ```javascript
    const newUser = { name: 'lucy', age: 20 }
    this.setState({ users: [...this.state.users, newUser]})
    ```
### Deleting an Item 
- methods to avoid on this 




### 






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
