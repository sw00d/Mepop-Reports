
export const loginSetup = (user, setState) => {
  // const { accessToken, files, email, account, userId, refreshToken } = login
  // // sets up cookies
  // document.cookie = `pomc=${accessToken};`
  // document.cookie = `pomcer=${refreshToken};`
  // // sets up tokens in state
  setState({
    user: {
      fullUser: user,
      email: user.email
      // files
      // id
    }
  })
}
