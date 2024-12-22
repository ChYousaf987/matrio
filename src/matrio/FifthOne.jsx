import React, { useState } from 'react';

const FifthOne = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const questions = [
    {
      id: 1,
      question: 'What is included in the package?',
      answer: 'Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.',
    },
    {
      id: 2,
      question: 'How do I start my next project?',
      answer: 'Regular license can be used for end products that do not charge users for access or service(access is free and there will be no monthly subscription fee). Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains(unique setup). For more info on regular license you can check official description.',
    },
    {
      id: 3,
      question: 'Is customer support available?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid quaerat possimus maxime! Mollitia reprehenderit neque repellat deleniti delectus architecto dolorum maxime, blanditiis earum ea, incidunt quam possimus cumque.',
    },
    {
      id: 4,
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid quaerat possimus maxime! Mollitia reprehenderit neque repellat deleniti delectus architecto dolorum maxime, blanditiis earum ea, incidunt quam possimus cumque.',
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index) // Close if already open
        : [...prevIndices, index] // Open if closed
    );
  };

  return (
    <>
      <div className="container-field py-5" style={{ backgroundColor: '#F4F5FA' }}>
        <div className="col-lg-5 text-center mx-auto">
          <h5>
            <b className="fs-4">Everything you need</b> to start your next project
          </h5>
          <p className="text-secondary">
            Not just a set of tools, the package includes ready-to-deploy conceptual applications.
          </p>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <img
                src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/sitting-girl-with-laptop.png"
                className="w-75"
                alt="Sitting girl with a laptop"
              />
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column gap-3">
                {questions.map((item, index) => (
                  <div key={item.id} className="card p-3 shadow">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="   ">{item.question}</h6>
                      <i
                        className={`bi ${
                          openIndices.includes(index) ? 'bi-dash' : 'bi-plus'
                        }  fs-4`}
                        style={{
                          
                          cursor: 'pointer',
                        }}
                        onClick={() => toggleAnswer(index)}
                      ></i>
                    </div>
                    {openIndices.includes(index) && <p className="para mt-3">{item.answer}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthOne;
