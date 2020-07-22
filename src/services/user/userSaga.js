import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { user } from "./userActions"

function* createUser({ payload }) {
  console.log("hello",payload);
  const response = yield Api.post('/auth/signup', payload.user)
  if (response.ok) {
    yield put(user.createUserResponse());
  } else {
    const err = new TypeError('ERROR_CREATE_USER')
    yield put(user.createUserResponse(err))
  }
  
}

// function* createDiagnostico({ payload }) {
//   const response = yield Api.post('/crops/create/diagnostic', payload.organization)
//   if (response.ok) {
//     yield put(organization.createDiagnosticoResponse());
//   } else {
//     const err = new TypeError('ERROR_CREATE_DIAGNOSTICO')
//     yield put(organization.createDiagnosticoResponse(err))
//   }
// }

function* getUser() {
  const response = yield Api.get('/user')
  if (response.ok) {
    yield put(user.getUserResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_CREATE_USER')
    yield put(user.getUserResponse(err))
  }
}

// function* getDiagnostico() {
//   const response = yield Api.get('/crops/get/crops-diagnostic')
//   if (response.ok) {
//     yield put(organization.getDiagnosticoResponse(response.payload));
//   } else {
//     const err = new TypeError('ERROR_CREATE_DIAGNOSTICO')
//     yield put(organization.getDiagnosticoResponse(err))
//   }
// }

// function* get({ payload }) {
//   const response = yield Api.get(`/organization/count/persons-organization?id=${payload.id}`)
//   if (response.ok) {
//     yield put(organization.getResponse(response.payload));
//   } else {
//     const err = new TypeError('ERROR_GET_PRODUCER')
//     yield put(organization.getResponse(err))
//   }
// }

// function* update({ payload }) {
//   const response = yield Api.put(`/organization/update`, payload.organization)
//   console.log(payload.organization)
//   if (response.ok) {
//     yield put(organization.updateResponse());
//   } else {
//     const err = new TypeError('ERROR_GET_PRODUCER')
//     yield put(organization.getResponse(err))
//   }
// }

function* ActionWatcher() {
  yield takeLatest(user.getUser, getUser)
  yield takeLatest(user.createUser, createUser)  
  // yield takeLatest(organization.createDiagnostico, createDiagnostico)
  // yield takeLatest(organization.getOrganization, getOrganization)
  // yield takeLatest(organization.getDiagnostico, getDiagnostico)
  // yield takeLatest(organization.get, get)
  // yield takeLatest(organization.update, update)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}