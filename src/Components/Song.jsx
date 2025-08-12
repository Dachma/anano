import '../App.css'

const Sunflower = () => {

  return (
    <>
        <div className='page'>
          <div className="bg-half left"></div>
          <div className="bg-half right"></div>
            <div className='iframe-wrapper'>
                <iframe class="yt-link" width="360" height="215" src="https://www.youtube.com/embed/_mDxcDjg9P4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </>
  )
}

export default Sunflower
