export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload;
    case 'FETCH_USER':
      return [...state, action.payload]
    default:
      return state;
  }
}