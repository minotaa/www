import Head from 'next/head'

export default function Container(props) {
    const { children, ...customMeta } = props
    return (
        <>
            <Head>
                <title>minota's website</title>
                <meta content="minota" name="description"/>
                <meta name="theme-color" content="#ff9cfa"/>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}