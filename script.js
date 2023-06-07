   function romanToArabic(romanNumber) {
      var romanToArabicMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };

      var arabicNumber = 0;
      var previousValue = 0;

      for (var i = romanNumber.length - 1; i >= 0; i--) {
        var currentValue = romanToArabicMap[romanNumber[i]];
        if (currentValue >= previousValue) {
          arabicNumber += currentValue;
        } else {
          arabicNumber -= currentValue;
        }
        previousValue = currentValue;
      }

      return arabicNumber;
    }
    
    function convertRomanToArabic() {
      var romanNumber = document.getElementById('romanNumber').value;
      var arabicNumber = romanToArabic(romanNumber);
      document.getElementById('arabicNumber').innerHTML = arabicNumber;
    }