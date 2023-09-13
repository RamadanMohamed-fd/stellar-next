import React from "react";
const data = [
  {
    title: "Get Your Free Audit Now!",
    sup: [
      "Is your social media performance falling short of expectations? We understand the challenges businesses face when it comes to optimizing their social media strategies. As a token of our commitment to helping you succeed, we are offering a complimentary Social Media Audit and Action Plan for clients who receive a low score on our assessment.",
    ],
  },
  {
    title: "Here's what you'll receive:",
    sup: [
      "Social Media Audit: Our experts will conduct a thorough evaluation of your current social media presence, analyzing key metrics, content strategy, audience engagement, branding consistency, and more. This comprehensive audit will identify areas for improvement and highlight untapped opportunities",
      "Customized Action Plan: Based on the findings of the audit, we will create a tailored Action Plan specifically designed to address the shortcomings and maximize the potential of your social media channels. This plan will provide actionable steps, strategic recommendations, and best practices to elevate your social media performance.",
      "Expert Recommendations: Our team of experienced social media professionals will provide personalized recommendations based on industry trends and your specific business goals. These insights will help you navigate the ever-changing social media landscape and stay ahead of your competitors.",
      "Consultation Session: To ensure you have a clear understanding of the Action Plan and recommendations, we will schedule a consultation session to discuss the findings in detail. This session will provide an opportunity to ask questions, clarify strategies, and gain valuable insights from our experts.",
      "Take the first step toward transforming your social media presence and driving better results. Contact us today to claim your free Social Media Audit and Action Plan. Let us partner with you to unlock the true potential of your social media channels and achieve your business objectives.",
    ],
  },
];
const Get = () => {
  <div className="w-[90%] bg-red-900 text-center  m-auto my-10 ">
    <h2 className="title1 text-8xl par font-bold ">Get Your Free Audit Now!</h2>
    {/* <div className=" text-left my-8">
    {data.map((ele, i) => (
      <div key={i}>
        <h3 className="text-4xl font-bold my-2">{ele.title}</h3>
        <div>
          {ele.sup.map((s, i) => (
            <div key={i * 2}>
              <p calssName="text-2xl my-4">{s}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div> */}
  </div>;
};

export default Get;
