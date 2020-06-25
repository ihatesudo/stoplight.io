import cn from 'classnames';
import * as React from 'react';

import { ActionBar, IActionBar } from '../ActionBar';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { Link } from '../Link';
import { Section } from '../Section';

export interface ITestimonial {
  image: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  className?: string;
  href?: string;
}

export interface ITestimonials {
  title?: string;
  description?: string;
  testimonials: ITestimonial[];
  actionBar: IActionBar;
}

export const Testimonial: React.FunctionComponent<ITestimonial> = ({
  image,
  quote,
  author,
  company,
  role,
  className,
  href,
}) => {
  return (
    <div className={cn(className, 'w-1/2 sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10')}>
      <div className="relative items-stretch w-full max-w-lg mx-auto bg-white rounded-lg shadow-md lg:flex">
        {!image && (
          <Icon className="absolute h-10 text-grey" style={{ top: -15, left: -15, fontSize: 30 }} icon="quote-left" />
        )}

        {!image && (
          <Icon
            className="absolute h-10 text-grey"
            style={{ bottom: -15, right: -15, fontSize: 30 }}
            icon="quote-right"
          />
        )}

        {image && (
          <div className="flex flex-col justify-center sm:items-center sm:pt-8">
            <Image src={image} className="w-32 h-32 -ml-12 bg-cover rounded-full shadow sm:ml-0" size="sm" useDiv />
          </div>
        )}

        <div className="flex flex-col justify-center p-8 text-lg leading-normal">
          <p className="flex-1 leading-loose text-grey-darker md:flex-none md:h-64">{quote}</p>

          <p className="mt-4 font-semibold">{author}</p>
          <p className="font-bold">
            {role && `${role}`}
            {company && `, ${company}`}
          </p>
          {href && (
            <div>
              <Link to={href} className="font-bold text-blue2">
                Learn More
                <Icon icon="arrow-right" className="ml-3" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FunctionComponent<ITestimonials> = ({
  title,
  description,
  testimonials,
  actionBar,
}) => {
  if (!testimonials || !testimonials.length) {
    return null;
  }

  return (
    <Container title={title} description={description}>
      <div className="flex flex-wrap mt-14">
        {testimonials.map((testimonial, index) => {
          return <Testimonial key={index} {...testimonial} />;
        })}
      </div>
    </Container>
  );
};
