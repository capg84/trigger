// const Advice = () => {
//   return (
//     <div>
//       <div className="currentPageIdentifier">
//         <p style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }}>
//           <a
//             style={{ color: "#AD7940", padding: "2vh", fontSize: "30px" }}
//             className="item-link"
//             href="/"
//           >
//             HOME
//           </a>
//           / PET CARE ADVICE
//         </p>
//       </div>

//       {/* <main className="petcare-advice"></main> */}
//     </div>
//   );
// };

// export default Advice;

import Card from "../Components/advice-cards";
import "../Assets/Styles/advice.css";

const Advices = () => {
  const advices = [
    {
      title: "RSPCA",
      image:
        "https://user-images.githubusercontent.com/97121483/206520527-f74e2c73-f2c1-4fb4-ad04-b62f98890d47.png",
      description:
        "The Royal Society for the Prevention of Cruelty to Animals (RSPCA) has been here for animals since 1824. RSPCA is the world's oldest and largest animal welfare charity, with the primary focus of rescuing, rehabilitating and rehoming or releasing animals across England and Wales.",
      liveUrl: "https://www.rspca.org.uk/adviceandwelfare",
    },
    {
      title: "Blue Cross",
      image:
        "https://user-images.githubusercontent.com/97121483/206528434-010e0e79-a616-4399-8c13-731d10b50f0f.png",
      description:
        "The Blue vision is that every pet will one day enjoy a healthy life in a happy home. Thier aim is to improve the welfare and quality of life for all pets by developing knowledge, attitudes and behaviours through education.",
      liveUrl: "https://www.bluecross.org.uk/pet-advice",
    },
    {
      title: "RSPB",
      image:
        "https://user-images.githubusercontent.com/97121483/206531601-edd7c700-1575-40f8-b85b-63d03af2ff5d.png",
      description:
        "The Royal Society for the Protection of Birds (RSPB) is the largest nature conservation charity in the United Kingdom, consistently delivering successful conservation, forging powerful new partnerships with other organisations and inspiring others to stand up and give nature the home it deserves.",
      liveUrl: "https://www.rspb.org.uk/fun-and-learning/",
    },
  ];

  return (
    <div>
      <Card advices={advices} />
    </div>
  );
};

export default Advices;
