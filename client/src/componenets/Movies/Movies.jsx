import './Movies.css'

export default function Movies(props) {
  const { title, image_url } = props

  return (

    <div className='story-card-image-container'>
      <img id="movies-image-id" className='movies-image'
        src={image_url}
        onError={(e) => { e.target.src = 'blank' }}
        alt={title}
      />
      <p className="movie-card-text">{title}</p>
    </div>


  )
}