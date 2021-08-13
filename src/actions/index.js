import getPosts from '../apis/getPosts';
import _ from 'lodash';
export const fetchPosts = () => async dispatch => {
  const response = await getPosts.get('posts');
  const data = response.data
  dispatch({ type: 'FETCH_POSTS', payload: data });
}

export const fetchUsers = () => async dispatch => {
  const response = await getPosts.get('users')
  dispatch({ type: 'FETCH_USERS', payload: response.data })
}


export const fetchUser = (id) => async dispatch => {
  const response = await getPosts.get(`users/${id}`)
  dispatch({ type: 'FETCH_USER', payload: response.data })
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  /* const uniqueUserIds = _.uniq(_.map(getState().posts, 'userId'))
  uniqueUserIds.forEach(id => dispatch(fetchUser(id))); */

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

// not so good since if user updated we can't fetch again
/* export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await getPosts.get(`users/${id}`)
  dispatch({ type: 'FETCH_USER', payload: response.data })
}) */
/* export const fetchUser = function (id) {
  return _.memoize(async function (dispatch) {
    const response = await getPosts.get(`users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data })
  });
} */

