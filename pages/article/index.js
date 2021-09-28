import ReleaseContent from "../../components/release/content"
import ReleaseHeader from "../../components/release/header"
import ReleaseLayout from "../../components/release/layout"

const ArticleList = () => {

    return (
        <>
            <ReleaseLayout>
                <ReleaseHeader />
                <ReleaseContent />
            </ReleaseLayout>
        </>
    )
}

export default ArticleList