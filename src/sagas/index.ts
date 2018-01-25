import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import { sampleSaga } from './sample';

export function* rootSaga(): SagaIterator {
  yield fork(sampleSaga);
}
