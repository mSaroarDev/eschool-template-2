import convertToBanglaNumber from "./convertNumbertoBangla";

function extractDateFromTimestamp(timestamp) {
  var parts = timestamp.split("T");

  var datePart = parts[0];

  var dateComponents = datePart.split("-");

  var day = dateComponents[2];

  // The first part (parts[0]) contains the date in "YYYY-MM-DD" format
  return convertToBanglaNumber(day);
}

export default extractDateFromTimestamp;

export const getBanglaMonthNameFromTimestamp = (timestamp) => {
  // Convert timestamp to Date object
  var dateObj = new Date(timestamp);

  // Get the month number (0-indexed)
  var monthNumber = dateObj.getMonth() + 1; // Adding 1 to match 1-based month number

  // Define an array with Bangla month names
  var banglaMonths = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];

  // Return the Bangla month name corresponding to the monthNumber
  return banglaMonths[monthNumber - 1]; // Adjusting for 0-based index
};
