import { useState } from "react";
import Modal from './Model'
import Backdrop from './Backdrop'

function Todo(props) { // Accepting data from outside the component from the place it is rendered which is the key concept here
    const [modelIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
       setModalIsOpen(true);
    }

    return ( 
    <div className="card">
      <h1>{props.text}</h1>     {/*Dynamic Code  */}
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modelIsOpen && <Modal />}
      {modelIsOpen && <Backdrop />}
      
    </div>
  );
}

export default Todo;
