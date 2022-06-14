export type DataType = string | boolean | number;
export type Operator = typeof operators[number];
export const operators = ['eq', 'ne', 'gt', 'gte', 'lte', 'ne', 'like', 'incl'] as const;
