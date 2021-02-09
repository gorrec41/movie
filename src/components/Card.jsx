
function Card() {
    return<div className="row">
        <div className="col s12 m5">
            <div className="card">
                <div className="card-image">
                    <img src="https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" alt='films'/>
                    <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <a href="#!">This is a link</a>
                </div>
            </div>
        </div>
    </div>

}

export {Card}