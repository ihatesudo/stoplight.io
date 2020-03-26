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
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <Section>
      <Container className="mx-auto">
        <div className="mb-20">
          {title && <div className="text-4xl font-bold leading-tight text-center">{title}</div>}
          <div
            className="max-w-lg pt-10 mx-auto text-lg leading-loose text-center"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="max-w-lg md:justify-around">
            {questions &&
              questions.map(q => (
                <div className="max-w-lg pt-10 mx-4 markdown-body md:mt-20">
                  <button className="flex items-start justify-between w-full text-3xl font-bold text-left text-grey-darkest focus:outline-none">
                    <span>{q.question}</span>
                    <span className="flex items-center h-7">
                      <svg className="w-6 h-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div dangerouslySetInnerHTML={{ __html: q.answer }} />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
