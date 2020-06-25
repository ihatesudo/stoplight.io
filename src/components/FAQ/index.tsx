import cn from 'classnames';
import * as React from 'react';

import { Container } from '../Container';
import { Section } from '../Section';

export interface IFAQ {
  title: string;
  questions?: IQuestion[];
  className?: string;
}

export interface IQuestion {
  question: string;
  description: string;
}

export const Question: React.FunctionComponent<IQuestion> = ({ question, description }) => {
  return (
    <div className={cn('px-10 sm:px-0 sm:w-48 w-1/2 md:w-full')}>
      <div className="block px-4 py-10 text-xl sm:py-4 sm:px-0 sm:w-full">
        <div className="text-xl font-semibold">{question}</div>

        <div className="pt-3 text-lg" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};
export const FAQ: React.FunctionComponent<IFAQ> = ({ title, questions }) => {
  return (
    <Section noPaddingB>
      <Container className="mx-auto text-black">
        <div className="mb-20">
          {title && <div className="mb-20 text-4xl font-bold leading-tight text-center ">{title}</div>}
          <div className="flex flex-wrap justify-between md:flex-col sm:justify-around sm:mt-32">
            {questions?.map((q, i) => (
              <Question key={i} question={q.question} description={q.description} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
