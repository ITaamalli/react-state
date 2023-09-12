import React from "react"
class App extends React.Component {
    state = {
     person:{ 
      fullName: "Ime Taamalli",
      bio: "Developper",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgclztf2uYbNslzhkQqTrVXrRX-WRgPxrxnQ&usqp=CAU",
      profession: "Engineer"},
   show: false,
  };
    toggle = () => {
      this.setState ({ show: !this.state.show });
    };
  
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
      { this.state.show===true ? (
        <>
          <h1>{this.state.person.fullName}</h1>
          <h3>{this.state.person.bio}</h3>
          <img src={this.state.person.imgSrc}/>
          <h5>{this.state.person.profession}</h5>
        </> 
        ) :null}
      </div>
    );
  }
}
export default App;
