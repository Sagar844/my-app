import { NextPage } from "next";
import Head from "next/head";
import { memo } from "react";

type Personprops = {};

const Person: NextPage<Personprops> = () => {
    return <div>
        <Head>

            <title>Persons</title>
        </Head>
        <h1>this is person page</h1>
    </div>;
};

Person.defaultProps = {};
export default memo(Person);
