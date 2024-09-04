import styles from "../style";
import Button from "./Button";
import { useLocation } from 'react-router-dom';
const CTA = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const param1Value = queryParams.get('aff'); 


  // const handleSubmit = async () => {
  //   try {
  
  //     const body = {
        
  //         partner: {
  //             key: "rdYVuzIyWXg9"
  //         },
  //         key: "han",
  //         email: "customer@pao.com",
  //         name: "Partero"
      
  //   }
  //     const response = await fetch("https://api.partnero.com/v1/customers", {
  //       method: "POST",
  //       headers: {
  //         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiZmUxOGRhMDQ5OWUzMzBlMDgxM2MyMDU4N2U4M2NjNDc3ZDliYTY2YjU0YWYxMTkzYWI3NDkwNTk1NjNkNzVkZDNjZjhhNzRhY2UwMDI2NGEiLCJpYXQiOjE3MjUzNTQ0NzEuMTg5MjI0LCJuYmYiOjE3MjUzNTQ0NzEuMTg5MjI3LCJleHAiOjQ4ODEwMjgwNzEuMTg0NjY2LCJzdWIiOiIxMjMzMiIsInNjb3BlcyI6W119.ZNUVWM5XM6qHUxsPg4ItgxCHc2ot0xWIwKwMhgZMzeaoh25_brOf_2pSvv_nL0PMqSHdYqDgtj28Q2bFe1pBuOrJICOKTdmw6Fvbin4rS7aG32fPpa7zYsgvt6VDx67psfB-7ZPOWMZJKmQkm8U_3D1P9BYb4aj1-XNn-UteCqIXUAu3wbnmvT568kz5aNCFIzMogSamSMLV6RrCb2nyxDCLGlRmlu6nekL1XVgMSishII2djTvuY35aqrdaKeTZhe8YTMV_9oubkquUfiVhxHIHJ7_n0Sko5p_dnceTEfqM8OK2zM3QIGXdWn9FlI357q6dl8h9-6qrS_NSWe-SPhuB3xGYrLj1agXDVB3jfR_JCFXoopFUR601BwsZIhkLJfF2J0QqDmwX6bkKHRYOISpVh_rc0Lpx5LmNygL17Lnt2egjnORLzjUKkRGDxD0ZVN03QX7ylodX8DhergreOdx4rYuA-0DmPVREVfODAaOq8IywKBmkZw66TQ9fpXf0o6-E7Qu6c0qvPD4pPL_Hoin3qsScJ0y1D-_Na3-t7FCtVws6jouEuNNV-q0EC6I8QDa-o2aVZs6akNqWd3AXwuicf-OrzU0e0sN9lLQajiSJeAmPqbu33BZ_3ZEDgIftSCl8Vuwtd6IMgZLY_7K_IIAKteYOgBwR9cKw81DNDtY',
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     if (response.status !== 200) {
  //       throw new Error("Something went wrong");
  //     }
  //     const data = await response.json();
  //     console.log(data)
  //   } catch (err) {
  //     // return toast.error(err.message);
  //   } 
  // };
  
    const handleTransaction = async () => {
      try {
        const response = await fetch('/api/hello', { // Adjust the endpoint if needed
          method: 'POST',
          body: JSON.stringify('')
        });
  
        if (!response.ok) { // Check if the response status is not OK (e.g., 4xx or 5xx)
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log(data); 
      } catch (error) {
        console.error('Error recording transaction:', error);
        // setTransactionStatus({ success: false, message: 'Error recording transaction' });
      }
    };
  
return(
  <section id="contact" className={`mx-4 ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-gray-gradient rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We are your trusted partners for creating stunning websites, delivering insightful analytics, and refining code for a better digital world through our innovative and modern approach.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
      <button className="bg-white" onClick={handleTransaction}>helloo</button>
    </div> 
  </section>
)
  }

export default CTA;
