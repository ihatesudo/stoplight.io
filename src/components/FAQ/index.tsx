import cn from 'classnames';
import * as React from 'react';

import { Container } from '../Container';
import { Section } from '../Section';

export interface IFAQ {
  title: string;
  description: string;
  questions?: IQuestion[];
  className?: string;
}

export interface IQuestion {
  question: string;
  answer: string;
}
export const FAQ: React.FunctionComponent<IFAQ> = ({ title, questions, className, description }) => {
  return (
    <Section>
      <Container className="mx-auto">
        <div className="mb-20">
          {title && <div className="mb-20 text-4xl font-bold leading-tight text-center">{title}</div>}

          <div className="flex flex-wrap justify-between md:justify-around">
            {questions &&
              questions.map((q, index) => {
                const [showAnswer, setShowAnswer] = React.useState(false);

                return (
                  <div key={index} className="w-2/5 pt-10 mx-4 markdown-body md:mt-20">
                    <button
                      onClick={() => setShowAnswer(!showAnswer)}
                      className="flex items-start items-center w-full text-xl font-bold text-left text-grey-darkest focus:outline-none"
                    >
                      <span className="flex items-center h-7">
                        <svg
                          className={cn('w-6 h-6 carat', { 'carat-90': showAnswer })}
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                      <span className="ml-3">{q.question}</span>
                    </button>
                    <div
                      className={cn('pt-6 pl-8 w-5/6', { hidden: !showAnswer })}
                      dangerouslySetInnerHTML={{ __html: q.answer }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
