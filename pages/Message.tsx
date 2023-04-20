import Head from "next/head";
import { FC, memo } from "react";

type Messageprops = {};

const Message: FC<Messageprops> = () => {
    return <div>
        <Head>
            <title>message</title>
        </Head>
        <h1>this is message page</h1>
    </div>;
};

Message.defaultProps = {};
export default memo(Message);
