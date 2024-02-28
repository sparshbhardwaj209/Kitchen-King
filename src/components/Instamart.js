import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 bg-slate-100 p-2 m-2 ">
      <h1 className="font-light text-lg">{title}</h1>
      {isVisible ? (
        <button
          className="cursor-pointer text-sm italic font-mono"
          onClick={() => setIsVisible(false)}
        >
          Hide ⬆
        </button>
      ) : (
        <button
          className="cursor-pointer italic font-mono"
          onClick={() => setIsVisible(true)}
        >
          Show ⬇
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  //   const [sectionConfig, setSectionConfig] = useState({
  //     showAbout: false,
  //     showTeam: false,
  //     showCareer: false,
  //   });

  const [visibleSection, setVisibleSection] = useState("");

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold p-2 m-2">FAQs</h1>
        <Section
          title={"I want to partner my restaurant with Kitchen King"}
          description={
            "Send an Email to us at support@kitchenking.com"
          }
          //   isVisible={sectionConfig.showAbout}
          isVisible={visibleSection == "partner"}
          setIsVisible={() => setVisibleSection("partner")}
        />

        <Section
          title={"What are the mandatory documents needed to list my restaurant on Kitchen King?"}
          description={
            `-  Copies of the below documents are mandatory
            -  FSSAI Licence OR FSSAI Acknowledgement
            -  Pan Card
            -  GSTIN Certificate
            -  Cancelled Cheque OR bank Passbook
            -  Menu`
          }
          isVisible={visibleSection == "mandatory document"}
          setIsVisible={() => setVisibleSection("mandatory document")}
        />

        <Section
          title={"After I submit all documents, how long will it take for my restaurant to go live on Kitchen King?"}
          description={
            "After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform."
          }
          isVisible={visibleSection == "live"}
          setIsVisible={() => setVisibleSection("live")}
        />
        <Section
          title={"What is this one time Onboarding fees? Do I have to pay for it while registering?"}
          description={
            "This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Kitchen King."
          }
          isVisible={visibleSection == "fees"}
          setIsVisible={() => setVisibleSection("fees")}
        />
        <Section
          title={"How much commission will I be charged by Kitchen King?"}
          description={
            "The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled."
          }
          isVisible={visibleSection == "commission"}
          setIsVisible={() => setVisibleSection("commission")}
        />
      </div>
    </>
  );
};

export default Instamart;
