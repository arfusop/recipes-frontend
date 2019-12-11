import Axios from 'axios'

// update the users profile in the DB
export const updateUserProfile = async data => {
  const {REACT_APP_API} = process.env

  const url = `${REACT_APP_API}/api/profile`
  console.log(data)

  // get local storage cookie to set headers
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  }

  const body = JSON.stringify(data)
  const res = await Axios.post(url, body, config)

  console.log(res)
}
