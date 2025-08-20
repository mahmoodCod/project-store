// Utility functions for generating discount dates
// This helps avoid hydration issues by using consistent dates

export const getDiscountEndDate = (daysFromNow: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date;
};

export const getDiscountEndTime = (hoursFromNow: number): Date => {
  const date = new Date();
  date.setHours(date.getHours() + hoursFromNow);
  return date;
};

export const getDiscountEndMinutes = (minutesFromNow: number): Date => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + minutesFromNow);
  return date;
};

// Predefined discount dates for consistent testing
export const DISCOUNT_DATES = {
  SHORT: new Date('2024-12-20T23:59:59'),
  MEDIUM: new Date('2024-12-25T23:59:59'),
  LONG: new Date('2024-12-28T23:59:59'),
  VERY_LONG: new Date('2024-12-30T23:59:59'),
  EXTENDED: new Date('2024-12-31T23:59:59'),
}; 
 