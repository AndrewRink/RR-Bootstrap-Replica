import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function StoreListings() {
    return (
        <div style={{ margin: "auto" }}>
          <Container style={{ marginTop: "40px", textAlign: "center"}}>
                <Row style= {{ borderBottom: "1px solid #E8E9EB", display:"flex", justifyContent: "space-evenly"}}>
                    <Row style={{display: "flex", justifyContent: "space-evenly"}}> 
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png" roundedCircle/>
                        </Col>
                        <Col style={{textAlign: "left"}}>
                        <h5 style = {{fontWeight: "bold"}}>Publix</h5>
                        <p> Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row style={{display: "flex", justifyContent: "space-evenly"}}> 
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png" roundedCircle/>
                        </Col>
                        <Col>
                        <h5 style = {{fontWeight: "bold"}}>Walgreens</h5>
                        <p> Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                </Row>    

                <Row style= {{ borderBottom: "1px solid #E8E9EB", display:"flex", justifyContent: "space-evenly"}}>
                    <Row style={{display: "flex", justifyContent: "space-evenly"}}> 
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/246/62c95c4e-90b1-4e94-b3e3-49ec806ee5ad.png" roundedCircle/>
                        </Col>
                        <Col>
                        <h5 style = {{fontWeight: "bold"}}>Lowe's Foods</h5>
                        <p> Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row style={{display: "flex", justifyContent: "space-evenly"}}> 
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/108x/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" roundedCircle/>
                        </Col>
                        <Col>
                        <h5 style = {{fontWeight: "bold"}}>Costco</h5>
                        <p> Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                </Row>

                <Row style= {{ borderBottom: "1px solid #E8E9EB", display:"flex", justifyContent: "space-evenly"}}>
                    <Row style={{display: "flex", justifyContent: "space-evenly"}}> 
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1879/43fb59cc-59cd-475d-b01c-6f863725e468.png" roundedCircle/>
                        </Col>
                        <Col>
                        <h5 style = {{fontWeight: "bold"}}>Food Lion</h5>
                        <p> Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row style={{display: "flex", justifyContent: "space-evenly"}}> 
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/108x/www.instacart.com/assets/domains/warehouse/logo/1366/d1487beb-780a-4dff-afe6-356b03287594.png" roundedCircle/>
                        </Col>
                        <Col>
                        <h5 style = {{fontWeight: "bold"}}>Best Buy</h5>
                        <p> Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                </Row>


            </Container>  
        </div >
    )
}