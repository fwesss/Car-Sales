export type Feature = {
  readonly id: number;
  readonly name: string;
  readonly price: number;
};

export type Car = {
  readonly price: number;
  readonly name: string;
  readonly image: string;
  readonly features: readonly Feature[];
};
