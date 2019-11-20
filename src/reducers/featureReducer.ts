// Actions
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/appActions';
// Types
import { Feature } from '../types';

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

type State = {
  readonly additionalPrice: number;
  readonly car: {
    readonly price: number;
    readonly name: string;
    readonly image: string;
    readonly features: readonly Feature[];
  };
  readonly additionalFeatures: readonly Feature[];
};

type Action = {
  readonly type: string;
  readonly payload: {
    readonly price: number;
    readonly feature: { readonly id: number; readonly name: string; readonly price: number };
    readonly id: number;
  };
};

export const featureReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload.feature]
        },
        additionalFeatures: state.additionalFeatures.filter(
          feature => feature.id !== action.payload.id
        )
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(feature => feature.id !== action.payload.id)
        },
        additionalFeatures: [...state.additionalFeatures, action.payload.feature]
      };
    default:
      return state;
  }
};
