import Head from "next/head"
import Link from "next/link"

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <div>
                <h1>First Post- hell0!</h1>
                <Link href="/">Back to home</Link>
            </div>
        </>
    );
}
