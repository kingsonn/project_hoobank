const express = require('express');
const cors = require('cors'); // Enable CORS for requests from your React app
const app = express();
const port = process.env.PORT || 3001; // Use Vercel's assigned port or a default

app.use(cors());
app.use(express.json()); // To parse JSON request bodies
app.use(express.static(path.join(__dirname,'/dist')))
// Define your API routes here
app.get('/api/hello', async(req, res) => {
  try {
  
    const body = {
      
        partner: {
            key: "rdYVuzIyWXg9"
        },
        key: "hangjcvgnnnnnnnnn",
        email: "customelkmklmlkmlkhhhr@partnero.com",
        name: "Parntjljklmnero"
    
  }
    const response = await fetch("https://api.partnero.com/v1/customers", {
      method: "POST",
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiZmUxOGRhMDQ5OWUzMzBlMDgxM2MyMDU4N2U4M2NjNDc3ZDliYTY2YjU0YWYxMTkzYWI3NDkwNTk1NjNkNzVkZDNjZjhhNzRhY2UwMDI2NGEiLCJpYXQiOjE3MjUzNTQ0NzEuMTg5MjI0LCJuYmYiOjE3MjUzNTQ0NzEuMTg5MjI3LCJleHAiOjQ4ODEwMjgwNzEuMTg0NjY2LCJzdWIiOiIxMjMzMiIsInNjb3BlcyI6W119.ZNUVWM5XM6qHUxsPg4ItgxCHc2ot0xWIwKwMhgZMzeaoh25_brOf_2pSvv_nL0PMqSHdYqDgtj28Q2bFe1pBuOrJICOKTdmw6Fvbin4rS7aG32fPpa7zYsgvt6VDx67psfB-7ZPOWMZJKmQkm8U_3D1P9BYb4aj1-XNn-UteCqIXUAu3wbnmvT568kz5aNCFIzMogSamSMLV6RrCb2nyxDCLGlRmlu6nekL1XVgMSishII2djTvuY35aqrdaKeTZhe8YTMV_9oubkquUfiVhxHIHJ7_n0Sko5p_dnceTEfqM8OK2zM3QIGXdWn9FlI357q6dl8h9-6qrS_NSWe-SPhuB3xGYrLj1agXDVB3jfR_JCFXoopFUR601BwsZIhkLJfF2J0QqDmwX6bkKHRYOISpVh_rc0Lpx5LmNygL17Lnt2egjnORLzjUKkRGDxD0ZVN03QX7ylodX8DhergreOdx4rYuA-0DmPVREVfODAaOq8IywKBmkZw66TQ9fpXf0o6-E7Qu6c0qvPD4pPL_Hoin3qsScJ0y1D-_Na3-t7FCtVws6jouEuNNV-q0EC6I8QDa-o2aVZs6akNqWd3AXwuicf-OrzU0e0sN9lLQajiSJeAmPqbu33BZ_3ZEDgIftSCl8Vuwtd6IMgZLY_7K_IIAKteYOgBwR9cKw81DNDtY',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status !== 200) {
        // res.json({ message: 'Hello from the backend! hellooo' });
    }
    const data = await response.json();
    res.json({ message: data });

    console.log(data)
  } catch (err) {
    res.json({ message: err.message });
} 
});

// ... other routes ...

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});