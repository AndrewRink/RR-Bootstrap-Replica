import  Card  from "react-bootstrap/Card";
import  Form  from "react-bootstrap/Form";

export default function Background (){
    return (
        <div>
        <div> 
        <Card style = {{minHeight: "428px", width: "100%", backgroundColor: "#deedd6"}}className="bg-dark text-white">
            <Card.Img style={{height:"428px", width: "20%", position: "absolute", right: "0px"}}src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="Card image" />
            <Card.ImgOverlay style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px"}}>
                <Card.Text style={{fontSize: '3em', fontWeight: "bold", padding: "50px" }}>
                Order groceries for delivery <br/>
                or pickup today
                </Card.Text>
                <Card.Text style = {{postion: "absolute", top: "500px"}}>
                Whatever you want from local stores, brought right to your door.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </div>
        </div>
    )
}