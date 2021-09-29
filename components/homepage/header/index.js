import Logo from "./logo";
import PageIntro from "./page-intro";
import TopArea from "./top";
import TopLinks from "./topLinks";

const HomePage = ({info,meta}) => {
    return (
        <div id="top" className="bged overlay" style={{backgroundImage:`url(https://images.unsplash.com/photo-1437413646517-e98caade5a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)`}}>
            <TopArea>
                <Logo info={info} />
                <TopLinks />
                <PageIntro info={info} meta={meta} />
            </TopArea>
        </div>
    );
}

export default HomePage;