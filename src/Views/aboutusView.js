import NavBar from "../ReusableComponents/NavBar";

export default function AboutusView(props){
    const memberArray=
        [{
            img: "Dina.png",
            name: "Dina", 
            surname: "Lerjevik", 
            email: "lerjevik@kth.se", 
            linkedIn: "http://linkedin.com/in/dina-lerjevik",
            program: "Computer Science - Software Technology",
            LO1: "I think this project has been a great way to improve my knowledge in React",
            LO2: "Furthermore, I've learnt a lot about how to create a nice user experience!",
        },
            {
            img: "Pare.png",
            name: "Thanchanok", 
            surname: "Tweethepthaikul", 
            email: "ttw@kth.se", 
            linkedIn: "http://linkedin.com/in/thanchanok-tweethepthaikul-79b4b524a",
            program: "ICT Innovation - Human Computer Interaction and Design track",
            LO1: "I'm looking forward to learn how to create a pleasant user experience through the interface design in a particular practice.",
            LO2: "Furthermore, I normally love to play games. I'm quite interested in the VR/AR. This is inspiring me to learn how to create interface design to support for both VR/AR application and also applicable devices."
        }, {
            img: "Nico.png",
            name: "Nicolas", 
            surname: "Rollino", 
            email: "nsrs@kth.se", 
            linkedIn: "https://www.linkedin.com/in/nicolas-rollino-262527197/",
            program: "Computer Science - Visualization and Interactive Graphics",
            LO1: "I really want to improve my frontend skills and learn new way to structure and write maintainable code. ",
            LO2: "Also I would like to get more experience working with API's and the backend of development.",

        }, {
            img: "Tao.png",
            name: "Tao", 
            surname: "Xiong", 
            email: "taox@kth.se", 
            linkedIn: "https://www.linkedin.com/in/taoxiongkth/",
            program: "Embedded Systems - software track",
            LO1: "I am working on compiler and software testing.",
            LO2: "Moreover, I like music and web games.",
        }];

    return(
        <div>
            <NavBar />
            <div className="flex-row-homepage">
                <div className="flex-column-aboutus">
                    <h className="App-name">About us</h>
                    <div className="description-font-20px">
                        The aim of this project is to create a fun guessing music game. 
                        You can enjoy with various guessing game modes based on "Title", "Year", "Artist". 
                        The newest mode, fill the "Lyrics", is now available. 
                        This project is a demo version allowing you to play a single-player mode.
                        If you are interested in our project, feel free to check our repository down below. 
    
                    </div>
                    
                    <a style={{fontSize:"2vw"}} href="https://gits-15.sys.kth.se/nsrs/Melodic-Mystery">GitHub</a>

                    <h1 className="meet-the-team">MEET THE TEAM</h1>
                    <div style={{display:"flex", flexDirection:"column", gap:"2vw"}}> 
                    {memberArray.map((member,index)=>{
                        return(
                        <div key={index} className="flex-row-profile square-profile">
                        <span className="flex-column-profile">
                            <img className="profile-image" src={member.img} height={200}/>
                            <h1 className="profile-name"> {member.name}</h1>
                            <h1 className="profile-name"> {member.surname}</h1>
                            <h1 className="profile-email">{member.email}</h1>
                            <a  className="profile-email" href={member.linkedIn}>My LinkedIn</a>
                        </span>
                        <span className="more-about-member">
                            <p className="profile-bold">Programe: <p className="description-font-20px-profile">{member.program}</p></p><br/> <br/>
                            <p className="profile-bold">Learning Objectives: </p> 
                            
                            <ul className="LO-list">
                                <li>{member.LO1}</li>
                                <li>{member.LO2}</li>
                            </ul>
                            </span>
                        </div>
                        )
                    })}
                    </div>
                </div>
                <body className="grarphic-background"></body>
            </div>
        </div>
    );
}