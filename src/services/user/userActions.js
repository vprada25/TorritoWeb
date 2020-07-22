import { createActions } from 'redux-actions';

export const { user } = createActions({
  user: {
    CREATE_USER: (user) => ({ user }),
    CREATE_USER_RESPONSE: () => ({}),

    CREATE_DIAGNOSTICO: (organization) => ({ organization }),
    CREATE_DIAGNOSTICO_RESPONSE: () => ({}),

    GET_USER: () => ({}),
    GET_USER_RESPONSE: (users) => ({ users }),
    
    GET_DIAGNOSTICO: () => ({}),
    GET_DIAGNOSTICO_RESPONSE: (organizations) => ({ organizations }),

    GET: (id) => ({ id }),
    GET_RESPONSE: (organization) => ({ organization }),

    UPDATE: (organization) => ({ organization }),
    UPDATE_RESPONSE: () => ({}),
  }
})