import React from 'react';
import  { useState } from 'react';
import "./User.css";
import UserAvatar from '../Avatar/UserAvatar';

const User = () => {
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [answers, setAnswers] = useState({});
  
    const domains = ['Medical', 'Engineering', 'MBA'];
  
    const questions = {
      Medical: 
      ['Do you have a genuine interest in healthcare and helping people?', 
      'Are you comfortable with a more extended period of education and training?', 
      'Do you have strong empathy and communication skills?', 
      'Are you able to handle stress and pressure well?', 
      'Are you interested in a profession where continuous learning is a norm?'],
  
      Engineering: 
      ['Are you interested in technology and problem-solving?', 
      'Do you enjoy mathematics and science subjects?',
      'Are you interested in creating and innovating new technologies?', 
      'Do you prefer hands-on, practical work?', 
      'Are you open to continuous learning and adapting to new technologies?'],
  
      MBA: 
      ['Are you interested in business, management, and leadership roles?', 
      'Do you have an interest in strategy, finance, marketing, or entrepreneurship?', 
      'Do you enjoy working in a dynamic and diverse environment?', 
      'Are you interested in climbing the corporate ladder or starting your own business?', 
      'Do you have strong interpersonal and leadership skills?'],
    };
  
    const handleDomainChange = (domain) => {
      setSelectedDomain(domain);
      setSelectedQuestion(null);
      setAnswers({});
    };
  
    const handleQuestionChange = (question) => {
      setSelectedQuestion(question);
  
      let answer;
      switch (question) {
        case 'Do you have a genuine interest in healthcare and helping people?':
          answer ='Medicine is a service-oriented profession where you directly contribute to improving peoples health.';
          break;
        case 'Are you comfortable with a more extended period of education and training?':
          answer = 'Medical education and training typically take a significant number of years.';
          break;
        case 'Do you have strong empathy and communication skills?':
          answer = 'Good communication and empathy are essential for interactions with patients and colleagues.';
          break;
        case 'Are you able to handle stress and pressure well?':
          answer = 'Medical professionals often face high-pressure situations, and resilience is crucial.';
          break;
        case 'Are you interested in a profession where continuous learning is a norm?':
          answer = 'Medicine requires staying updated with the latest advancements in healthcare.';
          break;
        
        case 'Are you interested in technology and problem-solving?':
          answer = 'Engineering often involves applying scientific principles to design and build solutions.';
          break;
        case 'Do you enjoy mathematics and science subjects?':
          answer = 'Engineering programs usually require a strong foundation in mathematics and sciences.';
          break;
        case 'Are you interested in creating and innovating new technologies?':
          answer = 'Engineers play a crucial role in developing new products, systems, and technologies.';
          break;
        case 'Do you prefer hands-on, practical work?':
          answer = 'Engineering often involves practical applications and projects.';
          break;
        case 'Are you open to continuous learning and adapting to new technologies?':
          answer = 'Technology evolves rapidly, and engineers need to stay updated.';
          break;
  
  
        case 'Are you interested in business, management, and leadership roles?':
          answer = 'MBA programs focus on developing business and managerial skills.';
          break;
        case 'Do you have an interest in strategy, finance, marketing, or entrepreneurship?':
          answer = 'MBA programs offer specializations in various business areas.';
          break;
        case 'Do you enjoy working in a dynamic and diverse environment?':
          answer = 'Business environments often involve dealing with diverse teams and challenges.';
          break;
        case 'Are you interested in climbing the corporate ladder or starting your own business?':
          answer = 'An MBA can open doors to leadership positions and entrepreneurship.';
          break;
        case 'Do you have strong interpersonal and leadership skills?':
          answer = 'MBA programs often seek individuals with leadership potential.';
          break;
    
  
        default:
          answer = 'Default answer logic here.';
          break;
      }
  
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [question]: answer,
      }));
    };
  return (
    <div className='usermain'>
    <div className='usernav'>
        <div className='charbotname'  class="text text-white"> Chatbot</div>
        <div className='Username ' class=" username text text-white"><UserAvatar></UserAvatar></div>
        <div className='Logout'>
            <button class='btn btn-danger'>Logout</button>
        </div>
    </div>

  <div className='question'>
    <h2>Main Domains:</h2>
      {domains.map((domain) => (
        <label key={domain}>
          <input
            type="radio"
            name="domains"
            value={domain}
            checked={selectedDomain === domain}
            onChange={() => handleDomainChange(domain)}
          />
          {domain}
        </label>
      ))}

      {selectedDomain && (
        <div>
          <h2>Questions for {selectedDomain}:</h2>
          {questions[selectedDomain].map((question) => (
            <div key={question}>
              <label>
                <input
                  type="radio"
                  name="questions"
                  value={question}
                  checked={selectedQuestion === question}
                  onChange={() => handleQuestionChange(question)}
                />
                {question}
                {selectedQuestion === question && answers[question] && (
                  <div>
                    <h3>Answer:</h3>
                    <p>{answers[question]}</p>
                  </div>
                )}
              </label>
            </div>
          ))}
        </div>
      )}  
    </div>
</div>
  )
}

export default User