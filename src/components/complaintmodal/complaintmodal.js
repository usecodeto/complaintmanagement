import React, {Component} from 'react'; 
import './modal.css';



class Modal extends Component {

    constructor(props){
        super(props);

        this.state = {
            name : "", 
            rollno : "", 
            roomno : "", 
            category : "Maintenance",
            description: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleSubmit(e) {
            e.preventDefault();
            const { name, rollno, roomno, category, description } = this.state;
            console.log(name, rollno, roomno, category, description);
            
            fetch("http://localhost:5500/register", { // Fixed URL (added "http://")
                method: "POST",
                mode: "cors", // Changed "crossDomain" to "mode" for CORS
                headers: {
                    "Content-Type": "application/json", // Corrected "Content Type" to "Content-Type"
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*", // Corrected "Access-Allow-Control-Origin" to "Access-Control-Allow-Origin"
                },
                body: JSON.stringify({
                    name,
                    rollno,
                    roomno,
                    category,
                    description,
                
                }),
            }).then((res) => res.json())
            .then((data) => {
                console.log(data, "complaints");
                window.alert('Your complain is registered successfully!! ')
                // window.location.href = '/#complaint-section'
                window.location.reload();
                let modalContainer = document.querySelector(".container2");
    modalContainer.style.display = "none";
            }).catch((error)=>{console.log("ERROR : ", error)})
        }
        


    render(){
    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        <div className='Modal-container container2'>
            <h1>File a complaint </h1>
            <form onSubmit={this.handleSubmit} className='form-box' id='form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input onChange={(e)=>this.setState({name:e.target.value})} className='form-control' id='name' name='name' placeholder='name' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='rollno'>Roll NO</label>
                    <input onChange={(e)=>this.setState({rollno:e.target.value})} className='form-control' id='rollno' placeholder='Roll no 'required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='roomno'>Room NO</label>
                    <input onChange={(e)=>this.setState({roomno:e.target.value})} className='form-control' id='roomno' placeholder='Room no 'required/>
                </div>
                
                <div className='form-group'>
                    <label htmlFor='category'>Choose Category</label>
                    <select onChange={(e)=>this.setState({category :e.target.value})} id='category' defaultChecked='none' required> 
                    <option>Maintenance</option>
                    <option >Mess</option>
                    <option>Ragging</option>
                    <option>Other</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <textarea onChange={(e)=>this.setState({description :e.target.value})} className='form-control' id='description' placeholder='Tell us more about problem  ' required/>
                </div>
                <button type="submit" className="btn submit-btn btn-primary mb-2">Submit</button>
                
            </form>
        </div>
       
        </>
    );}
}

export default Modal;