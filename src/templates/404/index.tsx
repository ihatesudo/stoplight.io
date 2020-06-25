import * as React from 'react';
import { Head } from 'react-static';
import { Button } from 'src/components/Button';
import { Image } from 'src/components/Image';

import { Layout } from '../../components/Layout';

export const NotFound: React.FunctionComponent = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center px-4 py-64 bg-white">
        <Head>
          <title>Page Not Found</title>
        </Head>
        <div className="text-center text-black w-96">
          <h1 className="pb-4">404</h1>

          <div className="text-2xl leading-normal opacity-75 font-default">This page doesn't exist!</div>

          <div className="py-8">
            <Image className="h-64" src="//thecatapi.com/api/images/get?format=src&type=gif" />
          </div>

          <Button href="/" color="blue2">
            Take me home
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
