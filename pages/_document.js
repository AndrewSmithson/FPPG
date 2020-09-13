import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'



export async function getStaticProps (ctx) {

  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      props: {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      },
      revalidate: 60
    }
  } finally {
    sheet.seal()
  }
}
  




export default class MyDocument extends Document {}