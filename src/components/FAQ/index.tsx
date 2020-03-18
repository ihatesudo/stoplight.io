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

          <div className="flex flex-wrap justify-between md:justify-around">
            {questions &&
              questions.map(q => (
                <div className="w-2/5 pt-10 mx-4 markdown-body md:mt-20">
                  <div className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: q.question }} />
                  <div dangerouslySetInnerHTML={{ __html: q.answer }} />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
