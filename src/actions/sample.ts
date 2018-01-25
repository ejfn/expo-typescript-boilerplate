import { Sample } from '../store';
import { createAction } from './action';

export const updateSampleList = createAction<'app/sample/updateList', Array<Sample>>(
  'app/sample/updateList'
);

export const fetchSampleList = createAction<'app/sample/fetchList'>(
  'app/sample/fetchList'
);
