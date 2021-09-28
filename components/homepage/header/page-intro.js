const PageIntro = ({ info }) => {
    return (
        <div id="pageintro" className="hoc clear">
            <article>
                <p>Bienvenid@ a</p>
                <h3 className="heading">{info.title}</h3>
                <p></p>
                <footer><p className="btn">Conócenos</p></footer>
            </article>
        </div>
    );
}

export default PageIntro;