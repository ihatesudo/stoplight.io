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
          {title && <div className="text-4xl font-bold text-center">{title}</div>}
          {questions &&
            questions.map(q => (
              <div className="pt-10 markdown-body md:mt-20">
                <div
                  className="flex flex-row cursor-pointer"
                  onClick={() => {
                    setShowAnswer(!showAnswer);
                  }}
                >
                  <Icon
                    icon={!showAnswer ? ['fad', 'angle-right'] : ['fad', 'angle-down']}
                    size="2x"
                    className="mt-3 mr-4 text-blue"
                  />
                  <div className="text-4xl" dangerouslySetInnerHTML={{ __html: q.question }} />
                </div>

                {showAnswer && (
                  <div
                    onClick={() => {
                      setShowAnswer(false);
                    }}
                    dangerouslySetInnerHTML={{ __html: q.answer }}
                  />
                )}
              </div>
            ))}
        </div>
      </Container>
    </Section>
  );
};
