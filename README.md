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
- avoid using methods such as `splice` on this operation, instead use `slice`
- **Method #1**: `slice`, this makes a copy of the array before the change and also a copy of the array after the item you wish to delete and merges the 2 together creating an array without the item you want to delete.
    ```javascript
    const { users } = this.state;
    this.setState({ users: users.slice(0, indexToDelete).concat(users.slice(indexToDelete + 1)) })
    ```
- **Method #2**: `filter`, this array method filters through the array and makes a new copy of the array based on the callback function.  
    ```javascript
    const userToDelete = 'joe'
    this.setState({ users: this.state.users.filter(user => user.name !== userToDelete )})
    ```
### Editing an Item
- **Method #1**: `concat`, this breaks up the array into items before and after the pieces of state in the array and adds the edited piece of state between.  
  ```javascript
    this.setState({
      users: 
        this.state.users.slice(0, indexToEdit)
        .concat({name: 'joe', age: this.state.users[indexToEdit].age + 1}) /* item we are editing */
        .concat(this.state.users.slice(indexToEdit + 1))
    })
  ```
- **Method #2**: the `spread operator`, this is similar to `concat` just different syntax.
  ```javascript
    this.setState({ 
      users:
        [ ...this.state.users.slice(0, indexToEdit), 
         { name: this.state.users[indexToEdit].name, age: 100 }, /* item we are editing */
         ...this.state.users.slice(indexToEdit + 1)
        ]
    })
  ```
- **Method #3**: `map`, this is an array method that maps through the state array and has a callback function for each item that creates a ternary operator to find the item to edit.  If the item is found the item is mutated, else the item is returned.
  ```javascript
  const userToEdit = 'joe'
  const users = this.state.users.map(user => {
    return (user.name == userToEdit) ? {...user, age: 100} : user
  })
  this.setState({ users });
  ```






