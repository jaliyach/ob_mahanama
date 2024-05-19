import { useState } from "react";
import { BiSolidCircle } from "react-icons/bi";
const CardPopup = ({ isOpen, onClose, cardData }) => {

  const adultticketprice = 23.5;
  const childticketprice = 10.5;

  const maxAdultCount = 9;
  const minAdultCount = 0;


  const maxChildCount = 4;
  const minChildCount = 0;



  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const [total, setTotal] = useState(0);
  // eslint-disable-next-line
  const handleIncrement = () => {

    if(count < maxAdultCount  ){

      setCount(count + 1);
      setTotal(adultticketprice +total);
    }

   
  };
  // eslint-disable-next-line
  const handleDecrement = () => {
    if(count > minAdultCount  ){
    setCount(count - 1);
    setTotal(total-adultticketprice );
    }
  };

  const handleIncrementChild = () => {
    if(count2 < maxChildCount  ){
    setCount2(count2 + 1);
    setTotal(childticketprice +total);
    }
  };
  // eslint-disable-next-line
  const handleDecrementChild = () => {
    if(count2 > minChildCount  ){
    setCount2(count2 - 1);
    setTotal(total - childticketprice );
    }
  };

  const resetCount = () => {
    setCount(0);
    setCount2(0);
    setTotal(0);
  };



  if (!isOpen) return null;

  return (
    <div className="card-popup-overlay" >
      <div className="card-popup">
        <div className="card-popup-content">

          <div class="card custom-card">
            <div class="card-header custom-card">
              Please fill Below   

            </div>
            <div class="card-body custom-card">



              {/* Display card content here 
              <h2>{cardData.title}</h2>
              <p>{cardData.description}</p>*/}

              <div class="form-group">

                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"></input>
                <small id="emailHelp" class="form-text text-muted">Please enter name</small>
              </div>

              <div class="form-group">

                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">

                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Mobile No"></input>
                <small id="emailHelp" class="form-text text-muted">Add Mobile</small>
              </div>

              <div class="form-group">

                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Membership No"></input>
                <small id="emailHelp" class="form-text text-muted">Please add membership No</small>
              </div>

              <div class="row">
              .
                <br></br>
              </div>

              <div class="form-group">
              <small id="emailHelp" class="form-text text-muted">adult Ticket   :  $23.5</small>
                <div class="row">
                  <div className="col">Add Adult Ticket</div>
                  <div className="col">
                  <i class="bi bi-dash" onClick={handleDecrement}></i>

                    <span style={{ color: "black", fontSize: "1.6em", position: "relative", left: "29px", top: "5px"}}>{count}</span>
                    <BiSolidCircle size={45} color="gold"></BiSolidCircle>

                    &nbsp;&nbsp;
                    <i class="bi bi-plus" onClick={handleIncrement}></i>


                   
                  </div>
                </div>
              </div>

              <div class="row">
                .
                <br></br>
              </div>


              <div class="form-group">
              <small id="emailHelp" class="form-text text-muted">Child Ticket   :  $10.5</small>
                <div class="row">
                  <div className="col">Add Child Ticket</div>
                  <div className="col">
                   
                    <i class="bi bi-dash" onClick={handleDecrementChild}></i>

                    <span style={{ color: "black", fontSize: "1.6em", position: "relative", left: "29px", top: "5px"}}>{count2}</span>
                    <BiSolidCircle size={45} color="gold"></BiSolidCircle>

                    &nbsp;&nbsp;
                    <i class="bi bi-plus" onClick={handleIncrementChild}></i>

                   
                  </div>
                </div>
              </div>

              <div class="row">
              .
                <br></br>
              </div>

              <div className="row">
                <div className="col">
                  <button type="submit" class="btn btn-warning">Submit</button>
                </div>
                <div className="col">
                  <button type="submit" class="btn btn-outline-dark" onClick={resetCount}>Clear</button>
                </div>
                <div className="col">
                  <button type="submit" class="btn btn-outline-dark" onClick={onClose}>close</button>
                </div>

                <div className="col">
                <div className="row ">
                <div className="custom-text">
                 Total  $: {total}
                  </div>
                  
              
                </div>
                </div>
              </div>



            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CardPopup;