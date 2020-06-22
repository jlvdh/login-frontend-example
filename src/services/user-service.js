import axios from 'axios'

class UserService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    })
    //this.service = service
  }

  edit = (job) => {
    return this.service.post('/auth/editprofile', {job: job})
    .then(response => response.data)
  }

  addProfileImage = image => {
    return this.service.post('/auth/profileimage', image)
      .then(response => response.data)
  }

}

export default UserService