import { postcodeValidator } from 'postcode-validator';

export const isNotEmpty = (value) => value.trim() !== '';
export const isValidPostcode = (value) => postcodeValidator(value, 'GB');
