import './TattooPost.css'

function TattooPost(props) {
    const { tattoo } = props;

    return(
        <div className='tattoo-post'>
            <div className="tattoo-post-bg"/>
            <div className="tattoo-post-content">
                <img src={tattoo.thunbnaiUrl} />
                <h4>{tattoo.title}</h4>
            </div>
        </div>
    )
}

export default TattooPost;