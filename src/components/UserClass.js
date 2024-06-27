import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // const name = this.name;
    // console.log(props);
    // console.log(this);

    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };

    //console.log(this.props.name+"Child constructor");
    this.state = {
        userInfo : {
            name : "fs",
            location : "fs",
            avatar_url : "fs",
            login : "fs",
        },
    };
  }

    async componentDidMount() {
      //  console.log(this.props.name+"Child componentDidMount");
        const data = await fetch("https://api.github.com/users/KrishO9");
        const jsonData = await data.json();

        this.setState({
            userInfo: jsonData,
        });
       // console.log(json);
    }

    componentDidUpdate(){
        //console.log(this.props.name+"Child componentDidUpdate");
    }

  render() {
   const {login,name , location , avatar_url} = this.state.userInfo;
    //console.log(name+"Child render");
    // const { count, count2 } = this.state;

    //Firstly constructor is called and then the render is called in which the page is rendered with thw dummy data
    // and then the component did mount is called and the data is fetched from the api and then the render is called again with the updated data
    return (
      <div className="info-card">
        {/* <h2>Count:{count}</h2>
        <h2>Count2:{count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        ></button> */}
        <img src = {avatar_url} className = "github-avatar"></img>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Username : {login} </h4>
      </div>
    );
  }
}

export default UserClass;
