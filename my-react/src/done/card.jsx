
function Card(props){

    return(

    <div className="card">
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem deleniti exercitationem libero nesciunt sed ea itaque explicabo non quas voluptatem rem nobis praesentium ipsum, rerum in, repellat veniam suscipit?</p>



    </div>
    )
    


}
export default Card;