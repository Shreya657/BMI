import React, { use, useState } from 'react'
import "./BMI.css"

const BMICalculator = () => {

    const [weight,setWeight]=useState("");
    const [feet,setfeet]=useState("");
    const[inches,setInches]=useState("");
    const [bmi,setBmi]=useState(null);
    const [type,setType]=useState("");
       const [bmiVal,setBmiVal]=useState(null);
    const [loading,setLoading]=useState(false);
    const [message, setMessage] = useState("");



    const calculateBMI=()=>{
        if(!weight || !feet || !inches){
            return alert("bitch fill all the box you duffer");
        }
        setLoading(true);
       setTimeout(() => {
         const inchesNum=parseFloat(inches);
         const TotalInInches=(feet*12)+inchesNum;
         const totalInMeters=TotalInInches*0.0254;
         const bmi=weight/(totalInMeters*totalInMeters);
         const roundBmi=bmi.toFixed(2);
         setBmi(roundBmi);
 
        //  setType(getType(bmi));


         if (bmi < 18.5) {
    setType("Underweight 😕");
    setMessage("Eat some food! I'm concerned for you. Take care 🌸");
  } else if (bmi < 25) {
    setType("Normal 😊");
    setMessage("You slayed! 🔥 Keep it up champ 💪");
  } else if (bmi < 30) {
    setType("Overweight 😬");
    setMessage("You’re cute but try going for a walk 😅");
  } else {
    setType("Obese 😟");
    setMessage("Go to gym, work out, and take care of yourself! 'Cause if you don't, who will? 🫶");
  }

         setLoading(false);
       }, 2000);
  
    
        

    }

    const getType=(bmi)=>{
          if (bmi < 18.5) return "Underweight 😕";
    if (bmi < 25) return "Normal 😊";
    if (bmi < 30) return "Overweight 😬";
    return "Obese 😟";
    }
  
//   const quizLink='https://are-u-enterpenter-xndr.vercel.app/'
// const shareText=`🏆Hey, I scored ${percentage}% on the Entrepreneur Mindset Quiz and earned the badge: "${badge}"! 
// Check your score now at ${quizLink}`

// const encodedText=encodeURIComponent(shareText);
// const navigate=useNavigate();


// const shareLinks={
//     whatsapp: `https://wa.me/?text=${encodedText}`,
//     twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
   
// }

// const handleShareClick=()=>{
//     window.open(shareLinks.twitter,'_blank')
// };

  return (
    <div className='parent'>
        <div className='cls1'>
      <h1>Calculate your BMI bitch!</h1>
      <input type="number"  placeholder='weight' onChange={(e)=>setWeight(e.target.value)}/>
      <h3>Now give your height!</h3>
      <input type="number" placeholder='ft' onChange={(e)=>setfeet(e.target.value)} />
      <input type="number" placeholder='inches' onChange={(e)=>setInches(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
    
        {loading ? (
            <h4>calculating BMI...</h4>
        )
        : bmi ?
        (
        
            <><h4>your BMI= {bmi}</h4>
               <h3>your catagory is : {type}</h3>
               <h4>{message}</h4>
            </>
        )
     : null};


    
        <h4>Now share this with those who body-shamed you for no reason. Burn their ass</h4>
   


   <h4>share on:</h4>
        {/* <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer">📱 WhatsApp</a> &nbsp;|&nbsp;
        <a href={shareLinks.twitter} target="_blank" rel="noreferrer">🐦 X</a> &nbsp;|&nbsp;
        <a href={shareLinks.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a> &nbsp;|&nbsp;  */}
    </div>
  )
}

export default BMICalculator
