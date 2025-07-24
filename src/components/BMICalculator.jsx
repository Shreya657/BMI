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
      const [banger, setBanger] = useState("");
      const [share,setShare]=useState(false);


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
    setShare(true);
  } else if (bmi < 25) {
    setType("Normal 😊");
    setMessage("You slayed! 🔥 Keep it up champ 💪 ");
    setBanger("Now share this with those who body-shamed you for no reason. Burn their ass 🔥");
     setShare(true);
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
  
  const BmiLink='https://bmi-burner.vercel.app/'
const shareText=`bitch, im healthy. but are you?? check yours 👉 ${BmiLink}`

const encodedText=encodeURIComponent(shareText);



const shareLinks={
    whatsapp: `https://wa.me/?text=${encodedText}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
   
}

const handleShareClick=()=>{
    window.open(shareLinks.twitter,'_blank')
};

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
            <h4 style={{color: "black"}}>calculating BMI...</h4>
        )
        : bmi ?
        (
        
            <><h4 style={{color: "black"}}>your BMI= {bmi}</h4>
               <h3 style={{color: "black"}}>your catagory is : {type}</h3>
               <h4 style={{color: "black"}}>{message}</h4>
               <h5 style={{color: "black" ,paddingTop:"20px"}}>{banger}</h5>
            </>
        )
     : null}
 
{share && (
  <>
 <h4 style={{color: "black", fontSize:"15px" }} >Share on:</h4>

    <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer"  ><img style={{width:"25px", height:"25px"}} src="https://imgs.search.brave.com/_Yv9QJapYAaeUDQpj_Q0a8fCdNrcw90GYVXiQdlbltw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0Lzk5LzIzLzkw/LzM2MF9GXzE0OTky/MzkwMDBfdGJneE5J/am01RmFmamd2eTR2/bmEybmtHMDg4QzlT/dVYuanBn" alt="WhatsApp" /></a> &nbsp;&nbsp;
    <a href={shareLinks.twitter} target="_blank" rel="noreferrer"><img style={{width:"25px", height:"25px"}} src="https://imgs.search.brave.com/pObWiIXiBY-cow6kKEpPvq-sxL8FX-AJ40XJ_6_2ik4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92ZWN0/b3JzZWVrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/Ny9Ud2l0dGVyLVgt/TG9nby1WZWN0b3It/MDEtMi5qcGc" alt="Twitter" /></a> &nbsp;&nbsp;
  </>
)}
    </div>
  )
}

export default BMICalculator
