import React from 'react';

interface SlideContentProps {
  description: string;
  author: string;
}

const SlideContent = ({ description, author }: SlideContentProps) => {
  return (
    <div className="reviews__paragraph">
      {description}
      <br />
      <br />
      <span>{author}</span>
    </div>
  );
};

export default SlideContent;
