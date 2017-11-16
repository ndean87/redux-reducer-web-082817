const defaultState = {
  friends: [
    { name: 'Avi', hometown: 'NYC', id: 100 }
  ]
}

export function manageFriends(state = defaultState, action){
  switch (action.type) {
    case 'ADD_FRIEND':
        return {friends: state.friends.concat(action.friend)}
      break;
    case 'REMOVE_FRIEND':
        return {friends: state.friends.filter(friend => {
          return friend.id !== action.id
          })
        }
      break;
    default:
      return state;

  }
}
