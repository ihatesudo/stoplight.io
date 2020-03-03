import * as React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { Section } from '../Section';

export interface IFAQ {
  title: string;
  questions?: IQuestion[];
  className?: string;
}

export interface IQuestion {
  question: string;
  answer: string;
}
export const FAQ: React.FunctionComponent<IFAQ> = ({ title, questions, className }) => {
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <Section noPaddingT>
      <Container className="mx-auto">
        <div className="mb-20">
          {title && <div className="text-3xl font-bold text-center">{title}</div>}
          <div className="flex flex-wrap justify-between">
            {questions &&
              questions.map(q => (
                <div className="w-2/5 pt-10 mx-4 markdown-body md:mt-20">
                  <div className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: q.question }} />
                  <div className="" dangerouslySetInnerHTML={{ __html: q.answer }} />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
