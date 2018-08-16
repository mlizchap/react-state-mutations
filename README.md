# Mutating State 
- when changing the state in your app, you should not directly mutate the original array (it should be *immutable*).  Instead you should create a copy and mutate the copy. 

## Examples:
- [State as an Array](https://codepen.io/mary-chap/pen/PBLmeL?editors=0011)
- [State as an Object](https://codepen.io/mary-chap/pen/BPEjoW?editors=0111)

## TOC
- [Arrays](#arrays)
  - [Adding an Item](#adding-an-item)
  - [Deleting an Item](#deleting-an-item)
  - [Editing an Item](#editing-an-item)
- [Objects](#objects)
  - [Mapping Over an Object](#mapping-over-an-object)
  - [Converting from an Array](#convert-from-an-array-to-an-object)
  - [Adding an Item](#adding-items)
  - [Deleting an Item](#removing-items)
  - [Editing an Item](#editing-items)

## Arrays
- example of state as an array:
  ```javascript
    this.state = {
      users: [ { name: 'jane',age: 22 }, { name: 'joe', age: 31 }, { name: 'tyler', age: 28 } ]
    }
  ```
### Adding an item
- you should never use mutable methods such as `push` when adding items.  
- **Method #1**: `concat`, this takes an array, makes a copy, and adds additional items to the array.
  ```javascript
  const newUser = { name: 'jake', age: 18 }
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
        .concat({name: this.state.users[indexToEdit].name, age: 100}) /* item to edit */
        .concat(this.state.users.slice(indexToEdit + 1))
    })
  ```
- **Method #2**: the `spread operator`, this is similar to `concat` just different syntax.
  ```javascript
    this.setState({ 
      users:
        [ ...this.state.users.slice(0, indexToEdit), 
         { name: this.state.users[indexToEdit].name, age: 100 }, /* item to edit */
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

## Objects 
- keeping state as an object has the advantages of having faster lookups and cleaner state maipulation functions 
- look up with an array
```javascript
state.posts.find(post => post.id === postToFind);
```
- lookup with an object
```javascript
state.posts[postToFind]
```
- lodash library 
  ```javascript
  $npm install --save lodash
  import _ as 'lodash'
  ```
  
### Mapping Over an Object
```javascript
{ _.map(this.state.users, (user => <div>{user.name} | {user.age}</div>)) }
```

### Convert from an Array to an Object
- user the lodash `mapKeys` function
  ```javascript
  _.mapKeys(this.state.users, 'id')
  ```


### Adding items 
```javascript
this.setState({ users: 
      {  ...this.state.users,  4: { name: 'Tim', age: 22, id: 4 } } 
});
```

### Removing items
```javascript
this.setState({ users: _.omit(this.state.users, keyToRemove) })
```

### Editing items
```javascript
this.setState({ users: {...this.state.users, keyToEdit : {...this.state.users[keyToEdit], age: 21  }} })
```


