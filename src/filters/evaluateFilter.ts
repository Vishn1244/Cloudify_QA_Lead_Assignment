export type FilterOperator =
  | 'equals'
  | 'notEquals'
  | 'contains'
  | 'startsWith'
  | 'endsWith'
  | 'greaterThan'
  | 'greaterThanOrEqual'
  | 'lessThan'
  | 'lessThanOrEqual';

export function evaluateFilter(
  actualValue: any,
  operator: FilterOperator,
  expectedValue: any
): boolean {

  switch (operator) {

    case 'equals':
      return actualValue === expectedValue;

    case 'notEquals':
      return actualValue !== expectedValue;

    case 'contains':
      return String(actualValue)
        .toLowerCase()
        .includes(String(expectedValue).toLowerCase());

    case 'startsWith':
      return String(actualValue)
        .toLowerCase()
        .startsWith(String(expectedValue).toLowerCase());

    case 'endsWith':
      return String(actualValue)
        .toLowerCase()
        .endsWith(String(expectedValue).toLowerCase());

    case 'greaterThan':
      return Number(actualValue) > Number(expectedValue);

    case 'greaterThanOrEqual':
      return Number(actualValue) >= Number(expectedValue);

    case 'lessThan':
      return Number(actualValue) < Number(expectedValue);

    case 'lessThanOrEqual':
      return Number(actualValue) <= Number(expectedValue);

    default:
      throw new Error(`Unsupported filter operator: ${operator}`);
  }
}