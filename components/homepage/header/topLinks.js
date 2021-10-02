import LinksTop from "./link";

const TopLinks = ({ data }) => {
    return (
        <div className="three_quarter">
            <ul className="nospace clear">
                {
                    data.map((element, i) => {
                        return <LinksTop info={element} n={i} key={i} />
                    })
                }
            </ul>
        </div>
    );
}

export default TopLinks;