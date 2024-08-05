/*So function app and so you see that usually we use  a component called app as the root componentof our application.  So basically as the component that is the parent component  of all the other components. */

import { useState } from "react";

// eslint-disable-next-line
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //useState ,useEffect,useReducer are called React Hooks
  //also we are allowed to call useState inside the Top level of App component ,so outside this App we cannot call useState ,also not inside any other component or if statement or function or anything so only on top level
  const [step, setStep] = useState(1); //this whole section is explained in lec 60
  const [isOpen, setIsOpen] = useState(true);

  // const [test,setTest] = useState({ name: 'Jonas' });

  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1);
      setStep((s)=>s-1);
    }

    /*
    let step = 1;
    step = step + 1;
Now, right now we have this step state here,defined as a const variable and so we would not be able to even change it.So, let's change this to a let and so then we can actually break this.So, let's say the tier in handle next, instead of updating the state in the correct way, we would do it like this.So, step equal step plus one. That would be a perfectly normal way of updating a variable defined with let, right? And so right now, this is a let variable,so a variable that we can update. And so again, this would be a perfectly normal way of updating variables in JavaScript.But let's see what now happens when we click this button. Well, simply nothing happens.So, we don't get any error from React, but simply nothing happens. And so, the reason for that is that React has no way of knowing that this is actually trying to update the state.So, React has no magic way of knowing that this here is the state variable and that this operation is basically updating it.So again, React doesn't know about that and that's why React provided us with this setter function here, which is a functional way of updating the state value, but without mutating it.Because here we are directly mutating now this step variable, right?But React is all about immutability.And so, therefore, we can only update the state using the tools that React gives us.So, in this case, this set step function.And so this setter function is actually tied to this state variable right here.So, when we use this functional way of updating the state, then React does know that this is the state variable that should be updated, okay?So never do this mistake, just always use const and always use the setter function, okay?
*/
  }
  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);
      // setStep(step + 1);//now in theory it here "setStep" is present twice so it should update the state twice but it doesnt happens
      //we should pass a callback function here in place of step+1
      setStep(s=>s+1);//so after we used callback function it will update the state twice
      // setStep(s=>s+1);
    }

    //mutating👇 the object directly without using the setter function is a bad practice although it will render the change but its bad coz react is all about immutability and here we are mutating the variable not updating the state
    // test.name = 'Fred';
    //instead we do this👇
    // setTest({ name: 'Fred' });//here we are updating the variable
    /*Now,👆 when we're not setting state based on the current state, then of course we can just pass in the value as normal. So, just like we did here, for example. So, that also happens sometimes. And so in that case, we need no callback. Then, we just pass in the new state value, as we do here. */

  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(is =>!is)}>
        &times;
      </button>
      {/*'&times;'--> will give X as like the close button */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}:{messages[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            {/* So this is how we handle events The React way. no addEventListeners,👇 but instead we specify an event listener function directly on the element using, in this case, the onClick prop.   {also like if we write onMouseEnter={value} then the value would be immediately called instead we should define a callback function so that it happens only when the event} {onMouseEnter={()=>alert('TEST')}}*/}
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
//if we created the  same steps twice then changed a state in one step component the other component step will not change so every component stays isolated lec 67 at 5min