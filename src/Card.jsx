import image5 from './assets/image5.jpeg';

const Card = () => {
    return (  
        <div className="card">
            <div className="image-wrapper">
                <img src={image5} alt="Leonardo Zavala" />
            </div>
            <div className="card-content">
                <h2>Hello!</h2>
                <p>My name is Leonardo and I'm a CS Student</p>
            </div>
        </div>
    );
}
 
export default Card;