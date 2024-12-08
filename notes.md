line 290 = id: Date.now() + performance.now() + Math.floor(Math.random() * 100)

    - Date.now(): Generates a timstamp in milliseconds since January 1st, 1970

    - Performance.now(): Measures time down to a fraction of a millisecond

    - Math.random(): Generates a random decimbal between 0 and 1

    - Math.random() * 100: Multiplies the random decimal by 100, resulting in a number between 0 and 100

    - Math.floor(): Rounds down to the nearest whole number

All Together: Generates a random decimal between 0 and 1, multiplies it by 100, and then rounds it down to the nearest whole number. This result is then added to the timestamp from Date.now() to produce a unique ID.


