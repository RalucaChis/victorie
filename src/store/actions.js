const axios = require('axios').default
const BACKEND_URL = 'https://master.gsq.ro'

export default {
  set_routines ({ commit, state }, routines) {
    commit('set_routines', routines)
  },

  set_credentials ({ commit, state }, credentials) {
    commit('set_credentials', credentials)
  },

  async playRoutine ({ commit, state }, id) {
    const config = {
      auth: {
        username: state.username,
        password: state.password
      }
    }
    const url = `${BACKEND_URL}/api/routine/${id}/start_routine`
    return axios.get(url, config)
      .catch(error => console.log(error))
  },

  async deleteRoutine ({ commit, state }, id) {
    const config = {
      auth: {
        username: state.username,
        password: state.password
      }
    }
    const url = `${BACKEND_URL}/api/routine/${id}`
    return axios.delete(url, config)
      .catch(error => console.log(error))
  },

  async fetchAllRoutines ({ commit, state }) {
    const config = {
      auth: {
        username: state.username,
        password: state.password
      }
    }
    return axios.get(`${BACKEND_URL}/api/routine/`, config)
      .catch(error => console.log(error))
  },

  async fetchAvailableComponents ({ commit, state }) {
    const config = {
      auth: {
        username: state.username,
        password: state.password
      }
    }

    return axios.get(`${BACKEND_URL}/api/available_components/`, config)
      .catch(error => console.log(error))
  },

  async sendRoutineToBackend ({ commit, state }, jsonObject) {
    const config = {
      auth: {
        username: state.username,
        password: state.password
      }
    }
    return await axios.post(`${BACKEND_URL}/api/routine/`, jsonObject, config)
      .catch(error => console.log(error))
  },

  async sendUpdatedRoutineToBackend ({ commit, state }, { routine_object, routine_id }) {
    const config = {
      auth: {
        username: state.username,
        password: state.password
      }
    }

    return await axios.put(`${BACKEND_URL}/api/routine/${routine_id}/`, routine_object, config)
      .catch(error => console.log(error))
  }
}
