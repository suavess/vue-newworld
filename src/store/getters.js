const getters = {
  token: state => state.user.token,
  email: state => state.user.email,
  name: state => state.user.name,
  image: state => state.user.image
}
export default getters
