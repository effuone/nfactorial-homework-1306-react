import './SingleImage.css'
const SingleImage = (props) => {
    let style = 'url("' + props.img + '")';
    return (
        <div className='block' style={{backgroundImage: style}}>
            <h1>{props.title}</h1>
        </div>
    )
}
export default SingleImage