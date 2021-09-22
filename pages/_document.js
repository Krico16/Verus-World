import Document, { Head, Html, Main, NextScript } from 'next/document';

class myDocument extends Document {
    render(){
        return(
            <Html lang="es">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default myDocument