import { Feature } from '../types';

export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (
  feature: Feature
): { readonly type: string; readonly payload: Feature } => {
  return {
    type: ADD_FEATURE,
    payload: feature
  };
};
