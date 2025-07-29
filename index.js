const express = require('express');
const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
    // 1. Get input array
    const input = req.body.data;

    // INIT: Prepare response structure
    let even_numbers = [], odd_numbers = [], alphabets = [], special_characters = [];
    let all_alphabets = [];

    // 2. Process input
    let sum_numbers=0;
    input.forEach(item => {
        // Check if number (string of digits)
        if (/^\d+$/.test(item)) {
            Number(item) % 2 === 0
              ? even_numbers.push(item)
              : odd_numbers.push(item);
              sum_numbers+=Number(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            all_alphabets.push(item);
        } else {
            special_characters.push(item);
        }
    });

    // 3. Formulate response
    res.json({
        is_success: true,
        user_id: "fahaam_khan_15062004",
        email: "fahaam309.be22@chitkara.edu.in",
        college_roll_number: "2210990309",
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        sum:sum_numbers.toString(),
        combined_alphabets: all_alphabets.reverse().join(''),
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});