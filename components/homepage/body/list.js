import ListItem from "./listItem";

const BodyList = () => {
    return (
        <main className="hoc container clear">
            <section id="introblocks">
                <ul className="nospace group">
                    <ListItem url={'https://images.unsplash.com/photo-1518811829466-1372392d4544?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80'} />
                    <ListItem url={'https://images.unsplash.com/photo-1518811829466-1372392d4544?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80'} />
                    <ListItem url={'https://images.unsplash.com/photo-1518811829466-1372392d4544?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80'} />
                    <ListItem url={'https://images.unsplash.com/photo-1518811829466-1372392d4544?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80'} />
                    <ListItem url={'https://images.unsplash.com/photo-1518811829466-1372392d4544?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80'} />
                    <ListItem url={'https://images.unsplash.com/photo-1518811829466-1372392d4544?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80'} />
                </ul>
            </section>
            <div className="clear"></div>
        </main>
    );
}

export default BodyList;