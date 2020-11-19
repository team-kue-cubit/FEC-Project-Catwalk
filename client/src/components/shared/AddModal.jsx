import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';



const AddModal = (props) => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

    var body;
  if (props.type === 'verify') {
      if (props.bod && props.user && props.email && open) {
          axios.post(`http://3.21.164.220/qa/questions/`, {body: props.bod, name: props.user, email: props.email, product_id: props.pid})
          .then(() => {
              console.log('post success meow');
          })
          .catch((err) => {
              console.log(err);
          })
        body = (
            <div
          style={{
            backgroundColor: "whitesmoke",
            height: "400px",
            width: "600px",
            position: "fixed",
            top: "20%",
            left: "20%",
          }}
        >
          <h2 id="modal-title">{props.title}</h2>
          <h3 id="modal-description">In relation to the {props.prodName}</h3>
          
          <div>Thank you for your submission!</div>
          <div></div>
          </div>
        );
      } else {
        body = (
            <div
          style={{
            backgroundColor: "whitesmoke",
            height: "400px",
            width: "600px",
            position: "fixed",
            top: "20%",
            left: "20%",
          }}
        >
          <h2 id="modal-title">OOPS!</h2>
          <h3 id="modal-description">In relation to the {props.prodName}</h3>
          <div>Please fix your submission. Required input values are missing or invalid</div>
          <div></div>
          </div>
        ); 
      }
  } else {
      var answerDesc = '';
  if (props.question !== undefined) {
      answerDesc = `${props.prodName}: ${props.question}`;
  }
  else {
      answerDesc = `About the ${props.prodName}`;
  }
  body = (
    <div
      style={{
        backgroundColor: "white",
        height: "400px",
        width: "50%",
        position: "fixed",
        border: 'solid',
        borderWidth: '4px',
        borderColor: 'black',
        outline: 'none',
        top: "10%",
        left: "25%",
      }}
    >
      <h2 id="modal-title">{props.title}</h2>
      <h3 id="modal-description">{answerDesc}</h3>
      <textarea
        style={{ marginLeft: '4%', fontSize: "20px", width: '90%', height: '100px' }}
        defaultValue={props.name}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
      <div>-----------------------</div>
      <label
        style={{ fontSize: "20px", fontWeight: "bold" }}
        htmlFor={"nickname"}
      >
        Nickname*:{" "}
      </label>
      <input
        onChange={(e) => setUser(e.target.value)}
        id={"nickname"}
        style={{
          fontSize: "20px",
        }}
        type="text"
        placeholder="Example: jackson11!"
      ></input>
      <div>For privacy reasons, do not use your full name or email address</div>
      <label style={{ fontSize: "20px", fontWeight: "bold" }} htmlFor={"email"}>
        E-mail*:{" "}
      </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        id={"email"}
        style={{
          fontSize: "20px",
        }}
        type="email"
        maxLength="60"
        placeholder="Why did you like the product or not?"
      ></input>
      <div>For authentication reasons only, you will not be emailed</div>
      <span >
      <AddModal title={"Thanks!"} type={'verify'} bod={post} user={user} email={email} pid={props.pid} qid={props.qid} prodName={props.prodName}/>
      </span>
    </div>
  );
}

  var bStyle;
  var buttonText = '';
  if (props.bType === '1') {
      bStyle = {
        textDecoration: "underline",
        border: "none",
        cursor: "pointer",
        background: "none",
      }
      buttonText = 'Add Answer';
  } else if (props.type === 'verify') {
      bStyle = {
        marginTop: '20px',
        marginLeft: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '20px',
        border: 'none',
        background: 'none',
      }
      buttonText = 'SUBMIT';
  } else {
      bStyle = {
            marginTop: '20px',
            borderWidth: '2px',
            fontWeight: 'bold',
            fontSize: '20px',
            borderColor: 'black',
            background: 'none',
            padding: '20px 10px 20px 10px',
            cursor: 'pointer',
          }
          buttonText = `ADD A ${props.name.toUpperCase()} +`; 
      }
  
  return (
    <span>
      <button style={bStyle} onClick={() => setOpen(!open)}>
        {buttonText}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {body}
      </Modal>
    </span>
  );
};
export default AddModal;