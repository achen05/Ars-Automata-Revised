var sequence = [
  'ARS AUTOMATA',
  'ARS AUTOMATA',
  'A10 A1TOM1TA',
  '1R0 A1T0MAT1',
  'A0S A0011A0A',
  '10S A0TO1A0A',
  'ARS AUTOMATA',
  '0RS 1U11MATA',
  'ARS 1UT1MAT1',
  'A10 AUT1MA0A',
  '110 01T1M1TA',
  '0RS 0UTOMATA',
  'ARS AUTOMATA',
  'AR0 AUT0M1T0',
  'ARS 1UTO0ATA',
  '0RS AU1O0ATA',
];

        textSequence(0);
        function textSequence(i) {

            if (sequence.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = sequence[i];
                    textSequence(++i);
                }, 50); // 1 second (in milliseconds)

            } else if (sequence.length == i) { // Loop
                textSequence(0);
            }

        }
