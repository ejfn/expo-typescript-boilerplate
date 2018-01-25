import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/sample';
import { Sample } from '../store';

function* fetchSampleListSaga(_: typeof actions.fetchSampleList.shape): SagaIterator {

  // TODO: call your api here, also request state and error handling
  const samples: Array<Sample> = [
    { prop1: 'This', prop2: 'is' },
    { prop1: 'a', prop2: 'sample.' }
  ];

  yield put(actions.updateSampleList(samples));
}

export function* sampleSaga(): SagaIterator {
  yield takeLatest(actions.fetchSampleList.type, fetchSampleListSaga);
}
